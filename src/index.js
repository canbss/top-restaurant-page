import {createTabs, createLandingSection} from "./page-load.js"
import createAboutSection from "./about-section.js";
import createMenuSection from "./menu-section.js";
import createContactSection from "./contact-section.js"

const container = document.querySelector('#container');
const tabs = createTabs();
const landingSection = createLandingSection();
const aboutSection = createAboutSection();
const menuSection = createMenuSection();
const contactSection = createContactSection();

//Append tabs and landing section for the intial page load
container.appendChild(tabs);
container.appendChild(landingSection);

let lastTab = tabs.firstChild;
//add eventlistener to tabs for changing pages
(Array.from(tabs.children)).forEach(tab => tab.addEventListener('click', (e)=>{

    styleTab(e);

    removeContent(e);

    if(e.target.id == "about"){
        container.appendChild(aboutSection);
    }else if(e.target.id == "menu"){
        container.appendChild(menuSection);
    }else if(e.target.id == "contact"){
        container.appendChild(contactSection);
    }else{
        container.appendChild(landingSection);
    }

    lastTab = e.target;
}));

const removeContent = (e) =>{
    let content = container.lastElementChild;
    if(content != tabs && container.lastElementChild.id != e.target.id){
        content.remove();
    }
}

const styleTab = (e) =>{
    e.target.style.color = "#837f7f";
    lastTab.style = "";
}



