class Menu {
    constructor(id,itemName,image) {
        this.id = id;
        this._itemName = itemName;
        this.image = image;
    }
    
    set itemName(itemName) {
        this._itemName = itemName;
    }

    get itemName() {
        return this._itemName;
    }
    
    toString() {
        return `${this.id},${this._itemName},${this.image}`;
    }

    toUpperCase() {
        return this._itemName.toUpperCase();
    }
}

//const item1 = new Menu(101,'idly',"assets/images/1.jpg");
//console.log(item1.toString());
module.exports=Menu;