console.log("Paddy's Pet Shop");

const inventory = [
  {
    name: "Niffler",
    type: "domestic",
    price: 550,
    notes:
      "Has a tendency to get into trouble pilfering valuables from anywhere and anyone it lays its eyes on."
  },
  {
    name: "Murtlap",
    type: "wild",
    price: 250,
    notes:
      "Fleshy rodent like creature. Beware it's bite because it may cause hallucinations."
  },
  {
    name: "Billywig",
    type: "wild",
    price: 148,
    notes:
      "When stung the person will suffer from a giddiness and eventually spontaneous floating."
  },
  {
    name: "Graphorns",
    type: "mounted",
    price: 1456,
    notes: "Has a tough hide said to be more durable than that of a dragon."
  },
  {
    name: "Thunderbird",
    type: "combat",
    price: 5230,
    notes:
      "Said to be able to sense danger from far off and can wipe the memories of extremely large groups of people."
  }
];

$(document).ready(init);

function init() {
  render();
}

function render() {
  console.log("rendering");
  $(".js-available-pets").empty();
  for (let i = 0; i < inventory.length; i++) {
    const pet = inventory[i];
    $(".js-available-pets").append(`
      <div class="col-4 mb-3 px-2">
        <div class="card">
          <h5 class="js-pet-price card-header">$${pet.price}</h5>
          <div class="card-body">
              <h5 class="js-pet-name card-title">${pet.name}</h5>
              <h6 class="js-pet-type card-subtitle mb-2 text-muted">${pet.type}</h6>
              <p class="js-pet-note card-text">${pet.notes}</p>
              <button class="btn btn-primary btn-block">Purchase</button>
          </div>
        </div>
      </div>`);
  }
}
