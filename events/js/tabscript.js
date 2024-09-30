function sanitize(input) {
    var element = document.createElement('div');
    element.appendChild(document.createTextNode(input));
    return element.innerHTML;
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Sanitize tabName to avoid potential XSS
    tabName = sanitize(tabName);

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded', function() {
    var coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("open");

            var content = this.nextElementSibling;
            if (content && content.style.maxHeight) {
                content.style.maxHeight = null; // Collapse
            } else if (content) {
                content.style.maxHeight = content.scrollHeight + "px"; // Expand
            }
        });
    }
});
