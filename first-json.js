//console .log('clicked')
// *******normal json***********

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

// ****** json ny function************
  const url='https://jsonplaceholder.typicode.com/todos/1';
  function loadData(){
     fetch(url)
   .then (res=>res.json())
   .then (jsons=>console.log(jsons))
   }

   // **********function inside function by json*****
function loadData2(){
fetch(url)
.then(res=>res.json())
.then(datas=>display(datas))
}

function display(data){
 console.log(data);                             
}
