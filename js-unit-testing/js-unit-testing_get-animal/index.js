export function getAnimal(animals) {

    if (animals === "cats"){return 'I totally love cats!'}
    if (animals === undefined){return `I do not like animals at all!`}
    else {return `I like ${animals}!`} 
}

getAnimal()
getAnimal("dogs")
getAnimal("cats")

