import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: []
  },
  getters: {
    numberOfProducts(state){
      let count = 0;
      for(let p=0; p < state.cart.length; p++){
        count += state.cart[p].quantity
      }
      return count
    },
    cartContent: state => state.cart
  },
  mutations: {
    ADD_TO_CART(state, product){
      const record = state.cart.find(p => p.product.id == product.id)
      if(record){
        record.quantity++
      }else{
        state.cart.push({
          product,
          quantity: 1
        })
      }
    },
    REMOVE_FROM_CART(state, id){
      const index = state.cart.indexOf(state.cart.find(p => p.product.id == id))
      if(this.getters.numberOfProducts <= 1){
        state.cart = []
      }
      if(index){
        state.cart.splice(index, 1)
      }
    }
  },
  actions: {
    addToCart({commit}, product){
      commit('ADD_TO_CART', product)
    },
    removeFromCart({commit}, id){
      commit('REMOVE_FROM_CART', id)
    }
  }
})