document.addEventListener("DOMContentLoaded", function() {
  const skillItems = document.querySelectorAll('.skill-item');

  skillItems.forEach(function(skill) {
    skill.addEventListener('click', function() {
      const descriptionId = this.id.replace('skill', 'desc');
      const description = document.getElementById(descriptionId);

      // Hide all descriptions
      const allDescriptions = document.querySelectorAll('.skill-description');
      allDescriptions.forEach(function(desc) {
        if (desc !== description) {
          desc.classList.remove('active');
        }
      });

      // Toggle visibility of clicked description
      description.classList.toggle('active');

      // Toggle plus/minus icon
      const toggleIcon = this.querySelector('.toggle-icon');
      toggleIcon.textContent = toggleIcon.textContent === '+' ? '-' : '+';

      // Reset the plus/minus icon of other skills
      skillItems.forEach(function(item) {
        if (item !== skill) {
          const otherToggleIcon = item.querySelector('.toggle-icon');
          otherToggleIcon.textContent = '+';
        }
      });
    });
  });
});
