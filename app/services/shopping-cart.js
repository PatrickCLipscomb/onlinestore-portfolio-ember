import Ember from 'ember';

export default Ember.Service.extend({
  products: [],
  add(product) {
    this.get('products').pushObject(product);
  },

  total(){
    var runningTotal = 0;
    this.products.forEach(function (product){
      runningTotal += product.price;
    });
    return runningTotal;
  }
});