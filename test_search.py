import urllib.request
import urllib.parse
import json

def get_images(query):
    # Using Google or Wikimedia query
    q = urllib.parse.quote(query)
    url = f"https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&gsrsearch={q}&gsrlimit=5&prop=pageimages&pithumbsize=600"
    req = urllib.request.Request(url, headers={'User-Agent': 'FoodStationBot/1.0 (contact@foodstation.vn)'})
    try:
        data = json.loads(urllib.request.urlopen(req, timeout=8).read().decode())
        pages = data.get('query', {}).get('pages', {})
        urls = [p['thumbnail']['source'] for p in pages.values() if 'thumbnail' in p]
        return urls
    except Exception as e:
        print("wiki err:", e)
        return []

print("Wikipedia images:", get_images("iced coffee"))
