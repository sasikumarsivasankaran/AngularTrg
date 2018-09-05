var Product = function(productNo,productName,ratePerUnit) {
    this.productNo = productNo;
    this.productName = productName;
    this.ratePerUnit = ratePerUnit;
}
Product.prototype.toString = function() {
    return this.productNo + ";" + this.productName;
}

module.exports = Product;
