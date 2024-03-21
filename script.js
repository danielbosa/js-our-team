/*
BONUS 3:
Permettere l'aggiunta di un nuovo membro del team
*/

const team = [
    {
        fullname: 'Wayne Barnett',
        role: 'Founder & CEO',
        pic: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        fullname: 'Angela Caroll',
        role: 'Chief Editor',
        pic: 'angela-caroll-chief-editor.jpg'
    },
    {
        fullname: 'Walter Gordon',
        role: 'Office Manager',
        pic: 'walter-gordon-office-manager.jpg'
    },
    {
        fullname: 'Angela Lopez',
        role: 'Social Media Manager',
        pic: 'angela-lopez-social-media-manager.jpg'
    },
    {
        fullname: 'Scott Estrada',
        role: 'Developer',
        pic: 'scott-estrada-developer.jpg'
    },
    {
        fullname: 'Barbara Ramos',
        role: 'Graphic Designer',
        pic: 'barbara-ramos-graphic-designer.jpg'
    },
];

for(let key in team){
    console.log('Nome: ' + team[key]['fullname']
    + ' Ruolo: ' + team[key]['role']
    + ' pic url: ' + team[key]['pic']
    )
}

const teamStage = document.getElementById('team');
for(let key in team){
    let teamCard = document.createElement('div');
    teamCard.classList = 'card';
    teamCard.innerHTML = `
        <img src="./img/${team[key]['pic']}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${team[key]['fullname']} </h5>
            <p class="card-text">${team[key]['role']}</p>
        </div>
    `;
    teamStage.append(teamCard);
};
