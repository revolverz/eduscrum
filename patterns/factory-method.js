// сама фабрика
class TestFactory {

    constructor( amount, balance, comment ) {
        this.amount = amount;
        this.balance = balance;
        this.comment = comment,
        this.date = '2020-01-09 13:14:58';
    }
}

// метод, создающий классы в зависимости от входных данных
class TestFactoryMethod {
    create( type ) {
        if ( type === 'testOne' )
            return new TestFactory( 108000, 300, 'Оплата за услуги по счёту' );
	if (type === 'testTwo')
	    return new TestFactory( 111000, 320, 'Списание средств' );
    }
}

const factory = new TestFactoryMethod();

const testTypeOne = factory.create('testOne');
const testTypeTwo = factory.create('testTwo');
