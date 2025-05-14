function toggleDropdown() {
   const dropdown = document.getElementById('dropdown');
   dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function hideDropdown() {
   const dropdown = document.getElementById('dropdown');
   const DDdiv = document.getElementsByClassName('contact_bar')
   dropdown.style.display = 'none';
}


