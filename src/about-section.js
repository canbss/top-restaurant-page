const createAboutSection = () =>{
    const aboutSection = document.createElement('div');
    aboutSection.id = "about-section";

    const aboutSectionImg = document.createElement('div');
    aboutSectionImg.id = "about-img";

    const aboutSectionContent = document.createElement('div');
    aboutSectionContent.id = "about-content";
    aboutSectionContent.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio rem nemo fugit eveniet corporis eaque dolore excepturi aliquam commodi rerum! Molestiae doloribus est atque quo alias labore animi? Repudiandae, dolore?; Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis quibusdam incidunt aliquam laboriosam laborum voluptate minima molestias mollitia. Quibusdam voluptatibus mollitia maxime molestiae omnis expedita magnam obcaecati dicta? Blanditiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium laborum iste nulla fugit qui non? Necessitatibus fuga reiciendis dolores molestias veritatis dolore, beatae libero! Magni quibusdam ipsam delectus cumque!"

    aboutSection.appendChild(aboutSectionImg);
    aboutSection.appendChild(aboutSectionContent);

    return aboutSection;
}

export default createAboutSection;