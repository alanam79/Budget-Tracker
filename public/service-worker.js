// Service workers do NOT need webpack to work. Because the application is already using webpack
const APP_PREFIX = "BudgetTracker-";
const VERSION = "version_01";
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
  "./index.html",
  "./css/style.css",
  "./js/idb.js",
  "./js/index.js",
];
