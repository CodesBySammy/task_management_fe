function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("https://task-management-aafvjpgh8-sameer-mahindrus-projects.vercel.app/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    })
    .then(res => res.json())
    .then(data => {
        if (data.token) {
            console.log("✅ Login Successful. Token:", data.token);
            localStorage.setItem("token", data.token);
            window.location.href = data.role === "admin" ? "admin.html" : "user.html";
        } else {
            alert("❌ Invalid Credentials");
        }
    })
    .catch(err => console.error("🔥 Login Error:", err));
}
