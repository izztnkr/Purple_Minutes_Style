async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'}
    });

    if(response.ok){
        document.location.replace('/homepage');
    }else{
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logout);