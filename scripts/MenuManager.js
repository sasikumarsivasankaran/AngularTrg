let Menu = require('./Menu');

const item1 = new Menu(101,'idly',"assets/images/1.jpg");
const item2 = new Menu(102,'dosa',"assets/images/2.jpg");
const item3 = new Menu(103,'pongal',"assets/images/3.jpg");

itemList = [item1,item2,item3];
for(i=0;i<3;i++) {
    console.log(itemList[i].toString());
}
//console.log(item1.toString());
console.log(item1.itemName);
console.log(item1.toUpperCase());