### run_hidden.vbs

> 隐藏运行PowerShell

```visual basic
Set objShell = CreateObject("WScript.shell")
objShell.Run "powershell.exe -WindowStyle Hidden -File ""D:\Software\U-detect\U-detect.ps1""", 0 ,True
```

### U-detect.ps1

```powershell
while ($true){
# 获取所有可移动设备的盘符，排除 C 盘和 D 盘
    $drives = Get-WmiObject Win32_Volume | Where-Object {$_.DriveType -eq 2 -and $_.DriveLetter -notin @('C:', 'D:') }
    # 如果存在非 C 盘和 D 盘的可移动设备，则执行重启命令
    if ($drives) {
        # 执行重启命令
        Restart-Computer -Force
		}
}
```

