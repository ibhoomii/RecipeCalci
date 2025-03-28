import requests

def get_food_data(ingredient):
    url = f"https://world.openfoodfacts.org/cgi/search.pl?search_terms={ingredient}&search_simple=1&action=process&json=1"
    response = requests.get(url).json()
    if "products" in response and response["products"]:
        # Return the first matching product
        return response["products"][0]
    else:
        return {"error": "Ingredient not found"}
