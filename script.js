// towns you've run in
const runTowns = {
  Boston: true,
  Cambridge: true,
  Lowell: true
};

// GoDaddy base URL
const baseUrl = "https://runmassachusetts.com/";

// loop through all SVG towns
document.querySelectorAll(".town").forEach(town => {

  const id = town.id.toLowerCase();

  // color if completed
  if (runTowns[id]) {
    town.classList.add("run");
  }

  // click behavior
  town.addEventListener("click", () => {
    window.location.href = `${baseUrl}/${id}`;
  });
});
