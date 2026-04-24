document.addEventListener("DOMContentLoaded", function() {
    // 1. Create the navigation HTML
    const navHTML = `
        <nav class="book-nav">
            <div class="nav-brand">THE MANUAL FOR VICTORY</div>
            <div class="nav-links">
                <a href="part1.html" id="link-part1">1</a>
                <a href="part2.html" id="link-part2">2</a>
                <a href="part3.html" id="link-part3">3</a>
                <a href="part4.html" id="link-part4">4</a>
                <a href="part5.html" id="link-part5">5</a>
                <a href="part6.html" id="link-part6">6</a>
                <a href="part7.html" id="link-part7">7</a>
                <a href="part8.html" id="link-part8">8</a>
                <a href="part9.html" id="link-part9">9</a>
                <a href="#" onclick="logout()" class="logout-link">Exit</a>
            </div>
        </nav>
    `;

    // 2. Insert it at the very top of the body
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // 3. Highlight the current page automatically
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const activeId = "link-" + currentPage.replace(".html", "");
    const activeLink = document.getElementById(activeId);
    if (activeLink) {
        activeLink.classList.add("active");
    }
});

function logout() {
    localStorage.clear();
    window.location.href = 'index.html';
}
