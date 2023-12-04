// creare una funzione che ritorna oggetti con la struttura delle auto

/* #################################################################
fase 1: da suicidio
problemi:
- copia e incolla della struttura
- prestazioni (metodi non condivisi)
*/
// const carPlayer1 = {
// 	color: 'rosso',
// 	type: 'tesla',
// 	speed: 0,
// 	roar: function() {
// 		console.log('bruuuuuu!!!');
// 	}
// }

// const carPlayer2 = {
// 	color: 'nero',
// 	type: 'ferrari',
// 	speed: 0,
// 	roar: function () {
// 		console.log('bruuuuuu!!!')
// 	},
// }

// const carPlayer3 = {
// 	color: 'blu',
// 	type: 'alfa romeo',
// 	speed: 0,
// 	roar: function () {
// 		console.log('bruuuuuu!!!')
// 	},
// }

/* #################################################################
fase 2: un po' meglio
non c'e' piu' il copia e incolla ma il problema delle prestazioni
rimane (metodi duplicati)
*/
// function CarCreator(_color, _type) {
// 	const car = {
// 		color: _color,
// 		type: _type,
// 		speed: 0,
// 		fuel: 100,
// 		roar: function () {
// 			console.log('bruuuuuu!!!')
// 		},
// 	}
// 	return car
// }

// const carPlayer1 = CarCreator('rosso', 'tesla')
// const carPlayer2 = CarCreator('nero', 'ferrari')
// const carPlayer3 = CarCreator('blu', 'alfa romeo')

/* #################################################################
Fase 3: niente piu' metodi duplicati!!!!
*/
// function CarCreator(_color, _type) {
// 	const car = Object.create(carMethods)
// 	car.color = _color
// 	car.type = _type
// 	car.speed = 0
// 	car.fuel = 100
// 	return car
// }

// const carMethods = {
// 	roar: function () {
// 		console.log('bruuuuuu!!!')
// 	},
// }

// const carPlayer1 = CarCreator('rosso', 'tesla')
// const carPlayer2 = CarCreator('nero', 'ferrari')
// const carPlayer3 = CarCreator('blu', 'alfa romeo')

/* #################################################################
Fase 4: perche' non mettere i metodi condivisi in un oggetto
standard anziche' inventarne uno nostro? Usiamo il .prototype
della funzione costruttore, yeeeeeey!
*/
// function CarCreator(_color, _type) {
// 	const car = Object.create(CarCreator.prototype)
// 	car.color = _color
// 	car.type = _type
// 	car.speed = 0
// 	car.fuel = 100
// 	return car
// }

// CarCreator.prototype.roar = function () {
// 	console.log('bruuuuuu!!!')
// }

// const carPlayer1 = CarCreator('rosso', 'tesla')
// const carPlayer2 = CarCreator('nero', 'ferrari')
// const carPlayer3 = CarCreator('blu', 'alfa romeo')

/* #################################################################
Fase 5: codice piu' pulito usando la parola chiave new
new fa 4 cose:
- crea per noi un oggetto vuoto
- collega il [[prototype]] dell'oggetto creato alla proprieta'
.prototype della funzione costruttore (nella quale metteremo i metodi)
- fa puntare la variabile speciale this all'oggetto creato
- ritorna l'oggetto
*/
// function CarCreator(_color, _type) {
// 	this.color = _color
// 	this.type = _type
// 	this.speed = 0
// 	this.fuel = 100
// }

// CarCreator.prototype.roar = function () {
// 	console.log('bruuuuuu!!!')
// }

// const carPlayer1 = new CarCreator('rosso', 'tesla')
// const carPlayer2 = new CarCreator('nero', 'ferrari')
// const carPlayer3 = new CarCreator('blu', 'alfa romeo')

/* #################################################################
Fase 6: le classi ooooooooh
Sintassi moderna piu' elegante perche' ora e' tutto contenuto
nel blocco della classe (anche i metodi!)
Inoltre le classi rendono l'ereditarieta' mooooooooolto
piu' semplice e pulita
*/
// class Car {
// 	constructor(_color, _type) {
// 		this.color = _color
// 		this.type = _type
// 		this.speed = 0
// 		this.fuel = 100
// 	}

// 	roar() {
// 		console.log('bruuuuuu!!!')
// 	}
// }

// const carPlayer1 = new Car('rosso', 'tesla')
// const carPlayer2 = new Car('nero', 'ferrari')
// const carPlayer3 = new Car('blu', 'alfa romeo')

/* #################################################################
Ereditarieta' con le classi (vedere anche il diagramma allegato)
Per provare instanziare qualche oggetto nell'inspector
*/
class Vehicle {
	constructor(_color, _type) {
		this.color = _color
		this.type = _type
		this.speed = 0
		this.fuel = 100
	}

	roar() {
		console.log('bruuuuuu!!!')
	}

	accelerate() {
		this.speed++
	}
}

class Car extends Vehicle {
	constructor(_color, _type) {
		// chiamata al costruttore del genitore
		super(_color, _type)
		// si possono aggiungere istruzioni specifiche
		// al costruttore della classe Car
	}

	drift() {
		super.roar()
		console.log('sto driftando')
	}
}

class SportCar extends Car {
	constructor(_color, _type) {
		super(_color, _type)
	}

	// sgomma
	skid() {
		super.roar() // roar si trova non nel genitore Car ma nel "nonno" Vehicle
		console.log('e sgommo pure')
	}
}

class Motorcycle extends Vehicle {
	constructor(_color, _type) {
		super(_color, _type)
	}

	// impenna
	doWheelie() {
		console.log('sto su una ruota!')
	}
}

class Truck extends Vehicle {
	constructor(_color, _type, _numContainers) {
		super(_color, _type)
		this.numContainers = _numContainers
	}
}
