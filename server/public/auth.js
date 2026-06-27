const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

console.log("Token:", token);
console.log("User:", user);

if (!token || !user) {
    window.location.href = "login.html";
}

window.addEventListener("load", () => {

    console.log("Window loaded");

    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("userEmail");
    const navAvatar = document.getElementById("navAvatar");
    const sidebarAvatar = document.getElementById("sidebarAvatar");

    console.log({
        userName,
        userEmail,
        navAvatar,
        sidebarAvatar
    });

    if (!user) return;

    if (userName)
        userName.textContent = user.name;

    if (userEmail)
        userEmail.textContent = user.email;

    const initials = user.name
        .split(" ")
        .map(word => word[0])
        .join("")
        .substring(0,2)
        .toUpperCase();

    if (navAvatar)
        navAvatar.textContent = initials;

    if (sidebarAvatar)
        sidebarAvatar.textContent = initials;
});