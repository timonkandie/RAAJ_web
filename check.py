import re
with open('C:/Users/Kandie/Downloads/RAAJ_web/RAAJ_web/components/navbar.html', 'r', encoding='utf-8') as f:
    c = f.read()
m = re.search(r'<span class="theme-toggle-icon">(.*?)</span>', c)
if m:
    print(m.group(1).encode('ascii', 'backslashreplace'))
