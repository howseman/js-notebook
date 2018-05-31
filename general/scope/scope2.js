'use strict';
(function () {
  this.firstName = 'Pepe';
  const profile = {
    firstName: '',
    lastName: '',
    setName: function(name) {
      let splitName = (name) => {
        let nameArray = name.split(' ');
        this.firstName = nameArray[0];
        this.lastName = nameArray[1];
        console.log('this2:', this);
      };
      console.log('this1:', this);    
      splitName(name);
    },
    whoami: () => {
      console.log('this inside whoami function:', this);
    }
  };

  profile.setName('Jhon Doe');
  console.log(profile.firstName);
  profile.whoami();
})();
