document.querySelectorAll('.class-button').forEach(button => {
    button.addEventListener('click', () => {
        // Hide all class details
        document.querySelectorAll('.class-details').forEach(detail => {
            detail.style.display = 'none';
        });

        // Show the selected class details
        const classId = button.getAttribute('data-class');
        document.getElementById(classId).style.display = 'block';
    });
});