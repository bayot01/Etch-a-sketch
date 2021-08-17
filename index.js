let son = prompt("katakchalar sonini tanlang")

const container = document.querySelector('.container')
const clear = document.querySelector('.clear')
const yangi = document.querySelector('.new')
const blue = document.getElementById('blue')
const black = document.getElementById('black')
const random = document.getElementById('random')
container.style.cssText = `display:grid; grid-template-columns:repeat(${son}, 1fr);grid-template-rows: repeat(${son}, 1fr);`

function ttt(kkk) {
    for (let i = 0; i < kkk; i++) {
        const katak = document.createElement('div')
        katak.setAttribute('class', 'katak')
        container.appendChild(katak)
        // container.style.cssText=`display:grid; grid-template-columns:repeat(${son}, 1fr);grid-template-rows: repeat(${son}, 1fr);`
        katak.addEventListener("mouseover", (e) => {
            rang(katak)
        })
    }
}
ttt(son * son)

function rang(div) {
    if (black.checked) {
        div.style.background = 'black'
    } else if (blue.checked) {
        div.style.background = 'blue'
    } else if (random.checked) {
        let raqam = Math.round(Math.random() * 255)
        let raqam1 = Math.round(Math.random() * 255)
        let raqam2 = Math.round(Math.random() * 255)
        div.style.background=`rgb(${raqam},${raqam1},${raqam2})`
    } 
}

function clearr() {
    const katak = document.querySelectorAll('.katak')
    katak.forEach(item => item.style.background = 'white')
}

// function bluee() {
//     const katak = document.querySelectorAll('.katak')
//     katak.addEventListener('mouseover', (e) => {
//         katak.forEach(item => item.style.background = 'blue')
//     })
// }
// blue.addEventListener('click', bluee)

function restart() {
    container.textContent = ''
    let yangiSon = prompt("katakchalar sonini tanlang")
    container.style.cssText = `display:grid; grid-template-columns:repeat(${yangiSon}, 1fr);grid-template-rows: repeat(${yangiSon}, 1fr);`
    ttt(yangiSon * yangiSon)
}
yangi.addEventListener('click', restart)

clear.addEventListener('click', clearr)