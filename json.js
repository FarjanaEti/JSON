const obj={name:'eti',
    id:1,
    istrue:false,
    depertment:{
         suject:{
            first:'math',
            second:'spl',
            third:'algorithm'                  
         },                         
    },
    cgpa:4.00,
}
console.log(obj);
const json=JSON.stringify(obj)
console.log(json)
const againObj=JSON.parse(json)
console.log(againObj)