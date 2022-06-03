// Recupero gli elementi dal dom
const teamContainer = document.querySelector("#teamContainer");

// ------------------------------------------------------ //

// Creo un array di oggetti con i membri del team
let teamArray = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        image: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        image: "img/angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        image: "img/walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        image: "img/angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        image: "img/scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        image: "img/barbara-ramos-graphic-designer.jpg",
    },
    {
        nome: "Caroline Scott",
        ruolo: "UX Designer",
        image: "img/new-team-member-01.jpg",
    },
    {
        nome: "Steven Edge",
        ruolo: "Lead Developer",
        image: "img/new-team-member-02.jpg",
    },
    {
        nome: "Linda Edwards",
        ruolo: "Sales & Account",
        image: "img/new-team-member-03.jpg",
    },
    {
        nome: "Robert Bates",
        ruolo: "CFO",
        image: "img/new-team-member-04.jpg",
    },
];

// ------------------------------------------------------ //

// Funzione per stampare la card in pagina
function printCard (objectArray, elementHtml) {

    elementHtml.innerHTML += `<div class="team-card">
                                <div class="card-image">
                                    <img src="${objectArray.image}" alt="${objectArray.nome}"/>
                                </div>
                                <div class="card-text">
                                    <h3>${objectArray.nome}</h3>
                                    <p>${objectArray.ruolo}</p>
                                </div>
                            </div>`;

};

// ------------------------------------------------------ //

// Ciclo per stampare tutte le card in pagina
for (i = 0; i < teamArray.length; i++) {

    // Registro in una variabile il singolo elemento del team
    let teamMember = teamArray[i];

    // Stampo in pagina la card
    printCard (teamMember, teamContainer);

};

// ------------------------------------------------------ //