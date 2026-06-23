const baseUrl = "https://runmassachusetts.com/";

document.querySelectorAll("path").forEach(town => {

    town.classList.add("town");

    town.addEventListener("click", () => {

        const slug = town.id
            .toLowerCase()
            .replaceAll("_", "-");

        window.location.href = `${baseUrl}/${slug}`;

    });

});

const completed = [
    "Lawrence",
    "Boston",
    "Framingham",
    "Foxborough"
];

completed.forEach(name => {
    document.getElementById(name)?.classList.add("run");
});
