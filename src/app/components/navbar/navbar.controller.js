'use strict';

class NavbarController {
  constructor($modal, Players) {
    this.$modal = $modal;
    this.Players = Players;
  }

  newGame() {
    var modalInstance = this.$modal.open({
      animation: true,
      templateUrl: 'app/components/dialogs/newGame.html',
      controller: 'NewGameController',
      controllerAs: 'ctrl'
    });

    modalInstance.result.then((colors) => {
      this.Players.start(colors);
    });
  }
}

NavbarController.$inject = ['$modal', 'Players'];

export default NavbarController;
