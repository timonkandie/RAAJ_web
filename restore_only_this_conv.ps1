$dir = "C:\Users\Kandie\Downloads\RAAJ_web\RAAJ_web"

# 1. Update HTML files: Remove data-theme="dark" and inject theme.min.js
$htmlFiles = Get-ChildItem -Path $dir -Filter "*.html"
foreach ($file in $htmlFiles) {
    $content = Get-Content -Raw $file.FullName
    
    # Remove hardcoded dark mode
    $content = $content -replace '<html lang="en" data-theme="dark">', '<html lang="en">'
    
    # Inject favicon and theme.min.js
    if ($content -notmatch '<link rel="icon"') {
        $content = $content -replace '<head>', "<head>`n  <link rel=`"icon`" type=`"image/jpeg`" href=`"assets/my-image.jpeg`">"
    }
    if ($content -notmatch 'theme\.min\.js') {
        $content = $content -replace '<script src="js/app\.min\.js"', "<script src=`"js/theme.min.js`"></script>`n  <script src=`"js/app.min.js`""
    }
    
    Set-Content -Path $file.FullName -Value $content
}

# 2. Add text color fix to antigravity.css
$cssFile = Join-Path $dir "css\antigravity.css"
if (Test-Path $cssFile) {
    $content = Get-Content -Raw $cssFile
    if ($content -notmatch 'Fix text colors for components') {
        $content += "`n/* Fix text colors for components that originally used white text on hardcoded dark backgrounds */`n"
        $content += ".footer, .footer-col h4.footer-heading, .footer-links a, .footer-bottom-links a, "
        $content += ".portfolio-card-body, .portfolio-card-client, .portfolio-card h3, "
        $content += ".service-card-desc, .card-title, .testimonial-quote, .footer p, .footer span "
        $content += "{ color: var(--text-primary) !important; }`n"
        Set-Content -Path $cssFile -Value $content
    }
}


# 3. Restore Favicon Logic in theme.min.js
$jsFile = Join-Path $dir "js\theme.min.js"
if (Test-Path $jsFile) {
    $jsContent = Get-Content -Raw $jsFile
    if ($jsContent -notmatch 'favicon.cloneNode') {
        $jsContent = $jsContent -replace 'updateToggleUI\(effectiveTheme, storedTheme\) \{', "updateToggleUI(effectiveTheme, storedTheme) {`nconst favicon = document.querySelector('link[rel=`"icon`"]');`nif (favicon) {`n  const newFavicon = favicon.cloneNode(true);`n  newFavicon.href = effectiveTheme === 'dark' ? 'assets/my-image-inverted.jpeg' : 'assets/my-image.jpeg';`n  favicon.parentNode.replaceChild(newFavicon, favicon);`n}"
        Set-Content -Path $jsFile -Value $jsContent
    }
}

# 4. Disable Spiderweb on Mobile
$swFile = Join-Path $dir "js\spiderweb.min.js"
if (Test-Path $swFile) {
    $swContent = Get-Content -Raw $swFile
    if ($swContent -notmatch 'pointer: coarse') {
        $swContent = $swContent -replace '// removed check', 'if(window.innerWidth<768||(window.matchMedia&&window.matchMedia(''(pointer: coarse)'').matches))return;'
        Set-Content -Path $swFile -Value $swContent
    }
}

# 5. Fix components.min.js async navbar theme state
$cmpFile = Join-Path $dir "js\components.min.js"
if (Test-Path $cmpFile) {
    $cmpContent = Get-Content -Raw $cmpFile -Encoding UTF8
    if ($cmpContent -notmatch 'ThemeManager.updateToggleUI') {
        $cmpContent = $cmpContent -replace "initializeNavigation\(\);`n\} ", "initializeNavigation();`n}`nif (window.ThemeManager) { window.ThemeManager.updateToggleUI(window.ThemeManager.getEffectiveTheme(), window.ThemeManager.getStoredTheme()); }"
        Set-Content -Path $cmpFile -Value $cmpContent -Encoding UTF8
    }
}
Write-Host "Restoration Complete"






