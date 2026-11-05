// TODO:
// 1. Al click su "Aggiungi" (o premendo Invio) aggiungi un elemento alla lista
//    con il testo inserito nell'input.
// 2. Ogni elemento deve avere un bottone "Rimuovi" che lo elimina dalla lista.
// 3. Se l'input è vuoto, mostra un messaggio di errore e non aggiungere nulla.
// 4. (Bonus) Al click sul testo dell'elemento, barralo come "fatto".

const btnAggiungi = document.getElementById("btn-aggiungi");
const lista = document.getElementById("lista");
const item = document.getElementById("item");
const errore = document.getElementById("errore");

function aggiungiProdotto() {
    //messaggio errore
    errore.textContent = "";
    if(item.value === ""){
        errore.textContent = "VARDA CHE TE GHE SCRIT NINT BELOOO";
        return;
    }

    //nuovo li
   const nuovoItem = document.createElement("li");

    //riempio il <li> con quanto inserito dall'utente
    nuovoItem.textContent = item.value;

   //creo il button per rimuovere l'item
   const rimuoviBottone = document.createElement("button");
   rimuoviBottone.textContent = "GET THIS S..T OUT OF HERE";
   nuovoItem.append(rimuoviBottone);
   rimuoviBottone.addEventListener("click", ()=>{
        nuovoItem.remove();

   });



   //aggiunge il <li> alla lista
   lista.append(nuovoItem);
   //resetto l'input
   item.value = "";

}   
btnAggiungi.addEventListener("click", aggiungiProdotto)




