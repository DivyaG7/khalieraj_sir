document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 80; // Adjust the speed of the counter

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 30); // Adjust timing for smoother animation
            } else {
                counter.innerText = target + (target === 40 ? '+' : '');
            }
        };

        updateCount();
    });

});


// JavaScript to handle video loading in modal
document.querySelectorAll('.blog-image').forEach(function (image) {
    image.addEventListener('click', function () {
        const modalTitle = document.getElementById('blogModalLabel');
        const modalVideo = document.getElementById('modalVideo');

        // Set modal title
        modalTitle.textContent = this.getAttribute('data-title');

        // Set video URL in the iframe
        modalVideo.src = this.getAttribute('data-video-url');
    });
});

// Clear the video URL when modal is closed
document.getElementById('blogModal').addEventListener('hidden.bs.modal', function () {
    document.getElementById('modalVideo').src = '';
});
