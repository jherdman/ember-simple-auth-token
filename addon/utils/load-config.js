import { typeOf } from '@ember/utils';
import EmberObject from '@ember/object';

export default function(defaults) {
  return function(container, config) {
    let wrappedConfig = EmberObject.create(config);

    for (let property in this) {
      if (this.hasOwnProperty(property) && typeOf(this[property]) !== 'function') {
        this[property] = wrappedConfig.getWithDefault(property, defaults[property]);
      }
    }
  };
}
