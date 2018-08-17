class CookieLibrary {
  deleteCookie(name){
    this.setCookie(name, '', 0);
  }
  
  setCookie(name, value, expiration){
    var d = new Date();
    d.setTime(d.getTime()+expiration*24*60*60*1000);
    var expiration = 'expires='+d.toUTCString();
    document.cookie = name+'='+value+';'+expiration+';path=/';
  }
  
  getCookie(name){
    var nom = name+'=';
    var array = document.cookie.split(';');
    for (var i=0; i<array.length; i++){
      var c = array[i];
      while (c.charAt(0)==' '){ 
        c = c.substring(1);
      }
      if (c.indexOf(name)==0){
        return c.substring(nom.length, c.length);
      }
    }
    return '';
  }
}
