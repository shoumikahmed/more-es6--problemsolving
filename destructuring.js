const fish = { name: 'king hilsha', id: 58, price: 9000, phone: '01778774082', address: 'chandpur', dress: 'silver' };

// const phone = fish.phone
// const price = fish.price
// const dress = fish.dress
// const id = fish.id

const { phone, price, dress, id } = fish

console.log(phone, price, dress, id)

const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: { work: 'website development', employee: 22, framework: 'react' }
};

const { work, framework } = company.web;
const { food } = company.ceo
console.log(work, framework, food)