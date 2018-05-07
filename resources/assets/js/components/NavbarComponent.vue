<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link" >Pocetna</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/korpa" class="nav-link" >Korpa</router-link>
          </li>
        </ul>
        <div class="dropdown">
          <button class="btn btn-outline-light dropdown-toggle" @click="toggleDropdown()">
            <i class="fa fa-shopping-cart"></i> {{numberOfProducts}}
          </button>
          <div class="dropdown-menu dropdown-menu-right" v-bind:class="{show: dropdown}">
            <cart-component></cart-component>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import CartComponent from './CartComponent.vue'
import {mapGetters} from 'vuex'

export default {
  data(){
    return {
      dropdown: false
    }
  },
  components: {
    CartComponent
  },
  computed: {
    ...mapGetters({
      numberOfProducts: 'numberOfProducts'
    })
  },
  methods: {
    toggleDropdown(){
      this.dropdown = !this.dropdown
    }
  }
}
</script>





