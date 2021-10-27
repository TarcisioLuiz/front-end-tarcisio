function getUserName() {
  const name = prompt("Qual seu nome?");
  const isYourName = confirm(`Seu nome é mesmo ${name} ?`);

  if (isYourName) {
    const paragraph = document.getElementById("paragrafo");

    paragraph.innerText += name;
  } else {
    getUserName();
  }
}

function getUsersFromAPI(){

  fetch("https://jsonplaceholder.typicode.com/users")
}
