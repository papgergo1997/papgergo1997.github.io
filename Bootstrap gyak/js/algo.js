/*
ÖSSZEGZÉS algoritmusa

összeg = 0
CIKLUS AMÍG van még szám, ADDIG
  szám = következő elem
  összeg = összeg + szám
CIKLUS VÉGE
*/

var numericArray = [1, 3, 2, 6, 5, 3, 4, 6, 7];
var amount = 0;
for (var i = 0; i < numericArray.length; i++) {
  amount += numericArray[i];
}
console.log( "amount", amount);


/*
SZÁMLÁLÁS algoritmusa

db = 0
CIKLUS AMÍG van még szám, ADDIG
  szám = következő elem
  HA igaz a feltétel szám-ra, AKKOR
    db = db + 1
  FELTÉTEL VÉGE
CIKLUS VÉGE
*/

var count = 0;
for (var i = 0; i < numericArray.length; i++) {
  if (numericArray[i] > 3) {
    count++;
  }
}
console.log("count", count);

/*
SZÉLSŐÉRTÉK algoritmusa

legnagyobb = első elem
CIKLUS AMÍG van még elem, ADDIG
  elem = következő elem
  HA elem > legnagyobb, AKKOR
    legnagyobb = elem
  FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
  if (numericArray[i] > biggest) {
    biggest = numericArray[i];
  }
}
console.log(biggest);

/*

ELDÖNTÉS algoritmusa

találat = HAMIS
CIKLUS AMÍG van elem ÉS NEM találat
  elem = következő elem
  HA keresett tulajdonságú az elem, AKKOR
    találat = IGAZ
  FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let find = 6;
let found = false;
for (let i = 0; i < numericArray.length && !found; i++) {
  if (numericArray[i] == find) {
    found = true;
  }
}
console.log(found);