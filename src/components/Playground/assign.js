const person = {
    id: 1,
    name: 'arjun',
    city: 'bangalore'
}

console.log(person)

const obj = {
    name : 'arjun n',
    city : 'mysore'
}

Object.assign(person, obj) // it will returns updated object 'person'

const newObj = Object.assign({}, person, obj) // it will returns new object, but it wont change the person object orinal values 

console.log(newObj)


// ****NOTE****:  https://github.com/bradtraversy/design-resources-for-developers
// ****NOTE**** : https://ant.design/components