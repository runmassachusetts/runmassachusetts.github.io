const baseUrl = "https://runmassachusetts.com";

document.querySelectorAll("path").forEach(town => {

    town.classList.add("town");

    town.addEventListener("click", () => {

window.open(`${baseUrl}/${slug}`, "_blank");
        const slug = townName
            .toLowerCase()
            .replaceAll("_", "-");

    });
      
const completed = [
 "Andover"
];
    });

completed.forEach(name => {
    document.getElementById(name)?.classList.add("run");
