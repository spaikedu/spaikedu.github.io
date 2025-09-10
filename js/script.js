document.addEventListener('DOMContentLoaded', () => {

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true, // whether animation should happen only once - while scrolling down
        offset: 100, // offset (in px) from the original trigger point
    });

    // Custom Cursor Logic
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const links = document.querySelectorAll('a, button');

    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            follower.style.display = 'none';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            follower.style.display = 'block';
        });
    });

});
