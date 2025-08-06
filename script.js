const user_avatar = document.querySelector(".user_avatar");
const Username = document.querySelector(".Username");
const X_Acc_Link = document.querySelector(".X_Acc_Link");
const Bio = document.querySelector(".Bio_para");
const fa_x_twitter = document.querySelector(".fa-x-twitter");
const Btn = document.querySelector(".getUserBtn");
const login = document.querySelector(".login");
const Followers = document.querySelector(".Followers");
const Following = document.querySelector(".Following");
const GitAPI = "https://api.github.com/users/KARTIK78O";

// Starting Page Or Jab Bhi Load Hoga
function ResetAll() {
  user_avatar.src =
    "https://dpemoji.com/wp-content/uploads/2023/02/cartoon-dp-for-boys-14.png";
  user_avatar.alt = "dummy DP";
  Username.textContent = "Username";
  login.textContent = "Login";
  Followers.textContent = "Followers";
  Following.textContent = "Following";
  X_Acc_Link.textContent = "https://twitter.com/fakeAccount";
  Bio.textContent = "Bio";
}

ResetAll(); // Calling the ResetAll Function [Starting Page Or Jab Bhi Load Hoga]

//====================================================================================|

// Jaise hi btn par click hoga getdata Call Hoga Aur Data Inject ho Jaega
Btn.addEventListener("click", getdata);

//====================================================================================|

// getting Data - Data values and Key
async function getdata() {
  let response = await fetch(GitAPI); // Api Fetch Karega Jab Tak data na Aa gye await se wait krega
  let Data = await response.json(); // API ke Data Ko Json me Convert karega [Aur ye hi Actual me Data hai Jo hame Chaiye]
  console.log(Data); // Printing response

  // Data Inject Karna
  user_avatar.src = Data.avatar_url;
  user_avatar.alt = "Kartik Ramvani DP";
  Username.textContent = Data.name;
  login.textContent = Data.login;
  Followers.textContent = `Followers: ${Data.followers}`;
  Following.textContent = `Following: ${Data.following}`;
  X_Acc_Link.innerHTML = Data.twitter_username;
  Bio.textContent = Data.bio;
}
