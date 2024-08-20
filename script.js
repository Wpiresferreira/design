const root = document.querySelector(':root');


function modeOnClick(e){
    if (e.classList.contains('fa-sun')){
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

    e.classList.toggle('fa-moon');
    e.classList.toggle('fa-sun');
}
let citySelected
currentCity()
    async function currentCity() {
        const url = "https://ipgeolocation.abstractapi.com/v1/?api_key=3d8fde97b82242eba612d6d5ba5807c0"
        try {
            const response = await fetch(url);
            const result = await response.text();
            obj = JSON.parse(result);
            console.log(obj);
            citySelected = {name: obj.city, lat: obj.latitude, long: obj.longitude}
            getWeather()
        } catch (error) {
            console.error(error);
        }
        
    }
    
    async function getWeather() {
        console.log("finding weather information about " + citySelected.name);
        const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+citySelected.lat+'%2C'+citySelected.long;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6fa6d44963mshcf6eb887528eb62p1186f7jsn2b7638536b64',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            obj = JSON.parse(result);
            console.log(obj);
            
            document.getElementById("city-selected").innerText = obj.location.name
            document.getElementById("msg1").innerText = obj.current.condition.text
            document.getElementById("msg2").innerText = obj.current.temp_c + "°C"
            document.getElementById("msg3").innerText = "Like: " + obj.current.feelslike_c + "°C"
            document.getElementById("msg4").innerText = "H : " + obj.current.humidity + "%"
            document.getElementById("imgElement").innerHTML = '<img src="' + obj.current.condition.icon + '" style="width: 100%; heigth: 100%">'
            $("#button-update").hide()
            // 	 console.log(result);
        } catch (error) {
            $("#button-update").show()
            console.error(error);
        }
    }
    function update(){
    console.log(document.getElementById("cities").value)

cities.forEach(element => {
    if (element.name == document.getElementById("cities").value){
        citySelected = element
    }
});

console.log('City selected for update :' + citySelected.name);

    getWeather()

    }

    function updateNow(){
        currentCity()
    }