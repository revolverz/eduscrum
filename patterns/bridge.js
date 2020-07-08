// описываем класс модели
class Model {
    constructor(color) {
        this.color = color;
    }
};

// описываем класс цвета
class Color {
    constructor(type) {
	this.type = type;
    }
    get() {
	return this.type;
    }
};

// создаем два подкласса, наследуемся от корневого класса Color
class BlackColor extends Color {
    constructor() {
	super("dark-black");
    }
}

class SilbrigColor extends Color {
    constructor() {
	super("Silbermetallic");
    }
}

class Audi extends Model {
    constructor(color) {
	super(color);
    }
	
// делегируем работу на класс Color
    paint() {
	return `Auto: Audi, Color: ${this.color.get()}`;
    }
};

class Bmw extends Model {
    constructor(color) {
	super(color);
    }
	
// делегируем работу на класс Color
    paint() {
	return `Auto: Bmw, Color: ${this.color.get()}`;
    }
};

const blackBmw = new Bmw(new BlackColor());

console.log(blackBmw.paint()); // "Auto: Bmw, Color: dark-black"
