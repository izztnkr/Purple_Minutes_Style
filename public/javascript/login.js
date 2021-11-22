async function loginEvent(event){
    event.preventDefault();

    console.log('login.js is linked!');

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password){
        const response = await fetch("/api/users/login", {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type' : 'application/json'}

        });

        if(response.ok){
            document.location.replace('/dashboard/');
        }else{
            alert(response.statusText);
        }
    }
}
console.log("button has beeen clicked!");
document.querySelector('.login-form').addEventListener('submit', loginEvent);
// document.querySelectorAll("").addEventListener('submit', loginEvent);
