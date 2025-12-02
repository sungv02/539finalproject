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