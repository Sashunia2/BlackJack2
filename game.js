class Game {
  constructor(name) {
    this.name = name;
    this.playersWins = 0;
    this.dealerWins = 0;
    console.log("Game constructor " + this.name);
    container = this.createContainer();
  }

  createContainer() {
    const container = document.createElement("div");
    container.id = "game" + this.name;
    container.className = "game";
    container.innerHTML = `<h1>${this.name}</h1>`;
    document.body.appendChild(container);
    return container;
  }
}

export default Game;
