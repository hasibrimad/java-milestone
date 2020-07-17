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