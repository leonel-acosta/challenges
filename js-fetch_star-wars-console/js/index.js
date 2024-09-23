console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
    console.log("fetch started");
    try{
        const response = await fetch(url);
        const data = await response.json();

        const people = data.results;

//log object
        console.log(people)

//Log different values

        people.forEach(person => {
            console.log("name:", person.name)
            console.log("mass:", person.mass)
            console.log("height:", person.height)
        })

//R2-D2 Eye Color
        console.log(people[2].eye_color)
        
    }catch{console.log("Bad request")}
}

fetchData();
