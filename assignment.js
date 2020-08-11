//for question 1
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var result=feetToMile();
console.log(result);
//done question 1

//for question 2
function woodcalculator(chair ,table ,bed){
    var chairCount=chair*1;
    var tableConnt=table*3;
    var bedCount=bed*5;
    var totalwood=chairCount +tableConnt +bedCount;
    return totalwood;
}
//done question 2

//for question 4
function tinyFriend(arr){
    var tiny = arr[0];
     for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
            if( tiny.length > element.length){
                tiny = element
                }
                     }
                    return tiny
                        }

        var  friend = ["farjana","Nishu"]
        var smallFrind = tinyFriend(friend)
        console.log(smallFrind)
//done question 4
