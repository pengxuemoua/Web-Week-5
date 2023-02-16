let birds = ['Chicken','Blue Jay', 'Cardinal', 'Sarrow']

let animalLength = []

birds.forEach( function(bird){
    animalLength.push(bird.length)
})

console.log(animalLength)