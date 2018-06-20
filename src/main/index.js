// import modules
import { app, BrowserWindow } from "electron" // eslint-disable-line

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== "development") {
	global.__static = require("path").join(__dirname, "/static").replace(/\\/g, "\\\\") // eslint-disable-line
}

// init const value
const winURL = process.env.NODE_ENV === "development" ? "http://localhost:9080" : `file://${__dirname}/index.html`;

// init let value
let tray;
let mainWindow;

app.on("ready", () => {
	createWindow();
});

// init function
const createWindow = () => {
	mainWindow = new BrowserWindow({
		//kiosk: true,
		frame: false,
		fullscreen:true,
		simpleFullscreen: true,
		resizable: false,
		useContentSize: true
	});

	mainWindow.loadURL(winURL);

	mainWindow.on("close", (e) => {
		if (!app.isQuiting) {
			e.preventDefault();
			mainWindow.hide();
		}
	});
};

