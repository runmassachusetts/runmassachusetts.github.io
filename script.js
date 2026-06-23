const baseUrl = "https://runmassachusetts.com";

document.querySelectorAll("path").forEach(town => {

    town.classList.add("town");

    town.addEventListener("click", () => {
        
const slug = town.id
    .toLowerCase()
    .replaceAll("_", "-");

window.open(`${baseUrl}/${slug}`, "_blank");

    });

});

const completed = [
 
];

completed.forEach(name => {
    document.getElementById(name)?.classList.add("run");
});
