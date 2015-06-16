'use strict';

export default
class TechTreeController {
  constructor($scope, $window, Players, Tech) {
    this.$window = $window;
    this.player = $scope.player;
    this.players = Players.players;
    this.Tech = Tech;
    this.levels = _(['one', 'two', 'three', 'four']).reverse();

    this.initPlayerTechTree();
  }

  initPlayerTechTree() {
    if (!_.isObject(this.player.tech)) {
      this.player.tech = {};
    }
  }

  toName(techId) {
    return _.find(this.Tech, (tech) => tech.id === techId).name;
  }

  isTechAddable(level) {
    switch (level) {
      case 'four':
        return _.keys(this.player.tech.four).length < _.keys(this.player.tech.three).length - 1;
      case 'three':
        return _.keys(this.player.tech.three).length < _.keys(this.player.tech.two).length - 1;
      case 'two':
        return _.keys(this.player.tech.two).length < _.keys(this.player.tech.one).length - 1;
      default:
        return true;
    }
  }

  isNewtonUsed() {
    var containsNewton = (techIds) => _.contains(techIds, 'newton');
    var newtonScanner = (player) => containsNewton(player.tech.one) || containsNewton(player.tech.two);
    return _.find(this.players, newtonScanner);
  }

  remainingTechs(level) {
    var techs = _.chain(this.Tech)
      .filter((tech) => tech.level === level)
      .filter((tech) => _.values(this.player.tech[level]).indexOf(tech.id) === -1)
      .value();
    if ((level === 'one' || level === 'two') && !this.isNewtonUsed()) {
      techs.push(this.Tech[this.Tech.length - 1]);
    }
    return techs;
  }

  appendTech(level, techId) {
    var length = _.max(_.chain(this.player.tech[level]).keys().map((k) => +k).value().concat([-1]));
    if (!this.player.tech[level]) {
      this.player.tech[level] = {};
    }
    this.player.tech[level][length + 1] = techId;
  }

  removeTech(level, techId) {
    if (this.$window.confirm('ほんまに消すんか？')) {
      var index = this.player.tech[level].indexOf(techId);
      if (index >= 0) {
        this.player.tech[level].splice(index, 1);
      }
    }
  }
}

TechTreeController.$inject = ['$scope', '$window', 'Players', 'Tech'];
