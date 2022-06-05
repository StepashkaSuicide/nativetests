import {createGreetingMessages, getStreetsTitlesOfGovernmentBuildings, ManType} from "./05map";

let people: Array<ManType> = []


beforeEach(() => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Alexander', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ]

})


test('should be array of greeting messages', ()=> {

    const messages = (createGreetingMessages(people))

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrew. Welcome to IT-INCUBATOR')
    expect(messages[1]).toBe('Hello Alexander. Welcome to IT-INCUBATOR')
    expect(messages[2]).toBe('Hello Dmitry. Welcome to IT-INCUBATOR')


})

