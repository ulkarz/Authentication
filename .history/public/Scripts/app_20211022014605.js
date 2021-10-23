// IIFE -- Immediately Invoked Function Expression
(function() {

    function Start() {
        console.log("App Started...")
    }

    window.addEventListener("load", Start);
})();

async function loadUsers() {
    return (await fetch("../server/views/contacts/list.ejs")).json();
}

document.addEventListener("DOMContenLoaded", async() => {
    let users = [];

    try {
        users = await loadUsers();
    } catch (e) {
        console.log("Error!");
        console.log(e);
    }

    console.log(users);
})