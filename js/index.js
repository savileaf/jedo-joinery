function setupDropdown(triggerId, menuId, toggleClass, toggleBodyClass = false) {
    const trigger = document.getElementById(triggerId);
    const menu = document.getElementById(menuId);
    const body = document.body;
    const overlay = document.getElementsByClassName('overlay')[0];

    if (!trigger || !menu || !overlay) return;

    // Toggle menu
    trigger.addEventListener('click', (event) => {
        event.stopPropagation();

        const isOpen = menu.classList.toggle(toggleClass);
        if (toggleBodyClass) {
            body.classList.toggle("sidebar-open");
        }

        overlay.style.display = isOpen ? "block" : "none";
    });

    // Prevent closing if clicking inside the menu
    menu.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Close when clicking outside
    document.addEventListener('click', () => {
        if (menu.classList.contains(toggleClass)) {
            menu.classList.remove(toggleClass);
            if (toggleBodyClass) {
                body.classList.remove("sidebar-open");
            }
            overlay.style.display = "none";
        }
    });

    // Close when clicking overlay
    overlay.addEventListener("click", () => {
        if (menu.classList.contains(toggleClass)) {
            menu.classList.remove(toggleClass);
            if (toggleBodyClass) {
                body.classList.remove("sidebar-open");
            }
            overlay.style.display = "none";
        }
    });
}

// Hamburger (mobile nav): needs sidebar slide effect
setupDropdown('hamburger', 'nav-links', 'show-links', true);

// Services dropdown: just a normal dropdown, no body slide
setupDropdown('service-dropdown', 'service-dropdown-menu', 'show-dropdown', false);



// Open Book Appoinment Popup Model
const modal = document.getElementById('appointment-modal');
const openBtn = document.querySelector('.appoinment-btn');
const closeBtn = document.getElementById('modal-close');

openBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    modal.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});


function headerScrolled(){
    const header = document.getElementById('header');
    console.log("Header:", header);

    if(header) {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>100){
                header.classList.add('scrolled');
                // console.log("scrollled");                
            }
            else{
                header.classList.remove('scrolled');
            }
        })
    };

}

headerScrolled();



