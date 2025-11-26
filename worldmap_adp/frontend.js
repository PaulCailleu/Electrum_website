
document.addEventListener("DOMContentLoaded", function () {
    const tooltip = document.createElement("div");
    tooltip.className = "worldmap-tooltip";
    document.body.appendChild(tooltip);

    document.querySelectorAll(".worldmap-container path[data-country]").forEach((country) => {
        country.addEventListener("mouseover", (event) => {
            const countryName = country.getAttribute("data-name");
            if (countryName) {
                tooltip.textContent = countryName;
                tooltip.style.display = "block";
            }
        });

        country.addEventListener("mousemove", (event) => {
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        country.addEventListener("mouseout", () => {
            tooltip.style.display = "none";
        });
    });
});