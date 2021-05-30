
import os
import time
from selenium import webdriver


driver = webdriver.Edge(r"C:\Program Files\Edge Web Driver\msedgedriver.exe")
options = webdriver.ChromeOptions()
options.add_argument("user-data-dir={}\driver_data".format(os.getcwd()))

# driver = webdriver.Chrome(ChromeDriverManager().install(), chrome_options=options)
 
driver.get("https://www.linkedin.com/login")
email = "LINKEDIN EMAIL/NUMBER"
password = "LINKEDIN PASSWORD"


# Find the username & password elements & fill it with the email and password stored in env variables
driver.find_element_by_id("username").send_keys(email)
driver.find_element_by_id("password").send_keys(password)

# Get the submit button and click on it
driver.find_element_by_css_selector(".btn__primary--large").click()

# Open invitations page
driver.get("https://www.linkedin.com/mynetwork/invitation-manager/")

# ----------------- Get all the available invitation's ACCEPT Button    
acceptButtons = []
while len(acceptButtons)==0:   
    acceptButtons = driver.find_elements_by_xpath("//button[@class='invitation-card__action-btn artdeco-button artdeco-button--2 artdeco-button--secondary ember-view']")

# Accept connections by clicking the buttons
for button in acceptButtons:
    button.click()
    time.sleep(5)
driver.close()