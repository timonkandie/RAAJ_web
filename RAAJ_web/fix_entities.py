import os

def fix_file(path, old, new):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        if old in content:
            content = content.replace(old, new)
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'Fixed {path}')
        else:
            print(f'No match in {path}')
    except Exception as e:
        print(f'Error fixing {path}: {e}')

# navbar.html
fix_file('C:/Users/Kandie/Downloads/RAAJ_web/RAAJ_web/components/navbar.html', '🌙', '&#x1F319;')
# footer.html
fix_file('C:/Users/Kandie/Downloads/RAAJ_web/RAAJ_web/components/footer.html', '📸', '&#x1F4F8;')
fix_file('C:/Users/Kandie/Downloads/RAAJ_web/RAAJ_web/components/footer.html', '💬', '&#x1F4AC;')
fix_file('C:/Users/Kandie/Downloads/RAAJ_web/RAAJ_web/components/footer.html', '🎨', '&#x1F3A8;')
fix_file('C:/Users/Kandie/Downloads/RAAJ_web/RAAJ_web/components/footer.html', '🖼️', '&#x1F5BC;&#xFE0F;')
fix_file('C:/Users/Kandie/Downloads/RAAJ_web/RAAJ_web/components/footer.html', '📄', '&#x1F4C4;')
fix_file('C:/Users/Kandie/Downloads/RAAJ_web/RAAJ_web/components/footer.html', '📦', '&#x1F4E6;')
fix_file('C:/Users/Kandie/Downloads/RAAJ_web/RAAJ_web/components/footer.html', '📇', '&#x1F4C7;')
fix_file('C:/Users/Kandie/Downloads/RAAJ_web/RAAJ_web/components/footer.html', '📍', '&#x1F4CD;')
fix_file('C:/Users/Kandie/Downloads/RAAJ_web/RAAJ_web/components/footer.html', '✉️', '&#x2709;&#xFE0F;')
fix_file('C:/Users/Kandie/Downloads/RAAJ_web/RAAJ_web/components/footer.html', '⚡', '&#x26A1;')
# theme.min.js
fix_file('C:/Users/Kandie/Downloads/RAAJ_web/RAAJ_web/js/theme.min.js', "'🌙'", "'\\u{1F319}'")
fix_file('C:/Users/Kandie/Downloads/RAAJ_web/RAAJ_web/js/theme.min.js', "'☀️'", "'\\u2600\\uFE0F'")
