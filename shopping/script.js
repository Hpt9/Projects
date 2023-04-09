function readmore(){
    document.querySelector(".dots").style.display="none";
    document.querySelector(".read-more2").style.display="inline";
    document.querySelector(".less").style.display="inline";
}

function less(){
    document.querySelector(".dots").style.display="inline";
    document.querySelector(".read-more2").style.display="none";
    document.querySelector(".less").style.display="none";
}

function selectMonth(){
    var select = document.getElementById('cards');
    // var value = select.options[select.selectedIndex].value;
    
    document.querySelector(".side-menu").style.height="500px";

    document.querySelector(".price").style.height="39%";
    document.querySelector(".order").style.height="23%";
    document.querySelector(".card-order").style.height="35%";
    document.querySelector("#cards").style.height="20%";
}
function changePhoto(val){
    mainPhoto=document.querySelector(".mainphoto2");
    // console.log(val)
    switch (val) {
        case "1":
            mainPhoto.setAttribute("src","photos/img1.jpg");
            mainPhoto.setAttribute("style","width:60%;height:100%");
            break;
        case "2":
            mainPhoto.setAttribute("src","photos/img2.jpg");
            break;
        case "3":
            mainPhoto.setAttribute("src","photos/img3.jpg");
            mainPhoto.setAttribute("style","width:49.3%;");
            break;
        case "4":
            mainPhoto.setAttribute("src","photos/img4.jpg");
            mainPhoto.setAttribute("style","width:60%;");
            break;       
        default:
            break;
    }
}
i=0;
imgarray=["photos/img1.jpg","photos/img2.jpg","photos/img3.jpg","photos/img4.jpg"];
function setslide(num){
    mainPhoto=document.querySelector(".mainphoto2");
    mainPhoto.setAttribute("src",imgarray[i]);
    if(i==0){
        mainPhoto.setAttribute("style","width:60%;");
    }else if(i==1){
        mainPhoto.setAttribute("style","width:60%;");
    }else if(i==2){
        mainPhoto.setAttribute("style","width:49.3%;");
    }else if(i==3){
        mainPhoto.setAttribute("style","width:60%;");
    }
    i-=num;
    if(i==imgarray.length){
        i=0;
    }else if(i<0){
        i=3;
    }
}

for(var j=0;j<5;j++){
    const star = document.createElement("span");
    star.setAttribute("class","material-symbols-outlined");
    star.innerText="star";
    document.querySelector(".main-star").appendChild(star);
    if(j==4){
        star.style.color="gray";
    }
}
for(var j=0;j<5;j++){
    const coms=document.querySelectorAll(".comment-stars")
    for(k=1;k<6;k++){
    const star2 = document.createElement("span");
    star2.setAttribute("class","material-symbols-outlined");
    star2.innerText="star";
    document.querySelector(`.comment-stars${k}`).appendChild(star2);
    }
}

function moreComments(){
    cmt3=document.querySelector(".cmt3");
    cmt4=document.querySelector(".cmt4");
    cmt5=document.querySelector(".cmt5");

    cmt3.classList.remove("grad");
    cmt4.style.display="block";
    cmt5.style.display="block";
    document.querySelector(".more-comment").style.display="none";
    document.querySelector(".less-comment").style.display="block";
}
function lessComments(){
    cmt3=document.querySelector(".cmt3");
    cmt4=document.querySelector(".cmt4");
    cmt5=document.querySelector(".cmt5");

    cmt3.classList.add("grad");
    cmt4.style.display="none";
    cmt5.style.display="none";
    document.querySelector(".more-comment").style.display="block";
    document.querySelector(".less-comment").style.display="none";
}
