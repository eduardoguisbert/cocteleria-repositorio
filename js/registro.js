
//Seccion Registro



//let formRegistro (event) =  document.getElementById("registroForm");

/*
        function validar(evt) {
            let cla1 = document.getElementById("clave1").value;
            let cla2 = document.getElementById("clave2").value;
            if (cla1 != cla2) {
                alert('Las claves ingresadas son distintas');
                evt.preventDefault();
            }
        }
        */
function validaFormulario ()
 {
    let formu = document.getElementById("registroForm");
    //formu.addEventListener('submit', validaFormulario);


    const Nickname = document.querySelector("#Nick");
    const User = document.querySelector("#Usuario");
    const Pass = document.querySelector("#Pass");
    const PassR = document.querySelector("#PassR");
    const chkpol = document.querySelector("#aceptPol");

    //const Correo = document.querySelector("#Correo");
    var validation = true;

    if(Nickname.value.length < 3 || Nickname.value.length > 20)
        {
            alert("Tu Apodo debe tener entre 3 y 20 caracteres");
            validation = false;
            return;
        }

        if(User.value.length < 3 || User.value.length > 20)
            {
                alert("Tu usuario debe tener entre 3 y 20 caracteres");
                validation = false;
                return;
            }
        if(Pass.value.length < 6 || Pass.value.length > 20)
        {
            alert("Tu Contraseña debe tener entre 6 y 20 caracteres");
            validation = false;
           return;
        }
        if(PassR.value != Pass.value)
        {
            alert("Las contraseñas no coinciden");
            validation = false;
            return;
         }
           
          if (chkpol.checked == false) {
         alert("Debe aceptar las políticas de privacidad para registrarse");
         validation = false;
         return;
          }

    if(validation==true){
        formu.submit();
    } else{

        return false;
    }

}
/*
function Registrar()
{
 validaFormulario();
}
*/
//formRegistro.addEventListener("submit",validaFormulario)