@echo off
echo Installing dependencies...
echo.

echo Installing server dependencies...
call npm install

echo.
echo Installing client dependencies...
cd client
call npm install
cd ..

echo.
echo Setup complete! Starting the development server...
echo.
echo Server will run on: http://localhost:5000
echo Client will run on: http://localhost:3000
echo.

call npm run dev
