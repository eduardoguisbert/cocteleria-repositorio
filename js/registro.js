
//Seccion Registro
class Registro
{
    constructor(Nick,Usuario,Pass,Correo)
    {
        this.nick=Nick;
        this.usuario=Usuario;
        this.correo=Correo;
        this.password=Pass;
    }

}

function validaFormulario ()
 {
    let formu = document.getElementById("registroForm");
    //formu.addEventListener('submit', validaFormulario);


    const Nickname = document.querySelector("#Nick");
    const User = document.querySelector("#Usuario");
    const Pass = document.querySelector("#Pass");
    const PassR = document.querySelector("#PassR");
    const chkpol = document.querySelector("#aceptPol");
    const email = document.querySelector("#Correo");
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
       // formu.submit();
       tryReg(Nickname.value, User.value, Pass.value, email.value );
       alert("Datos guardados, utilice 'iniciar sesion' para testearlos")
    } else{

        return false;
    }

}
/* La siguiente funcion guarda los datos de registro de la persona para usarlo como si se guardara en la bd,
    este método solo será utilizado para guardar la info de registro a modo de usar el login y se borrará cuando
    se programe el backend */
    
function tryReg(apodo, usuario, pass, email)
{
    const Registrodat= new Registro(apodo, usuario, pass, email);
savedata(Registrodat);
}
function savedata(reg)
{
    localStorage.setItem("Registro",JSON.stringify(reg));
}
