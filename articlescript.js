
function changeTabTitleAndRedirect() {
    // Change the title of the current tab
    document.title = "Litcode - You're About to Get Confused!";

    // Redirect to the GIF
    window.location.href = 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGpjcTJxZWd0NmtrcnQ3a2hjZHN0NHVndGJya3E5cW04bjF0OW8ydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/N25nrRX4rsnkY/giphy.gif';
}
function openDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    dialog.style.display = 'block';
}

function closeDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    dialog.style.display = 'none';
}

// Close the dialog when clicking outside of it
window.onclick = function(event) {
    const loginDialog = document.getElementById('loginDialog');
    const registerDialog = document.getElementById('registerDialog');
    if (event.target === loginDialog) {
        loginDialog.style.display = 'none';
    }
    if (event.target === registerDialog) {
        registerDialog.style.display = 'none';
    }
};
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => {
            console.log('Error loading page:', error);
        });
}
