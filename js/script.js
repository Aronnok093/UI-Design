document.querySelectorAll('.package').forEach(pkg => {
    const minusBtn = pkg.querySelector('.minus');
    const plusBtn = pkg.querySelector('.plus');
    const roomCountElem = pkg.querySelector('.room-count');
    const priceElem = pkg.querySelector('.price');
    const signUpBtn = pkg.querySelector('.sign-up');
    const thankYouElem = pkg.querySelector('.thank-you');
    let roomCount = 1;
    let basePrice = parseInt(priceElem.textContent.replace('$', ''));
    
    minusBtn.addEventListener('click', () => {
        if (roomCount > 1) {
            roomCount--;
            updateDisplay();
        }
    });

    plusBtn.addEventListener('click', () => {
        roomCount++;
        updateDisplay();
    });

    signUpBtn.addEventListener('click', () => {
        thankYouElem.textContent = `Thank you for choosing ${roomCount} room${roomCount > 1 ? 's' : ''}.`;
        thankYouElem.style.display = 'block';
    });

    function updateDisplay() {
        roomCountElem.textContent = `${roomCount} room${roomCount > 1 ? 's' : ''}`;
        priceElem.textContent = `$${basePrice * roomCount}`;
        thankYouElem.style.display = 'none'; // Hide the thank you message when updating the count
    }
});