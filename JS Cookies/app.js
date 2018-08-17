document.getElementById('get-cookies').addEventListener('click',seeCookies);
document.getElementById('create-cookie').addEventListener('click',createCookie);
document.getElementById('update-cookie').addEventListener('click',createCookie);
document.getElementById('get-cookie').addEventListener('click',readCookie);
document.getElementById('borrarCookie').addEventListener('click',borrarCookie);

function seeCookies(){
    alert(`Cookies actuales:
    ${JSON.stringify(Cookies.get())}`);
}

function createCookie(){
    let name = prompt('Introduzca el nombre de la cookie');
    let value = prompt('Introduzca su valor');
    let expiration = parseInt(prompt('Introduzca el número de días para que expire'));
    Cookies.set(name, value, { expires: expiration });
    seeCookies();
}

function readCookie(){
    let name = prompt('Introduzca el nombre de la cookie a consultar');
    let result = Cookies.get(name);
    alert(result);
}

function borrarCookie(){
    let name = prompt('Introduzca el nombre de la cookie a borrar');
    Cookies.remove(name);
    seeCookies();
}

