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

const newTeam = [
    {
        fullname: 'Giovanni Storti',
        role: 'Pdor figlio di Kmer',
        pic: 'Pdor-2.png'
    },
    {
        fullname: 'Ajeje Brazorf',
        role: 'Sprinter',
        pic: 'Ajeje-2.png'
    },
    {
        fullname: 'Giacomo Poretti',
        role: 'Tafazzi',
        pic: 'Tafazzi.gif'
    }
];

const teamHired = [];

const btnHire = document.getElementById('btn-hire');
btnHire.addEventListener('click',hiring);

//const btnFire = document.getElementById('btn-fire');
//btnFire.addEventListener('click',firing);

const selectEmployee = document.getElementById('hire-menu');
//selectHire.addEventListener('change',hiring);

function hiring(){
    if(teamHired.includes(newTeam[selectEmployee.value])){
        console.log('Employee already hired!');
        return;
    };
    let teamCard = document.createElement('div');
    teamCard.classList = 'card';
    teamCard.setAttribute('id',`${newTeam[selectEmployee.value]['fullname']}`)
    teamCard.innerHTML = `
        <img src="./img/${newTeam[selectEmployee.value]['pic']}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${newTeam[selectEmployee.value]['fullname']} </h5>
            <p class="card-text">${newTeam[selectEmployee.value]['role']}</p>
        </div>
    `;
    teamStage.append(teamCard);
    //to avoid having duplicated items, I remove the item selected at change/click
    teamHired.push(newTeam[selectEmployee.value]);
    console.log(teamHired);
    //delete newTeam[selectEmployee.value];//remove item from array

    //let optionSelected = document.querySelector(`#option-${selectEmployee.value}`);//hide option from select
    //optionSelected.className = 'd-none';
};

//function firing(){
    
//};
