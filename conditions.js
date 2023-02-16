// must be 30 years+
// must be a US citizen for 9+ years
// must live in state you want to represent

let age = 50
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Minnesota'

if (age >= 35 && usCitizenTime >= 9 && stateOfResidence == stateWantToRepresent) {
    console.log('You are eligable to be a senator!')
} else {
    console.log('You are NOT eligable to be a senator!')
}