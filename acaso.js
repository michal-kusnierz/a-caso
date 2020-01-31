const acasoDiv = document.getElementById('acaso');
acasoDiv.style.textAlign = 'center';
const acasoBtn = document.getElementById('acaso__btn');
const acasoBtnReset = document.getElementById('acaso__btn--reset');
const acasoAdress = document.getElementById('acaso__adress');
const ewangelie = [0, 'Mt', 'Mk', 'Łk', 'J'];
const rozdzMt = 28;
const rozdzMk = 16;
const rozdzLk = 24
const rozdzJ = 21;
const rozdzialy = [0, rozdzMt, rozdzMk, rozdzLk, rozdzJ];
const wersMt = [0,25,23,17,25,48,34,29,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20];
const wersMk = [0,45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20];
const wersLk = [0,80,52,38,44,39,49,50,56,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53];
const wersJ = [0,51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25];
const wersety = [0, wersMt, wersMk, wersLk, wersJ];
let wynik = [];
  
const losuj = () => {
  if (wynik.length === 3) return;

  const losowaEwangelia = Math.floor(Math.random() * 4 + 1);
  let losowyRozdzial = 0;
  let losowyWers = 0;

  losowyRozdzial = Math.floor(Math.random() * rozdzialy[losowaEwangelia] + 1);
  losowyWers = Math.floor(Math.random() * wersety[losowaEwangelia][losowyRozdzial] + 1);

  acasoAdress.innerHTML = ewangelie[losowaEwangelia]+' '+losowyRozdzial+','+losowyWers;
  wynik.push(losowaEwangelia, losowyRozdzial, losowyWers); 
  console.log(wynik)

};

const reset = () => {
  wynik = [];
  acasoAdress.innerHTML = 'Słowo a caso';
};

acasoBtn.addEventListener('click', losuj);
acasoBtnReset.addEventListener('click', reset);