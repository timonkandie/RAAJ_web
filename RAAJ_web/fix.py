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

fix_file('C:/Users/Kandie/Downloads/RAAJ_web/RAAJ_web/components/navbar.html', '<span class="theme-toggle-icon">??</span>', '<span class="theme-toggle-icon">🌙</span>')
fix_file('C:/Users/Kandie/Downloads/RAAJ_web/RAAJ_web/js/theme.min.js', 'if (iconEl) iconEl.textContent = \'?\? \'; // Click to switch to light'.replace(' \'', '\'').replace('\?','?'), 'if (iconEl) iconEl.textContent = \'🌙\'; // Click to switch to light')
fix_file('C:/Users/Kandie/Downloads/RAAJ_web/RAAJ_web/js/theme.min.js', 'if (iconEl) iconEl.textContent = \'?\? \'; // Click to switch to dark'.replace(' \'', '\'').replace('\?','?'), 'if (iconEl) iconEl.textContent = \'☀️\'; // Click to switch to dark')
