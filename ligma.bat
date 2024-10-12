@echo off
setlocal

rem Set the folder path (change to your desired folder)
set "folder_path=C:\Users\geois\gamestorage"

rem List only directories
for /d %%d in ("%folder_path%\*") do echo %%~nxd

endlocal
pause
