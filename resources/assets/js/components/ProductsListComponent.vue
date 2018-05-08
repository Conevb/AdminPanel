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

    <pagination-component :links="links" :meta="meta" @pageLink="fetchProducts"></pagination-component>

    <div class="row">
      <div class="col-md-3 mb-3 d-flex" v-for="product in products" v-bind:key="product.id">
        <div class="card">
          <div class="card-body">
            <router-link v-bind:to="{ path: 'proizvod/1', params: {id: product.id} }" >{{ product.title }} </router-link>
            <h6 class="card-subtitle mb-2 text-muted">{{ product.category.name }} din</h6>
            <p class="card-text">{{ product.description }} </p>
            <button @click="addToCart(product)" class="btn btn-primary">Dodaj</button>
          </div>
        </div>
      </div>
    </div>

    <pagination-component :links="links" :meta="meta" @pageLink="fetchProducts"></pagination-component>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import PaginationComponent from './PaginationComponent.vue'

export default {
  data: function(){
    return {
      products: [],
      links: {},
      meta: {},
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
    ...mapMutations({
      addToCart: 'ADD_TO_CART'
    }),
    fetchProducts(url='/api/products'){
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.products = res.data
          this.links = res.links
          this.meta = res.meta
        })
    },
    searchProducts(){
      this.fetchProducts('/api/products/'+this.searchInput)
    },
  },

  components: {
    PaginationComponent
  }
};
</script>
