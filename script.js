function login() {

    const email = document.getElementById("studentId").value;
    const password = document.getElementById("password").value;

    window.signInWithEmailAndPassword(
        window.auth,
        email,
        password
    )
    .then(() => {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    })
    .catch((error) => {
        alert(error.message);
    });
}

async function register() {

    const parentName = document.getElementById("parentName").value;
    const studentName = document.getElementById("studentName").value;
    const studentClass = document.getElementById("studentClass").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("newPassword").value;

    try {

        const userCredential =
            await window.createUserWithEmailAndPassword(
                window.auth,
                email,
                password
            );

        const user = userCredential.user;

        await window.setDoc(
            window.doc(window.db, "students", user.uid),
            {
                parentName: parentName,
                studentName: studentName,
                studentClass: studentClass,
                email: email,
                fees: 5000
            }
        );

        alert("Account created successfully!");

        window.location.href = "dashboard.html";

    } catch (error) {
        alert(error.message);
    }
}
function adminLogin() {

    const username = document.getElementById("adminUser").value;
    const password = document.getElementById("adminPassword").value;

    if (username === "admin" && password === "pai123") {
        window.location.href = "admin-dashboard.html";
    } else {
        alert("Invalid admin credentials.");
    }
}