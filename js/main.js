const team =    [
                    {
                        name: 'Wayne Barnett',
                        role: 'Founder & CEO',
                        photo: 'wayne-barnett-founder-ceo.jpg'
                    },

                    {
                        name: 'Angela Caroll',
                        role: 'Chief Editor',
                        photo: 'angela-caroll-chief-editor.jpg'
                    },

                    {
                        name: 'Walter Gordon',
                        role: 'Office Manager',
                        photo: 'walter-gordon-office-manager.jpg'
                    },

                    {
                        name: 'Angela Lopez',
                        role: 'Social Media Manager',
                        photo: 'angela-lopez-social-media-manager.jpg'
                    },

                    {
                        name: 'Scott Estrada',
                        role: 'Developer',
                        photo: 'scott-estrada-developer.jpg'
                    },

                    {
                        name: 'Barbara Ramos',
                        role: 'Graphic Designer',
                        photo: 'barbara-ramos-graphic-designer.jpg'
                    }
                ];

let wrapperDom = document.getElementById('wrapper');

for (let key in team) {  // ciclo per scorrere tra gli oggetti dell'array
    console.log(team[key]); // output = Object {key: 'valore', ecc..}
}

for (let i = 0; i < team.length; i++) {
    let info = document.createElement('div');
    info.classList.add('info-box');

    let nameBox = document.createElement('h1');
    let roleBox = document.createElement('h2');
    let photoBox = document.createElement('img');

    nameBox.append(team[i].name);
    roleBox.append(team[i].role);
    photoBox.src = `img/${team[i].photo}`;

    info.append(nameBox, roleBox, photoBox);
    wrapperDom.append(info);
}