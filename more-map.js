const friends = ['tom hanks', 'tom cruise', 'tom brady']

const fLength = friends.map(friend => friend.length)
console.log(fLength);

const products = [
    { name: 'bottle', price: 50, color: 'yellow' },
    { name: 'mobile', price: 15000, color: 'black' },
    { name: 'watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
]
const productNames = products.map(product => product.name)
console.log(productNames)