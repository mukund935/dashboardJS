let fname = localStorage.getItem("name")
let id = localStorage.getItem("id")
document.getElementById("name").value = fname;
document.getElementById("id").value = id;
const training = document.getElementById("training").value;
const email = document.getElementById("email");

const enrollFrom = document.getElementById("enroll")

const users = []

enrollFrom.addEventListener('submit',(e)=>{
    console.log(e)
    e.preventDefault()
    const obj = {
        id,
        name:fname,
        training,
        email
    }
    users.push(obj)

    console.log(obj)
})