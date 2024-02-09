const formLogin = document.querySelector("#formLogin")
btnLogin.addEventListener('click', event => {
  event.preventDefault()
  if (email.value == "" || pass.value == "") {
    alert("Completa todos los campos...")
    return false
  }
  const form = new FormData(formLogin)
  form.append("function", "login")
  fetch("data/usuario.php", {
    method: "POST",
    body: form
  })
    .then(response => response.json())
    .then(json => {
      if (!json) {
        alert("No has podido iniciar sesión")
        return false
      }
      sessionStorage.setItem("usuario", JSON.stringify(json))
    })
    window.location.href = "https://www.youtube.com/";
   
})