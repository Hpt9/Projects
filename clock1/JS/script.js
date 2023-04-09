function interval(){
    var today1 = new Date();
    hour4=today1.getHours();
    min4=today1.getMinutes();
    if(hour4<10){
        hour4="0"+hour4;
    }
    if(min4<10){
        min4="0"+min4;
    }

    sat=hour4+":"+min4;

    document.getElementById("vaxt9").innerText=sat;
    weekday="";
    switch (today1.getDay()) {
        case 1:
            weekday="B.Ertəsi";
            break;
        case 2:
            weekday="Ç.Axşamı";
            break;
        case 3:
            weekday="Çərşənbə";
            break;
        case 4:
            weekday="C.Axşamı";
            break;        
        case 5:
            weekday="Cümə";
            break;
        case 6:
            weekday="Şənbə";
            break;        
        case 0:
            weekday="Bazar";
            break;

        default:
            break;
    }
    document.getElementById("day").innerText=weekday+" "+today1.getDate();
}
setInterval(interval,1000);

for(var j=0;j<360;j+=6){
    const div = document.createElement("div");
    degr=j+"deg";
    div.setAttribute("style",`width:3px;height:20px;background-color:black;position: absolute;margin-top: 35px;transform: rotate(${degr}) translateY(-279px);`)
    document.querySelector(".dotes").appendChild(div);
}
for(var k=0;k<360;k+=30){
    const div2 = document.createElement("div");
    degr=k+"deg";
    div2.setAttribute("style",`width:7px;height: 40px;margin-top: 30px;background:#020202;position: absolute;transform: rotate(${degr}) translateY(-270px);`)
    document.querySelector(".dotes").appendChild(div2);
}
for(var c=1;c<=12;c++){
    id="r"+c;
    const element = document.getElementById(id);
    deg7=c*30+"deg";
    element.setAttribute("style",`transform: rotate(${deg7}) translateY(-230px)`)

}



function startwatch(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let degree_s = 0;
    let degree_m = 0;
    let degree_h = 0;
    for(let second = 0; second<=s;second++){
        document.getElementById('sec').style.transform = 'rotate(' + degree_s + 'deg)';
        degree_s = degree_s + 6;
    }
    for(let minute = 0; minute<=m;minute++){
        document.getElementById('minut').style.transform = 'rotate(' + degree_m + 'deg)';
        degree_m = degree_m + 6;
    }
    for(let hour = 0; hour<=h;hour++){
        document.getElementById('hour').style.transform = 'rotate(' + degree_h + 'deg)';
        degree_h = degree_h + 30;
    }
    setTimeout(startwatch, 1000);
}
//Darkmode ----------------------------------------------------------
function darkModeChanger(){
    body= document.getElementsByTagName('body')[0];
    watch=document.querySelector(".watch");
    var element = document.getElementById("mode");

    if(body.style.backgroundColor=="white"){
        body.style.backgroundColor="black";
        watch.style.backgroundColor="green";
        element.classList.remove("dmode");
        element.classList.add("lmode");
    }else{
        body.style.backgroundColor="white";
        watch.style.backgroundColor="white";
        element.classList.remove("lmode");
        element.classList.add("dmode");
    }
}
//Darkmode ----------------------------------------------------------

//Alarm ----------------------------------------------------------------
function openAlarm(){
    body= document.getElementsByTagName('body')[0];
    watch=document.querySelector(".watch");
    btns=document.getElementById("bgruop");
    alarmarea=document.querySelector(".alarm-area");

    watch.style.display="none";
    btns.style.display="none";
    alarmarea.style.display="block"
    body.style.backgroundColor="black";
}

var aud1 = new Audio('Audio/alarm1.mp3');
var aud2 = new Audio('Audio/alarm2.mp3');

