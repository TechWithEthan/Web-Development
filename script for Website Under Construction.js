document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 3000); // Adjust the time (in milliseconds) as needed
});
