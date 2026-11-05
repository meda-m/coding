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

let items = [];

function aggiungiProdotto() {
    //messaggio errore
    errore.textContent = "";
    if (item.value === "") {
        errore.textContent = "VARDA CHE TE GHE SCRIT NINT BELOOO";
        return;
    }

    items.push(item.value.trim());

    renderizzaItems();

    item.value = "";



}

function renderizzaItems(){
    //svuota la lista HTML
    lista.innerHTML = "";
    //per ogni elemento nell'array items
    //chiamo la funzione creaItem e aggiungo l'item HTML alla pagina
    for (let i = 0; i < items.length; i++){
        const nuovoItem = creaItem(items[i]);
        lista.append(nuovoItem);
    }
}

function creaItem(contenuto){

    const nuovoItem = document.createElement("li");
    nuovoItem.textContent = contenuto;

    nuovoItem.addEventListener("click", () => {
        nuovoItem.classList.toggle("done");
    });

    const rimuoviBottone = document.createElement("button");
    rimuoviBottone.textContent = "GET THIS S..T OUT OF HERE";
    nuovoItem.append(rimuoviBottone);
    rimuoviBottone.addEventListener("click", () => {
        //troviamo l'indice dell'elemento
        const indice = items.findIndex(x =>  x === contenuto);
        if(indice >= 0 ){
            items.splice(indice, 1); // elimino elemento alla posizione indicata
            //aggiorno gli items
            renderizzaItems();
        }


    });
    return nuovoItem;
}

btnAggiungi.addEventListener("click", aggiungiProdotto)