function playmusic() {
    var a = document.getElementById("audios");
    var value = a.value;
    if(value=="1"){
        // console.log("1");
        aud1.play();
    }else if(value=="2"){
        // console.log("2");
        aud2.play();
    }
}
function stopmusic(){
    var a = document.getElementById("audios");
    var value = a.value;

    if(value=="1" && !aud1.paused){
        aud1.pause();
    }else if(value=="2" && !aud2.paused){
        aud2.pause();
    }
}
function alarmReady(){
    body= document.getElementsByTagName('body')[0];
    watch=document.querySelector(".watch");
    btns=document.getElementById("bgruop");
    alarmarea=document.querySelector(".alarm-area");

    watch.style.display="flex";
    btns.style.display="block";
    alarmarea.style.display="none";
    body.style.backgroundColor="white";
    
    alarmtime=document.getElementById("appt").value;
    document.getElementById("alarmp").innerText=alarmtime;
    document.getElementById("alpb").setAttribute("src","Images/alarmpyellow-removebg-preview.png");

    ho=alarmtime.slice(0,2);
    minu=alarmtime.slice(3,5);
    mont=new Date().getMonth()+1;
    day4=new Date().getDate();
    yearr=new Date().getFullYear();

    interval3=setInterval(fm, 1000);

    if (hour > 12) {
        meridian = 'PM';
        hour -= 12;
      } else if (hour < 12) {
        meridian = 'AM';
        if (hour == 0) {
          hour = 12;
        }
      } else {
        meridian = 'PM';
      }
}
function fm(){
    var now = new Date().getTime();
    var countDown = new Date(mont+" "+day4+", "+yearr+" "+ho+":"+minu+":00").getTime();
    var timeleft = countDown - now;
    if(timeleft<0){
        if(day4<31){
            day5=day4+1; 
         }else if(day4==31){
             day5=1;
             mont+=1;
         }
        var now = new Date().getTime();
        var countDown = new Date(mont+" "+day5+", "+yearr+" "+ho+":"+minu+":00").getTime();
        var timeleft = countDown - now;
        var hour3 = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var min2 = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var sec2 = Math.floor((timeleft % (1000 * 60)) / 1000);
    }else{
        var now = new Date().getTime();
        var countDown = new Date(mont+" "+day4+", "+yearr+" "+ho+":"+minu+":00").getTime();
        var hour3 = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var min2 = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var sec2 = Math.floor((timeleft % (1000 * 60)) / 1000);
    }

    tmlft2=hour3+":"+min2+":"+sec2;

    var e = document.getElementById("audios");
    var value = e.value;
    if (sec2==0 && min2==0 && hour3==0) {
        clearInterval(interval3);
        document.getElementById("alpb").setAttribute("src","Images/alarmpblack-removebg-preview.png");
        if(value=="1"){
            var audio = new Audio('Audio/alarm1.mp3');
            audio.play();
            document.getElementById("alarmp").innerText="00:00";
        }else if(value=="2"){
            var audio2 = new Audio('Audio/alarm2.mp3');
            audio2.play();
            document.getElementById("alarmp").innerText="00:00";
        }
    }
}
function clear(){
    alarmtime=document.getElementById("appt").value=" ";
    document.getElementById("alarm3").innerText="00:00";
}
function closeAlarm(){
    body= document.getElementsByTagName('body')[0];
    watch=document.querySelector(".watch");
    btns=document.getElementById("bgruop");
    alarmarea=document.querySelector(".alarm-area");

    alarmarea.style.display="none";
    btns.style.display="block";
    watch.style.display="flex";
    body.style.backgroundColor="white";
}
//Alarm ------------------------------------------------------------

//Saniye -----------------------------------------------------------
function countupTimer(){
    body= document.getElementsByTagName('body')[0];
    watch=document.querySelector(".watch");
    btns=document.getElementById("bgruop");
    sec=document.querySelector(".saniye");

    watch.style.display="none";
    btns.style.display="none";
    sec.style.display="block";
    body.style.backgroundColor="#e0d09a";
}
function closeTimer(){
    body=document.getElementsByTagName('body')[0];
    watch=document.querySelector(".watch");
    btns=document.getElementById("bgruop");
    sec=document.querySelector(".saniye");

    sec.style.display="none";
    btns.style.display="block";
    watch.style.display="flex";
    body.style.backgroundColor="white";
}

function clearlist(){
    document.getElementById("lits").style.display="none";
    document.getElementById("cllist").style.display="none";
}


var ml = document.getElementById("minutes");
var sl = document.getElementById("seconds");
var totalSeconds = 0;

