<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 mb-3 d-flex" v-for="product in products" v-bind:key="product.id">
        <div class="card">
          <div class="card-body">
            <router-link v-bind:to="{ path: 'proizvod/1', params: {id: product.id} }" >{{ product.title }} </router-link>
            <h6 class="card-subtitle mb-2 text-muted">{{ product.price }} din</h6>
            <p class="card-text">{{ product.description }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      products: []
    }
  },

  created(){
    this.fetchProducts()
  },

  methods: {
    fetchProducts(){
      fetch('/api/products')
        .then(res => res.json())
        .then(res => {
          this.products = res.data;
        })
    }
  }
};
</script>
