'use strict';

class TechDetailController {
  constructor($modalInstance, Tech, techId) {
    this.$modalInstance = $modalInstance;
    this.tech = _.find(Tech, (tech) => techId === tech.id);
  }

  close() {
    this.$modalInstance.close();
  }
}

export default TechDetailController;
