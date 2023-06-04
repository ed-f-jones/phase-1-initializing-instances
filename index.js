// Write your code here
class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink; 
    }
}

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

let myLunch = new Lunch("ceaser", "chicken", "cola");

class Dinner {
    #dessert;
    constructor (salad, soup, entree, dessert ) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;

    }
}

let consume = new Dinner("ceaser", "minstrone", "new york strip", "cheesecake");