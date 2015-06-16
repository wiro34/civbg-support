'use strict';

export default
class Players {
  constructor($rootScope, $firebaseArray, Firebase) {
    var playersRef = new Firebase('https://civbg-support.Firebaseio.com/players');

    this.$rootScope = $rootScope;
    this.players = $firebaseArray(playersRef);

    this.players.$loaded(() => this.installAutoSaver());
  }

  installAutoSaver() {
    _.each(this.players, (player, i) => {
      this.$rootScope.$watch(() => this.players[i], (player) => {
        if (!_.isEmpty(player)) {
          this.players.$save(i);
        }
      }, true);
    });
  }

  start(colors) {
    _.each(this.players, (player) => this.players.$remove(player));
    _.each(colors, (color) => {
      this.players.$add({
        color: color,
        tech: {
          one: [], two: [], three: [], four: []
        }
      });
    });
  }
}

Players.$inject = ['$rootScope', '$firebaseArray', 'Firebase'];
