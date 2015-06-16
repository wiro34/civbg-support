'use strict';

import MainController from './pages/main/main.controller';
import NavbarController from './components/navbar/navbar.controller';
import TechTreeController from './components/techTree/techTree.controller';
import {ArmsInfoController, ArmsDropdownDirective} from './components/armsInfo/armsInfo.controller';
import NewGameController from './components/dialogs/newGame.controller';
import TechDetailController from './components/dialogs/techDetail.controller';

import Players from './services/players';
import Firebase from './services/firebase';

import Tech from './values/tech';

angular.module('civbgSupport', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ui.router',
  'ui.bootstrap',
  'firebase'
])
  .constant('Tech', Tech)
  .service('Players', Players)
  .service('FireBase', Firebase.instance)
  .controller('MainController', MainController)
  .controller('NavbarController', NavbarController)
  .controller('TechTreeController', TechTreeController)
  .controller('ArmsInfoController', ArmsInfoController)
  .controller('NewGameController', NewGameController)
  .controller('TechDetailController', TechDetailController)
  .directive('armsDropdown', ArmsDropdownDirective.activate)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/pages/main/main.html'
      });

    $urlRouterProvider.otherwise('/');
  })
;
