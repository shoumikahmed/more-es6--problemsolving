// problem: 2
const friend = {
    name: 'hasib',
    color: 'brown'
}
const myFriend = `i have a friend who's name is ${friend.name}.his color is ${friend.color}`
// console.log(myFriend)

// problem: 3.1
const division = x => x / 5
// console.log(division(10))

// problem: 3.2
const result = (x, y) => (x + 2) * (y + 2)
const sum = result(6, 8)
// console.log(sum)

// problem: 3.3
const multiplication = (x, y, z) => x * y * z
const multiply = multiplication(2, 4, 6)
// console.log(multiply)

// problem: 3.4
const result2 = (x, y) => {
    const sumMultiply = (x + 2) * (y + 2)
    return sumMultiply
}
const myResult = result2(2, 4)
// console.log(myResult)

// problem: 5
const numbers = [2, 3, 4, 5, 6, 7]
const multiplication2 = numbers.map(number => number * 5)
// console.log(multiplication2)

// problem: 6
const oddNumbers = numbers.filter(number => number % 2 != 0)
// console.log(oddNumbers)

// problem: 7
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 5000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const findItem = products.find(product => product.price == 5000)
// console.log(findItem)

// problem: 8
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: { work: 'website development', employee: 22, framework: 'react' }
};
const { name, food } = company.ceo
// console.log(name, food)

// problem: 9
const digits = [1, 2, 3, 4, 7, 8]
// const three = digits[3]
const [zero, one, two, three, four, five] = digits
// console.log(three)

// problem: 10
function add(num1, num2, num3 = 7) {
    const total = num1 + num2 + num3
    return total
}
const results = add(5, 10)
console.log(results)


// 4, 4.5,7.5,12 ////////////
