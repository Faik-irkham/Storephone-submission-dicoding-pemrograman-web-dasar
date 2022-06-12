let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "galaxy") {
            event.target.setAttribute("src", "assets/image/galaxya23.png");
            return;
        } else if (event.target.id === "realme") {
            event.target.setAttribute("src", "assets/image/Realme-baru.png");
            return;
        } else if (event.target.id === "realme4") {
            event.target.setAttribute("src", "assets/image/Realme4-baru.png")
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "galaxy") {
            event.target.setAttribute("src", "assets/image/galaxy-a23-sm-a235-sm-a235fzomxid.jpg");
            return;
        }
        if (event.target.id === "realme") {
            event.target.setAttribute("src", "assets/image/Realme-c31-3.jpg");
            return;
        }
        if (event.target.id === "realme4") {
            event.target.setAttribute("src", "assets/image/Realme-C31.jpg")
        }
    });
}