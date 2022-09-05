const user = document.getElementById("user");

const employee = document.getElementById("employee");

let userData=[]

const URL = "https://random-data-api.com/api/users/random_user?size=4";
""
const clickHandler =(e)=>{
  console.log('clicked')
  console.log(e)
  console.log(userData)
  
  userData.map((user)=>{
    if(user.id == e){
      console.log('true')
      localStorage.setItem("id",user.id)
      localStorage.setItem("name",user.first_name)
    }
    location.href="/form.html"
  })
  console.log(e)

}

employee.addEventListener("click", () => {
  fetch(URL)
    .then((res) => res.json())
    .then((result) => {
      userData =result;
      let data1="";
      result.map((e, i) => {
        data1+= `<tr >
              <th>${i + 1}</th>
              <th>${e.first_name}</th>
              <th>${e.employment.title} </th>
              <th>${e.id}</th>
              <th><button id=${e.id} onclick = clickHandler(${e.id})>Enroll</button></th>
            </tr>`;
      });

      document.getElementById('users').innerHTML=data1
    });

});