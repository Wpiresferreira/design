const root = document.querySelector(':root');


function modeOnClick(e){
    if (e.classList.contains('fa-sun-o')){
        console.log('Sun')
        root.style.setProperty('--color1', 'black');
        root.style.setProperty('--color2', '#f1b420');
        root.style.setProperty('--color3', 'red');
        root.style.setProperty('--color4', '#fffae0');
        // root.style.setProperty('--back1', "url('./img/backgroung-train-dark.jpg'");
        
    }else{
        console.log('Moon');
        // root.style.setProperty('--back1', "url('./img/backgroung-train.jpg'");
        root.style.setProperty('--color1', '#fffae0');
        root.style.setProperty('--color2', '#f1b420');
        root.style.setProperty('--color3', 'red');
        root.style.setProperty('--color4', 'black');
    }

    e.classList.toggle('fa-moon-o');
    e.classList.toggle('fa-sun-o');
}
