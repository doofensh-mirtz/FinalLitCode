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
