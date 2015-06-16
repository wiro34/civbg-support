'use strict';

export default
class TechTreeController {
  constructor($scope, $window, $modal, Players, Tech) {
    this.$window = $window;
    this.$modal = $modal;
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
    this.player.tech.keep = true;
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
    var newtonScanner = (player) => containsNewton(player.tech.one) || containsNewton(player.tech.two) || containsNewton(player.tech.three) || containsNewton(player.tech.four);
    return _.find(this.players, newtonScanner);
  }

  remainingTechs(level) {
    var techs = _.chain(this.Tech)
      .filter((tech) => tech.level === level)
      .filter((tech) => _.values(this.player.tech[level]).indexOf(tech.id) === -1)
      .value();

    // ニュートン
    if (level !== 'five' && !this.isNewtonUsed()) {
      techs.push(this.Tech[this.Tech.length - 1]);
    }

    // 初期技術
    if (level === 'one' && _.isEmpty(this.player.tech.one)) {
      return _.filter(this.Tech, (tech) => tech.level === 'one' || tech.level === 'two');
    }

    return techs;
  }

  appendTech(level, techId) {
    var length = _.max(_.chain(this.player.tech[level]).keys().map((k) => +k).value().concat([-1]));
    if (!this.player.tech[level]) {
      this.player.tech[level] = {};
    }
    this.player.tech[level][length + 1] = techId;
    this.updateArmsRank();
  }

  removeTech(level, techId) {
    if (this.$window.confirm('ほんまに消すんか？')) {
      var index = this.player.tech[level].indexOf(techId);
      if (index >= 0) {
        this.player.tech[level].splice(index, 1);
        this.updateArmsRank();
      }
    }
  }

  updateArmsRank() {
    var techArray = _.compact(_.flatten([
      _.values(this.player.tech.one),
      _.values(this.player.tech.two),
      _.values(this.player.tech.three),
      _.values(this.player.tech.four)
    ]));

    this.player.arms = {
      sword: 1,
      cannon: 1,
      cavalry: 1,
      airforce: 0
    };

    _.chain(techArray).map(this.Tech.findById).filter((tech) => angular.isString(tech.arms)).each((tech) => {
      if (tech.arms.indexOf('歩兵') === 0) {
        this.player.arms.sword = _.max([this.player.arms.sword, +tech.arms.slice(-1)]);
      }
      if (tech.arms.indexOf('砲兵') === 0) {
        this.player.arms.cannon = _.max([this.player.arms.cannon, +tech.arms.slice(-1)]);
      }
      if (tech.arms.indexOf('騎兵') === 0) {
        this.player.arms.cavalry = _.max([this.player.arms.cavalry, +tech.arms.slice(-1)]);
      }
      if (tech.arms.indexOf('全兵') === 0) {
        this.player.arms.sword = _.max([this.player.arms.sword, +tech.arms.slice(-1)]);
        this.player.arms.cannon = _.max([this.player.arms.cannon, +tech.arms.slice(-1)]);
        this.player.arms.cavalry = _.max([this.player.arms.cavalry, +tech.arms.slice(-1)]);
      }
      if (tech.arms.indexOf('飛行機') === 0) {
        this.player.arms.airforce = 1;
      }
    });
  }

  openDetail(techId) {
    this.$modal.open({
      animation: true,
      templateUrl: 'app/components/dialogs/techDetail.html',
      controller: 'TechDetailController',
      controllerAs: 'ctrl',
      size: 'lg',
      resolve: {
        techId: () => techId
      }
    });
  }
}

TechTreeController.$inject = ['$scope', '$window', '$modal', 'Players', 'Tech'];
