const friends = [
    "Maria Ines",
    "Alejandra",
    "Claudia",
    "Andrés",
    "Mariana",
    "Oscar"
]

const randomFriend = () => {
    const friend = friends[Math.floor(Math.random() * friends.length)]
    console.log("Hola " + friend + ".")
}

module.exports = { randomFriend }