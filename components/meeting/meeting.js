angular.module('app.meeting', [])
  .controller('MeetingController', ['$firebaseArray', MeetingController]);

function MeetingController($firebaseArray) {
  var ref = new Firebase("https://glaring-heat-6541.firebaseio.com/messages");

  // download the data into a local object
  this.messages = $firebaseArray(ref);
}

MeetingController.prototype.addMessage = function() {
  this.messages.$add({
    text: this.newMessageText
  });
} 