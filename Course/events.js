const { EventEmitter } = require('events');

const myEvent = new EventEmitter();

const makeCofee = (name)  => {
    console.log(`Pesanan anda adalah ${name}`)
};

const makeBill = (price) => {
    console.log(`Pesanan anda sebesar ${price}`)
};

const myCofee = ({name,price }) => {
    makeCofee(name),
    makeBill(price)
};

myEvent.on("On-Process",myCofee);
myEvent.emit("On-Process",{name: "Capuchino", price: 15000});
