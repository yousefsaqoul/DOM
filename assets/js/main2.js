

let myBody = document.getElementById('myBody')
let mystyle = document.getElementsByClassName('myfoEach')
function myColor() {
    for (let i = 0; i < mystyle.length; i++) {
        mystyle[i].style.background = 'tomato'
    }
}

document.body.addEventListener('click', (e) => {
    console.log(e)
})

myMous = (e) => {

    let x = event.clientX;
    let y = event.clientY;
    console.log(x, y)
}

let student = document.getElementById("student-data")

document.addEventListener('keypress', logKey);
function logKey() {
    student.style.background = 'black';
}


document.addEventListener('keydown', eve => {
    switch (eve.key) {
        case 'g':
            myBody.style.background = 'gold';
            break;
        case 't':
            myBody.style.background = 'tomato';
            break;

    }
})

// ----------------------------AUFGABE 1_2 byClassName
let divBackground = document.getElementsByClassName('example')
myFunction = () => {
    for (let i = 0; i < divBackground.length; i++) {
        divBackground[i].style.background = ' black'
    }
}



// ----------------------------AUFGABE 2_1 dom onclick style

let navHome = document.getElementById("navHome")

changeColorHome = () => navHome.style.background = 'tomato';


// ----------------------------AUFGABE 2_3 dom by tag name ----------------

let news = document.getElementById('navNews')
let tagName = document.getElementsByTagName('li');
let contactChange = document.querySelectorAll('.nav')
function changeColorrr() {
    news.style.background = '#f6c89f'
    tagName[0].style.background = '#4b8e8d'
    contactChange[2].style.background = '#ffe7d1'

}

// ----------------------------AUFGABE 2_2 dom form value ----------------
let myValue = document.getElementById('vorname')
let myValue2 = document.getElementById('nachname')
let myValue3 = document.getElementById('land')
function showValue() {
    console.log(myValue.value, myValue2.value, myValue3.value)
}