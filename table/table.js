const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

function showStudents(){
    if(document.getElementById("stable").style.display == "inline"){
        document.getElementById("spinner").style.display = "none";
        setTimeout(showStudentss,0)
    }else if(document.getElementById("spinner").style.display == "none"){
        document.getElementById("spinner").style.display = "block";
        setTimeout(showStudentss,1000)
    }
}

function showTeachers(){
    if(document.getElementById("tetable").style.display == "inline"){
        document.getElementById("spinner").style.display = "none";
        setTimeout(showTeacherss,0)
    }else if(document.getElementById("spinner").style.display == "none"){
        document.getElementById("spinner").style.display = "block";
        setTimeout(showTeacherss,1000)
    }
}
let sdata= [];
function showStudentss(){
    document.getElementById("spinner").style.display = "none";
    if(document.getElementById("stable").style.display == "none"){
        document.getElementById("stable").style.display = "inline";   
        btn.style.backgroundColor = 'red';
        btn.innerText="Hide Students Table";
    }else if(document.getElementById("stable").style.display == "inline"){
        document.getElementById("stable").style.display = "none";
            btn.style.backgroundColor = 'blue';
            btn.innerText="Show Students Table";
    };
    
    if (sdata.length==0){
        fetch("./student.json")
        .then(function(resp){
            return resp.json();
        })
        .then(function(data){
            sdata.push(data);
            for (var i in data){
                var table = document.getElementById("stable");
                var row = table.insertRow(-1);
                trtemplate=`
                                <td>${data[i].id}</td>
                                <td>${data[i].ad}</td>
                                <td>${data[i].soyad}</td>
                                <td>${data[i].nomre}</td>
                                <td><button class="delete" onclick="Delete()"></button></td>
                            `;
                            row.innerHTML=trtemplate;
            }
        });
    }else if(sdata.length!=0){
        
    }

};

let tdata=[];

function showTeacherss(){
    document.getElementById("spinner").style.display = "none";
    if(document.getElementById("tetable").style.display == "none"){
        document.getElementById("tetable").style.display = "inline";
            btn2.style.backgroundColor = 'red';
            btn2.innerText="Hide Teachers Table";
    }else if(document.getElementById("tetable").style.display == "inline"){
        document.getElementById("tetable").style.display = "none";
            btn2.style.backgroundColor = 'blue';
            btn2.innerText="Show Teachers Table";
    }

    if (tdata.length==0){
        fetch("./teacher.json")
        .then(function(resp){
            return resp.json();
        })
        .then(function(data){
            tdata.push(data);
            for (var i in data){
                var table = document.getElementById("tetable");
                var row = table.insertRow(-1);
                trtemplate=`
                                <td>${data[i].id}</td>
                                <td>${data[i].ad}</td>
                                <td>${data[i].soyad}</td>
                                <td>${data[i].nomre}</td>
                                <td><button class="delete" onclick="Delete()"></button></td>
                            `;
                            row.innerHTML=trtemplate;
            }
        });
    }else if(tdata.length!=0){
        
    }
};

function Delete() {
    var td = event.target.parentNode; 
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);

    // var x = document.getElementById("stable").rows.length;
    // if(x==1 && document.getElementById("stable").style.display == "block"){
    //     document.getElementById("NT").style.display="block";
    // }else{
    //     document.getElementById("NT").style.display="none";
    // }

    // var y = document.getElementById("tetable").rows.length;
    // if(y==1){
    //     document.getElementById("NT2").style.display="block";
    // }
}