const url='https://jsonplaceholder.typicode.com/users';

function loadUser(){
   fetch(url)
   .then(res=>res.json())
   .then(datas=>display(datas))
}
function display(datas){
     // ******for loop applied***
//       for(const data of datas){
//        console.log(data.name)                       
//       }  
const ul=document.getElementById('user-list');
   for(const data of datas){
       const li=document.createElement('li')
       li.innerHTML=data.name;
       ul.appendChild(li);                       
   }                      
}
