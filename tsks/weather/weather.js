var url2="http://api.weatherapi.com/v1/forecast.json?key=cb7565cfb0f74e86a0f155847221912&q=Baku&days=7&aqi=no&alerts=no";
const urlcities="countries.json";
cities=[];
async function getData(){
    getCities()
    const response2= await fetch(url2) ;
    const data2=await response2.json();
    img=data2.forecast.forecastday[0].day.condition.icon;
    l=img.length;
    document.querySelector(".imgw2").setAttribute("src", `${"https://"+data2.forecast.forecastday[0].day.condition.icon}`);
    document.querySelector(".max").innerText=data2.forecast.forecastday[0].day.maxtemp_c;
    document.querySelector(".min").innerText=data2.forecast.forecastday[0].day.mintemp_c;
    rain=
    `
        <img src="images/rain.png" width="14px" height="14px" alt="" srcset="">
        ${data2.forecast.forecastday[0].day.daily_chance_of_rain+"%"}
    `;
    humidity=
    `
        <img src="images/humidity.png" width="14px" height="14px" alt="" srcset="">
        ${data2.forecast.forecastday[0].day.avghumidity+"%"}
    `;
    wind=
    `
        <img src="images/wind.png" width="14px" height="14px" alt="" srcset="">
        ${data2.forecast.forecastday[0].day.maxwind_kph+"km/h"}
    `;
    document.querySelector(".rain").innerHTML=rain;
    document.querySelector(".hum").innerHTML=humidity;
    document.querySelector(".wind").innerHTML=wind;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var A2 = new Date(data2.current.last_updated);
    var B2 = monthNames[A2.getMonth()]+","+A2.getDate();
    document.querySelector(".date").innerText=B2;
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    for(k=1;k<data2.forecast.forecastday.length;k++){
        var date23 = new Date(data2.forecast.forecastday[k].date);
        weekday1=date23.getDay();
        document.querySelector(`.day${k}`).innerText=weekday[weekday1];
        iconlink="https:"+data2.forecast.forecastday[k].day.condition.icon;
        document.querySelector(`.icon${k}`).setAttribute("src",`${"https:"+data2.forecast.forecastday[k].day.condition.icon}`)
        document.querySelector(`.dayw${k}`).innerText=data2.forecast.forecastday[k].day.maxtemp_c+"ºC";
        document.querySelector(`.dayn${k}`).innerText=data2.forecast.forecastday[k].day.mintemp_c+"ºC";
    }
    var dt = new Date();
    for(j=0;j<data2.forecast.forecastday[0].hour.length;j++){
        var dt2=new Date(data2.forecast.forecastday[0].hour[j].time);
        if(dt.getHours()==dt2.getHours()){
            document.querySelector(".noww").innerText=data2.forecast.forecastday[0].hour[j].temp_c+"ºC";
            if(dt2.getHours()=="21"){
                document.querySelector(".item11").innerText=data2.forecast.forecastday[0].hour[j].temp_c+"ºC";
                document.querySelector(".item1img").setAttribute("src",`${"https:"+data2.forecast.forecastday[0].hour[21].condition.icon}`)
                document.querySelector(".item22").innerText=data2.forecast.forecastday[0].hour[j+1].temp_c+"ºC";
                document.querySelector(".item2img").setAttribute("src",`${"https:"+data2.forecast.forecastday[0].hour[22].condition.icon}`)
                document.querySelector(".item33").innerText=data2.forecast.forecastday[0].hour[j+2].temp_c+"ºC";
                document.querySelector(".item3img").setAttribute("src",`${"https:"+data2.forecast.forecastday[0].hour[23].condition.icon}`)
                document.querySelector(".item44").innerText=data2.forecast.forecastday[0].hour[0].temp_c+"ºC";
                document.querySelector(".item4img").setAttribute("src",`${"https:"+data2.forecast.forecastday[0].hour[0].condition.icon}`)
                document.querySelector(".hour1").innerText=data2.forecast.forecastday[0].hour[j].time.substring(10,data2.forecast.forecastday[0].hour[j].time.length)
                document.querySelector(".hour2").innerText=data2.forecast.forecastday[0].hour[j+1].time.substring(10,data2.forecast.forecastday[0].hour[j+1].time.length)
                document.querySelector(".hour3").innerText=data2.forecast.forecastday[0].hour[j+2].time.substring(10,data2.forecast.forecastday[0].hour[j+2].time.length)
                document.querySelector(".hour4").innerText=data2.forecast.forecastday[0].hour[0].time.substring(10,data2.forecast.forecastday[0].hour[j].time.length)
            }else if(dt2.getHours()=="22"){
                document.querySelector(".item11").innerText=data2.forecast.forecastday[0].hour[j].temp_c+"ºC";
                document.querySelector(".item1img").setAttribute("src",`${"https:"+data2.forecast.forecastday[0].hour[22].condition.icon}`)
                document.querySelector(".item22").innerText=data2.forecast.forecastday[0].hour[j+1].temp_c+"ºC";
                document.querySelector(".item2img").setAttribute("src",`${"https:"+data2.forecast.forecastday[0].hour[23].condition.icon}`)
                document.querySelector(".item33").innerText=data2.forecast.forecastday[0].hour[0].temp_c+"ºC";
                document.querySelector(".item3img").setAttribute("src",`${"https:"+data2.forecast.forecastday[0].hour[0].condition.icon}`)
                document.querySelector(".item44").innerText=data2.forecast.forecastday[0].hour[1].temp_c+"ºC";
                document.querySelector(".item4img").setAttribute("src",`${"https:"+data2.forecast.forecastday[0].hour[1].condition.icon}`)
                document.querySelector(".hour1").innerText=data2.forecast.forecastday[0].hour[j].time.substring(10,data2.forecast.forecastday[0].hour[j].time.length)
                document.querySelector(".hour2").innerText=data2.forecast.forecastday[0].hour[j+1].time.substring(10,data2.forecast.forecastday[0].hour[j+1].time.length)
                document.querySelector(".hour3").innerText=data2.forecast.forecastday[0].hour[0].time.substring(10,data2.forecast.forecastday[0].hour[0].time.length)
                document.querySelector(".hour4").innerText=data2.forecast.forecastday[0].hour[1].time.substring(10,data2.forecast.forecastday[0].hour[1].time.length)
            }else if(dt2.getHours()=="23"){
                document.querySelector(".item11").innerText=data2.forecast.forecastday[0].hour[j].temp_c+"ºC";
                document.querySelector(".item1img").setAttribute("src",`${"https:"+data2.forecast.forecastday[0].hour[23].condition.icon}`)
                document.querySelector(".item22").innerText=data2.forecast.forecastday[0].hour[0].temp_c+"ºC";
                document.querySelector(".item2img").setAttribute("src",`${"https:"+data2.forecast.forecastday[0].hour[0].condition.icon}`)
                document.querySelector(".item33").innerText=data2.forecast.forecastday[0].hour[1].temp_c+"ºC";
                document.querySelector(".item3img").setAttribute("src",`${"https:"+data2.forecast.forecastday[0].hour[1].condition.icon}`)
                document.querySelector(".item44").innerText=data2.forecast.forecastday[0].hour[2].temp_c+"ºC";
                document.querySelector(".item4img").setAttribute("src",`${"https:"+data2.forecast.forecastday[0].hour[2].condition.icon}`)
                document.querySelector(".hour1").innerText=data2.forecast.forecastday[0].hour[j].time.substring(10,data2.forecast.forecastday[0].hour[j].time.length)
                document.querySelector(".hour2").innerText=data2.forecast.forecastday[0].hour[0].time.substring(10,data2.forecast.forecastday[0].hour[0].time.length)
                document.querySelector(".hour3").innerText=data2.forecast.forecastday[0].hour[1].time.substring(10,data2.forecast.forecastday[0].hour[1].time.length)
                document.querySelector(".hour4").innerText=data2.forecast.forecastday[0].hour[2].time.substring(10,data2.forecast.forecastday[0].hour[2].time.length)
            }else{
                document.querySelector(".item11").innerText=data2.forecast.forecastday[0].hour[j].temp_c+"ºC";
                document.querySelector(".item1img").setAttribute("src",`${"https:"+data2.forecast.forecastday[0].hour[j].condition.icon}`)
                document.querySelector(".item22").innerText=data2.forecast.forecastday[0].hour[j+1].temp_c+"ºC";
                document.querySelector(".item2img").setAttribute("src",`${"https:"+data2.forecast.forecastday[0].hour[j+1].condition.icon}`)
                document.querySelector(".item33").innerText=data2.forecast.forecastday[0].hour[j+2].temp_c+"ºC";
                document.querySelector(".item3img").setAttribute("src",`${"https:"+data2.forecast.forecastday[0].hour[j+2].condition.icon}`)
                document.querySelector(".item44").innerText=data2.forecast.forecastday[0].hour[j+3].temp_c+"ºC";
                document.querySelector(".item4img").setAttribute("src",`${"https:"+data2.forecast.forecastday[0].hour[j+3].condition.icon}`)
                document.querySelector(".hour1").innerText=data2.forecast.forecastday[0].hour[j].time.substring(10,data2.forecast.forecastday[0].hour[j].time.length)
                document.querySelector(".hour2").innerText=data2.forecast.forecastday[0].hour[j+1].time.substring(10,data2.forecast.forecastday[0].hour[j+1].time.length)
                document.querySelector(".hour3").innerText=data2.forecast.forecastday[0].hour[j+2].time.substring(10,data2.forecast.forecastday[0].hour[j+2].time.length)
                document.querySelector(".hour4").innerText=data2.forecast.forecastday[0].hour[j+3].time.substring(10,data2.forecast.forecastday[0].hour[j+3].time.length)
            }
        }
    }
    var sdate= new Date();
    if(sdate.getHours()<"19" && sdate.getHours()>"8"){
        if(data2.current.condition.text=="Clear" || data2.current.condition.text=="Sunny" || data2.current.condition.text=="Partly cloudy"){
            document.querySelector(".cent").classList.remove('nosunny');
            document.querySelector(".humidity").classList.remove('nosunny2');
            document.querySelector(".grid-container").classList.remove('nosunny2');
            document.querySelector(".nextf").classList.remove('nosunny2');
            document.querySelector(".cent").classList.add('sunny');
            document.querySelector(".humidity").classList.add('sunny2');
            document.querySelector(".grid-container").classList.add('sunny2');
            document.querySelector(".nextf").classList.add('sunny2');
        }else{
            document.querySelector(".cent").classList.remove('sunny');
            document.querySelector(".humidity").classList.remove('sunny2');
            document.querySelector(".grid-container").classList.remove('sunny2');
            document.querySelector(".nextf").classList.remove('sunny2');
            document.querySelector(".cent").classList.add('nosunny');
            document.querySelector(".humidity").classList.add('nosunny2');
            document.querySelector(".grid-container").classList.add('nosunny2');
            document.querySelector(".nextf").classList.add('nosunny2');
        }
    }else{
        document.querySelector(".cent").classList.remove('sunny');
            document.querySelector(".humidity").classList.remove('sunny2');
            document.querySelector(".grid-container").classList.remove('sunny2');
            document.querySelector(".nextf").classList.remove('sunny2');
            document.querySelector(".cent").classList.add('nosunny');
            document.querySelector(".humidity").classList.add('nosunny2');
            document.querySelector(".grid-container").classList.add('nosunny2');
            document.querySelector(".nextf").classList.add('nosunny2');
    }
};

const select = document.querySelector(".select");
const options_list = document.querySelector(".options-list");
const options = document.querySelectorAll(".option");

select.addEventListener("click", () => {
  options_list.classList.toggle("active");
});
dtl=0;
async function getCities(){
    const response= await fetch(urlcities) ;
    const data=await response.json();
    for(i=0;i<data.length;i++){
        cities[i]=data[i];
        const newop = document.createElement("div");
            newop.setAttribute("onclick",`countries(this.innerText)`);
            newoptemplate=
            `
            <div class="option">${cities[i].country}, ${cities[i].city}</div>
            `;
            newop.innerHTML=newoptemplate;
            document.querySelector('.options-list').appendChild(newop);
    }
}
function countries(city){
    options.forEach((option) => {option.classList.remove('selected')});
    options_list.classList.toggle("active");
    document.querySelector(".span").innerText=city;
    url2="http://api.weatherapi.com/v1/forecast.json?key=cb7565cfb0f74e86a0f155847221912&q="+city+"&days=7&aqi=no&alerts=no";
    getData()
}
