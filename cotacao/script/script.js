const url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL';

fetch(url).then((res)=>{
    return res.json()
}).then((data)=>{

    console.log(data)

    let bitcoin = data.BTCBRL.high
    let dollar = data.USDBRL.high
    let euro = data.EURBRL.high

    let buttons = document.querySelectorAll('.button');

    let result = document.querySelector('#result')

    buttons.forEach(button=>{
        button.addEventListener('click', ()=>{
            let id = button.id
            let reais = document.querySelector('#reais');

            if(id == 'bitcoin'){
                let cot = (Number(reais.value) / Number(bitcoin*1000)).toFixed(2);
                result.innerHTML = 'BTC$'+cot
                console.log(cot)
            }else if(id == 'dollar'){
                let cot = (Number(reais.value) / Number(dollar)).toFixed(2);;
                result.innerHTML = 'US$'+cot
                console.log(cot)
            }else if(id == 'euro'){
                let cot = (Number(reais.value) / Number(euro)).toFixed(2);;
                console.log(cot)
                result.innerHTML = 'EUR$'+cot
            }
        })
    })

})
