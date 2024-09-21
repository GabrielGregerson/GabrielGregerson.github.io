const booktitles = [
    'It Ends with Us',
    'Onyx Storm',
    'Hopeless'
]

const book = {
    title: 'Atomic Habbits',
    author: 'james Clear',
    released: '10/16/2018'
}
//for (let i = 0; i < booktitles.length; i++)
//{
//    console.log(booktitles[i])
//}

//console.log('title: ${book.title} was written by ${book.author}')



const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const WelcomeDiv = document.getElementById('welcome')

if (isMorning) {
    WelcomeDiv.innerHTML = "Good Morning!"
}
else if (isAfternoon){
    WelcomeDiv.innerHTML = "Good Afternoon!"
}
else if (isEvening) {
    WelcomeDiv.innerHTML = "Good Evening!"
}

localStorage.setItem("It's a secret to everybody.", "It's dangerous to go alone! Take this." )
