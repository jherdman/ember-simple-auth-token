import { getOwner } from '@ember/application';
import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ENV from '../config/environment';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    const adapter = getOwner(this).lookup('adapter:application');

    return adapter.ajax((ENV['API_URL'] || '') + '/api/users/', 'GET');
  },

  setupController(controller, model) {
    if (!model.username) {
      this.get('session').invalidate();
    }
  }
});
