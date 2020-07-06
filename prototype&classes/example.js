// es5

function Task(title) {
    this._title = title;
    this._done = false;
    Task.count +=1;
}

Object.defineProperty(Task, 'title', {
    get: function() {
        return this._title;
    },
    set: function(value) {
        this._title = value;
    }
});

Task.prototype.complete = function() {
    this._done = true;
};

Task.getDefaultTitle = function() {
    return 'Задача';
};

Task.count = 0;

function SubTask(title,parent) {
    Task.call(this,title);
    this._parent = parent;
}

SubTask.prototype = Object.create(Task.prototype);
SubTask.prototype.constructor = SubTask;

var task = new Task('Изучить JS');
var subtask = new SubTask('Изучить ES6', task);

// es6

class Task {
    constructor(title = 'Задача') {
        this._title = title;
        this._done = false;
        Task.count +=1;
    }

    get title() {
        return this.title;
    }

    set title(value) {
        this._title = value;
    }

    complete() {
        this._done = true;
    }

    static getDefaultTitle() {
        return 'Задача';
    }
}

Task.count = 0;

class SubTask extends Task {
    constructor(title,parent) {
        super(title);
        this._parent = parent;
        this.bar = '5';
    }
}

let task = new Task('Изучить JS');
let subtask = new SubTask('Изучить ES6', task);
