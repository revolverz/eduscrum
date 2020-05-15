class Counter {
    constructor() {
        if ( typeof Counter.instance === 'object' ) {
	    return Counter.instance;
        }
	    this.count = 0;
	    Counter.instance = this;
	    return this;
	}

	getCount() {
	    return this.count;
	}

	increaseCount() {
	    return this.count++;
	}
}

let myCountOne = new Counter();
let myCountTwo = new Counter();

myCountOne.increaseCount();
myCountOne.increaseCount();
myCountTwo.increaseCount();
myCountTwo.increaseCount();

console.log( myCountOne.getCount() );
console.log( myCountTwo.getCount() );



let User;
( function() {
    let instance;
    User = function User() {
        if (instance) {
        return instance;
        }
    instance = this;
    // all the functionality
        this.firstName = 'John';
        this.lastName = 'Doe';
    return instance;
    };
}());


var mySingleton = (function () {

    // Instance stores a reference to the Singleton
    let instance;

    function init() {

      // Singleton

      // Private methods and variables
      function privateMethod(){
          console.log( "I am private" );
      }

      let privateVariable = "Im also private";

      let privateRandomNumber = Math.random();

      return {

        // Public methods and variables
        publicMethod: function () {
          console.log( "The public can see me!" );
        },

        publicProperty: "I am also public",

        getRandomNumber: function() {
          return privateRandomNumber;
        }

      };

    };

    return {

      // Get the Singleton instance if one exists
      // or create one if it doesn't
      getInstance: function () {

        if ( !instance ) {
          instance = init();
        }

        return instance;
      }

    };

})();

let singleA = mySingleton.getInstance();
let singleB = mySingleton.getInstance();
