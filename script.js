const baseUrl = "https://runmassachusetts.com";

const completed = [
    "Andover",
    "Tewksbury",
    "North_Reading",
    "Lawrence",
    "Haverhill",
    "North_Andover",
    "Brookfield",
    "Boxford",
    "Stoneham",
    "Wilmington",
    "Methuen",
    "Hubbardston",
    "Petersham",
    "Oakham",
    "New_Braintree",
    "Barre",
    "East_Brookfield"
];

document.querySelectorAll("path").forEach(town => {

    town.classList.add("town");

    town.addEventListener("click", () => {

        const townName = town.id;

        const slug = townName
            .toLowerCase()
            .replaceAll("_", "-");

        if (completed.includes(townName)) {
            window.open(`${baseUrl}/${slug}`, "_blank");
        } else {
            window.open(`${baseUrl}/future-run`, "_blank");
        }

    });

});

completed.forEach(name => {
    document.getElementById(name)?.classList.add("run");
});
