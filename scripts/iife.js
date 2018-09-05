/*(function(msg){
    //var msg = 'Immediately Invoked Function';
    console.log(msg);
})("Immediately Invoked Function"); */

(function(msg){
    //var msg = 'Immediately Invoked Function';
    console.log(msg);
    var module =(function () {
      function print() {
            return "print function";
        }
        return {
            prnt: print
        }
        function display() {
            //console.log("display");
            var counter=1;
            return function() {
                counter +=1;
            }
        }

        var fun = display();
        console.log(fun());
        console.log(fun());
        console.log(fun());
})
console.log(module.display);



})("Immediately Invoked Function");
