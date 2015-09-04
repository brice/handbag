AppController.$routeConfig = [
  { path: '/', component: 'home' },
  { path: '/classroom', component: 'classroom' },
  { path: '/classroom/:classroomId', component: 'classroomEdit' },
  { path: '/skills', component: 'skills' },
  { path: '/evaluation/:classroomId/:studentId', component: 'evaluation' },
  { path: '/report/:classroomId/:studentId', component: 'report' },
];