function startTimer(){interval=setInterval(setTime, 1000);}
function setTime() {
  ++totalSeconds;
  sl.innerHTML = pad(totalSeconds % 60);
  ml.innerHTML = pad(parseInt(totalSeconds / 60));
}
function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
function addToList(){
    document.getElementById("lits").style.display="block";
    litemp=`<li>${ml.innerText}:${sl.innerText}</li>`;
    document.getElementById("lits").innerHTML+=litemp;
}
let i = 1;
function voidd(){
    sec = setInterval (function second(){
        document.getElementById('test').style.transform = 'rotate(' + 6*i/100 + 'deg)'
        i++
    },10)
}

let m = 1;
function voidd2(){
    msec = setInterval (function second(){
        document.getElementById('test2').style.transform = 'rotate(' + 3.6*m + 'deg)'
        m++
    },10)
}

function clearTimer(){
    document.getElementById("cllist").style.display="block";
    clearInterval(interval);
    clearInterval(sec);
    clearInterval(msec);
    document.getElementById('test').style.transform = "rotate(0deg)";
    document.getElementById('test2').style.transform = "rotate(0deg)";
    i=1;
    m=1;
    totalSeconds = 0;
}
function clearlist(){
    document.getElementById('lits').innerHTML = '';
    document.getElementById("cllist").style.display="none";
    sl.innerHTML = "00";
    ml.innerHTML = "00";
}
//Saniye -----------------------------------------------------------

//Geri Sayim -------------------------------------------------------
function countDownTimer(){
    body= document.getElementsByTagName('body')[0];
    watch=document.querySelector(".watch");
    btns=document.getElementById("bgruop");
    geri=document.querySelector(".gerisayim");
    
    body.style.backgroundColor="black";
    watch.style.display="none";
    btns.style.display="none";
    geri.style.display="block";
}
function closeCdTimer(){
    body=document.getElementsByTagName('body')[0];
    watch=document.querySelector(".watch");
    btns=document.getElementById("bgruop");
    geri=document.querySelector(".gerisayim");

    geri.style.display="none";
    btns.style.display="block";
    watch.style.display="flex";
    body.style.backgroundColor="white";
}
function startCdTimer(){
    finish=document.getElementById("geri4").value;
    //console.log(finish);
    hour=finish.slice(0,2);
    minute2=finish.slice(3,5);
    month=new Date().getMonth()+1;
    day3=new Date().getDate();
    year=new Date().getFullYear();

    interval2=setInterval(mf, 1000);

    if (hour > 12) {
        meridian = 'PM';
        hour -= 12;
      } else if (hour < 12) {
        meridian = 'AM';
        if (hour == 0) {
          hour = 12;
        }
      } else {
        meridian = 'PM';
      }
}
function mf(){
        var timeStart = new Date().getTime();
        var timeEnd = new Date(month+"/"+day3+"/"+year+" "+ hour+":"+minute2+" "+meridian).getTime();
        var diff = (timeEnd - timeStart);
        if(diff<0){
            if(day3<31){
               day4=day3+1; 
            }else if(day3==31){
                day4=1;
                month+=1;
            }
            var timeStart = new Date().getTime();
            var timeEnd = new Date(month+"/"+day4+"/"+year+" "+ hour+":"+minute2+" "+meridian).getTime();
            var diff = (timeEnd - timeStart); 
            var hour2 = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            var sec = Math.floor((diff % (1000 * 60)) / 1000);
        }else{
            var timeStart = new Date().getTime();
            var timeEnd = new Date(month+"/"+day3+"/"+year+" "+ hour+":"+minute2+" "+meridian).getTime();
            var hour2 = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            var sec = Math.floor((diff % (1000 * 60)) / 1000);
        }
        if(hour2<10){
            hour2="0"+hour2;
        }
        if(min<10){
            min="0"+min;
        }
        if(sec<10){
            sec="0"+sec;
        }
        tmlft=hour2+":"+min+":"+sec;
        document.getElementById("timeleft").innerText=tmlft;

        if (document.getElementById("timeleft").innerText=== "00:00:00") {
            document.getElementById("timeleft").innerHTML = "Vaxt Tamamdır";
            clearInterval(interval2);
        }
}
function clearCdTimer(){
    document.getElementById("timeleft").innerText="";
    clearInterval(interval2);
}