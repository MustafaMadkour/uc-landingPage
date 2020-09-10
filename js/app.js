const sections = document.querySelectorAll('section');
const titles = document.querySelectorAll('h2');
const navList = document.getElementById('navbar_menu');

const navBuild = function () {
    
    let list;
    for (section of sections) {
        const item = document.createElement('LI');
        const link = document.createElement('A');
        link.href = `#${section.id}`;
        link.innerHTML = `${section.querySelector('h2').innerHTML}`
        navList.appendChild(item).appendChild(link);
    };
};

navBuild();

const navLinks = document.getElementsByTagName('a');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
  
      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace("active", "");
      }
  
      // Add the active class to the current/clicked link
      this.className += "active";
    });
  } 
