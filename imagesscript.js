function setupImageModals() {
    // Get all thumbnail images
    var thumbnails = document.querySelectorAll('.image');

    thumbnails.forEach(function(thumbnail) {
        // Get the modal elements from data attributes
        var modalId = thumbnail.getAttribute('data-modal');
        var modalImgId = thumbnail.getAttribute('data-modal-img');
        var captionId = thumbnail.getAttribute('data-caption');

        // Get the modal
        var modal = document.getElementById(modalId);
        modal.style.cursor = "default";

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var modalImg = document.getElementById(modalImgId);
        var captionText = document.getElementById(captionId);

        thumbnail.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }

        // Get the <span> element that closes the modal
        var span = modal.querySelector('.close');

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

    });
}

// Initialize the modals
setupImageModals();