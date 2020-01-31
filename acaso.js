const losDiv = document.getElementById('acaso');
losDiv.style.textAlign = 'center';
const losBtn = document.getElementById('acaso__btn');
const losBtnReset = document.getElementById('acaso__btn--reset');
const losAdres = document.getElementById('acaso__adres');
const ewangelie = [0, 'Mt', 'Mk', 'Łk', 'J'];
const rozdzMt = 28;
const rozdzMk = 16;
const rozdzLk = 24
const rozdzJ = 21;
const wersyMt = [0,25,23,17,25,48,34,29,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20];
const wersyMk = [0,45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20];
const wersyLk = [0,80,52,38,44,39,49,50,56,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53];
const wersyJ = [0,51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25];
let wynik = [];
  
const losuj = () => {
  if (wynik.length === 3) return;

  const losowaEwangelia = Math.floor(Math.random() * 4 + 1);
  let losowyRozdzial = 0;
  let losowyWers = 0;
    
  if (losowaEwangelia === 1) {
    losowyRozdzial = Math.floor(Math.random() * rozdzMt + 1);
    losowyWers = Math.floor(Math.random() * wersyMt[losowyRozdzial] + 1);
  }
  if (losowaEwangelia === 2) {
    losowyRozdzial = Math.floor(Math.random() * rozdzMk + 1);
    losowyWers = Math.floor(Math.random() * wersyMk[losowyRozdzial] + 1);
  }
  if (losowaEwangelia === 3) {
    losowyRozdzial = Math.floor(Math.random() * rozdzLk + 1);
    losowyWers = Math.floor(Math.random() * wersyLk[losowyRozdzial] + 1);
  }
  if (losowaEwangelia === 4) {
    losowyRozdzial = Math.floor(Math.random() * rozdzJ + 1);
    losowyWers = Math.floor(Math.random() * wersyJ[losowyRozdzial] + 1);
  }

  losAdres.innerHTML = ewangelie[losowaEwangelia]+' '+losowyRozdzial+','+losowyWers;
  wynik.push(losowaEwangelia, losowyRozdzial, losowyWers); 
  console.log(wynik)

};

const reset = () => {
  wynik = [];
  losAdres.innerHTML = 'Słowo a caso';
};

losBtn.addEventListener('click', losuj);
losBtnReset.addEventListener('click', reset);