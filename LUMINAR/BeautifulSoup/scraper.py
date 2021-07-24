import requests
from bs4 import BeautifulSoup

req=requests.get('https://www.geeksforgeeks.org/')

soup=BeautifulSoup(req.content,"html.parser")

titl=soup.title
#print(soup.prettify())
#print(soup.get_text())
print(titl.prettify())
print(titl.get_text())
