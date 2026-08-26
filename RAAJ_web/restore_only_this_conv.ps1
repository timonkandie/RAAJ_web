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

Write-Host "Restoration Complete"



