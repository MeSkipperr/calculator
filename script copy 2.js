(function (){
    //memanggil HTML
    const back = document.querySelector('.back');
    const screen = document.querySelector('.screen');
    const subScreen = document.querySelector('.subScreen');
    const buttons =  document.querySelectorAll('.btn');
    const buttonOpration =  document.querySelectorAll('.btn-operasi');
    const clear = document.querySelector('.btn-clear');
    const samaDengan = document.querySelector('.btn-equal');
    const dElete = document.querySelector('.btn-delete');
    const next = document.querySelector('.btn-next')
    function change (){//mengubah simbol value back
        back.value = back.value.replace('÷','/')
        back.value = back.value.replace('x','*')
        back.value = back.value.replace('^','**')
        back.value = back.value.replace('(','*()')
    }
    function changeBack(){
        back.value = back.value.replace('(','()')
        back.value = back.value.replace('**','^')
        back.value = back.value.replace('/','÷')
        back.value = back.value.replace('*','x')
    }
    //tombol next(->)
    next.onclick = function(){
        alert('OPERASI MATEMATIKA LAINNYA AKAN SEGERA DI TAMBAHKAN')
    }
    //mendapatkan data dari tombol
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let data = e.target.dataset.num; //mendapatkan data dari html
            let checkKurungTutup = back.value.at(-1);
            if(checkKurungTutup == ')'){ //untuk operasi dalam kurung()
                if (back.value.length >= 2) {
                    let sliceCount = back.value.slice(-2).split('').filter(char => char === ')').length;
                    let splitCount = back.value.split('').reverse().slice(0, 2).filter(char => char === ')').length;
                    if(sliceCount === splitCount){
                        var hasil = splitCount||sliceCount;
                    }
                }
                let dalamKurung = back.value;
                let part1 = dalamKurung.slice(-hasil);
                let part2 = dalamKurung.slice(0, -hasil);
                back.value= part2.concat(data, part1);
                screen.value = subScreen.value += data;
            }else{
                back.value += data;
                screen.value += data;
                subScreen.value += data;
            }
            subScreen.value = eval(back.value);
        })
    });
    buttonOpration.forEach(function(button){
        button.addEventListener('click', function(e){
            let data = e.target.dataset.num; //mendapatkan data dari html
            if (back.value.length >= 2) {
                let sliceCount = back.value.slice(-2).split('').filter(char => char === ')').length;
                let splitCount = back.value.split('').reverse().slice(0, 2).filter(char => char === ')').length;
                if(sliceCount === splitCount){
                    var hasil = splitCount||sliceCount;
                }
            }

            let checkKurungTutup = back.value.at(-1);
            if(checkKurungTutup == ')'){
                let dalamKurung = back.value;
                let part1 = dalamKurung.slice(-hasil);
                let part2 = dalamKurung.slice(0, -hasil);
                back.value= part2.concat(data, part1);
                screen.value += data;
                subScreen.value += data;
                let before = screen.value.at(screen.value.length-screen.value.lastIndexOf(data));
                if(['x','÷','-','+','^'].includes(data)){
                    if(['x','÷','-','+','^'].includes(before)){
                        screen.value = screen.value.replace(before+data,data);
                        subScreen.value = subScreen.value.replace(before+data,data);
                        changeBack();
                        back.value = back.value.replace(before+data,data);
                        change()
                    }
                }
            }else{
                back.value += data;
                screen.value += data;
                subScreen.value += data;
                let before = screen.value.at(screen.value.length-screen.value.lastIndexOf(data));
                if(['x','÷','-','+','^'].includes(data)){
                    if(['*','x','÷','-','+','^'].includes(before)){
                        screen.value = screen.value.replace(before+data,data);
                        subScreen.value = subScreen.value.replace(before+data,data);
                        changeBack();
                        back.value = back.value.replace(before+data,data);
                        change()
                    }
                    if(before=='('){
                        back.value = back.value.replace('*'+data,data)
                    }
                }
                let charFirst = screen.value.at(0); //supaya tidak ada operasi yang tampil pada display
                if (charFirst == 'x' ||charFirst == '÷'||charFirst =='-'||charFirst =='+' ||charFirst =='^'||charFirst ==')'){
                    [back.value, screen.value, subScreen.value] = [back.value.slice(1),screen.value.slice(1), subScreen.value.slice(1)];
                }
            }
            if (data == '('){
                let back1 = screen.value.at(-2)
                if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(back1)){
                    back.value = back.value.slice(0,-1) +'*()';
                }else{
                    back.value += ')';
                }
            }
            subScreen.value = screen.value;
            if(data==')'){
                let counter = 0;
                for (let i = 0; i < screen.value.length; i++) {
                    if (screen.value[i] === '(') {
                        counter++;
                    } else if (screen.value[i] === ')') {
                        counter--;
                    }
                }
                if (counter === 0) {
                    let check = screen.value.at(-2);
                    if(['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(check)){
                        back.value = back.value.slice(0,-1)+'*';
                        let hasil = back.value;
                        hasil = hasil.slice(0,-1);
                        console.log(true)
                        subScreen.value = eval(hasil)
                    } else{
                        [back.value, screen.value, subScreen.value] = [back.value.slice(0,-1),screen.value.slice(0,-1), subScreen.value.slice(0,-1)];
                        
                    }
                } else {
                    [back.value, screen.value, subScreen.value] = [back.value.slice(0,-1),screen.value.slice(0,-1), subScreen.value.slice(0,-1)];
                }
        }
            })
    })
    samaDengan.addEventListener('click', function (e){ //function tombol sama dengan
        if (back.value === ''){
            back.value = '';
        }else{
            back.value = eval(back.value);
            screen.value = eval(back.value);
            subScreen.value =""; 
        }
    })
    dElete.addEventListener('click', function(e){
        let check = screen.value.at(-1);
        if(check == '('){
            let check2 = screen.value.at(-2);
            if(['-', '+', 'x', '÷'].includes(check2)){
                back.value = back.value.slice(0,-1);
            }else{
                back.value =back.value.slice(0,-2);
            }
        }
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