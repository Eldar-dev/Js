var term = {
    Belgium: 4,
    Cameroon: 25,
    Canada: -6,
    Estonia: -1,
    Greece: 9,
    Nepal: 28,
    Norway: -17
}

var i = 0;
var sum = 0;
for(var country in term){
    sum += term[country] 
    i++;
}
console.log(sum/i);
var x = sum/i;


document.write('Среднее значение всех стран - ' + x + ' гр.');