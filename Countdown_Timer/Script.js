const endDate = "14 may 2024 12:00 AM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

//days
function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;
    if (diff<0) return;
    console.log(diff);
    //into days
    inputs[0].value = Math.floor(diff/3600/24);
    //into hours
    inputs[1].value = Math.floor(diff/3600)%24;
    //into minutes
    inputs[2].value = Math.floor(diff/60)%60;
    //into seconds
    inputs[3].value = Math.floor(diff)%60;
}
clock()

setInterval(
    () =>{
        clock()
    }
)