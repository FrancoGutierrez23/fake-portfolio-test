let count = 0;

document.addEventListener("DOMContentLoaded", function() {
    const skillsList = document.getElementById('skills-list');
  
    skillsList.addEventListener('click', function(event) {
      const skill = event.target.closest('li');
      if (!skill) return;
      count++;
      // Hide all descriptions
      const descriptions = document.querySelectorAll('.skill-description');
      descriptions.forEach(function(desc) {
        if (desc.parentNode !== skill) {
          desc.classList.remove('active');
        }
      });
      
      // Toggle visibility of clicked description
      const description = skill.querySelector('.skill-description');
      description.classList.toggle('active');
    });
  });
  

skill.onclick = document.getElementsByTagName('i').style.display = 'block';
 