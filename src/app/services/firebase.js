'use strict';

export default
class Firebase {
  constructor() {}

  static instance() {
    if (angular.isUndefined(this.firebase)) {
      this.firebase = new Firebase('https://civbg-support.firebaseio.com/');
    }
    return this.firebase;
  }
}
