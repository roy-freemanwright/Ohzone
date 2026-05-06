import requests
from bs4 import BeautifulSoup

url = "https://www.ohzoneclinics.com/"
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Find the nav menu. Usually it's in a <nav> or ul with classes like menu or nav.
nav_items = soup.find_all('li', class_='hs-menu-item')
if not nav_items:
    nav_items = soup.find_all('li', class_='menu-item')

if not nav_items:
    # Try finding any a tags inside nav
    navs = soup.find_all('nav')
    for nav in navs:
        links = nav.find_all('a')
        for link in links:
            print(f"LINK: {link.text.strip()} - {link.get('href')}")

for item in nav_items:
    a = item.find('a')
    if a:
        print(f"NAV: {a.text.strip()} - {a.get('href')}")

