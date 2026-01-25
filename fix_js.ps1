$filePath = 'main.js'
$content = Get-Content $filePath -Raw
$pattern = '(?s)marrakech_dining: \[.*?rating: 5,'
$replacement = "marrakech_dining: [
        {
            id: 'safran-marrakech',
            name: 'Safran Marrakech',
            image: 'safran_marrakech.png',
            rating: 5,"
$newContent = $content -replace [regex]::Escape($pattern), $replacement
# Wait, Escape will escape the regex special chars in pattern. I want the pattern to be regex.
# Let's try a different way.
$regex = [regex]::new('(?s)marrakech_dining: \[.*?rating: 5,')
$content = $regex.Replace($content, $replacement, 1)
$content | Set-Content $filePath
