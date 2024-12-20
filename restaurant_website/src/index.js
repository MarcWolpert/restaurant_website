import "./template.css";
import "./template.html";
import {appendHomepage, addHomeEventListeners} from "./lib/homeTab.js";
import {appendMenu, addMenuEventListener, appendMenuButton} from "./lib/menuTab.js";
import {appendContact,addContactEventListener} from "./lib/contactTab.js";


const content=document.getElementById("content");

appendHomepage(content);
addHomeEventListeners(content);
addMenuEventListener(content);
addContactEventListener(content);

