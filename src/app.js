
export class App {
  configureRouter(config, router){
    config.map([
      { route: '',       name: 'index',  moduleId: './index' },
      { route: 'parent', name: 'parent', moduleId: './parent' }
    ]);
  }
}
