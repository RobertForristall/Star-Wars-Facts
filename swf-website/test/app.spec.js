const supertest = require('supertest')
const app = require('../backend/app')

//SWAPI Tests
//======================================

/*
describe("SWAPI Tests", () => {

    describe("GET /films/get/swapi", () => {
        it ("Should have status code 200 and return the films from SWAPI", (done) => {
            supertest(app)
                .get("/films/get/swapi")
                .set("Accept", "application/json")
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    //console.log(res.body)
                    done()
                })
        })
    })

    describe("GET /people/get/swapi", () => {
        it ("Should have status code 200 and return the people from SWAPI", (done) => {
            supertest(app)
                .get("/people/get/swapi")
                .set("Accept", "application/json")
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    //console.log(res.body)
                    done()
                })
        })
    })

    describe("GET /planets/get/swapi", () => {
        it ("Should have status code 200 and return the planets from SWAPI", (done) => {
            supertest(app)
                .get("/planets/get/swapi")
                .set("Accept", "application/json")
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    //console.log(res.body)
                    done()
                })
        })
    })

    describe("GET /species/get/swapi", () => {
        it ("Should have status code 200 and return the species from SWAPI", (done) => {
            supertest(app)
                .get("/species/get/swapi")
                .set("Accept", "application/json")
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    //console.log(res.body)
                    done()
                })
        })
    })

    describe("GET /starship/get/swapi", () => {
        it ("Should have status code 200 and return the starships from SWAPI", (done) => {
            supertest(app)
                .get("/starships/get/swapi")
                .set("Accept", "application/json")
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    //console.log(res.body)
                    done()
                })
        })
    })

    describe("GET /vehicles/get/swapi", () => {
        it ("Should have status code 200 and return the vehicles from SWAPI", (done) => {
            supertest(app)
                .get("/vehicles/get/swapi")
                .set("Accept", "application/json")
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    //console.log(res.body)
                    done()
                })
        })
    })    
})
*/

//Film Tests
//======================================

// Test Add Film
const testAddFilm = {
    title: "Supertest Film",
    episode_id: 22,
    opening_crawl: "Supertest opening crawl is super!!",
    director: "George Lucas",
    producer: ["Me", "Monkeys"],
    release_date: Date.now(),
    characters: ["Luke Skywalker", "Darth Vader"],
    planets: ["Naboo", "Tatooine", "Endor"],
    starships: ["X-Wing", "Y-Wing"],
    vehicles: ["Snowspeeder"],
    species: ["Human", "Gungan", "Hutt"],
    created: Date.now(),
    edited: Date.now(),
}

// Test Update Film
const testUpdateFilm = {
    title: "This title has been updated",
    episode_id: 22,
    opening_crawl: "Supertest opening crawl is super!!",
    director: "George Lucas",
    producer: ["Me", "Monkeys"],
    release_date: Date.now(),
    characters: ["Luke Skywalker", "Darth Vader"],
    planets: ["Naboo", "Tatooine", "Endor"],
    starships: ["X-Wing", "Y-Wing"],
    vehicles: ["Snowspeeder"],
    species: ["Human", "Gungan", "Hutt"],
    created: Date.now(),
    edited: Date.now(),
}

