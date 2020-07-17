function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}

var result = feetToMile(25);
// console.log(result);

function woodCalculator(chair, table, bed){
    var object1 = chair;
    var object2 = table * 3;
    var object3 = bed * 5;
    var totalResult = object1 + object2 + object3;
    // console.log(totalResult,"Cubic metre");

}
woodCalculator(3, 5, 6);


function tinyFriend(names){
    var littleFriend = names[0];
    for (let i = 0; i<names.length; i++ ){
        var friendlist = names[i];
        if (friendlist.length<littleFriend.length){
            littleFriend = friendlist;
        }
    }
    return littleFriend;
    
}
var check = ['Ashfaq', 'Miha', 'Rahan', 'Labib', 'Newaz', 'Ashraf'];
// console.log(tinyFriend(check));

function brickCalculator(floor){
    if(floor <=10){
        var feet = 1000;
        var bricks1 = feet * 15 * floor;
        var total = bricks1;
    }

    else if(floor>=11 && floor <=20){
        var bricks2 = feet * 12 * floor;
        var total2 = bricks1 + bricks2
    }
    else if(floor >=21){
        var bricks3 = feet * 10 * floor;
        var total3 =bricks3 + total2;
    }
    return total3;
    
}
var result = brickCalculator(23);
console.log(result);