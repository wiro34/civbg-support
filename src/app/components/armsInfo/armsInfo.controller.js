'use strict';

export class ArmsInfoController {
  constructor($scope, Players) {
    this.player = $scope.player;
    this.players = Players.players;

    if (!this.player.arms) {
      this.player.arms = {
        sword: 1,
        cannon: 1,
        cavalry: 1,
        airforce: 0
      };
    }
  }
}

export class ArmsDropdownDirective {
  constructor() {
    this.templateUrl = 'arms-dropdown-template.html';
    this.restrict = 'EA';
    this.scope = {
      model: '=ngModel',
      airforce: '@'
    };
  }

  link(scope) {
    scope.ranks = [1, 2, 3, 4];
    scope.updateRank = (rank) => scope.model = rank;
  }

  static activate() {
    ArmsDropdownDirective.instance = new ArmsDropdownDirective();
    return ArmsDropdownDirective.instance;
  }
}

ArmsInfoController.$inject = ['$scope', 'Players'];
