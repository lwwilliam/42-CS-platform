import os
import json
from backend.instagram import Instagram

def get_ins_data(username):
    data_dir = 'data'

    # Create the data directory if it doesn't exist
    if not os.path.exists(data_dir):
        os.makedirs(data_dir)

    # Define the output filename based on the username
    output_filename = os.path.join(data_dir, f'{username}.json')

    print("Scraping...")
    scraped_data = Instagram.scrap(username)
    data = json.loads(scraped_data)

    with open(output_filename, 'w') as output_file:
        json.dump(data, output_file, indent=4)

    print(f"Data saved to {output_filename}")
    return output_filename

# if __name__ == '__main__':
#     get_ins_data("Sunway_bgs")
