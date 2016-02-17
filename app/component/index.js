// Vendors
import 'jquery';
import 'jquery-sparkline';
import pathToRegexp from 'path-to-regexp';
import apiCheck from 'api-check';
import _ from 'lodash';
import moment from 'moment';
import 'angular';
import ngSanitize from 'angular-sanitize';
import ngCookies from 'angular-cookies';
import ngMaterial from 'angular-material';
import ngMdIcons from 'angular-material-icons';
import ngFileUpload from 'ng-file-upload';
import formly from 'angular-formly';
import uiRouter from 'angular-ui-router';
import i18n from 'angular-translate';
import 'angular-translate-storage-cookie';
import ngMaterialTable from 'angular-material-data-table';
import sjWindow from 'angular-sanji-window';
import sjSparklines from 'angular-sparklines';
import ocLazyLoad from 'oclazyload';
import sjUtils from 'sanji-utils-ui';
import 'ngletteravatar';
import 'angular-moment';
import 'angular-filter';
import 'angular-cron-jobs';

import './404.html';
import theme from './theme.config';
import lang from './i18n.config';
import utils from './utils.config';
import toastr from './toastr.config';
import router from './router.config';
import formlyConfig from './formly.config';

let app = angular.module('sanji.core', [
  ngSanitize,
  ngCookies,
  ngMaterial,
  ngMdIcons,
  ngFileUpload,
  ngMaterialTable,
  'angularMoment',
  'angular.filter',
  sjSparklines,
  formly,
  uiRouter,
  i18n,
  sjWindow,
  ocLazyLoad,
  'ngLetterAvatar',
  'angular-cron-jobs',
  sjUtils
]);

app.constant('pathToRegexp', pathToRegexp);
app.constant('apiCheck', apiCheck);
app.constant('_', _);
app.constant('moment', moment);
app.config(theme);
app.config(lang);
app.config(utils);
app.config(toastr);
app.run(router);

formlyConfig(app);
  apiCheck.globalConfig.disabled = __RELEASE__;

export default app = app.name
