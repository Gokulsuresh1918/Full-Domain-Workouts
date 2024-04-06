function sayhello(mssage) {
    console.log(`${mssage},${this.name}`);
}
const person = {
    name: 'gokul'
}
sayhello.call(person, 'poda')//invoke a function with specific context and argumetn 
sayhello.apply(person, ['poda', 'multiple argument'])//invoke a function wtith specific context and array of argumetn
const variable = sayhello.bind(person)
variable('third')//create a new function  with specific context not invoking it immediately