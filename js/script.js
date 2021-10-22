VANTA.GLOBE({
    el: "#div",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x585fbd,
    backgroundColor: 0x0
  })

let eng = document.getElementById('eng')
let rus = document.getElementById('rus')
let addWordBtn = document.getElementById('addWordBtn')
let testBtn = document.getElementById('testBtn')
let question = document.getElementById('question')
let checkBtn = document.getElementById('checkBtn')

//==============================

let dictionary = {
    apple: 'яблоко',
    table: 'стол',
    box: 'коробка',
}


let arrEng = []
let arrRus = []
let i = 0
let point = 0
let dictLength = Object.keys(dictionary).length


//==============================




const addWord = () => {
    //Взятие значений инпутов
    let engWord = eng.value
    let rusWord = rus.value
    //Добавление свойства в объект
    //Ключ "eng", значение "rus"
    dictionary[engWord] = rusWord
    dictLength = Object.keys(dictionary).length


    alert('Слово добавлено!!!')
    console.log(dictionary)
    addPoint()
}

const addQuestion = () => {
    question.innerHTML = arrEng[i]
}

const addPoint = () => {
    let p = document.getElementById('point')
    p.innerHTML = point + ' / ' + dictLength
}

const test = () => {
    dictLength = Object.keys(dictionary).length
    point = 0
    i = 0
    for (let key in dictionary) {
        arrEng.push(key)
        arrRus.push(dictionary[key])
    }
    addQuestion()
}



const check = () => {
    let answer = document.getElementById('answer')

    if (answer.value == arrRus[i]) {
        alert('Correct!')
        i++
        point++
        addPoint()
    } else {
        alert('Not correct!')
        i++
    }
    if (i == dictLength) {
        alert('Твой результат ' + point + ' из ' + dictLength)
        i = 0
        point = 0
        addPoint()
    }
    addQuestion()
    answer.value = ''
}

//===============================

addPoint()

addWordBtn.addEventListener('click', addWord)
testBtn.addEventListener('click', test)
checkBtn.addEventListener('click', check)

