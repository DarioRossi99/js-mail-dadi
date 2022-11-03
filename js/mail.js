const dati = prompt ("inserire email Valida")

const email = ["roberto@email.com" , "giulia@email.com" , "antonio@email.com" , "giorgia@email.com" , ] 

let Giusta = false;

for ( let i = 0; i < email.length; i++) {

    if ( email[ i ] === dati){
        Giusta = true;
        console.log ("email corretta")
    }else ( email[ i ] === ""){
        Giusta = true;
        console.log ("email errata")
    }
}