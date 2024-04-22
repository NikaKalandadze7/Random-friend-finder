let input = document.querySelector("#input");
let btn = document.querySelector("#button");
let userList = document.querySelector("#userList");

const BASE_URL = "https://randomuser.me/api/?results=10";
let data;

const getMovies = async() => {
  await axios.get(
    BASE_URL
  )
  .then((res) => {
    data = res.data.results;
    
    if (data && data.length > 0){
      showMovies(data);
    } else{
      userList.innerHTML = `<h1 class="no-results">No Results Found</h1>`;
    }
  })
  .catch((error) => console.error(`Error: ${error}`));
};


const showMovies = (data) =>{
   userList.innerHTML = data.map((user) => {
    return `<div class="users" id="userList">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${user.picture.large}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
          <p class="card-text">Email: ${user.email}</p>
          <p class="card-text">Phone: ${user.cell}</p>
          <p class="card-text">Hello My name is ${user.name.first}, ${user.registered.age} years old, I am from ${user.location.city}, </p>
          <a href="#" class="btn btn-primary">Add Friend</a>
        </div>
      </div>
    </div>`
  })
}


btn.addEventListener("click", getMovies);


(async () => {
  await getMovies(BASE_URL);
})();


