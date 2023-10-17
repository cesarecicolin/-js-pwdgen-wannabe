// RACOLTA DATI

const nome = prompt("ciao utente come ti chiami?")
console.log(nome,typeof nome)

const cognome = prompt("ora potresti dirmi anche il tuo cognome?")
console.log(cognome,typeof cognome)

const colore =prompt("ti chiedo lultima cosa. il tuo colore preferito?")
console.log(colore,typeof colore)

// LOGICA DEL PROGRAMA
const password = nome + cognome + colore
console.log(password,typeof password)

const messagio = `ciao ${nome} ho  creato una password per te fanne buon uso ${password}21`
console.log(messagio,typeof messagio)

// OUTPUT
document.getElementById("text") .innerHTML = messagio