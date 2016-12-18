export default ($httpProvider, $compileProvider, $logProvider, routerHelperProvider, exceptionHandlerProvider, storeProvider) => {
  'ngInject';
  const config = {
    appErrorPrefix: '[webapp Error] ',
    appTitle: 'webapp'
  };

  $httpProvider.useApplyAsync(true);
  $compileProvider.debugInfoEnabled(process.env.NODE_ENV === 'development');
  $logProvider.debugEnabled(process.env.NODE_ENV === 'development');
  exceptionHandlerProvider.configure(config.appErrorPrefix);
  routerHelperProvider.configure({docTitle: config.appTitle + ': ', defaultRoute: '/'});
  storeProvider.setStore('sessionStorage');
};