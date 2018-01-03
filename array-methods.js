let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
console.log(planets);
let planetPrint = '';
console.log(planetPrint);
/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
let el = document.getElementById("planets");
planets.forEach(function (planet) {
    console.log('planet',planet);
    if (planet === 'neptune'){
        el.innerHTML += planet+'.';
    } else {
        el.innerHTML+=planet+', ';   
    }
})


// Use the map method to create a new array where the first letter of each planet is capitalized

let mapMethod = planets.map(planet => planet.charAt(0).toUpperCase() + planet.slice(1))
console.log('mapMethod',mapMethod);
// Use the filter method to create a new array that contains planets with the letter 'e'
let filterMethod = planets.filter(planet => planet.includes('e'))
console.log('filterMethod',filterMethod);
// Use the reduce method to create a sentence from the words in the following array

let words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
let reduceMethod = words.reduce(function (sentence, word, currentIndex) {
    if (currentIndex === 1){
        return sentence += ` ${word} `
    } else if (currentIndex === 13  ){
        return sentence += `${word}.`
    }   
    return sentence += `${word} `
})
console.log('reduceMethod ', reduceMethod);