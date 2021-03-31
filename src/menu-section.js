const createMenuSection = () =>{

    const menuSection = document.createElement('div');
    menuSection.id = "menu-section";

    const menuTabs = document.createElement('div');
    menuTabs.id = "menu-tabs";

    const menuImg = document.createElement('div');
    menuImg.id = "menu-img";

    const breakfastTab = document.createElement('div');
    breakfastTab.classList.add('menu-tab');
    breakfastTab.id = "breakfast";
    breakfastTab.appendChild(document.createElement('p'));
    breakfastTab.firstChild.innerText = "Breakfast";

    const lunchTab = document.createElement('div');
    lunchTab.classList.add('menu-tab');
    lunchTab.id = "lunch";
    lunchTab.appendChild(document.createElement('p'));
    lunchTab.firstChild.innerText = "Lunch";

    const dinnerTab = document.createElement('div');
    dinnerTab.classList.add('menu-tab');
    dinnerTab.id = "dinner";
    dinnerTab.appendChild(document.createElement('p'));
    dinnerTab.firstChild.innerText = "Dinner";

    const seafoodTab = document.createElement('div');
    seafoodTab.classList.add('menu-tab');
    seafoodTab.id = "seafood";
    seafoodTab.appendChild(document.createElement('p'));
    seafoodTab.firstChild.innerText = "Seafood";

    const bbqTab = document.createElement('div');
    bbqTab.classList.add('menu-tab');
    bbqTab.id = "bbq";
    bbqTab.appendChild(document.createElement('p'));
    bbqTab.firstChild.innerText = "BBQ";

    const beverageTab = document.createElement('div');
    beverageTab.classList.add('menu-tab');
    beverageTab.id = "beverage";
    beverageTab.appendChild(document.createElement('p'));
    beverageTab.firstChild.innerText = "Beverage";

    const contentArr = [breakfastTab, lunchTab, dinnerTab, seafoodTab, bbqTab, beverageTab];

    contentArr.forEach(content => {
        menuTabs.appendChild(content);
    })

    menuSection.appendChild(menuTabs);
    menuSection.appendChild(menuImg);

    return menuSection;
}

export default createMenuSection;