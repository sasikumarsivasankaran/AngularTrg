let Menu = require('./Menu');

//rest parameter
function showMenu(...menuItem) {
    //Arrow Function
    menuItem.forEach(eachItem =>{console.log(eachItem.toString());})
}

// function(eachItem){

//     return eachItem.itemName;
// }

function showMenuItems(...menuItem) {
    let itemNameList = menuItem.map(eachItem => eachItem.itemName);
    console.log(itemNameList);

    let itemNameList2 = menuItem.filter(eachItem => eachItem.id >101)
                        .map(each => each.itemName);
    console.log(itemNameList2);
  
}

function showDiscount(item, discount = 0.10) {
    console.log(`item:${item.itemName}; discount:${discount}`)
}

const item1 = new Menu(101,'idly',"assets/images/1.jpg");
const item2 = new Menu(102,'dosa',"assets/images/2.jpg");
const item3 = new Menu(103,'pongal',"assets/images/3.jpg");

showMenu(item1,item2);
showMenu(item1,item2,item3);
showMenuItems(item1,item2,item3);

showDiscount(item1);
showDiscount(item2,0.20);