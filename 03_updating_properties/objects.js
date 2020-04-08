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