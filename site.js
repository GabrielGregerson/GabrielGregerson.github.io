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



const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

const nextImage = () => {
    currentImage++;
    showImages();
};

const prevImage = () => {
    currentImage--;
    if (currentImage < 0) {
        currentImage = urls.length - 1;
    }
    showImages();
};

document.getElementById('next').addEventListener('click', () => nextImage());
document.getElementById('prev').addEventListener('click', () => prevImage());

setInterval(() => {
    nextImage();
}, 5000);