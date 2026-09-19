# Genera los iconos PNG de la app (pantalla de inicio del móvil) con las olas del logo.
# Uso: powershell -File fuente\iconos.ps1
Add-Type -AssemblyName System.Drawing
$dir = Split-Path -Parent $PSScriptRoot
$alfas = 255, 153, 77
foreach ($t in 180, 192, 512) {
  $bmp = New-Object System.Drawing.Bitmap $t, $t
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'
  $g.Clear([System.Drawing.Color]::FromArgb(255, 14, 9, 18))
  $k = $t / 32.0 * 0.78
  $o = ($t - 32 * $k) / 2
  for ($i = 0; $i -lt 3; $i++) {
    $color = [System.Drawing.Color]::FromArgb($alfas[$i], 99, 214, 190)
    $pen = New-Object System.Drawing.Pen $color, (2.2 * $k)
    $pen.StartCap = 'Round'; $pen.EndCap = 'Round'
    $dx = 9 * $i
    $xy = @(8,6, 5,10, 13,13, 8,16, 3,19, 11,23, 8,26)
    $pts = New-Object 'System.Drawing.PointF[]' 7
    for ($j = 0; $j -lt 7; $j++) {
      $pts[$j] = New-Object System.Drawing.PointF ((($xy[2*$j] + $dx) * $k) + $o), (($xy[2*$j+1] * $k) + $o)
    }
    $g.DrawBeziers($pen, $pts)
    $pen.Dispose()
  }
  $bmp.Save((Join-Path $dir "icono-$t.png"), [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose(); $bmp.Dispose()
}
