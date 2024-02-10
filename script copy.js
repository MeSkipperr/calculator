(function (){

    let back = document.querySelector('.back');
    let screen = document.querySelector('.screen');
    let subScreen = document.querySelector('.subScreen');
    let buttons =  document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let dElete = document.querySelector('.btn-delete');
    let power = document.querySelector('.btn-power');
    let multiple = document.querySelector('.btn-multiple');
    let divided = document.querySelector('.btn-divided');
    let minus= document.querySelector('.btn-minus');
    let plus= document.querySelector('.btn-plus');
    let bracketOpen = document.querySelector('.btn-bracketOpen');
    
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            back.value += value;
            screen.value += value;
            subScreen.value += value;
            
            let charFirst = screen.value.charAt(0);
            if (charFirst.includes('*')||charFirst.includes('+')||charFirst.includes('-')||charFirst.includes('/')||charFirst.includes('^')){
                back.value=""
                screen.value=""
                subScreen.value=""
            }
            let charLast = screen.value.slice(-1);
            if (charLast.includes('*')||charLast.includes('+')||charLast.includes('-')||charLast.includes('/')||charLast.includes('^')){
            } else {
                subScreen.value = eval(back.value);
            }
        })
    });
    
    equal.addEventListener('click', function (e){
        if (back.value === ''){
            back.value = '';
        }else{
            back.value = eval(back.value);
            screen.value = eval(back.value);
            subScreen.value =""; 
        }
        
    })

    power.addEventListener('click', function(e){
        let checkpower = screen.value.includes('^')
        if (checkpower){
            back.value = screen.value.slice(0,-1)
            back.value += '**';
        }
    })
    
    multiple.addEventListener('click', function(e){
        let checkMultiple = screen.value.includes('*')
        if (checkMultiple){
            screen.value = screen.value.slice(0,-1)
            screen.value += 'x';
            subScreen.value = subScreen.value.slice(0,-1)
            subScreen.value += 'x';
        }
        let multipleBack = back.value.at(-2);
        if (multipleBack.includes('*')||multipleBack.includes('+')||multipleBack.includes('-')||multipleBack.includes('/')){
            back.value = back.value.slice(0,-2);
            back.value += '*'
            screen.value = screen.value.slice(0,-2);
            screen.value += 'x'
            subScreen.value = subScreen.value.slice(0,-2);
            subScreen.value += 'x';
        } 
        let multipleBackTwo = back.value.slice(-3);
        if (multipleBackTwo.includes('^')){
            back.value = back.value.slice(0,-2);
            screen.value = screen.value.slice(0,-2);
            subScreen.value = subScreen.value.slice(0,-2);
            back.value += '*'
            screen.value += 'x'
            subScreen.value += 'x'
        }
    })
    divided.addEventListener('click', function(e){
        let charFirst = back.value.charAt(0);
        if (charFirst.includes('*')||charFirst.includes('+')||charFirst.includes('-')||charFirst.includes('/')){
            back.value=""
            screen.value=""
            subScreen.value=""
        }
        let checkDivided = screen.value.includes('/')
        if(checkDivided){
            screen.value = screen.value.slice(0,-1)
            screen.value += '÷'
            subScreen.value = subScreen.value.slice(0, -1)
            subScreen.value += '÷';
        }
        let dividedBack = back.value.at(-2);
        if (dividedBack.includes('*')||dividedBack.includes('+')||dividedBack.includes('-')||dividedBack.includes('/')){
            back.value = back.value.slice(0,-2);
            back.value += '/';
            screen.value = screen.value.slice(0,-2);
            screen.value += '÷';
            subScreen.value = subScreen.value.slice(0,-2);
            subScreen.value += '÷';
        }
        let dividedBackTwo = back.value.slice(-3);
        if (dividedBackTwo.includes('^')){
            back.value = back.value.slice(0,-2);
            screen.value = screen.value.slice(0,-2);
            subScreen.value = subScreen.value.slice(0,-2);
            back.value += '/'
            screen.value += '÷'
            subScreen.value += '÷'
        }
    })

    minus.addEventListener('click', function(e){
        let charFirst = back.value.charAt(0);
        if (charFirst.includes('*')||charFirst.includes('+')||charFirst.includes('-')||charFirst.includes('/')){
            back.value=""
            screen.value=""
            subScreen.value=""
        }
        let minusBack = back.value.at(-2);
        if (minusBack.includes('*')||minusBack.includes('+')||minusBack.includes('-')||minusBack.includes('/')){
            back.value = back.value.slice(0,-2);
            back.value += '-';
            screen.value = screen.value.slice(0,-2);
            screen.value += '-';
            subScreen.value = subScreen.value.slice(0,-2);
            subScreen.value += '-';
        }
        let minusBackTwo = back.value.slice(-3);
        if (minusBackTwo.includes('^')){
            back.value = back.value.slice(0,-2);
            screen.value = screen.value.slice(0,-2);
            subScreen.value = subScreen.value.slice(0,-2);
            back.value += '-'
            screen.value += '-'
            subScreen.value += '-'
        }
    })

    plus.addEventListener('click', function(e){
        let charFirst = back.value.charAt(0);
        if (charFirst.includes('*')||charFirst.includes('+')||charFirst.includes('-')||charFirst.includes('/')){
            back.value=""
            screen.value=""
            subScreen.value=""
        }
        let plusBack = back.value.at(-2);
        if (plusBack.includes('*')||plusBack.includes('+')||plusBack.includes('-')||plusBack.includes('/')){
            back.value = back.value.slice(0,-2);
            back.value += '+';
            screen.value = screen.value.slice(0,-2);
            screen.value += '+';
            subScreen.value = subScreen.value.slice(0,-2);
            subScreen.value += '+';
        }
        let plusBackTwo = back.value.slice(-3);
        if (plusBackTwo.includes('^')){
            back.value = back.value.slice(0,-2);
            screen.value = screen.value.slice(0,-2);
            subScreen.value = subScreen.value.slice(0,-2);
            back.value += '*'
            screen.value += 'x'
            subScreen.value += 'x'
        }
    })

    bracketOpen.addEventListener('click', function(e){
        let charFirst = back.value.charAt(0);
        if (charFirst.includes('*')||charFirst.includes('+')||charFirst.includes('-')||charFirst.includes('/')){
            back.value=""
            back.value += "("
            screen.value=""
            screen.value += "("
            subScreen.value=""
            subScreen.value += "("
        }
        let checkBracket = screen.value.includes('*(')
        if (checkBracket){
            screen.value = screen.value.slice(0,-2)
            screen.value += '(';
            subScreen.value = screen.value.slice(0,-1)
            subScreen.value += '(';
        }
    })

    dElete.addEventListener('click', function(e){
        back.value = back.value.slice(0,-1);
        screen.value = screen.value.slice(0,-1);
        subScreen.value = '';
    })

    clear.addEventListener('click', function(e){
        back.value = "";
        screen.value = "";
        subScreen.value = "";
    });

})();