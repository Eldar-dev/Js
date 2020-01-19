var term = {
    Belgium: 4,
    Cameroon: 25,
    Canada: -6,
    Estonia: -1,
    Greece: 9,
    Nepal: 28,
    Norway: -17
}

function findMaxTemperature(obj){
    var max;
    for(var key in obj){
        if(max < obj[key] || max == undefined){
            max = obj[key];
        }
    }
    return max;
}

console.log(findMaxTemperature(term));

var x = findMaxTemperature(term);


document.write('Максимальное значение  среди всех стран - ' + x + ' гр.');
