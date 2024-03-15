// Seleziono l'elemento con il listener.
document.addEventListener("DOMContentLoaded", function () {

    // Creo una variabile e la collego con l'ID dell'icona di Font Awesome.    
    let darkModeIcon = document.getElementById("darkModeIcon");

    // Aggiungo di nuovo il listener
    darkModeIcon.addEventListener("click", function () {
        // Richiamo la funzione per attivare o disattivare la modalità scura
        toggleDarkMode();
    });
});

// Creo la funzione senza "Argomento"
function toggleDarkMode() {
    let element = document.body;
    // Controlla se la classe dark-mode è già presente
    if (element.classList.contains("dark-mode")) {
        // Se presente, rimuovo la classe per tornare al tema predefinito
        element.classList.remove("dark-mode");
    } else {
        // Altrimenti, aggiungi la classe per attivare il tema scuro
        element.classList.add("dark-mode");
    }
}

// Creo un listener.
document.addEventListener('DOMContentLoaded', function () {

    // Creo una variabile con valore Booleano impostato su False
    let isTextEnlarged = false;

    // Eseguo il collegamento all'ID dell'icona di Font Awesome
    document.getElementById('read').addEventListener('click', function () {


        // Se il testo è già stato ingrandito, rimuovo la classe large-font per tornare alla dimensione normale del testo
        if (isTextEnlarged) {
            document.querySelectorAll('.post').forEach(function (element) {
                element.classList.remove('large-font');
            });
            isTextEnlarged = false; // Imposto lo stato come testo non ingrandito, ovvero il font-size di default.
        } else { // Altrimenti, se il testo non è già stato ingrandito, aggiungi la classe large-font che aumenta, appunto, il font-size.
            document.querySelectorAll('.post').forEach(function (element) {
                element.classList.add('large-font');
            });
            isTextEnlarged = true; // Imposta lo stato come testo ingrandito
        }
    });
});