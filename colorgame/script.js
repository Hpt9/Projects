body= document.getElementsByTagName('body')[0];
function startMenu(){
    document.querySelector("#st-time").style.display="block";
    document.querySelector(".gameplace").style.opacity = "0.5";
    body.style.backgroundColor="gray";
    trgb=document.querySelector(".trgb");
    num1=Math.floor(Math.random() * 256);
    num2=Math.floor(Math.random() * 256);
    num3=Math.floor(Math.random() * 256);
    trgb.innerText="RGB(0,0,0)"
    trgb1="rgb("+num1+","+num2+","+num3+")";
}

function getTime(){
    document.querySelector("#st-time").style.display="none";
    document.querySelector(".gameplace").style.opacity = "1";
    body.style.backgroundColor="white";
    time=document.getElementById("time");
    tvalue=time.value;
    if(tvalue=="1"){
        setTimeout(openTab,60000)
    }else if (tvalue=="3") {
        setTimeout(openTab,180000)
    }else if(tvalue=="5"){
        setTimeout(openTab,300000)
    }else if(tvalue=="10"){
        setTimeout(openTab,600000)
    }
    
    let divs = document.querySelectorAll(".rnd")
    let num = Math.floor(Math.random() * divs.length)
    divs[num].style.backgroundColor = trgb1;
    divs[num].id="1";
    
    for(i=0;i<6;i++){ 
        trgb3=document.querySelector(".trgb");
        num12=Math.floor(Math.random() * 256);
        num22=Math.floor(Math.random() * 256);
        num32=Math.floor(Math.random() * 256);
        trgb12="rgb("+num12+","+num22+","+num32+")";
        divs[i].style.backgroundColor=trgb12;

        if(divs[i].id=="1"){
            let attributeValue = divs[i].getAttribute("style");
            rgb=attributeValue.slice(21,35);
            trueRGB="RGB"+rgb+"";
            trgb=document.querySelector(".trgb");
            trgb.innerText=trueRGB;
        }
    }
}
 var k=0;
function checkColor(val){
    if(val==1){
        k++;
        let divs2 = document.querySelectorAll(".rnd");
        for(i=0;i<6;i++){
            divs2[i].value="0"; 
            trgb3=document.querySelector(".trgb");
            num12=Math.floor(Math.random() * 256);
            num22=Math.floor(Math.random() * 256);
            num32=Math.floor(Math.random() * 256);
            trgb12="rgb("+num12+","+num22+","+num32+")";
            divs2[i].style.backgroundColor=trgb12;
        }

        red=Math.floor(Math.random() * 256);
        green=Math.floor(Math.random() * 256);
        blue=Math.floor(Math.random() * 256);
        trgb3.innerText="RGB("+red+","+green+","+blue+")";
        truecolor="rgb("+red+","+green+","+blue+")";
        

        let divs3 = document.querySelectorAll(".rnd")
        let num2 = Math.floor(Math.random() * divs3.length)
        divs3[num2].style.backgroundColor = truecolor;
        divs3[num2].id="1";
        document.querySelector(".netice").innerText="Nəticə: "+k;
        document.querySelector(".true").style.display="flex";
        setTimeout(() => {document.querySelector('.true').style.display = 'none';}, 700);
    }else if(val!=1){
        if(k>0){
            k--;
            document.querySelector(".netice").innerText="Nəticə: "+k;
        }else if(k=0){
            document.querySelector(".netice").innerText="Nəticə: "+k;
        }
        document.querySelector(".false").style.display="flex";
        setTimeout(() => {document.querySelector('.false').style.display = 'none';}, 700);
    }
}

function openTab(){
    body.style.backgroundColor="gray";
    document.querySelector(".final-scene").style.display="block";
    document.querySelector(".score").innerText="Nəticə: "+k;
    document.getElementById("selectedtime").innerText="Seçdiyiniz zaman: "+tvalue+" Dəqiqə";
}

function playAgain(){
    k=0;
    document.querySelector(".netice").innerText="Nəticə: 0";
    document.querySelector(".final-scene").style.display="none";
    body.style.backgroundColor="white";
    document.querySelector("#st-time").style.display="block";
    document.querySelector(".gameplace").style.opacity = "0.5";

    let divs2 = document.querySelectorAll(".rnd");
    for(i=0;i<6;i++){
        divs2[i].id="0"; 
    }
}

document.addEventListener('animationstart', function (e) {
    if (e.animationName === 'fade-in') {
        e.target.classList.add('did-fade-in');
    }
  });
  
  document.addEventListener('animationend', function (e) {
    if (e.animationName === 'fade-out') {
        e.target.classList.remove('did-fade-in');
     }
  });