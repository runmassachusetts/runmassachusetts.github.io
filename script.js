// towns you've run in
const runTowns = {
  boston: true,
  cambridge: true,
  lowell: true
};

// GoDaddy base URL
const baseUrl = "https://runmassachusetts.com/runs";

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
