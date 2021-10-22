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


//form script
$(".custom-select").each(function () {
    var classes = $(this).attr("class"),
        id = $(this).attr("id"),
        name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function () {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$(".custom-option:first-of-type").hover(function () {
    $(this).parents(".custom-options").addClass("option-hover");
}, function () {
    $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function () {
    $('html').one('click', function () {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});
$(".custom-option").on("click", function () {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});




