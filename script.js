const baseUrl = "https://runmassachusetts.com";

const completed = [
 "Andover"
];

document.querySelectorAll("path").forEach(town => {

    town.classList.add("town");

    town.addEventListener("click", () => {
        
     const townName = town.id;

        const slug = townName
            .toLowerCase()
            .replaceAll("_", "-");

        if (completed.includes(townName)) {
    window.location.href = `${baseUrl}/${slug}`;
} else {
    alert(`I haven't run in ${townName} yet!`);
}
        }

    });

});
