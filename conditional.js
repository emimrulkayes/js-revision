var ricePrice = 43;
var muriPrice = 54;

//// To compare from big to small in condition
/*
if (ricePrice > muriPrice) {
    console.log('Yeah! you can Buy 5 kg rice!');
} else {
    console.log('No you can buy muri')
}*/

//// To compare from small to big in condition
/*
if (ricePrice < muriPrice) {
    console.log('Yeah! you can Buy rice!');
} else {
    console.log('No yrr, you can buy muri')
}*/


var gotJob = true;
var moneySaved = 50000;
var car = false;


//// To compare to between true or false condition
if (gotJob == true && moneySaved) {
    console.log('Yeah!! lets now go shoping mall');
} else {
    console.log('No yrr, we go to footpath')
}

//// To compare to between true or false condition
if (gotJob == true && moneySaved && car) {
    console.log('Yeah!! lets now go shoping mall');
} else {
    console.log('No yrr, we go to footpath')
}

//// To compare to between true or false condition
if (gotJob == true || moneySaved && car) {
    console.log('Yeah!! lets now go shoping mall');
} else {
    console.log('No yrr, we go to footpath')
}