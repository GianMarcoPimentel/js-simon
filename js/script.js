/* 
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!


Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
- Da quante ore è composto un giorno? (24)
- Da quanti minuti è composta un'ora? (60)
- Da quanti secondi è composto un minuto? (60)
- Da quanti millisecondi è composto un secondo? (1000)
- Quanti millisecondi mi separano da domani alle 9:30? 
- Esiste un oggetto JS in grado di gestire le date? newDate
- Esistono dei metodi per trasformare una data in millisecondi?


*/


// devo fare il conto fino a lunedi ore 9:30
// quidni devo arrivare al 12 Febbrario 2024 ore 9:30!


//salvo la variabile che devo raggiungere

const countDate = new Date("Feb 12, 2024 9:30:00");
console.log(countDate);
 
//settiamo il conto alla rovescia ogni secondo

/* setInterval(function(){
    const thisDate = new Date().getTime();
     console.log(thisDate); 
}) */
const time = setInterval(function(){ 

     const now = new Date();
     console.log(now); 


const difference = countDate - now;
console.log(difference);




} , 1000);

