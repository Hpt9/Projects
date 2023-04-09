function loading(){
  if(document.querySelector('.history').getElementsByTagName('tr').length <= 1){
    const newli = document.createElement("td");
        newli.setAttribute("class","csd23");
        newlitemplate=
        `
        <td>
        <div style="display:inline-block;" class="bn2">No History</div> 
        </td>
        `;
        newli.innerHTML=newlitemplate;
        document.querySelector('.history').appendChild(newli);       
  }
}
var p=1;
function generateCode(){
    let passwordLength=document.getElementById("lengthp").value;
    let cb1 = document.getElementById("up");
    let cb2 = document.getElementById("low");
    let cb3 = document.getElementById("num");
    let cb4 = document.getElementById("sym");
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var symbols = "!@#$%^&*()-+=[]{};:',./?><\\|";
    var numbers = "0123456789";
    var password = "";
    if(cb1.checked || cb2.checked || cb3.checked || cb4.checked){
        document.querySelector(".bn2").style.display="none";
        document.querySelector(".clear").style.display="block";
        for (var i = 0; i <= passwordLength; i++) {
            var r1 = Math.floor(Math.random() * upper.length);
            var r2 = Math.floor(Math.random() * lower.length);
            var r3= Math.floor(Math.random() * numbers.length);
            var r4 = Math.floor(Math.random() * symbols.length);
            if(cb1.checked){
             password += upper.substring(r1, r1 +1);
            }
            if(cb2.checked){
             password += lower.substring(r2, r2 +1);
            }
            if(cb3.checked){
             password += numbers.substring(r3, r3 +1);
            }
            if(cb4.checked){
             password += symbols.substring(r4, r4 +1);
            }
         }
         password=password.substring(0,passwordLength);
         document.querySelector(".gcode").value=password;
        const newli = document.createElement("tr");
        newli.setAttribute("class","csd");
        newlitemplate=
        `
        <tr>
          <td class="bn hn${p}" width="90%">
            <div>${document.querySelector(".gcode").value}</div>
            <div class="hist2">${document.querySelector(".gcode").value}</div>
          </td>
          <td onclick="copy2(this.parentElement.cells[0].innerText)" class="kpy3" width="10%">
              <img src="images/copy.png" alt="ref" class="koopya">
          </td>
        </tr>
        `;
        newli.innerHTML=newlitemplate;
        document.querySelector('.history').appendChild(newli);
        p++;
    }else{
        alert("Select configuration you want!");
        return 1;
    }
}

function clearUL(){
  var listElements = document.querySelectorAll(".history td");
  for (var i = 1; (td = listElements[i]); i++) {
    td.parentNode.removeChild(td);
  }
  document.querySelector(".clear").style.display="none";
  document.querySelector(".bn2").style.display="block";
}

function copy2(text){
  var input = document.createElement('textarea');
  input.innerHTML = text;
  document.body.appendChild(input);
  input.select();
  var result = document.execCommand('copy');
  document.body.removeChild(input);
  return result;
}

function copy(){
  var copyTextarea = document.querySelector('.gcode');
  copyTextarea.focus();
  copyTextarea.select();
    
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
    if(copyTextarea.value==""){
        
        alert("Firstly generate code!");
    }
  }catch (err) {
      alert('Oops, unable to copy');
  }
}
var rangeSlider = document.getElementById("lengthp");
var rangeBullet = document.getElementById("rs-bullet");
rangeSlider.addEventListener("input", showSliderValue, false);
function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition*78) + "%";
}
function countCheckboxes(){
  var a = document.forms["main"];
  var x =a.querySelectorAll('input[type="checkbox"]:checked').length;
  var x2 =4-x;
  for(i=1;i<=x;i++){
    document.querySelector(`.ham${i}`).style.backgroundColor = "red";
  }
  for(l=1;l<=x2;l++){
    document.querySelector(`.ham${5-l}`).style.backgroundColor = "white";
  }
}