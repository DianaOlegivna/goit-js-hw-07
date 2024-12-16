const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', event => { 

    event.preventDefault(); 

    const email = formElement.elements.email.value.trim();
    const password = formElement.elements.password.value.trim();

    if (!email || !password) { 
        alert = 'All form fields must be filled in';
        return;
    }


    const formData = { 
        [formElement.elements.email.name]: email,
        [formElement.elements.password.name]: password,
    }
    
    console.log(formData); 

    formElement.reset();
})
