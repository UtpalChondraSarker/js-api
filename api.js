
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response=>Response.json())
    .then(data=>console.log(data.title))
}
/* .....................load user................................... */
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayUser(data))
}
function displayUser(data){
    const ul=document.getElementById('user-name');
    
    for(const user of data){
        //console.log(data);
        //console.log(user.name);
        const list=document.createElement('li')
        list.innerText=`Name: ${user.name} Email: ${user.email}`;
        ul.appendChild(list)

    }
}
/* ..................................load post..................................... */
function loadPhoto(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>photoUser(data))
}
function photoUser(data){
    console.log(data);
    const div=document.getElementById('user-photo')
    for(const photo of data){
        const h3=document.createElement('h3');
        h3.innerText=`UserId: ${photo.userId} id:${photo.id} Title:${photo.title} `;
        div.appendChild(h3);
    }
}

/* ...................................load post......................................... */
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPosts(data))
}
loadPost()

function displayPosts(posts){
    const div=document.getElementById('user-data')
    for(const post of posts){
        //console.log(post);
        const h4=document.createElement('h4');
        h4.innerText=`UserId: ${post.userId} id:${post.id} Title:${post.title} Body: ${post.body}`;
        div.appendChild(h4)
    }
}

/* .................................post container................................ */
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPosts(data))
}
loadPost()
function displayPosts(posts){
    const container=document.getElementById('container-post');
    for(const post of posts){
        //console.log(post);
        const div=document.createElement('div');
        div.classList.add('post');
        div.innerHTML=`<h3>This is title:${post.title}</h3>
        <p>This is body: ${post.body}</p>
        `
        container.appendChild(div)
    }
}

/* ......................................data post................................ */
function addPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.json())
.then((json) => console.log(json));
}
addPosts()