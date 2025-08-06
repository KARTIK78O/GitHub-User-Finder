const user_avatar = document.querySelector(".user_avatar");
const Username = document.querySelector(".Username");
const X_Acc_Link = document.querySelector(".X_Acc_Link");
const Bio = document.querySelector(".Bio_para");
const fa_x_twitter = document.querySelector(".fa-x-twitter");

const GitAPI = "https://api.github.com/users/KARTIK78O";

function ResetAll() {
  if (user_avatar) {
    user_avatar.src = "";
    user_avatar.alt = "";
  }

  if (Username) Username.textContent = "";
  if (X_Acc_Link) X_Acc_Link.href = "#";
  if (Bio) Bio.textContent = "";
}

ResetAll();
// getting Data - Data values and Key
async function getdata() {
  let response = await fetch(GitAPI);  // Api Fetch Karega Jab Tak data na Aa gye await se wait krega
  let Data = await response.json();   // API ke Data Ko Json me Convert karega
  console.log(response);             // Printing response
}

getdata(); // Calling Function
