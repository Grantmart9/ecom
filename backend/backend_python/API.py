####################################
from flask_cors import CORS
from flask import Flask,jsonify
import psycopg2
from datetime import datetime

####################################
## Search ##
####################################
host = "localhost"
database = "postgres"
user = "postgres"
passphrase = "Xiobh@nmart9"
####################################
app = Flask(__name__)
CORS(app)
app.debug = True

####################################
## Test ##
####################################
@app.route("/test", methods=["POST", "GET"])
def test():

    return "Test:Good"

@app.route("/revenue", methods=["POST"])
def revenue():
    conn = psycopg2.connect(
        host=host, database=database, user=user, password=passphrase
    )
    cur = conn.cursor()

    # Query to get all wine products
    query_string = "SELECT * FROM wine_product"
    cur.execute(query_string)
    Last_entry = cur.fetchall()

    # Dictionary to hold aggregated wine totals
    wine_totals = {}

    for entry in Last_entry:
        wine_id = entry[0]
        wine_name = entry[2]
        sub_str = "£"

        # Extracting the wine name before the currency symbol
        wine_name_sliced = wine_name[: wine_name.index(sub_str)]

        # Query to fetch orders for the current wine
        query_string = "SELECT * FROM customer_order WHERE wine_product_id = %s AND (status = %s OR status = %s)"
        cur.execute(query_string, (wine_id, "paid", "dispatched"))
        orders = cur.fetchall()

        # Calculate the total for this wine
        total_revenue = sum(order[3] for order in orders)

        # Aggregate the total revenue in the dictionary
        if wine_name_sliced in wine_totals:
            wine_totals[wine_name_sliced] += total_revenue
        else:
            wine_totals[wine_name_sliced] = total_revenue

    # Prepare the final list to return and sort by total revenue
    wine_list = [{"wine": wine, "total": total} for wine, total in wine_totals.items()]
    wine_list.sort(key=lambda x: x["total"], reverse=True)

    # Calculate the number of wines
    total_wines = len(wine_list)

    # Determine top 10% and bottom 10% boundaries
    top_10_percent_count = max(1, total_wines // 10)
    bottom_10_percent_count = max(1, total_wines // 10)

    # Assign colors based on ranking
    for index, wine in enumerate(wine_list):
        if index < top_10_percent_count:
            wine["color"] = "#449c44"
        elif index >= total_wines - bottom_10_percent_count:
            wine["color"] = "#99151c"
        else:
            wine["color"] = "#0a0103"

    conn.commit()
    conn.close()

    return jsonify(wine_list)


@app.route("/orders", methods=["POST"])
def orders():
    conn = psycopg2.connect(
        host=host, database=database, user=user, password=passphrase
    )
    cur = conn.cursor()

    # Query to get all wine products
    query_string = "SELECT * FROM wine_product"
    cur.execute(query_string)
    last_entry = cur.fetchall()

    # Dictionary to hold aggregated order counts
    wine_orders_count = {}

    for entry in last_entry:
        wine_id = entry[0]
        wine_name = entry[2]
        sub_str = "£"

        # Extracting the wine name before the currency symbol
        wine_name_sliced = wine_name[:wine_name.index(sub_str)]

        # Query to fetch orders for the current wine
        query_string = "SELECT COUNT(*) FROM customer_order WHERE wine_product_id = %s AND (status = %s OR status = %s)"
        cur.execute(query_string, (wine_id, "paid", "dispatched"))
        order_count = cur.fetchone()[0]  # Get the count from the result

        # Aggregate the order count in the dictionary
        wine_orders_count[wine_name_sliced] = order_count

    # Prepare the final list to return and sort by order count
    wine_list = [{"wine": wine, "total": total} for wine, total in wine_orders_count.items()]
    wine_list.sort(key=lambda x: x["total"], reverse=True)

    # Calculate the number of wines
    total_wines = len(wine_list)

    # Determine top 10% and bottom 10% boundaries
    top_10_percent_count = max(1, total_wines // 10)
    bottom_10_percent_count = max(1, total_wines // 10)

    # Assign colors based on ranking
    for index, wine in enumerate(wine_list):
        if index < top_10_percent_count:
            wine["color"] = "#449c44"  # Green for top 10%
        elif index >= total_wines - bottom_10_percent_count:
            wine["color"] = "#99151c"  # Red for bottom 10%
        else:
            wine["color"] = "#0a0103"  # Black for the rest

    conn.commit()
    conn.close()

    return jsonify(wine_list)

@app.route("/bottles", methods=["POST"])
def bottles():
    conn = psycopg2.connect(
        host=host, database=database, user=user, password=passphrase
    )
    cur = conn.cursor()

    # Query to get all wine products
    query_string = "SELECT * FROM wine_product"
    cur.execute(query_string)
    Last_entry = cur.fetchall()

    # Dictionary to hold aggregated wine totals
    wine_totals = {}

    for entry in Last_entry:
        wine_id = entry[0]
        wine_name = entry[2]
        sub_str = "£"

        # Extracting the wine name before the currency symbol
        wine_name_sliced = wine_name[: wine_name.index(sub_str)]

        # Query to fetch orders for the current wine
        query_string = "SELECT * FROM customer_order WHERE wine_product_id = %s AND (status = %s OR status = %s)"
        cur.execute(query_string, (wine_id, "paid", "dispatched"))
        orders = cur.fetchall()

        # Calculate the total for this wine
        total_bottles = sum(order[2] for order in orders)

        # Aggregate the total revenue in the dictionary
        if wine_name_sliced in wine_totals:
            wine_totals[wine_name_sliced] += total_bottles
        else:
            wine_totals[wine_name_sliced] = total_bottles

    # Prepare the final list to return and sort by total revenue
    wine_list = [{"wine": wine, "total": total} for wine, total in wine_totals.items()]
    wine_list.sort(key=lambda x: x["total"], reverse=True)

    # Calculate the number of wines
    total_wines = len(wine_list)

    # Determine top 10% and bottom 10% boundaries
    top_10_percent_count = max(1, total_wines // 10)
    bottom_10_percent_count = max(1, total_wines // 10)

    # Assign colors based on ranking
    for index, wine in enumerate(wine_list):
        if index < top_10_percent_count:
            wine["color"] = "#449c44"
        elif index >= total_wines - bottom_10_percent_count:
            wine["color"] = "#99151c"
        else:
            wine["color"] = "#0a0103"

    conn.commit()
    conn.close()

    return jsonify(wine_list)


if __name__ == "__main__":
    app.run(port=5000)
