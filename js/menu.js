function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var offset = section.offsetTop - 122;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.casac-header__nav a');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});