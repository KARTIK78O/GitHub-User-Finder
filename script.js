const user_avatar = document.querySelector(".user_avatar");
const Username = document.querySelector(".Username");
const X_Acc_Link = document.querySelector(".X_Acc_Link");
const Bio = document.querySelector(".Bio_para");
const fa_x_twitter = document.querySelector(".fa-x-twitter");
const Btn = document.querySelector(".getUserBtn");
const login = document.querySelector(".login");
const Followers = document.querySelector(".Followers");
const Following = document.querySelector(".Following");
const Submit = document.querySelector(".Submit");

const GitAPI = "https://api.github.com/users/";

// Starting Page Or Jab Bhi Load Hoga
function ResetAll() {
  user_avatar.src =
    "https://dpemoji.com/wp-content/uploads/2023/02/cartoon-dp-for-boys-14.png";
  user_avatar.alt = "dummy DP";
  Username.textContent = "Username";
  login.textContent = "Login";
  Followers.textContent = "Followers";
  Following.textContent = "Following";
  X_Acc_Link.textContent = "X_Account";
  Bio.textContent = "Bio";
}

ResetAll(); // Calling the ResetAll Function [Starting Page Or Jab Bhi Load Hoga]

//====================================================================================|

// Jaise hi btn par click hoga getdata Call Hoga Aur Data Inject ho Jaega
Btn.addEventListener("click", getdata);

Submit.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    getdata();
  }
});

//====================================================================================|

// getting Data - Data values and Key

async function getdata() {
  const username = Submit.value.trim();  //Submit Class Ki Value Lega .Value se Aur use .trim Kar dega

  if (username === "") {
    alert("Please enter a username");  // Agar Username Empty Hai to Alert Dega
    return;
  }

  try {
    const response = await fetch(`${GitAPI}${username}`);
    const Data = await response.json();

    if (Data.message === "Not Found") {
      alert("User not found");
      ResetAll(); // Reset to default if user not found
      return;
    }

    // Data Inject Karna
    user_avatar.src = Data.avatar_url;
    user_avatar.alt = "GitUser DP";
    Username.textContent = Data.name || "No Name";
    login.textContent = Data.login || "No Login";
    Followers.textContent = `Followers: ${Data.followers}`;
    Following.textContent = `Following: ${Data.following}`;
    X_Acc_Link.textContent = Data.twitter_username || "No Twitter";
    Bio.textContent = Data.bio || "No Bio";
  } catch (error) {
    console.log("Error fetching data:", error);
    alert("Something went wrong!");
  }
}
