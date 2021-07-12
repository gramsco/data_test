const data = require('./data.json')

const {
    howManyEmployees,
    howManyFrench,
    howMuchEarnsDrake,
    howMuchEarnsJulie,
    howMuchEarnsSyd,

    calculateAverageSalary,
    calculateAverageFrenchSalary,
    howOldAverageEmployee,

    howManyLikeLions,
    getTopThreeRichestSpiritAnimals,
    getTopThreePoorestSpiritAnimals,
    howManyDepartments,
    averageNumberByDepartment,

    getEmailProvidersNumber,
    mostGenerousDepartment,
    leastGenerousDepartment,
    howManyPeopleShareFirstName,
    howManyPeopleShareLastName,

    topThreeSalaryAgeRatioIds,
    
} = require("./solution")

describe('EZ-PZ',() => {

    test("Should return the good amount of employees", () => {
        expect(howManyEmployees(data)).toBe(1000)
    })

    test("Should return the good amount of employees", () => {
        expect(howManyFrench(data)).toBe(34)
    })

    test("Should return how much Drake earns", () => {
        expect(howMuchEarnsDrake(data)).toBe(78804)
    })

    test("Should return how much Julie earns", () => {
        expect(howMuchEarnsJulie(data)).toBe(208811)
    })

    test("Should return how much Syd earns", () => {
        expect(howMuchEarnsSyd(data)).toBe(53464)
    })
})

describe('Allright...', () => {
    let avg = calculateAverageSalary(data)
    test("The average salary is floored", () => {
        expect(avg).toEqual(Math.floor(avg))
    })
    test("Accurate average salary", () => {
        expect(avg).toEqual(111811)
    })

    let frenchAvg = calculateAverageFrenchSalary(data)
    test("The average french salary is floored", () => {
        expect(frenchAvg).toEqual(Math.floor(frenchAvg))
    })
    test("The average french salary is accurate", () => {
        expect(frenchAvg).toEqual(113982)
    })

    let ageAvg = howOldAverageEmployee(data)
    test("The average employee age is floored", () => {
        expect(ageAvg).toEqual(Math.floor(ageAvg))
    })
    test("The average employee age is accurate", () => {
        expect(ageAvg).toEqual(45)
    })

})

describe("Shit just got real", () => {
    test("There are 7 fans of lions", () => {
        expect(howManyLikeLions(data)).toEqual(7)
    })
    test("Top Three Richest Spirit Animals", () => {
        expect(getTopThreeRichestSpiritAnimals(data)).toEqual(["Ferruginous hawk", "Phalarope, grey", "Owl, australian masked"])
    })
    test("Top Three Poorest Spirit Animals", () => {
        expect(getTopThreePoorestSpiritAnimals(data)).toEqual(['Vulture, griffon', 'Snake, carpet', 'Blacksmith plover'])
    })
    test("How many dpts are there", () => {
        expect(howManyDepartments(data)).toEqual(12)
    })
    let r = averageNumberByDepartment(data)
    test("Average nb of people by dpt should be floored", () => {
        expect(r).toEqual(Math.floor(r))
    })
    test("Avg nb of people by dpt should be OK", () => {
        expect(r).toEqual(83)
    })

})