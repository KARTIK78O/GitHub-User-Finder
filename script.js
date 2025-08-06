const user_avatar = document.querySelector(".user_avatar");
const Username = document.querySelector(".Username");
const X_Acc_Link = document.querySelector(".X_Acc_Link");
const Bio = document.querySelector(".Bio_para");
const fa_x_twitter = document.querySelector(".fa-x-twitter");
// const Btn = document.querySelector(".getUserBtn");

const GitAPI = "https://api.github.com/users/KARTIK78O";

function ResetAll() {
  user_avatar.src =
    "https://tse1.mm.bing.net/th/id/OIP.hfF9W17CHoBL-nukZBRptwHaF9?rs=1&pid=ImgDetMain&o=7&rm=3";
  user_avatar.alt = "dummy DP";

  Username.textContent = "Username";
  X_Acc_Link.textContent = "https://twitter.com/FakeID";
  Bio.textContent = "Bio";
}

ResetAll();

document.querySelector(".getUserBtn").addEventListener("click", getdata);
// Jaise hi btn par click hoga getdata Call Hoga Aur Data Inject ho Jaega

// getting Data - Data values and Key
async function getdata() {
  let response = await fetch(GitAPI); // Api Fetch Karega Jab Tak data na Aa gye await se wait krega
  let Data = await response.json(); // API ke Data Ko Json me Convert karega [Aur ye hi Actual me Data hai Jo hame Chaiye]
  console.log(Data); // Printing response

  // Data Inject Karna
  user_avatar.src = Data.avatar_url;
  user_avatar.alt = "Kartik Ramvani DP";
  Username.textContent = Data.name;
  X_Acc_Link.innerHTML = Data.twitter_username ;
  Bio.textContent = Data.bio;
}
