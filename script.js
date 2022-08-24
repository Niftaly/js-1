function Check() {
  let email = "orkhanniftaliev@gmail.com";
  let pass = 907128;

  let userMail = document.getElementById("email");
  let userPass = document.getElementById("pass");
  let emailMessage = document.getElementById("emailMessage")



  if( email == userMail.value && pass == userPass.value ){
    alert('Dogrudur')
  }else {
    userMail.className="form-control my-3 is-invalid"
    userPass.className="form-control my-3 is-invalid";
    emailMessage.className='badge bg-danger d-block'
    emailMessage.innerHTML='Email ve ya sifre yanlisdir'



  }

}
