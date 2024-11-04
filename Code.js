
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import timeURL = "https://webtucre.ru/testovaya-stranicza-6/"
browser = webdriver.Firefox()
browser.maximize_window()
browser.get(URL)
check_name = []

name_webtucre_10_el = ['Магазин','Тестовая страница 1','Тестовая страница 2','Тестовая страница 3','Тестовая страница 4',
                       'Тестовая страница 6','Тестовая страница 7','Тестовая страница 8','FAQ','Корзина']
for element_name in name_webtucre_10_el :
    locator = (By.XPATH, f"//div[contains(@class, 'menu-qa-container')]//*[text()='{element_name}']")

    try:
        element = WebDriverWait(browser, 5).until(EC.element_to_be_clickable(locator))
        element.click()
        check_name.append(element_name)
    except Exception as e:
        print(f"Не удалось выполнить клик по элементу'{element_name}': {e}")
print(check_name)
browser.quit()

