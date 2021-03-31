const createTabs = () =>{
    const tabs = document.createElement('div');
    tabs.id = "tabs";

    const homeTab = document.createElement('div');
    homeTab.id = "home";
    homeTab.classList.add('tab');
    homeTab.innerText = "Home";
    homeTab.style.color = "#837f7f";

    const aboutTab = document.createElement('div');
    aboutTab.id = "about";
    aboutTab.classList.add('tab');
    aboutTab.innerText = "About";

    const menuTab = document.createElement('div');
    menuTab.id = "menu";
    menuTab.classList.add("tab");
    menuTab.innerText = "Menu";

    const contactTab = document.createElement('div');
    contactTab.id = "contact";
    contactTab.classList.add("tab");
    contactTab.innerText = "Contact";

    const tabsArr = [homeTab, aboutTab, menuTab, contactTab];

    tabsArr.forEach(tab =>{
        tabs.appendChild(tab);
    })

    return tabs;
}

const createLandingSection = () =>{
    const landingSection = document.createElement('div');
    landingSection.id = "landing-section";
    const landingSectionTextContent = document.createElement('p');
    landingSectionTextContent.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugiat eaque minus repellat quidem possimus. Sit sapiente odio ipsa a praesentium adipisci. Eius, vel vitae atque eveniet doloribus blanditiis voluptates? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugiat eaque minus repellat quidem possimus. Sit sapiente odio ipsa a praesentium adipisci. Eius, vel vitae atque eveniet doloribus blanditiis voluptates? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugiat eaque minus repellat quidem possimus. Sit sapiente odio ipsa a praesentium adipisci. Eius, vel vitae atque eveniet doloribus blanditiis voluptates?";
    landingSection.appendChild(landingSectionTextContent);

    return landingSection;
}

export {createTabs, createLandingSection};
