Add-Type -AssemblyName System.Drawing

function Crop-Image-To-Content {
    param(
        [string]$sourcePath,
        [string]$destPath
    )

    $img = [System.Drawing.Bitmap]::FromFile($sourcePath)
    $width = $img.Width
    $height = $img.Height
    
    $minX = $width
    $minY = $height
    $maxX = 0
    $maxY = 0
    
    for ($y = 0; $y -lt $height; $y++) {
        for ($x = 0; $x -lt $width; $x++) {
            $pixel = $img.GetPixel($x, $y)
            # Find non-white pixels
            if ($pixel.A -gt 20 -and ($pixel.R -lt 245 -or $pixel.G -lt 245 -or $pixel.B -lt 245)) {
                if ($x -lt $minX) { $minX = $x }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($y -gt $maxY) { $maxY = $y }
            }
        }
    }
    
    $cropW = [Math]::Max(1, $maxX - $minX + 1)
    $cropH = [Math]::Max(1, $maxY - $minY + 1)
    
    Write-Host "Crop dimensions for $sourcePath : x=$minX y=$minY w=$cropW h=$cropH"
    
    $rect = New-Object System.Drawing.Rectangle($minX, $minY, $cropW, $cropH)
    $cropped = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($cropped)
    $g.DrawImage($img, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    
    $cropped.MakeTransparent([System.Drawing.Color]::White)
    
    $cropped.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    $img.Dispose()
    Write-Host "Saved tightly cropped logo to $destPath"
}

Crop-Image-To-Content "C:\Users\Vinay HV\.gemini\antigravity-ide\brain\a0fa9c3a-cfc1-4598-9644-55ea65617aa0\.user_uploaded\media_1787220539755.png" "v:\snigdha\public\assets\images\user_emblem_tight.png"
Crop-Image-To-Content "C:\Users\Vinay HV\.gemini\antigravity-ide\brain\a0fa9c3a-cfc1-4598-9644-55ea65617aa0\.user_uploaded\media_1787220539738.png" "v:\snigdha\public\assets\images\user_wordmark_tight.png"
