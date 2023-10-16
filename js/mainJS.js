let button = document.getElementById('btn')
//console.log(button)

button.addEventListener('click',Test)

function Test() {
    let result = 0

    let al = document.getElementById('q1').value

    //console.log(al)
    if (al === '2') {
        result++
    }

    alert('Ваш результат: ' + result)
}