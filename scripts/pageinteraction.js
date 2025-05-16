function toggleDropdown() {
   const dropdown = document.getElementById('dropdown');
   dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function hideDropdown() {
   const dropdown = document.getElementById('dropdown');
   const DDdiv = document.getElementsByClassName('contact_bar')
   dropdown.style.display = 'none';
}

function CubeProjJump(event) {
   event.preventDefault(); 

   window.requestAnimationFrame(() => {
       const target = document.getElementById("project_");
       if (target) {
           target.scrollIntoView({ behavior: "smooth", block: "start" });
           console.log("Scrolled to Project 1");
       } else {
           console.error("Element not found: #Project1");
       }
   });
}

function BlockProjJump(event) {
    event.preventDefault(); 
 
    window.requestAnimationFrame(() => {
        const target = document.getElementById("BBLZ");
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            console.log("Scrolled to Project 1");
        } else {
            console.error("Element not found: #Project1");
        }
    });
 }

 function SiteProjJump(event,) {
    event.preventDefault(); 

    window.requestAnimationFrame(() => {
        const target = document.getElementById("WBST");
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            console.log("Scrolled to Project 1");
        } else {
            console.error("Element not found: #Project1");
        }
    });
 }

 function RollOverTo(event, location) {
    event.preventDefault(); // Prevent the default anchor behavior
 
    // Wait for the DOM to load (if not fully loaded)
    window.requestAnimationFrame(() => {
        const target = document.getElementById(Location);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            console.log("Scrolled to Project 1");
        } else {
            console.error("Element not found: #Project1");
        }
    });
 }