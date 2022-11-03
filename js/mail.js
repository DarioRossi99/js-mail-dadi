const dati = prompt ("inserire email Valida")

const email = ["roberto@email.com" , "giulia@email.com" , "antonio@email.com" , "giorgia@email.com" , ] 

console.log (email)

let Giusta = false;

for ( let i = 0; i < email.length; i++) {
    if ( email[ i ] === dati){
        Giusta = true;
    }else {

    }
}

if ( Giusta === true){
    Giusta = true;
    alert ("email corretta")
}else {
    Giusta = true;
    alert ("email errata")
}
