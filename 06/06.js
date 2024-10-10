
const show = (s1, s2,l1,l2) => {
    console.log(s1);
    if(s1.value == '℃') s2.value = '℉';
    else s2.value = '℃';

    l1.textContent = s1.value;
    l2.textContent = s2.value;
}


document.addEventListener('DOMContentLoaded', ()=>{
    const sel1 = document.querySelector('#sel1');
    const sel2 = document.querySelector('#sel2');

    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');

    const label1 = document.querySelector('#label1');
    const label2 = document.querySelector('#label2');

    // 일반적으로 하나하나 붙이는거
    // sel1.addEventListener('change', ()=>{
    //     console.log(sel1.Value, sel2.value);
    //     if(sel1.value == '℃'){
    //         sel2.value = '℉';
    //         label1.textContent = '℃';
    //         lable2.textContent = '℉';
    //     }else{
    //         sel2.value = '℃';
    //         label1.textContent = '℉';
    //         lable2.textContent = '℃';
    //     }

    // });

    // sel2.addEventListener('change', ()=>{
    //     console.log(sel1.Value, sel2.value);
    //     if(sel2.value == '℃'){
    //         sel1.value = '℉';
    //         label1.textContent = '℉';
    //         lable2.textContent = '℃';
    //     }else{
    //         sel1.value = '℃';
    //         label1.textContent = '℃';
    //         lable2.textContent = '℉';
    //     }

    // });

    //함수이용
    sel1.addEventListener('change', ()=>{
        show(sel1,sel2,label1,label2);   
    });

    sel2.addEventListener('change', ()=>{
        show(sel2,sel1,label2,label1); 
    });
    



});



