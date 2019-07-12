const articleHeader = document.querySelector(".article__header")
articleHeader.textContent = "Welcome to the Haroon Blog"

// const headerEls = document.querySelectorAll(".article__header")
// headerEls.forEach(
//     (currentNode) => { currentNode.classList.add("article__header important") }
// )

const articleDashed = document.querySelector(".dashed")
articleDashed.classList.remove("dashed")

const articleFooter = document.querySelector(".article__footer")
articleFooter.classList.add("goldenrod")

const mom = {
    name: "mother"
}

const dad = {
    name: "father"
}

const bro = {
    name: "brother"
}

const sis = {
    name: "sister"
}

const familyMembers = [mom, dad, bro, sis]

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(empireStateBuilding.stories)
console.log(empireStateBuilding.height)
console.log(empireStateBuilding.squareFeet)
console.log(empireStateBuilding.eastWestLength)
console.log(empireStateBuilding.northSouthLength)

const address = empireStateBuilding["address"]
const construction = empireStateBuilding["constructionDate"]
const cost = empireStateBuilding["cost"]
const owner = empireStateBuilding["owner"]


console.log(address, construction, cost, owner)

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

 console.log(nashvilleSoftwareSchool.instructors.partTime[0], nashvilleSoftwareSchool.instructors.fullTime[4])

 const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}.`)

