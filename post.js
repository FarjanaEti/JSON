function loadpost(){
     const url='https://jsonplaceholder.typicode.com/posts'
     fetch(url)
     .then(res=>res.json())
     .then(Comments=>postComment(Comments))                         
}

function postComment(Comments){
    const comment=document.getElementById('div-container')
     for(const cmnt of Comments){
        const div=document.createElement('div')
        div.innerHTML=`
           <h4>User ID: ${cmnt.id}</h4>
           <h1>User Name:Eti</h1>
           <p>Title:${cmnt.title}</p>
           <p>Body:${cmnt.body}</p>  
        `  ;
        comment.appendChild(div)
     }                         
}