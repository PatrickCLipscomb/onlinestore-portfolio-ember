import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  email: DS.attr(),
  feedbacks: DS.hasMany('feedback', { async: true }),
  
  shoppingCart: Ember.inject.service(),
  // inCart: Ember.computed('shoppingCart.products.[]'), function(){
  //   return this.get('shoppingCart').includes(this);
  // }
});
