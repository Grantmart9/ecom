import fastify from "fastify"; // Import Fastify framework for building web servers
import pg, { Client as PgClient } from "pg"; // Import PostgreSQL client library for database interactions
import cors from "@fastify/cors"; // Import CORS for handling cross-origin requests

const { Client } = pg; // Destructure the Client class from pg for database connections

// Database connection configuration
const host = "localhost"; // Database host
const database = "postgres"; // Database name
const user = "postgres"; // Database username
const password = "Xiobh@nmart9"; // Database password (consider using environment variables)

// Create Fastify instance with logging enabled
const app = fastify({ logger: true });

// Enable CORS to allow cross-origin requests
app.register(cors);

// Define a type for wine records with optional color property
interface WineRecord {
  wine: string; // Name of the wine
  total: number; // Total revenue, bottles sold, or orders count
  color?: string; // Optional property for color coding
}

// Function to connect to the database
async function dbConnect(): Promise<PgClient> {
  const client = new Client({ // Create a new PostgreSQL client
    host,
    database,
    user,
    password,
  });
  await client.connect(); // Establish the connection
  return client; // Return the connected client
}

// Function to execute a query against the database
async function executeQuery(query: string, params: any[] = []) {
  const client = await dbConnect(); // Connect to the database
  try {
    return await client.query(query, params); // Execute the query with parameters
  } finally {
    await client.end(); // Ensure the client is closed after the query
  }
}

// Test route to check if the server is running
app.get("/", async (request, reply) => {
  return { message: "Hello, Fastify!" }; // Return a simple JSON response
});

// Route to calculate revenue for each wine
app.post('/revenue', async (request, reply) => {
  try {
    const wineTotals: Record<string, number> = {}; // Object to store total revenue per wine
    const wineResults = await executeQuery("SELECT * FROM wine_product"); // Get all wine products

    // Loop through each wine entry to calculate revenue
    for (const entry of wineResults.rows) {
      const wineId = entry.id; // Get the wine ID
      const wineName = entry.name.split("£")[0]; // Get the wine name without price information

      // Query to get orders for the current wine
      const orderResults = await executeQuery(`
        SELECT * FROM customer_order 
        WHERE wine_product_id = $1 AND (status = $2 OR status = $3)
      `, [wineId, "paid", "dispatched"]);

      // Calculate total revenue for the current wine
      const totalRevenue = orderResults.rows.reduce(
        (sum: number, order: any) => {
          const amount = parseFloat(order.total_amount); // Parse total_amount to a number
          return sum + (isNaN(amount) ? 0 : amount); // Accumulate the total revenue
        },
        0
      );

      // Store total revenue if it's greater than 0
      if (totalRevenue > 0) {
        wineTotals[wineName] = (wineTotals[wineName] || 0) + totalRevenue; // Add to the totals
      }
    }

    // Create an array of WineRecord from the wineTotals object
    const wineList: WineRecord[] = Object.entries(wineTotals).map(
      ([wine, total]) => ({
        wine,
        total: parseFloat(total.toFixed(2)) // Limit to two decimal places
      })
    );

    // Sort wines by revenue
    wineList.sort((a, b) => b.total - a.total);

    // Determine thresholds for color coding
    const totalWines = wineList.length;
    const topThresholdIndex = Math.ceil(totalWines * 0.1); // Index for the top 10%
    const bottomThresholdIndex = Math.floor(totalWines * 0.9); // Index for the bottom 10%

    // Assign colors based on thresholds
    wineList.forEach((wineRecord, index) => {
      if (index < topThresholdIndex) {
        wineRecord.color = "green"; // Top 10% are green
      } else if (index >= bottomThresholdIndex) {
        wineRecord.color = "red"; // Bottom 10% are red
      } else {
        wineRecord.color = "black"; // Middle 80% are black
      }
    });

    reply.send(wineList); // Send the final list of wines with revenue
  } catch (error) {
    // Error handling
    if (error instanceof Error) {
      reply.status(500).send({ error: "Internal Server Error", details: error.message });
    } else {
      reply.status(500).send({ error: "Internal Server Error", details: "Unknown error occurred." });
    }
  }
});

