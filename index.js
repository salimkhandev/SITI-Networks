const hamburgerButton = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.navbar');

   
   hamburgerButton.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    const images = document.querySelectorAll('.carousel-images img');
        const prevButton = document.querySelector('.control.prev');
        const nextButton = document.querySelector('.control.next');

        let currentIndex = 0;

        // Function to show the current image
        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        showImage(currentIndex);