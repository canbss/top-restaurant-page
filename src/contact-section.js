const createContactSection = () =>{
    const form = document.createElement('form');
    form.setAttribute('action', "#");;
    form.id = "contact-section";

    const forName = document.createElement('label');
    forName.setAttribute('for',"name");
    forName.id = "name-label";
    forName.innerText = "Name";
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute("name", "name");
    nameInput.id = "name";
    nameInput.required = true;
    nameInput.placeholder = "Name";

    const forSurname = document.createElement('label');
    forSurname.setAttribute('for', "surname");
    forSurname.id = "surname";
    forSurname.innerText = "Surname";
    const surnameInput = document.createElement('input');
    surnameInput.type = "text";
    surnameInput.name = "surname";
    surnameInput.id = "surname";
    surnameInput.required = true;
    surnameInput.placeholder = "Surname";

    const forEmail = document.createElement('label');
    forEmail.setAttribute('for', 'email');
    forEmail.id = "email";
    forEmail.innerText = "E-mail";
    const emailInput = document.createElement('input');
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.id = "email";
    emailInput.required = true;
    emailInput.placeholder = "example@example.com";

    const forMessage = document.createElement('label');
    forMessage.setAttribute('for', 'message');
    forMessage.innerText = "Message";
    const messageInput = document.createElement('textarea');
    messageInput.name = "message";
    messageInput.id = "message";
    messageInput.required = true;
    messageInput.placeholder = "Your message...";

    const submitButton = document.createElement('button');
    submitButton.type = "submit";
    submitButton.innerText = "Send";

    const contentArr = [forName, nameInput, forSurname, surnameInput, forEmail, emailInput, forMessage, messageInput, submitButton];

    contentArr.forEach(content =>{
        form.appendChild(content);
    })

    return form;
}

export default createContactSection;