function toggleDropdown() {
   const dropdown = document.getElementById('dropdown');
   dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function hideDropdown() {
   const dropdown = document.getElementById('dropdown');
   const DDdiv = document.getElementsByClassName('contact_bar')
   dropdown.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
   const iframe = document.querySelector('.BB-container iframe');
   let scrollDisabled = false;
 
   function disableScroll() {
     if (!scrollDisabled) {
       document.body.style.overflow = 'hidden';
       scrollDisabled = true;
     }
   }
 
   function enableScroll() {
     if (scrollDisabled) {
       document.body.style.overflow = '';
       scrollDisabled = false;
     }
   }
 
   if (iframe) {
     iframe.addEventListener('touchstart', disableScroll);
     iframe.addEventListener('mousedown', disableScroll);
     // Re-enable scroll when user stops interacting
     document.addEventListener('touchend', enableScroll);
     document.addEventListener('mouseup', enableScroll);
   }
 });
