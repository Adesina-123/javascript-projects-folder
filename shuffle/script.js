let switchElement = [
  'dice',
  'pegs',
  'ball',
  'football',
  'tennis',
  'basketball',
  'hockey',
  'badminton',
  'pocker',
  'rudby',
  'lawntennis'
];

let gulpList = document.querySelector ('#grop');
let shuffleTis = document.querySelector ('#shuffleTis');

// shuffleTis.addEventListener('click', () => {
//     switchElement.innerHTML = '';
//     let copiedList = [...switchElement];

//     for (let i = 0; i < 5; i++) {
//         let newElement = document.createElement('div');
//         newElement.className = 'fit-in';

//         container.appendChild(newElement)
//     }

// })

shuffleTis.addEventListener ('click', shuffleDocument);

function shuffleDocument () {
  gulpList.innerHTML = '';
  let copiedList = [...switchElement];

  function filterList (names) {
    copiedList = copiedList.filter (item => {
      return item !== names;
    });
  }

  for (let index = 0; index < 5; index++) {
    let newElement = document.createElement ('div');
    newElement.className = 'fit-in';

    let firstRandom =
      copiedList[Math.floor (Math.random () * copiedList.length)];
    filterList (firstRandom);
    let secondRandom =
      copiedList[Math.floor (Math.random () * copiedList.length)];
    filterList (secondRandom);
    newElement.textContent = `${firstRandom} Vs ${secondRandom}`;

    gulpList.appendChild (newElement);
  }
}
