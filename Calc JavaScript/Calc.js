const InputValues = document.getElementById('Values')
const Buttons = document.querySelectorAll('button')
const ButtonDel = document.getElementById('button-del')
const ButtonClear = document.getElementById('button-CE')
const ButtonEqual = document.getElementById('button-equal')

InputValues.addEventListener('keypress', (event) => {
    const NumsAndOperators = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '%', '^', '(', ')', '.']

    if (NumsAndOperators.includes(event.key)) {
        0
    }
    else if (event.key === 'Enter') {
        Logic()
    }
    else {
        event.preventDefault()
    }
})

Buttons.forEach(Button => {
    Button.addEventListener('click', () => {
        const ButtonSquare = document.getElementById('button-square-num')

        if (Button === ButtonSquare) {
            InputValues.value += '^2'
        }
        else if (Button !== ButtonDel && Button !== ButtonClear && Button !== ButtonEqual) {
            InputValues.value += Button.textContent
        }
    })
})

ButtonClear.addEventListener('click', () => {
    InputValues.value = ''
})

ButtonDel.addEventListener('click', () => {
    InputValues.value = InputValues.value.slice(0, -1)
})

function Logic() {
    for (let i = 0; i < InputValues.value.length; i++) {
        if (InputValues.value[i] === 'x') {
            InputValues.value = InputValues.value.replace(InputValues.value[i], '*')
        }
        else if (InputValues.value[i] === '÷') {
            InputValues.value = InputValues.value.replace(InputValues.value[i], '/')
        }
        else if (InputValues.value[i] === '^' && InputValues.value[i + 1] === '2') {
            InputValues.value = InputValues.value.replace(InputValues.value[i] + InputValues.value[i + 1], '**2')
        }
    }
    const Regex = /^[0-9+\-*/().\s**]+$/
    if (Regex.test(InputValues.value)) {
        try {
            const Result = eval(InputValues.value)
            if (Result === Infinity || Result === -Infinity || Result === null) {
                InputValues.value = 'Math Error'
            }
            else {
                InputValues.value = Result
            }
        }
        catch {
            InputValues.value = 'Syntax Error'
        }
    }
    else {
        InputValues.value = 'Syntax Error'
        return 'Math Error'
    }
}

ButtonEqual.addEventListener('click', () => {
    Logic()
})
