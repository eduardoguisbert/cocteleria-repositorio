
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function ComprobarCookie()
  {
  
  var CookieAceptado = getCookie('provides');
  //alert(CookieAceptado);
  if(CookieAceptado=="true")
  {
    var ec = document.getElementById('Cookie');
    ec.style.visibility="hidden";
  }else{
    var ecn = document.getElementById('Cookie');
    ecn.style.visibility="visible";
  }

  }

  function AceptarCookie()
  {
    var mejorar = document.getElementById("mejor").checked;
    var marketing = document.getElementById("marke").checked;
    var Aceptar = document.getElementById("AceptCookie").checked;
    
    if(Aceptar==false)
    {
        setCookie('provides',false,'1');
        var elemento2 = document.getElementById('Cookie');
        elemento2.style.animation="Salida 0.9s 1 forwards";
        setCookie('optMark',false,'-1');
        setCookie('optMej',false,'-1');
    }
    else{
      setCookie('provides',true,'30');
      var elemento2 = document.getElementById('Cookie');
      elemento2.style.animation="Salida 0.9s 1 forwards";
      setCookie('optMark',true,'30');
      setCookie('optMej',true,'30');

    }
    
  }
ComprobarCookie();
  /*

mejor
marke
AceptCookie
*/