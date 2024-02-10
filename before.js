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
    let bracketClose = document.querySelector('.btn-bracketClose');
    let next = document.querySelector('.btn-next')
    
    next.onclick = function(){
        alert('OPERASI MATEMATIKA LAINNYA AKAN SEGERA DI TAMBAHKAN')
        console.log(eval(2+(8)))
    }
    
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let data = e.target.dataset.num;
            let checkSwigel = back.value.at(-1)
            if(checkSwigel == ')'){
                let dalamKurung = back.value;
                let part1 = dalamKurung.slice(-1);
                let part2 = dalamKurung.slice(0, -1);
                back.value= part2.concat(data, part1);
                screen.value += data;
                subScreen.value += data;
                
            }else{
                back.value += data;
                screen.value += data;
                subScreen.value += data;
            }
            
            let charFirst = screen.value.at(0);
            if (charFirst == '*' ||charFirst == '/'||charFirst =='-'||charFirst =='+' ||charFirst =='^'||charFirst ==')'){
                back.value=back.value.slice(1);
                screen.value=screen.value.slice(1);
                subScreen.value=subScreen.value.slice(1);
            }
            let charLast = screen.value.at(-1);
            if (charLast == '*'||charLast == '/'||charLast =='-'||charLast =='+' ||charLast =='^' || charLast ==')' ||charLast === undefined|| charLast =='~'){
                subScreen.value = screen.value;
            } else{
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
    
    multiple.addEventListener('click', function(e){
        let checkMultiple = screen.value.includes('*')
        if(checkMultiple){
            screen.value = screen.value.slice(0,-1)
            screen.value += 'x';
            subScreen.value = subScreen.value.slice(0,-1)
            subScreen.value += 'x'
        }
        let multipleBack = screen.value.at(-2);
        if(multipleBack == 'x'||multipleBack == '÷'||multipleBack == '-'||multipleBack == '+'||multipleBack == '^'){
            back.value = back.value.slice(0,-2)
            back.value += '*';
            screen.value = screen.value.slice(0,-2)
            screen.value += 'x';
            subScreen.value = subScreen.value.slice(0,-2)
            subScreen.value += 'x';
        }
        if (multipleBack == '^'){
            back.value = back.value.slice(0,-2);
            screen.value = screen.value.slice(0,-2);
            subScreen.value = subScreen.value.slice(0,-2);
            back.value += '/'
            screen.value += '÷'
            subScreen.value += '÷'
        }
    } )    
    
    power.addEventListener('click', function(e){
        let checkpower = screen.value.includes('^')
        if (checkpower){
            back.value = back.value.slice(0,-1)
            back.value += '**';
        }
        let powerBack = screen.value.at(-2);
        if (powerBack == 'x'||powerBack == '÷'||powerBack =='+'||powerBack =='-'){
            back.value = back.value.slice(0,-3);
            back.value += '**'
            screen.value = screen.value.slice(0,-2);
            screen.value += '^'
            subScreen.value = subScreen.value.slice(0,-2);
            subScreen.value += '^';
        }
    })
    
    divided.addEventListener('click', function(e){
        let checkDivided = screen.value.includes('/')
        if(checkDivided){
            screen.value = screen.value.slice(0,-1)
            screen.value += '÷'
            subScreen.value = subScreen.value.slice(0, -1)
            subScreen.value += '÷';
        }
        let dividedBack = screen.value.at(-2);
        if (dividedBack == 'x'||dividedBack == '÷'||dividedBack =='-'||dividedBack =='+' ||dividedBack =='^'){
            back.value = back.value.slice(0,-2);
            back.value += '/';
            screen.value = screen.value.slice(0,-2);
            screen.value += '÷';
            subScreen.value = subScreen.value.slice(0,-2);
            subScreen.value += '÷';
        }
        if (dividedBack == '^'){
            back.value = back.value.slice(0,-2);
            screen.value = screen.value.slice(0,-2);
            subScreen.value = subScreen.value.slice(0,-2);
            back.value += '/'
            screen.value += '÷'
            subScreen.value += '÷'
        }
    })
    
    minus.addEventListener('click', function(e){
        let minusBack = screen.value.at(-2);
        if (minusBack == 'x'||minusBack == '÷'||minusBack =='-'||minusBack =='+' ||minusBack =='^'){
            back.value = back.value.slice(0,-2);
            back.value += '-';
            screen.value = screen.value.slice(0,-2);
            screen.value += '-';
            subScreen.value = subScreen.value.slice(0,-2);
            subScreen.value += '-';
        }  
        if (minusBack == '^'){
            back.value = back.value.slice(0,-2);
            screen.value = screen.value.slice(0,-1);
            subScreen.value = subScreen.value.slice(0,-1);
            back.value += '-'
            screen.value += '-'
            subScreen.value += '-'
        }
    })
    
    plus.addEventListener('click', function(e){
        let plusBack = screen.value.at(-2);
        if (plusBack == 'x'||plusBack == '÷'||plusBack =='-'||plusBack =='+' ){
            back.value = back.value.slice(0,-2);
            back.value += '+';
            screen.value = screen.value.slice(0,-2);
            screen.value += '+';
            subScreen.value = subScreen.value.slice(0,-2);
            subScreen.value += '+';
        }if (plusBack == '^'){
            back.value = back.value.slice(0,-2);
            screen.value = screen.value.slice(0,-1);
            subScreen.value = subScreen.value.slice(0,-1);
            back.value += '+'
            screen.value += '+'
            subScreen.value += '+'
        }
    })
    
    bracketOpen.addEventListener('click', function(e){  
        let check = screen.value.includes('*()')
        if(check){
            screen.value = screen.value.replace('*()','(')
            subScreen.value = subScreen.value.replace('*()','(')
        }
        let checkTwo = screen.value.includes('()');
        if(checkTwo){
            screen.value = screen.value.replace('()','(')
            subScreen.value = subScreen.value.replace('()','(')
        }
        let boBack = back.value.at(-6);
        if(boBack== '-'||boBack == '*'||boBack == '+'||boBack=='/'){
            back.value = back.value.slice(0,-5)
            back.value += '()*~'
        }
    })
    bracketClose.addEventListener('click', function(e){
        
        let counter = 0;
        for (let i = 0; i < screen.value.length; i++) {
            if (screen.value[i] === '(') {
                counter++;
            } else if (screen.value[i] === ')*') {
                counter--;
            }
            if (counter < 0) {
                screen.value = screen.value.slice(0,-1)
                subScreen.value = subScreen.value.slice(0,-1)
                back.value = back.value.slice(0,-1)
                return;
            } else{
                back.value = back.value.replace(/\)$/, '')
                // back.value = back.valu.slice()
            }
        }
        
        let charLast = screen.value.at(-3);
        if (charLast == 'x'||charLast == ''||charLast =='-'||charLast =='+' ||charLast =='^'||charLast == '(' ){
            screen.value = screen.value.replace(/\)\*$/, '')
            subScreen.value = subScreen.value.replace(/\)\*$/, '')
            back.value = back.value.slice(0,-1)
        }
        
        
        // back.value = back.value.replace('))*~',')*')
        screen.value = screen.value.replace(')*',')')
        subScreen.value = subScreen.value.replace(')*',')')
        return counter === 0;
    })
    
    dElete.addEventListener('click', function(e){
        back.value = back.value.slice(0,-1);
        screen.value = screen.value.slice(0,-1);
        subScreen.value = screen.value;
    })
    
    clear.addEventListener('click', function(e){
        back.value = "";
        screen.value = "";
        subScreen.value = "";
    });
    
})();