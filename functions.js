function shout(text) {
    let shouting_text = text.toUpperCase() + '!!!'
    return shouting_text
}

console.log(shout('hello world'))

let message = shout('hello web programmers')

console.log(message)

// let tempC = (todaysTemp -32) * 5 / 9
// console.log("Today's temperature is " + tempC.toFixed(2) + 'C')

function toCelsius(f, decimalPlaces) {
    let celsius = (f - 32) * 5 / 9
    if(decimalPlaces){ // undefined values are considered to be false
        return celsius.toFixed(decimalPlaces)
    }else {
        return celsius
    }
}

let todaysTemp = 85

let tempC = toCelsius(todaysTemp,3)
console.log("Today's temperature is: " + tempC + "C")
console.log(`Today's temperature is: ${tempC}C which is equivalent to ${todaysTemp}F.`)

let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'

console.log(`This class is ${department} ${classCode} ${className}.`)

