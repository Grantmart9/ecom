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

// Function to connect to the database
async function dbConnect(): Promise<PgClient> {
  const client = new Client({
    // Create a new PostgreSQL client
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

// Test route to check if the server is running
app.get("/department1", async (request, reply) => {
  return { message: "department1!" }; // Return a simple JSON response
});
// Test route to check if the server is running
app.get("/department2", async (request, reply) => {
  return { message: "department2!" }; // Return a simple JSON response
});
// Test route to check if the server is running
app.get("/department3", async (request, reply) => {
  return { message: "department3!" }; // Return a simple JSON response
});
// Test route to check if the server is running
app.get("/department4", async (request, reply) => {
  return { message: "department4!" }; // Return a simple JSON response
});
// Test route to check if the server is running
app.get("/department5", async (request, reply) => {
  return { message: "department5!" }; // Return a simple JSON response
});
// Test route to check if the server is running
app.get("/department6", async (request, reply) => {
  return { message: "department6!" }; // Return a simple JSON response
});
// Test route to check if the server is running
app.get("/department7", async (request, reply) => {
  return { message: "department7!" }; // Return a simple JSON response
});
// Test route to check if the server is running
app.get("/department8", async (request, reply) => {
  return { message: "department8!" }; // Return a simple JSON response
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
