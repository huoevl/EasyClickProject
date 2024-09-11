chcp 65001;
$lastPath= Get-Location;
$mumuAdbPath = "C:\Program Files\Netease\MuMu Player 12\shell\";
Set-Location -Path $mumuAdbPath;
.\adb.exe disconnect 127.0.0.1:16384
Write-Host "connect succ!!!";
Set-Location -Path $lastPath;
