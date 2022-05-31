const display = document.getElementById('display')
const buttons = Array.from(document.getElementsByClassName('button'))

buttons.map(buttonClick => {buttonClick.addEventListener('click',(e) => {
  switch(e.target.innerText){
    case 'C':
        display.innerText = ''
        break
    case '←':
        display.innerText = display.innerText.slice(0,-1)
        break
    
    default:
        display.innerText += e.target.innerText
  }
})})