"use strict";

const API_URL = "https://api.instagram.com/";
const instagramUsers = ["rooji_the_foodie", "hijabi_baker"]


const getUserAsync = async (name) => {
  // let response = await fetch(`${API_URL}${name}`, options);
  let response = await fetch(`${API_URL}${name}`);
  let data = await response.json();
  return data;
}


const showUsers = (user) => {
  const content =
   `<section>
      <img src="${user.avatar_url}" alt="user.login">
      <div>
        <h2><a href="${user.html_url}">${user.login}</a></h2>
        <ul>
          <li>Username: ${user.username}</li>
        </ul>
      </div>
    </section>`;
  showData.insertAdjacentHTML("beforeend", content);
}

showData.innerText = "";

instagramUsers.forEach( person => {
getUserAsync(person)
  .then(data => {
    console.log(data);
    showUsers(data);
  })
});
