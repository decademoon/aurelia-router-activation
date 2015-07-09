
export class Parent {
  constructor() { console.log('Parent constructor'); }

  configureRouter(config, router){
    console.log('Parent configure router');
    config.map([
      { route: '',        name: 'index',  moduleId: './index' },
      { route: 'child-a', name: 'child-a', moduleId: './child-a' },
      { route: 'child-b', name: 'child-b', moduleId: './child-b' }
    ]);
  }

  bind() { console.log('Parent bind'); }
  unbind() { console.log('Parent unbind'); }
  activate() { console.log('Parent activate'); }
  deactivate() { console.log('Parent deactivate'); }
}
