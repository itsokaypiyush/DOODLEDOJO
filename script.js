document.addEventListener("DOMContentLoaded", () => {
    function handleLogin(event, role) {
        event.preventDefault();
        const username = document.getElementById(`${role}-username`).value;
        const password = document.getElementById(`${role}-password`).value;
        
        if (username === "admin" && password === "1234") {
            alert(`Welcome, ${role}!`);
            window.location.href = `${role}-dashboard.html`;
        } else {
            alert("Invalid credentials. Try again.");
        }
    }

    document.getElementById("teacher-form")?.addEventListener("submit", (e) => handleLogin(e, "teacher"));
    document.getElementById("student-form")?.addEventListener("submit", (e) => handleLogin(e, "student"));
    document.getElementById("parent-form")?.addEventListener("submit", (e) => handleLogin(e, "parent"));
});
