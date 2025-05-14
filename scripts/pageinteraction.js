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
   let scrollDisabled = false;

   // Handler to prevent touchmove
   function preventTouchMove(e) {
     if (scrollDisabled) e.preventDefault();
   }

   function disableScroll() {
     if (!scrollDisabled) {
       document.body.style.overflow = 'hidden';
       document.documentElement.style.overflow = 'hidden';
       document.body.style.position = 'fixed';
       document.body.style.width = '100%';
       scrollDisabled = true;
       document.addEventListener('touchmove', preventTouchMove, { passive: false });
     }
   }

   function enableScroll() {
     if (scrollDisabled) {
       document.body.style.overflow = '';
       document.documentElement.style.overflow = '';
       document.body.style.position = '';
       document.body.style.width = '';
       scrollDisabled = false;
       document.removeEventListener('touchmove', preventTouchMove, { passive: false });
     }
   }

   if (iframe) {
     iframe.addEventListener('touchstart', disableScroll);
     iframe.addEventListener('mousedown', disableScroll);
     document.addEventListener('touchend', enableScroll);
     document.addEventListener('mouseup', enableScroll);
   }
});
