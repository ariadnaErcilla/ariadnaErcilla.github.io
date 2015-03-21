-- Wait for our original app to exit
delay 2

-- Restart our application with administrator privileges
set thePID to (do shell script "/Applications/XAMPP/DesktopServer.app/Contents/MacOS/DesktopServer > /dev/null 2>&1 & echo $!" with administrator privileges) as integer

delay 2
tell application "DesktopServer"
	activate
end tell