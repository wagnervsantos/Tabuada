    function botao(){
        let num = document.getElementById('numero')
        let tab = document.getElementById('tabuada')

        if(num.value.length == 0) {
            alert('Por favor digite um número!')
        } else {
            let n = Number(num.value)
            let a = 1
            tab.innerHTML = ''
            while (a <= 10) {
                let item = document.createElement('option')
                    item.text = `${n} x ${a} = ${n*a}`
                    item.value = `tab{a}`
                    tab.appendChild(item)
                    a++
            }
        }
    }