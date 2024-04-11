function outerfun() {
    let outer = 'outer'
    function inner() {
        console.log(outer);
    }
    inner()
}
outerfun() //thid is what lexical environmetn this ensure 
//that variable declared outer scope can be access in inner

//closure
function counter() {
    let count = 0
    return function () {
        count++
        console.log(count);
    }
}
const a = counter()
a()//this is where closure use was we can access
// and retrice variavble that was declared in 
// outer scopw is accessible using lexical environmetn 
//and also state also maintainable