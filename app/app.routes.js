AppController.$routeConfig = [
  { path: '/', component: 'home' },
  { path: '/classroom', components: {
      master: 'classroom',
      detail: 'classroomEdit'
    }
  },
  { 
    path: '/classroom/:classroomId', components: {
      master: 'classroom',
      detail: 'classroomEdit'
    } 
  },
  { path: '/skills', component: 'skills' },
  { path: '/evaluation/:classroomId/:studentId', component: 'evaluation' },
  { path: '/report/:classroomId/:studentId', component: 'report' },
  { path: '/report/:classroomId/:evaluationId', component: 'reportClass' }
];