// Route to count bottles sold for each wine
app.post("/bottles", async (request, reply) => {
  try {
    const wineTotals: Record<string, number> = {}; // Object to store total bottles sold per wine
    const wineResults = await executeQuery("SELECT * FROM wine_product"); // Get all wine products

    // Loop through each wine entry to count bottles sold
    for (const entry of wineResults.rows) {
      const wineId = entry.id; // Get the wine ID
      const wineName = entry.name.split("£")[0]; // Get the wine name without price information

      // Query to get orders for the current wine
      const orderResults = await executeQuery(`
        SELECT * FROM customer_order 
        WHERE wine_product_id = $1 AND (status = $2 OR status = $3)
      `, [wineId, "paid", "dispatched"]);

      // Calculate total bottles sold for the current wine
      const totalBottles = orderResults.rows.reduce(
        (sum: number, order: any) => sum + (order.quantity || 0), // Accumulate quantity of bottles sold
        0
      );

      // Store total bottles if greater than 0
      if (totalBottles > 0) {
        wineTotals[wineName] = (wineTotals[wineName] || 0) + totalBottles; // Add to the totals
      }
    }

    const wineList: WineRecord[] = Object.entries(wineTotals).map(
      ([wine, total]) => ({ wine, total }) // Create WineRecord array
    );

    // Sort wines by bottles sold
    wineList.sort((a, b) => b.total - a.total);

    // Determine thresholds for color coding
    const totalWines = wineList.length;
    const topThresholdIndex = Math.ceil(totalWines * 0.1); // Top 10%
    const bottomThresholdIndex = Math.floor(totalWines * 0.9); // Bottom 10%

    // Assign colors based on thresholds
    wineList.forEach((wineRecord, index) => {
      if (index < topThresholdIndex) {
        wineRecord.color = "green"; // Top 10% are green
      } else if (index >= bottomThresholdIndex) {
        wineRecord.color = "red"; // Bottom 10% are red
      } else {
        wineRecord.color = "black"; // Middle 80% are black
      }
    });

    reply.send(wineList); // Send the final list of wines with bottles sold
  } catch (error) {
    // Error handling
    if (error instanceof Error) {
      reply.status(500).send({ error: "Internal Server Error", details: error.message });
    } else {
      reply.status(500).send({ error: "Internal Server Error", details: "Unknown error occurred." });
    }
  }
});

// Route to count orders for each wine
app.post("/orders", async (request, reply) => {
  try {
    const wineOrdersCount: Record<string, number> = {}; // Object to store order counts per wine
    const wineResults = await executeQuery("SELECT * FROM wine_product"); // Get all wine products

    // Loop through each wine entry to count orders
    for (const entry of wineResults.rows) {
      const wineId = entry.id; // Get the wine ID
      const wineName = entry.name.split("£")[0]; // Get the wine name without price information

      // Query to count orders for the current wine
      const orderResult = await executeQuery(`
        SELECT COUNT(*) FROM customer_order 
        WHERE wine_product_id = $1 AND (status = $2 OR status = $3)
      `, [wineId, "paid", "dispatched"]);

      const orderCount = parseInt(orderResult.rows[0].count, 10) || 0; // Get the count from the result
      wineOrdersCount[wineName] = orderCount; // Store the order count for the current wine
    }

    const wineList: WineRecord[] = Object.entries(wineOrdersCount).map(
      ([wine, total]) => ({ wine, total }) // Create WineRecord array
    );

    // Sort wines by order count
    wineList.sort((a, b) => b.total - a.total);

    // Determine thresholds for color coding
    const totalWines = wineList.length;
    const topThresholdIndex = Math.ceil(totalWines * 0.1); // Top 10%
    const bottomThresholdIndex = Math.floor(totalWines * 0.9); // Bottom 10%

    // Assign colors based on thresholds
    wineList.forEach((wineRecord, index) => {
      if (index < topThresholdIndex) {
        wineRecord.color = "green"; // Top 10% are green
      } else if (index >= bottomThresholdIndex) {
        wineRecord.color = "red"; // Bottom 10% are red
      } else {
        wineRecord.color = "black"; // Middle 80% are black
      }
    });

    reply.send(wineList); // Send the final list of wines with order counts
  } catch (error) {
    // Error handling
    if (error instanceof Error) {
      reply.status(500).send({ error: "Internal Server Error", details: error.message });
    } else {
      reply.status(500).send({ error: "Internal Server Error", details: "Unknown error occurred." });
    }
  }
});

// Start the Fastify server
const start = async () => {
  try {
    await app.listen({ port: 5000 }); // Start the server on port 5000
    console.log("Server is listening on http://localhost:5000"); // Log the server URL
  } catch (err) {
    app.log.error(err); // Log any errors that occur during server start
    process.exit(1); // Exit the process with failure
  }
};

// Invoke the start function to run the server
start();
