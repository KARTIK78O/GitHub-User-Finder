const user_avatar = document.querySelector(".user_avatar");
const Username = document.querySelector(".Username");
const X_Acc_Link = document.querySelector(".X_Acc_Link");
const Bio = document.querySelector(".Bio_para");
const fa_x_twitter = document.querySelector(".fa-x-twitter");
// const Btn = document.querySelector(".getUserBtn");

const GitAPI = "https://api.github.com/users/KARTIK78O";

function ResetAll() {
  if (user_avatar) {
    user_avatar.src = "https://tse1.mm.bing.net/th/id/OIP.hfF9W17CHoBL-nukZBRptwHaF9?rs=1&pid=ImgDetMain&o=7&rm=3";
    user_avatar.alt = "";
  }

  if (Username) Username.textContent = "Username";
  if (X_Acc_Link) X_Acc_Link.textContent = "https://twitter.com/FakeID";
  if (Bio) Bio.textContent = "Bio";
}

ResetAll();

// getting Data - Data values and Key
async function getdata() {
  let response = await fetch(GitAPI);  // Api Fetch Karega Jab Tak data na Aa gye await se wait krega
  let Data = await response.json();   // API ke Data Ko Json me Convert karega [Aur ye hi Actual me Data hai Jo hame Chaiye]
  console.log(Data);             // Printing response
}

document.querySelector(".getUserBtn").addEventListener("click", getdata);
