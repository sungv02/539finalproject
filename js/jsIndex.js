document.getElementById("year").innerHTML = new Date().getFullYear();
console.log("copyright year?");

document.querySelectorAll('tr[data-href]').forEach(row => {
        row.addEventListener('click', () => {
            window.location.href = row.dataset.href;
        });
        row.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                window.location.href = row.dataset.href;
            }
        });
    });

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const successPopup = document.getElementById('successPopup');
  const closePopupBtn = document.getElementById('closePopup');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    setTimeout(() => {
      successPopup.style.display = 'block';
      contactForm.reset();
    }, 500);
  });

  closePopupBtn.addEventListener('click', () => {
    successPopup.style.display = 'none';
  });
});