function isMinnesotaZip(code) {
    // All MN zips are between 55001 and 56763
    if (code >= 55001 && code <= 56763){
        let message = "This is a Minnesota zip code."
        return message
    } else {
        let message = 'This is not a Minnesota zip code.'
        return message
    }
}

let zip = 58000

let testZip = isMinnesotaZip(zip)

console.log("Your zip code is: " + zip + ". " + testZip)


