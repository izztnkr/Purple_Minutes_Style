async function signupEvent(event){
    event.preventDefault();

    console.log('signup.js is linked!');


    const username = document.querySelector('input[type="username"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();

    if(username && email && password){
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        });

        if(response.ok){
            console.log(`Success! Your account ${username} has been created!`);
            document,location.replace('/dashboard');
        }else{
            alert(response.statusText);
        }

    }
}

document.querySelector('.signup-form').addEventListener('submit', signupEvent);