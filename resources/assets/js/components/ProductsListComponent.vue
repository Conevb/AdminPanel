<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 offset-md-8">
        <form @submit.prevent="searchProducts()" >
          <div class="input-group mb-3">
            <input v-model="searchInput" type="search" class="form-control" placeholder="Pretraga">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="submit">Pretraga</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 mb-3 d-flex" v-for="product in products" v-bind:key="product.id">
        <div class="card">
          <div class="card-body">
            <router-link v-bind:to="{ path: 'proizvod/1', params: {id: product.id} }" >{{ product.title }} </router-link>
            <h6 class="card-subtitle mb-2 text-muted">{{ product.price }} din</h6>
            <p class="card-text">{{ product.description }} </p>
            <button @click="addToCart(product)" class="btn btn-primary">Dodaj</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data: function(){
    return {
      products: [],
      searchInput: ''
    }
  },

  computed: {
    ...mapGetters({
      numberOfProducts: 'numberOfProducts'
    })
  },

  created(){
    this.fetchProducts()
  },

  methods: {
    ...mapActions([
      'addToCart'
    ]),
    fetchProducts(url='/api/products'){
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.products = res.data;
        })
    },
    searchProducts(){
      this.fetchProducts('/api/products/'+this.searchInput)
    },
  }
};
</script>
