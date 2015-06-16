'use strict';

export default
class MainController {
  constructor(Players) {
    this.players = Players.players;
  }
}

MainController.$inject = ['Players'];
