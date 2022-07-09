let nombre = prompt("¿Que necesitas?")

let numero = parseInt(prompt("¿Cuantos queres?"))

for (let i = 1; i <= numero; i++){
    // alert("Aqui tiene " + i + " " + nombre)
    console.log("Aqui tiene " + i + " " + nombre)
}

let nom = prompt("¿Como se llama la banda de Freddie Mercury?")

while(nom != "queen") {
    alert(nom + " es incorrecto")

    nom = prompt("Vuelva a intentar")
}