from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.common.keys import Keys


website = 'https://www.dndbeyond.com/spells'
driver_path = r"C:\ChromeDriver\chromedriver.exe"  # Use raw string or double backslashes

service = Service(driver_path)
driver = webdriver.Chrome(service=service)

driver.get(website)

spells = {}

def process_page():
    # Find all elements with class name 'info' (adjust selector as needed)
    info_elements = driver.find_elements(By.CLASS_NAME, "info")
    
    for element in info_elements:
        try:
            # Check for the legacy badge (if it's present, skip this element)
            element.find_element(By.ID, 'legacy-badge')
        except:
            try:
                # Find the link within the element
                link = element.find_element(By.CLASS_NAME, 'link')
                text = link.get_dom_attribute('href')
                text_list = text.split('/')  # Split the string by "/"
                spell_components = text_list[len(text_list) - 1].split('-')  # Split the last component by "-"

                # Remove the first element from the list (equivalent of shift)
                spell_id = spell_components.pop(0)

                # Join the remaining components back into a string
                spell_name = "-".join(spell_components)

                # Store the spell ID and name in the dictionary
                spells[spell_name] = spell_id

            except:
                print('Could not find link.')

def go_to_next_page():
    try:
        # Try to find the "Next" button
        
        next_button = driver.find_element(By.CLASS_NAME, "b-pagination-item-next")
        child = next_button.find_element(By.XPATH, "./*")
        driver.execute_script("arguments[0].click();", child)
      
        return True
    except Exception as e:
        print(e)
        return False

# Loop through pages until there's no "Next" button
while True:
    # Process the current page
    process_page()

    # Try to go to the next page
    if not go_to_next_page():
        print("No more pages to load.")
        break

# Print the collected spell data
print(spells)

# Close the driver
driver.quit()
