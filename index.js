function intro(){
    window.location.href = "index.html";
}
function introres(){
    window.location.href = "https://rvrjcce.ac.in/examcell/results/regnoresultsR.php";
}

const score = {
    "A+": 3 * 10,  
    "A": 3 * 9,    
    "B": 3 * 8,    
    "C": 3 * 7,    
    "D": 3 * 6,    
    "E": 3 * 5     
};
const scores = {
    "A+": 1.5 * 10,  
    "A": 1.5 * 9,    
    "B": 1.5 * 8,    
    "C": 1.5 * 7,    
    "D": 1.5 * 6,    
    "E": 1.5 * 5     
};
const scor = {
    "A+": 1 * 10,  
    "A": 1 * 9,    
    "B": 1 * 8,  
    "C": 1 * 7,    
    "D": 1 * 6,    
    "E": 1 * 5    
};
const sco = {
    "A+": 2 * 10,  
    "A": 2 * 9,    
    "B": 2 * 8,    
    "C": 2 * 7,    
    "D": 2 * 6,    
    "E": 2 * 5     
};

function showHeading() {
    const z=document.getElementById('year').value;
    const x=document.getElementById('sem').value;
    document.getElementById('one').style.display = "none";
    document.getElementById('two').style.display = "none";
    document.getElementById('three').style.display = "none";
    document.getElementById('four').style.display = "none";
    document.getElementById('five').style.display = "none";
    document.getElementById('six').style.display = "none";
    document.getElementById('seven').style.display = "none";
    let formId="";
    if(z==="1st Year" && x==="Semester-1"){formId = "one";}
    else if(z==="1st Year" && x==="Semester-2"){formId = "two";}
    else if(z==="2nd Year" && x==="Semester-1"){formId = "three";}
    else if(z==="2nd Year" && x==="Semester-2"){formId = "four";}
    else if(z==="3rd Year" && x==="Semester-1"){formId = "five";}
    else if(z==="3rd Year" && x==="Semester-2"){formId = "six";}
    else if(z==="4th Year" && x==="Semester-1"){formId = "seven";}
    if (formId) {
        document.getElementById(formId).style.display = "block";
    }
}
function cal1(){
    const subjects = ["m1", "che", "eng", "c","dr"];
    const subj = ["cl", "el", "fcl"];
    let tot=0;
    subjects.forEach(subject =>{
        let select=document.getElementById(subject).value;
        tot+=score[select];
        
    });
    subj.forEach(sub =>{
        let sel=document.getElementById(sub).value;
        tot+=scores[sel];
    });
    let h=document.getElementById('h9').textContent=tot/19.5;
}
function cal2(){
    const subjects = ["m2", "phy", "bee", "dsa"];
    const subj = ["phyl", "dsal", "pytl"];
    let tot=0;
    subjects.forEach(subject =>{
        let select=document.getElementById(subject).value;
        
        tot+=score[select];
        
    });
    subj.forEach(sub =>{
        let sel=document.getElementById(sub).value;
        tot+=scores[sel];
    });
    let pyt=document.getElementById('pyt').value;
    let bl=document.getElementById('beeel').value;
    tot+=sco[pyt]+scor[bl];
    let h=document.getElementById('h9').textContent=tot/19.5;
}
function cal3(){
    const subjects = ["de", "dms", "co", "IOT","oop"];
    const subj = ["tclvs", "el", "oopl"];
    let tot=0;
    subjects.forEach(subject =>{
        let select=document.getElementById(subject).value;
        
        tot+=score[select];
        
    });
    subj.forEach(sub =>{
        let sel=document.getElementById(sub).value;
        tot+=scores[sel];
    });
    let pyt=document.getElementById('weblab').value;
    tot+=sco[pyt];
    let h=document.getElementById('h9').textContent=tot/21.5;
}
function cal4(){
    const subjects = ["p&s", "dbms", "os", "iotap","cn"];
    const subj = ["p&sl", "dbmsl", "osl"];
    let tot=0;
    subjects.forEach(subject =>{
        let select=document.getElementById(subject).value;
        tot+=score[select];
    });
    subj.forEach(sub =>{
        let sel=document.getElementById(sub).value;
        tot+=scores[sel];
    });
    let pyt=document.getElementById('sll').value;
    tot+=sco[pyt];
    let h=document.getElementById('h9').textContent=tot/21.5;
}
function cal5(){
    const subjects = ["atfl", "se", "daa", "iotcc","ai"];
    const subj = ["scll", "iotccl", "si"];
    let tot=0;
    subjects.forEach(subject =>{
        let select=document.getElementById(subject).value;
        tot+=score[select];
    });
    subj.forEach(sub =>{
        let sel=document.getElementById(sub).value;
        tot+=scores[sel];
    });
    let pyt=document.getElementById('ss').value;
    tot+=sco[pyt];
    let h=document.getElementById('h9').textContent=tot/21.5;
}
function cal6(){
    const subjects = ["wsn", "cd", "ii", "pe2","joe"];
    const subj = ["wsnl", "iil", "tpl"];
    let tot=0;
    subjects.forEach(subject =>{
        let select=document.getElementById(subject).value;
        tot+=score[select];
    });
    subj.forEach(sub =>{
        let sel=document.getElementById(sub).value;
        tot+=scores[sel];
    });
    let pyt=document.getElementById('socl').value;
    tot+=sco[pyt];
    let h=document.getElementById('h9').textContent=tot/21.5;
}
function cal7(){
    const subjects = ["hsse", "pe3", "pe4", "pe5","joe3","oe4","ii"];
    let tot=0;
    subjects.forEach(subject =>{
        let select=document.getElementById(subject).value;
        tot+=score[select];
    });
    let pyt=document.getElementById('soc5').value;
    tot+=sco[pyt];
    console.log(tot/23);
    let h=document.getElementById('h9').textContent=tot/23;
}
