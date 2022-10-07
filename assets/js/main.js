/* Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/


/* MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console.
*/
//input numero km stampato in console
const NumberKm = document.getElementById("km")
//input età stampato in console
const userAge = document.getElementById("age")
//bottone che genera il risultato
const buttonGenerator = document.getElementById("genera")

buttonGenerator.addEventListener("click", function(){
    console.log('km da percorrere', NumberKm.value)
    console.log('età utente' , userAge.value)
    let wholePrice = (NumberKm.value * 0.21);
    wholePrice = wholePrice.toFixed(2);
    document.querySelector('p').innerHTML = ('il prezzo intero del treno è: ' + wholePrice + '€');
    
    if (userAge.value<18) {
        const teenDiscount = (wholePrice * 0.20);
        document.querySelector('.teen_discount').innerHTML = ('lo sconto che possiamo applicare per te è di: ' + teenDiscount + '€');
        let finalPriceTeen = (wholePrice - teenDiscount);
        finalPriceTeen = finalPriceTeen.toFixed(2);
        document.querySelector('.final_teen').innerHTML = ('il prezzo del biglietto con lo sconto applicato è: ' + finalPriceTeen + '€');
        
    } else if (userAge.value>65){
        const overDiscount = (wholePrice * 0.40);
        document.querySelector('.old_discount').innerHTML =('lo sconto che possiamo applicare per te è di: ' + overDiscount + '€');
        let finalOldPrice = (wholePrice - overDiscount);
        finalOldPrice = finalOldPrice.toFixed(2);
        document.querySelector('.final_old').innerHTML =('il prezzo del biglietto con lo sconto applicato è: ' + finalOldPrice + '€');
    } else {
        document.querySelector('.discount_none').innerHTML = ('non puoi avere nessuno sconto')
    
    }
})




/* 
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il riepilogo dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.  */


