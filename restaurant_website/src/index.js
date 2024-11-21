import "./template.css";
import "./template.html";
import {drinkImageNameDescription as drinks} from "./lib/drinks.js";
import greeting from "./lib/greeting.js";

import homepageImage from "./images/zetong-li-knd7VOzW_bQ-unsplash.jpg";

greeting();

const content=document.getElementById("content");

const addHomeEventListeners= ()=>{
    const homeButton=document.getElementById("homeButton");
    homeButton.addEventListener("click",()=>{
        //clear the content
        console.log("Home button clicked");
        content.replaceChildren();
        appendHomepage();
    });
};
addHomeEventListeners();

const addMenuEventListener= ()=>{
    const homeButton=document.getElementById("menuButton");
    homeButton.addEventListener("click",()=>{
        //clear the content
        console.log("Menu button clicked");
        content.replaceChildren();
    });
};
addMenuEventListener();


function appendHomepage(){
    console.log("Appending homepage");
    const homepage=document.createElement("div");
    homepage.id="homepage";
    homepage.style.display="flex";
    homepage.style.flexDirection="row";

    const homepageContent=document.createElement("div");
    homepageContent.style.display="flex";
    homepageContent.style.flexDirection="column";
    homepageContent.style.justifyContent="center";
    homepageContent.style.alignItems="center";
    homepageContent.style.width="50vw";
    homepageContent.style.backgroundColor="#805031";
    homepageContent.style.paddingBottom="22vh";

    const img=document.createElement("img");
    img.src=homepageImage;
    img.alt="Alcohol served at our restaurant";
    img.style.display="inherit";
    img.style.objectFit="cover";
    img.style.width="50vw";
    img.style.height="95vh";
    img.classList.add("homepageImage");

    const restaurantName=document.createElement("p");
    restaurantName.id="restaurantName";
    restaurantName.style.paddingBottom="8vh";
    restaurantName.style.fontFamily=`"Windsong",cursive`;
    restaurantName.style.fontSize="3.5rem";
    restaurantName.style.textDecoration="underline";
    restaurantName.style.textDecorationColor="#000000";
    restaurantName.style.color="#f2c695";
    restaurantName.textContent="Velvet Ember";

    const restaurantTagline=document.createElement("p");
    restaurantTagline.id="restaurantTagline";
    restaurantTagline.style.color="#f2c695";
    restaurantTagline.style.fontSize="1.75rem";
    restaurantTagline.textContent="Where Elegance Meets Indulgence";

    // homepageContent.appendChild(img);

    homepageContent.appendChild(restaurantName);
    homepageContent.appendChild(restaurantTagline);

    homepage.appendChild(img);
    homepage.appendChild(homepageContent);
    content.appendChild(homepage);
};

// appendHomepage();



const appendMenu=(drinkList)=>{
    console.log("Appending menu");
    console.log(drinkList);
    const gridContainer=document.createElement("div");
    gridContainer.className="gridContainer";
    gridContainer.style.display="grid";
    gridContainer.style.paddingBottom="89vh";
    gridContainer.style.gridTemplateColumns="repeat(auto-fit,minmax(360px,1fr))";
    gridContainer.style.gap="1rem";
    gridContainer.style.padding="5vw";
    gridContainer.style.paddingTop="#1vw";

    for(let i=0; i<drinkList.length; i++){
        const drinkName=drinkList[i][1];
        const drinkNameElement=document.createElement("h3");
        drinkNameElement.textContent=drinkName;
        const drinkDescription=drinkList[i][2];
        const drinkDescriptionElement=document.createElement("p");
        drinkDescriptionElement.textContent=drinkDescription;
        const drinkImage=drinkList[i][0];
        const drinkImageElement=document.createElement("img");
        drinkImageElement.src=drinkImage;
        drinkImageElement.alt=drinkName;

        const drinkCard=document.createElement("div");
        drinkCard.className="card";
        drinkCard.appendChild(drinkImageElement);
        drinkCard.appendChild(drinkNameElement);
        drinkCard.appendChild(drinkDescriptionElement);
        gridContainer.appendChild(drinkCard);
    }

    content.appendChild(gridContainer);
};


const appendMenuButton=()=>{
    const menuButton=document.getElementById("menuButton");
    menuButton.addEventListener("click",()=>{
        content.replaceChildren();
        appendMenu(drinks);
    });
};

appendMenuButton();