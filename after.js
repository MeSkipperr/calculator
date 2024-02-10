(function (){
    
    
    //memanggil HTML
    const back = document.querySelector('.back');
    const screen = document.querySelector('.screen');
    const subScreen = document.querySelector('.subScreen');
    const buttons =  document.querySelectorAll('.btn');
    const clear = document.querySelector('.btn-clear');
    const samaDengan = document.querySelector('.btn-equal');
    const dElete = document.querySelector('.btn-delete');
    const pangkat = document.querySelector('.btn-power');
    const perkalian = document.querySelector('.btn-multiple');
    const pembagian = document.querySelector('.btn-divided');
    const pengurangan= document.querySelector('.btn-minus');
    const pertambahan= document.querySelector('.btn-plus');
    const kurungBuka = document.querySelector('.btn-bracketOpen');
    const kurungTutup = document.querySelector('.btn-bracketClose');
    const next = document.querySelector('.btn-next')
    
    //tombol next(->)
    next.onclick = function(){
        alert('OPERASI MATEMATIKA LAINNYA AKAN SEGERA DI TAMBAHKAN')
    }
    
    //mendapatkan data dari tombol
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let data = e.target.dataset.num; //mendapatkan data dari html
            let checkKurungTutup = back.value.at(-1)
            if(checkKurungTutup == ')'){ //untuk operasi dalam kurung()
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
            change() //menjalakan function change yang mengubah screen dan subscreen
            let charFirst = back.value.at(0); //supaya tidak ada operasi yang tampil pada display
            if (charFirst == '*' ||charFirst == '/'||charFirst =='-'||charFirst =='+' ||charFirst =='^'||charFirst ==')'){
                back.value=back.value.slice(1);
                screen.value=screen.value.slice(1);
                subScreen.value=subScreen.value.slice(1);
            }
            let charLast = screen.value.at(-1); //mengatur hasil subscreen
            if (charLast == '*'||charLast == '/'||charLast =='-'||charLast =='+' ||charLast =='^' ||charLast === undefined|| charLast =='('){
                subScreen.value = screen.value;
            } else{
                subScreen.value = eval(back.value);
            }
        })
    });
    function change (){//mengubah bentuk simbol dari display back dan di munculkan pada screen dan subscreen
        screen.value = screen.value.replace('*()','(');
        screen.value = screen.value.replace('()','(');
        screen.value = screen.value.replace(')*',')');
        screen.value = screen.value.replace(')*',')');
        screen.value = screen.value.replace('**','^');
        screen.value = screen.value.replace(')*',')');
        screen.value = screen.value.replace('*','x');
        screen.value = screen.value.replace('/','÷');
        subScreen.value = subScreen.value.replace('*()','(');
        subScreen.value = subScreen.value.replace('()','(');
        subScreen.value = subScreen.value.replace('**','^');
        subScreen.value = subScreen.value.replace('/','÷');
        subScreen.value = subScreen.value.replace(')*',')');
        subScreen.value = subScreen.value.replace('*','x');
        subScreen.value = subScreen.value.replace(')*',')');
        subScreen.value = subScreen.value.replace(')*',')');
    }
    samaDengan.addEventListener('click', function (e){ //function tombol sama dengan
        if (back.value === ''){
            back.value = '';
        }else{
            back.value = eval(back.value);
            screen.value = eval(back.value);
            subScreen.value =""; 
        }
    })
    pangkat.addEventListener('click', function(e){
        let before = screen.value.at(-2);
        if(before == 'x' || before == '÷'|| before =='-'||before=='+'||before =='^'){
            screen.value = screen.value.replace(before+'^','^');
            subScreen.value = subScreen.value.replace(before+'^','^');
            back.value = back.value.slice(0,-3);
            back.value += '**';
        }
        if (before == '^'){
            back.value = back.value.slice(0,-2) + '**' + back.value.slice(back.value.length);
            back.value = back.value.slice(0,-3);
            back.value += '**';
        }
    })
    perkalian.addEventListener('click', function(e){
        //mengubah operasi sebelumnya (8- => 8x)
        let before = screen.value.at(-2);
        if(before == 'x' || before == '÷'|| before =='-'||before=='+'||before =='^'){
            screen.value = screen.value.replace(before+'x','x');
            subScreen.value = subScreen.value.replace(before+'x','x');
            back.value =back.value.slice(0,-2);
            back.value += '*';
        }
        if (before == '^'){
            back.value = back.value.slice(0,-2) + '*' + back.value.slice(back.value.length);
        }
    } )    
    
    pembagian.addEventListener('click', function(e){
        //mengubah operasi sebelumnya (8- => 8÷)
        let before = screen.value.at(-2);
        if(before == 'x' || before == '÷'|| before =='-'||before=='+'||before =='^'){
            screen.value = screen.value.replace(before+'÷','÷');
            subScreen.value = subScreen.value.replace(before+'÷','÷');
            back.value =back.value.slice(0,-2);
            back.value += '/';
        }
        if (before == '^'){
            back.value = back.value.slice(0,-2) + '/' + back.value.slice(back.value.length);
        }
    })
    
    pengurangan.addEventListener('click', function(e){
        let before = screen.value.at(-2);
        if(before == 'x' || before == '÷'|| before =='-'||before=='+'||before =='^'){
            screen.value = screen.value.replace(before+'-','-');
            subScreen.value = subScreen.value.replace(before+'-','-');
            back.value =back.value.slice(0,-2);
            back.value += '-';
        }
        if (before == '^'){
            back.value = back.value.slice(0,-2) + '-' + back.value.slice(back.value.length);
        }
    })
    
    pertambahan.addEventListener('click', function(e){
        let before = screen.value.at(-2);
        if(before == 'x' || before == '÷'|| before =='-'||before=='+'||before =='^'){
            screen.value = screen.value.replace(before+'+','+');
            subScreen.value = subScreen.value.replace(before+'+','+');
            back.value =back.value.slice(0,-2);
            back.value += '+';
        }
        if (before == '^'){
            back.value = back.value.slice(0,-2) + '/' + back.value.slice(back.value.length);
        }
    })
    
    kurungBuka.addEventListener('click', function(e){  
        let before = back.value.at(-4);
        if(before == '*' || before == '/'|| before =='-'||before=='+'||before =='**'){
            screen.value = screen.value.replace(before+'*()',before+'()');
            subScreen.value = subScreen.value.replace(before+'*()',before+'()');
            back.value = back.value.replace(before+'*()',before+'()');
        }
    })
    kurungTutup.addEventListener('click', function(e){
        let counter = 0;
        for (let i = 0; i < screen.value.length; i++) {
            if (screen.value[i] === '(') {
                counter++;
            } else if (screen.value[i] === ')') {
                counter--;
            }
        }

        if (counter === 0) {
            console.log("String ')' memiliki pasangan '('");
            back.value = back.value.slice(0,-1);
            subScreen.value = subScreen.value.slice(0,-1)
        } else {
            back.value = back.value.slice(0,-1);
            screen.value =screen.value.replace('))', ")")
            console.log('test')
        }
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