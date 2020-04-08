var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in')
    },
    logout(){
        console.log(this.email, 'has logged out')
    }
}

console.log(userOne.name)
console.log('word1', 'word2', 'word3') // a space is shown between each word.

userOne.name = 'Mike'

var prop = 'name'
console.log(userOne[prop])

var prop = 'email'
console.log(userOne[prop])

userOne.age = 25

console.log(userOne)

userOne.logInfo = function() {}

console.log(userOne)