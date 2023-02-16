function cityStateString(city, state){
    //let address = city + ", " + state.toUpperCase()
    let address = `${city}, ${state.toUpperCase()}`
    return address
}

console.log(cityStateString('Minneapolis', 'mn'))

let address = cityStateString('Seattle', 'WA')

console.log(address)