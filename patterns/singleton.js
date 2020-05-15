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

const myCountOne = new Counter();
const myCountTwo = new Counter();

myCountOne.increaseCount();
myCountOne.increaseCount();
myCountTwo.increaseCount();
myCountTwo.increaseCount();

console.log( myCountOne.getCount() );
console.log( myCountTwo.getCount() );
