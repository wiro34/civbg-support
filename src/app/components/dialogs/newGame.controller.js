'use strict';

class NewGameController {
  constructor($modalInstance) {
    this.$modalInstance = $modalInstance;
    this.colors = [];
    this.COLORS = ['RED', 'GREEN', 'BLUE', 'YELLOW', 'PURPLE'];
  }

  restColors(self) {
    var others = _.without(this.colors, this.colors[self]);
    return _.difference(this.COLORS, others);
  }

  ok() {
    this.$modalInstance.close(this.colors);
  }
}

export default NewGameController;
