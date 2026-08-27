$dir = "C:\Users\Kandie\Downloads\RAAJ_web\RAAJ_web"

# 1. Update variables.css and variables.min.css fonts
foreach ($file in @("css\variables.css", "css\variables.min.css")) {
    $path = Join-Path $dir $file
    if (Test-Path $path) {
        $content = Get-Content -Raw $path
        # Change Orbitron -> Playfair Display
        $content = $content -replace 'family=Orbitron[^&]*&', 'family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&'
        $content = $content -replace '"Orbitron"', '"Playfair Display"'
        
        # Change Plus Jakarta Sans -> Montserrat
        $content = $content -replace 'family=Plus\+Jakarta\+Sans[^&]*&', 'family=Montserrat:wght@300;400;500;600;700&'
        $content = $content -replace '"Plus Jakarta Sans"', '"Montserrat"'
        
        Set-Content -Path $path -Value $content
    }
}

# 2. Update HTML files (Injections & Theme fixes)
$htmlFiles = Get-ChildItem -Path $dir -Filter "*.html"
foreach ($file in $htmlFiles) {
    $content = Get-Content -Raw $file.FullName
    
    # Remove hardcoded dark mode
    $content = $content -replace '<html lang="en" data-theme="dark">', '<html lang="en">'
    
    # Inject theme.min.js and antigravity.css
    if ($content -notmatch 'theme\.min\.js') {
        $content = $content -replace '<script src="js/app\.min\.js"', "<script src=`"js/theme.min.js`"></script>`n  <script src=`"js/app.min.js`""
    }
    if ($content -notmatch 'antigravity\.css') {
        $content = $content -replace '<link rel="stylesheet" href="css/reduced-motion\.min\.css">', "<link rel=`"stylesheet`" href=`"css/reduced-motion.min.css`">`n  <link rel=`"stylesheet`" href=`"css/antigravity.css`">"
    }
    
    # Inject Fonts in HTML if they were hardcoded
    $content = $content -replace 'family=Orbitron[^&]*&', 'family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&'
    $content = $content -replace 'family=Plus\+Jakarta\+Sans[^&]*&', 'family=Montserrat:wght@300;400;500;600;700&'
    
    # Inject Spiderweb Canvas and Script
    if ($content -notmatch 'spiderwebCanvas') {
        $content = $content -replace '<body>', "<body>`n  <canvas id=`"spiderwebCanvas`" style=`"position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: -1; pointer-events: none;`"></canvas>"
    }
    if ($content -notmatch 'spiderweb\.js') {
        $content = $content -replace '</body>', "  <script src=`"js/spiderweb.js`" defer></script>`n</body>"
    }
    
    Set-Content -Path $file.FullName -Value $content
}

# 3. Restore the workbench images in Index.html
$indexFile = Join-Path $dir "Index.html"
if (Test-Path $indexFile) {
    $content = Get-Content -Raw $indexFile
    $content = $content -replace 'images/hero/hero-main\.jpg', 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    $content = $content -replace 'images/hero/hero-floating-1\.jpg', 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    $content = $content -replace 'images/hero/hero-floating-2\.jpg', 'https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    Set-Content -Path $indexFile -Value $content
}

# 4. Replace components.min.js images
$compFile = Join-Path $dir "js\components.min.js"
if (Test-Path $compFile) {
    $content = Get-Content -Raw $compFile
    $content = $content -replace 'https://images\.unsplash\.com/photo-[^`"]+', 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    Set-Content -Path $compFile -Value $content
}

Write-Host "Restoration Complete"
