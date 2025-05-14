function toggleDropdown() {
   const dropdown = document.getElementById('dropdown');
   dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function hideDropdown() {
   const dropdown = document.getElementById('dropdown');
   dropdown.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.querySelector('.BB-container iframe');
    let isScrollingDisabled = false;

    function disableScrolling() {
        if (!isScrollingDisabled) {
            document.body.classList.add('no-scroll');
            isScrollingDisabled = true;
            console.log("Scrolling disabled");
        }
    }

    function enableScrolling() {
        if (isScrollingDisabled) {
            document.body.classList.remove('no-scroll');
            isScrollingDisabled = false;
            console.log("Scrolling enabled");
        }
    }

    // Detect touch events on the iframe
    iframe.addEventListener('pointerdown', disableScrolling);
    iframe.addEventListener('touchstart', disableScrolling);
    iframe.addEventListener('touchmove', disableScrolling);

    // Re-enable scrolling when the touch ends
    document.addEventListener('pointerup', enableScrolling);
    document.addEventListener('touchend', enableScrolling);
});

   
