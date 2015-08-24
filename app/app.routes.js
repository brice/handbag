AppController.$routeConfig = [
  { path: '/',                       component: 'home' },
  { path: '/classroom',              component: 'classroom' },
  { path: '/classroom/:classroomId', component: 'classroomEdit' },
  { path: '/skills',                 component: 'skills' },
];
