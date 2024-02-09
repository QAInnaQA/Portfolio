gsap.from(".heading-works", {x: -400, duration: 2})
gsap.from(".text-works", {x: -700, duration: 2, delay: 0.7})

const photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
    photo.addEventListener('mouseover', () => {
        removeFocus();
    photo.classList.add('selected');
    })

    removeFocus = () => {
        photos.forEach(photo => {
            photo.classList.remove('selected');
        })
    }
})