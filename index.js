const form = document.querySelector(".b7validator");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = form.inName.value;
  let email = form.inEmail.value;
  let password = form.inPassword.value;

  if (!name && !email && !password) {
    return;
  } else {
    console.log(`${name} ${email} ${password}`);
    form.reset();
    alert("Formulário enviado com sucesso!");
  }
});
