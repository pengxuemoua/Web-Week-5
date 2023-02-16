function checkGpa(gpa) {
    if(gpa >= 0 && gpa <= 4){
        return true
    } else {
        return false
    }
}

console.log(checkGpa(-3))
console.log(checkGpa(4.1))
console.log(checkGpa(2.5))
console.log(checkGpa(4))

