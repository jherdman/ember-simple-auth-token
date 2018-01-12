import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  identification: 'admin',
  password: 'abc123',

  session: service('session'),

  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
          authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials);
    }
  }
});
