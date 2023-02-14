import { createDebugElements } from "./module-debug.js";

// inte använd men länken till början av APIt
const API_BASE = "https://nackademin-item-tracker.herokuapp.com/";

// Globala variabler (for now)
let debugMode = false;

// skapar debugelement om debugMode är true
createDebugElements(debugMode);
