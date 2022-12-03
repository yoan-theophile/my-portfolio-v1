/**
 * Loop through links to add or remove 'active' class
 */
const addOrRemoveActiveClass = () => {

    let navbarLinks = document.querySelectorAll('.nav-links a')

    window.addEventListener('scroll', event => {
        scrollPos = window.scrollY

        navbarLinks.forEach((link) => {
            const section = document.querySelector(link.hash);
             if (scrollPos + 100 > section.offsetTop && scrollPos + 100 < section.offsetTop + section.offsetHeight) {
                link.classList.add('active')
             } else {
                link.classList.remove('active')
             }
        })
    })
}

addOrRemoveActiveClass()