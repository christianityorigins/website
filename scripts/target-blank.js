document.addEventListener("DOMContentLoaded", function() {
    // Check if the body has the `open-links-in-new-tab` class
    if (document.body.classList.contains('open-links-in-new-tab')) {
        var links = document.querySelectorAll('a');
        links.forEach(function(link) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer'); // For security reasons
        });
    }
});
