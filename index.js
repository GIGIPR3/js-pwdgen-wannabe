let iltuonome = prompt ('Scrivi come ti chiami:');
console.log(iltuonome);

let iltuocognome = prompt('Scrivi il tuo cognome:');
console.log(iltuocognome);

let iltuocolore = prompt('Scrivi il tuo colore preferito:');
console.log(iltuocolore);

let iltuonumero = prompt('Scrivi un numero:');
console.log(iltuonumero);

document.getElementById('fraseJavascript').innerHTML = ` la tua password è: ${iltuonome}${iltuocognome}${iltuocolore}${iltuonumero}` 