describe("Film DB Tests: ", () => {

    let id_film
    
    describe("POST /films/add", () => {
        
        it("It should have a status code of 200 and return that a film was added", (done) => {
            supertest(app)
                .post("/films/add")
                .send(testAddFilm)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

    describe("GET /films/get", () => {

        it ("It should have a status code of 200 and return all films in the DB", done => {
            supertest(app)
                .get("/films/get")
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

    describe("GET /films/get/" + testAddFilm.title, () => {

        it ("It should have a status code for 200 and return searched film in the DB", done => {
            supertest(app)
                .get("/films/get/" + testAddFilm.title)
                .set("Accept", "application/json")
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body[0]._id)
                    id_film = res.body[0]._id
                    done()
                })
        })
    })

    describe("PUT /films/update/" + id_film, () => {

        it ("It should have a status code of 200 and return that a film was updated", (done) => {
            supertest(app)
                .put("/films/update/" + id_film)
                .send(testUpdateFilm)
                .set("Content-Type", 'application/json')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })

        })
    })

    describe("DELETE /films/delete/" + id_film, () => {

        it ("It should have a status code of 200 and return that a film was deleted", (done) => {
            supertest(app)
                .delete("/films/delete/" + id_film)
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })
})

//People Tests
//======================================

// Test Add Person
const testAddPerson = {
    name: "Robert Forristall",
    height: "160",
    mass: "200",
    hair_color: "Red",
    skin_color: "White",
    eye_color: "Brown",
    birth_year: "14BBY",
    gender: "Male",
    homeworld: "Earth",
    films: ["Supertest Film"],
    species: ["Supertest Species"],
    vehicles: ["Supertest Vehicle"],
    starships: ["Supertest Starship"],
    created: Date.now(),
    edited: Date.now(),
}

//Test Update Person
const testUpdatePerson = {
    name: "Robert Forristall",
    height: "200",
    mass: "200",
    hair_color: "Red",
    skin_color: "White",
    eye_color: "Brown",
    birth_year: "14BBY",
    gender: "Male",
    homeworld: "Mars",
    films: ["Supertest Film"],
    species: ["Supertest Species"],
    vehicles: ["Supertest Vehicle"],
    starships: ["Supertest Starship"],
    created: Date.now(),
    edited: Date.now(),
}

describe("People DB Tests: ", () => {

    let id_person

    describe("POST /people/add", () => {

        it ("it has a status code of 200 and returns that a person was added to the DB", done => {
            supertest(app)
                .post('/people/add')
                .send(testAddPerson)
                .set('Contact-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

    describe("GET /people/get", () => {

        it ("It has a status code of 200 and returns all people from the DB", done => {
            supertest(app)
                .get("/people/get")
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

    describe("GET /people/get/" + testAddPerson.name, () => {

        it ("It has a status code of 200 and returns the searched person from the DB", done => {
            supertest(app)
                .get('/people/get/' + testAddPerson.name)
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    id_person = res.body._id
                    done()
                })
        })
    })

    describe("PUT /people/update/" + id_person, () => {

        it ("It has a status code of 200 and returns that the person was updated in the DB", done => {
            supertest(app)
                .put('/people/update/' + id_person)
                .send(testUpdatePerson)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

    describe('DELETE /people/delete/' + id_person, () => {

        it ('It has a status code of 200 and returns that the person has been deleted from the DB', done => {
            supertest(app)
                .delete('/people/delete/' + id_person)
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

})

//Planets Tests
//======================================

// Test Add Planet
const testAddPlanet = {
    name: "Supertest Planet",
    diameter: "10000",
    rotation_period: "24 Hours",
    orbital_period: "365 Days",
    gravity: "9.807 M/s^2",
    population: "400,000,000",
    climate: "Varied",
    terrain: "Varied",
    surface_water: "8",
    residents: [],
    films: ["Supertest Film"],
    created: Date.now(),
    edited: Date.now(),
}

// Test Update Planet
const testUpdatePlanet = {
    name: "Earth",
    diameter: "10000",
    rotation_period: "24 Hours",
    orbital_period: "365 Days",
    gravity: "9.807 M/s^2",
    population: "400,000,000",
    climate: "Varied",
    terrain: "Varied",
    surface_water: "8",
    residents: [],
    films: ["Supertest Film"],
    created: Date.now(),
    edited: Date.now(),
}

describe("Planets DB Tests: ", () => {

    let id_planet

    describe("POST /planets/add", () => {

        it ("It should have a status code of 200 and return that a planet was added to the DB", done => {
            supertest(app)
                .post("/planets/add")
                .send(testAddPlanet)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

    describe('GET /planets/get', () => {

        it ('It should have a status code of 200 and return all planets in the DB', done => {
            supertest(app)
                .get('/planets/get')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

    describe('GET /planets/get/' + testAddPlanet.name, () => {

        it ('It should have status code 200 and return the searched planet from the DB', done => {
            supertest(app)
                .get('/planets/get/' + testAddPlanet.name)
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    id_planet = res.body._id
                    done()
                })
        })
    })

    describe('PUT /planets/update/' + id_planet, () => {

        it ('It should have status code 200 and return that a planet was updated in DB', done => {
            supertest(app)
                .put('/planets/update/' + id_planet)
                .send(testUpdatePlanet)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

    describe('DELETE /planets/delete/' + id_planet, () => {

        it ('It should have status code 200 and return that a planet was deleted from DB', done => {
            supertest(app)
                .delete('/planets/delete/' + id_planet)
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

})

//Species Tests
//======================================


// Test Add Species
const testAddSpecies = {
    name: 'Supertest Species',
    classification: 'Mammal',
    designation: 'Sentient',
    average_height: '200',
    average_lifespan: '300',
    eye_colors: 'brown, red, white',
    hair_colors: 'green',
    skin_colors: 'black, tan',
    language: 'English',
    homeworld: 'Earth',
    people: ['Robert', 'Melissa'],
    films: ['Supertest Film'],
    created: Date.now(),
    edited: Date.now(),
}

// Test Update Species
const testUpdateSpecies = {
    name: 'Supertest Species',
    classification: 'Mammal',
    designation: 'Primal',
    average_height: '200',
    average_lifespan: '300',
    eye_colors: 'brown, red, white',
    hair_colors: 'green',
    skin_colors: 'black, tan',
    language: 'English',
    homeworld: 'Earth',
    people: ['Robert', 'Melissa'],
    films: ['Supertest Film'],
    created: Date.now(),
    edited: Date.now(),
}

describe('Species DB Tests: ', () => {

    let id_species

    describe('POST /species/add', () => {

        it ('It should have status code 200 and return that a species was added to the DB', done => {
            supertest(app)
                .post('/species/add')
                .send(testAddSpecies)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

    describe('GET /species/get', () => {

        it ('It shoud have status code 200 and return all species in the DB', done => {
            supertest(app)
                .get('/species/get')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

    describe('GET /species/get/' + testAddSpecies.name, () => {

        it ('It should have status code 200 and return the searched species from DB', done => {
            supertest(app)
                .get('/species/get/' + testAddSpecies.name)
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    id_species = res.body._id
                    done()
                })
        })
    })

    describe('PUT /species/update/' + id_species, () => {

        it ('It should have status code 200 and return that a species was updated in DB', done => {
            supertest(app)
                .put('/species/update/' + id_species)
                .send(testUpdateSpecies)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

    describe('DELETE /species/delete/' + id_species, () => {

        it ('It should have status code 200 and return that a species was deleted from DB', done => {
            supertest(app)
                .delete('/species/delete/' + id_species)
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })
})


//Starships Tests
//======================================

// Test Add Starship
const testAddStarship = {
    name: 'Supertest Starship',
    model: 'Corelian',
    starship_class: 'Personal Shuttle',
    manufacturer: 'Supertest inc.',
    cost_in_credits: '100000',
    length: '1300',
    crew: '1',
    passengers: '3',
    max_astmosphering_speed: '20000',
    hyperdrive_rating: '2.0',
    MGLT: '3',
    cargo_capacity: '1000',
    consumables: '1 year',
    films: ['Supertest Film'],
    pilots: ['Supertest Person'],
    created: Date.now(),
    edited: Date.now(),
}

// Test Update Starship
const testUpdateStarship = {
    name: 'Supertest Starship Updated',
    model: 'Corelian',
    starship_class: 'Personal Shuttle',
    manufacturer: 'Supertest inc.',
    cost_in_credits: '100000',
    length: '1300',
    crew: '1',
    passengers: '3',
    max_astmosphering_speed: '20000',
    hyperdrive_rating: '2.0',
    MGLT: '3',
    cargo_capacity: '1000',
    consumables: '1 year',
    films: ['Supertest Film'],
    pilots: ['Supertest Person'],
    created: Date.now(),
    edited: Date.now(),
}

describe('Starships DB Tests:', () => {

    let id_starship

    describe('POST /starships/add', () => {

        it ('It should have status code 200 and return that a starship was added to the DB', done => {
            supertest(app)
                .post('/starships/add')
                .send(testAddStarship)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

    describe('GET /starships/get', () => {

        it ('It should have status code 200 and return all starships in DB', done => {
            supertest(app)
                .get('/starships/get')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

    describe('GET /starships/get/' + testAddStarship.name, () => {

        it ('It should have status code 200 and return the searched starship from DB', done => {
            supertest(app)
                .get('/starships/get/' + testAddStarship.name)
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    id_starship = res.body._id
                    done()
                })
        })
    })

    describe('PUT /starships/update/' + id_starship, () => {

        it ('It should have status code 200 and return that a starship was updated in the DB', done => {
            supertest(app)
                .put('/starships/update/' + id_starship)
                .send(testUpdateStarship)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

    describe('DELETE /starships/delete/' + id_starship, () => {

        it ('It should have status code 200 and return that a starship was deleted from the DB', done => {
            supertest(app)
                .delete('/starships/delete/' + id_starship)
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })
})


//Vehicles Tests
//======================================

// Test Add Vehicle
const testAddVehicle = {
    name: 'Supertest Vehicle',
    model: 'Corelian',
    vehicle_class: 'Personal Speeder',
    manufacturer: 'Supertest inc.',
    length: '10',
    cost_in_credits: '10000',
    crew: '1',
    passengers: '0',
    max_atmoshpering_speed: '200',
    cargo_capacity: '5',
    consumables: '1',
    films: ["Supertest Film"],
    pilots: ['Supertest Person'],
    created: Date.now(),
    edited: Date.now(),
}

// Test Update Vehicle
const testUpdateVehicle = {
    name: 'Supertest Vehicle Updated',
    model: 'Corelian',
    vehicle_class: 'Personal Speeder',
    manufacturer: 'Supertest inc.',
    length: '10',
    cost_in_credits: '10000',
    crew: '1',
    passengers: '0',
    max_atmoshpering_speed: '200',
    cargo_capacity: '5',
    consumables: '1',
    films: ["Supertest Film"],
    pilots: ['Supertest Person'],
    created: Date.now(),
    edited: Date.now(),
}

describe('Vehicles DB Tests: ', () => {

    let id_vehicle

    describe('POST /vehicles/add', () => {

        it ('It should have status code 200 and return that a vehicle was added to the DB', done => {
            supertest(app)
                .post('/vehicles/add')
                .send(testAddVehicle)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

    describe('GET /vehicles/get', () => {

        it ('It should have status code 200 and return all vehicles in the DB', done => {
            supertest(app)
                .get('/vehicles/get')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

    describe('GET /vehicles/get/' + testAddVehicle.name, () => {

        it('It should have status code 200 and return the searched vehicle from the DB', done => {
            supertest(app)
                .get('/vehicles/get/' + testAddVehicle.name)
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    id_vehicle = res.body._id
                    done()
                })
        })
    })

    describe('PUT /vehicles/update/' + id_vehicle, () => {

        it ('It should have status code 200 and return that a vehicle was updated in the DB', done => {
            supertest(app)
                .put('/vehicles/update/' + id_vehicle)
                .send(testUpdateVehicle)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })

    describe('DELETE /vehicles/delete/' + id_vehicle, () => {

        it ('It should have status code 200 and return that a vehicle was deleted from the DB', done => {
            supertest(app)
                .delete('/vehicles/delete' + id_vehicle)
                .set('Accept', 'application/json')
                .expect(200)
                .end((err, res) => {
                    if (err) done(err)
                    console.log(res.body)
                    done()
                })
        })
    })
})