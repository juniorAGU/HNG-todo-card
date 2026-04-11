let checkit = document.getElementById("checkbox");
let status1 = document.querySelector(".status");
let label1 = document.querySelector("label");


checkit.addEventListener("change", () => {
    if (checkit.checked) {
        status1.textContent = "Completed";
        label1.textContent = "Completed Task";
        label1.style.textDecoration = "line-through";
        status1.style.backgroundColor = "#bef0d3";
        status1.style.color = "#0a7016";
    }else{
        status1.textContent = "pending";
        status1.style.backgroundColor = "#f4f4f4";
    }
})
const dueDate = new Date("2026-04-16T23:59:00Z");
function SetDueDate() {
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

function Display() {
   let me = prompt("Why are you trying to edit me!!!! have you completed me??");
   if(me.toLowerCase() === "yes"){
    alert("i dont want to be edited leave me alone!!!")
   }else if(me.toLowerCase() === "no"){
    alert("so why the fucking hell did you click that edit button respect your self!! ")
   }else{
    alert("if get you  that place eehhh!!! ")
   }
    
}

function Getdisplay() {
    let me = prompt(" come this guy are you sure that you have completed me!!!!");
    if(me.toLowerCase() === "yes"){
        alert("Bad guy!! i greet you boss")
    }else if(me.toLowerCase() === "no"){
        alert("Are you fucking with me right now !????")
    }else{
        alert("i no wan talk too much ooo, better go back to were you are comming from")
    }
}