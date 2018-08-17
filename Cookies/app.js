const cookieLibrary = new CookieLibrary;

document.getElementById('get-cookies').addEventListener('click',seeCookies);
document.getElementById('create-cookie').addEventListener('click',createCookie);
document.getElementById('update-cookie').addEventListener('click',createCookie);
document.getElementById('get-cookie').addEventListener('click',readCookie);
document.getElementById('borrarCookie').addEventListener('click',borrarCookie);

function seeCookies(){
    alert(`Cookies actuales:
    ${document.cookie}`);
}

function createCookie(){
    let name = prompt('Introduzca el nombre de la cookie');
    let value = prompt('Introduzca su valor');
    let expiration = parseInt(prompt('Introduzca el número de días para que expire'));
    cookieLibrary.setCookie(name, value, expiration);
    seeCookies();
}

function readCookie(){
    let name = prompt('Introduzca el nombre de la cookie a consultar');
    let result = cookieLibrary.getCookie(name);
    alert(result);
}

function borrarCookie(){
    let name = prompt('Introduzca el nombre de la cookie a borrar');
    cookieLibrary.deleteCookie(name);
    seeCookies();
}

