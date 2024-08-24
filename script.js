const display=document.getElementById('display')

const appendToScreen=(input)=>{
    display.value+=input;
}

const clearbtn=()=>{
    display.value=""
}

const backbtn=()=>{
    display.value=display.value.slice(0,-1)
}

const calculate=()=>{
    try {
        display.value=eval(display.value)
    } catch (error) {
        display.classList.add('shake');
        setTimeout(() => display.classList.remove('shake'), 300);
        display.value="Error"
    }
}