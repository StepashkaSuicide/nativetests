import {GovernmentBuildingsType, HouseType} from "./02_02";

export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> =[
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Alexander', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
]


const dimychTransformator = (man: ManType) => {
    return {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    }
}



const devs1 = [
    {stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: 'Andrew', lastName: 'Ivanov'
    },

    {stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: 'Alexander', lastName: 'Alexander'
    },

    {stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: 'Dmitry', lastName: 'Sidorov'
    },
]


const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
]

const devs3 = people.map(dimychTransformator)
const devs4 = people.map( man => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
}))

const messages = people.map(man=> `Hello ${man.name.split(' ')[0]}. Welcome to IT-INCUBATOR`)

export const createGreetingMessages = (people: Array<ManType>)=> {
    return people.map(man=> `Hello ${man.name.split(' ')[0]}. Welcome to IT-INCUBATOR`)
}




export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingsType>) => {

    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {

    return houses.map(b => b.address.street.title)
}


export const createMessages = (houses: Array<HouseType>)=> {
return houses.map(h=> `Hello guys from ${h.address.street.title}`)
}