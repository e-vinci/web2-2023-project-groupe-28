const innerCursor = document.querySelector(".inner-cursor");
const outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    const x = e.clientX;
    const y = e.clientY;
     // console.log(x, y);

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}
    document.addEventListener("DOMContentLoaded", () => {
        const links = Array.from(document.querySelectorAll("input, button, a, label"));

        console.log(links);

        links.forEach((link) => {
            link.addEventListener("mouseover", () => {
                innerCursor.classList.add("grow");
            });
            link.addEventListener("mouseleave", () => {
                innerCursor.classList.remove("grow");
            });
        });
    });
