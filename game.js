class Game {
  constructor(name) {
    this.name = name;
    this.playersWins = 0;
    this.dealerWins = 0;
    console.log("Game constructor " + this.name);
    this.ontainer = this.createContainer();
  }

  createContainer() {
    const container = document.createElement("div");
    container.id = "game" + this.name;
    container.className = "game";
    container.innerHTML = `<h1>${this.name}</h1>
    <button id="deal">Deal</button>
    <button id="hit">Hit</button>
    <button id="stand">Stand</button>
    <div id="players">players area</div>
    <div id="result">result area</div>
    `;
    document.body.appendChild(container);
    return container;
  }
}

export default Game;
