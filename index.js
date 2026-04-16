let checkit = document.getElementById("checkbox");
let label1 = document.querySelector(".label");
let overLay = document.querySelector(".overlay");
let form = document.querySelector(".form")


// text contents
let titleh2 = document.querySelector(".h2");
let descp = document.querySelector(".dp");
let statuscl = document.querySelector(".statuscl");
let date = document.querySelector(".date");
let totages = document.querySelector(".tags")
let slstatsu = document.querySelector("#statush");



let title = document.querySelector("#title");
let description = document.querySelector("#description");
let status2 = document.querySelector("#status");
let priority = document.querySelector("#priority");
let duedate = document.querySelector("#due-date");
let tags = document.querySelector("#tags");
let li = document.querySelector(".li")




let obj = {
    obgtitle: "",
    obgdescription: "",
    obgstatus: "",
    obgpriority: "",
    obgduedate: "",
    obgtags: "",

}


function HandleSubmit(e){
    e.preventDefault();
    e.stopPropagation()


    let pagetitle = title.value.trim();
    let pagedescription = description.value.trim();
    let pagestatus = status2.value;
    let pagepriority = priority.value;
    let pageduedate = duedate.value;
    let pagetages = tags.value;
    console.log(pagetitle, pagedescription, pagestatus, pagepriority, pageduedate, pagetages)
    

    if(pagetitle === "" || pagedescription === "" || pagestatus === "" || pagepriority === "" || pageduedate === "" || pagetages === ""){
        alert("please put all your details properly")
        return false
    }else{
        obj.obgtitle = pagetitle;
        obj.obgdescription = pagedescription;
        obj.obgstatus = pagestatus;
        obj.obgpriority = pagepriority;
        obj.obgduedate = pageduedate;
        obj.obgtags = pagetages;


        titleh2.textContent = obj.obgtitle;
        descp.textContent = obj.obgdescription;
        statuscl.textContent = obj.obgpriority
        date.textContent = obj.obgduedate;
        totages.textContent = obj.obgtags;
        
    localStorage.setItem("obj",JSON.stringify(obj))
    alert("saved!!!")
    overLay.style.display = "none";
    }

    title.value = "";
    description.value = "";
    status2.value = "";
    priority.value = "";
    duedate.value = "";
    tags.value = "";
        
}
console.log(obj);
form.addEventListener("submit", HandleSubmit);
let obj1 = JSON.parse(localStorage.getItem("obj"));
console.log(obj1);








checkit.addEventListener("change", () => {
    if (checkit.checked) {
        label1.textContent = "Completed"
        slstatsu.innerHTML = `<option value="done">Done
        </option>`

        
        
    }else{
            }
})


const dueDate = obj1 ? new Date(obj1.obgduedate) : null;
function SetDueDate() {l
    let timerem = document.querySelector('[data-testid="test-todo-time-remaining"]')
    if(!timerem){
        return
    }
    const now = new Date();
    let getDifference = dueDate - now;
    let totalmillisec = getDifference;
    let totalseconds = Math.floor(getDifference / 1000);
    let totalminuts = Math.floor(getDifference / 60000);
    let totalhors = Math.floor(totalminuts / 60);
    let totaldays = Math.floor(totalhors / 24);

    let hoursleft = totalhors % 24;
    let minuitesleft = totalminuts % 60;
    let millisecondsleft = totalmillisec % 1000;
    let secondsleft = totalseconds % 60; 

    if(getDifference <= 0 ){
        timerem.textContent = "Overdue!!!";
    }else if(getDifference > 0){
        timerem.textContent = `Due in ${totaldays}d ${hoursleft}h ${minuitesleft}m ${secondsleft}s`;
    }

}
SetDueDate()

setInterval(SetDueDate,1)

function EditForm() {
    overLay.style.display = "flex";
}

function Canclemodal() {
    let me = prompt(" Are you sure, you don't want to save changes ???");
    if(me.toLowerCase() === "yes"){
        alert("saved!!!")
    }else if(me.toLowerCase() === "no"){
        overLay.style.display = "none";
    }else{
        overLay.style.display = "none";
    }
}



// titleh2.textContent = obj.obgtitle;
// descp.textContent = obj.obgdescription;
// statuscl.textContent = obj.obgstatus
// date.textContent = obj.obgduedate;
// totages.textContent = obj.obgtags

