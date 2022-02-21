class Support {
    name;
    designation = 'web development'
    address = 'bd'
    constructor(name, address) {
        this.name = name;
        this.address = address
    }
    startSession() {
        console.log(this.name, 'start a support session')
    }
}
const aamir = new Support('aamir khan', 'dubai')
const salman = new Support('salman khan', 'bd')
aamir.startSession()
salman.startSession()
// console.log(aamir, salman)


const players = [
    { name: { firstName: "Shakib", lastName: "Hasan" }, age: 34 },
    { name: { firstName: "Tamim", lastName: "Iqbal" }, age: 32 },
    { name: { firstName: "Mahmudullah", lastName: "Riyad" }, age: 36 },
    { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38 },
];

players.map((player) => player.name.firstName)
console.log(players.map())