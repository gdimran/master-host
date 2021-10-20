$(document).ready(function () { $('#sidebarCollapse').on('click', function () { $('#sidebar').toggleClass('active'); }); });

// var container = document.querySelector('#sidebar');

// container.addEventListener('mouseenter', function() {
//     this.classList.add('active');
// })
// container.addEventListener('mouseleave', function() {
//     this.classList.remove('active');
// })





//$(document).ready(function() { $('#Submenushow').on('click', function() { $('#pageSubmenu').toggleClass('show'); }); });

// Tabs navigation
const tabs = document.querySelector(".tab-wrapper");
const tabButton = document.querySelectorAll(".tab-nav-item");
const contents = document.querySelectorAll(".tab-content");

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabButton.forEach(btn => {
            btn.classList.remove("active-tab");
        });
        e.target.classList.add("active-tab");

        contents.forEach(content => {
            content.classList.remove("active-content");
        });
        const element = document.getElementById(id);
        element.classList.add("active-content");
    }
}