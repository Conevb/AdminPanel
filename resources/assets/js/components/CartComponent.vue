<template>
  <div class="container">
    <table v-if="numberOfProducts" class="table">
      <thead>
        <tr>
          <th>Naziv</th>
          <th>Cena</th>
          <th>Kolicina</th>
          <th>Ukupno</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in cartContent" v-bind:key="record.product.id">
          <td>{{ record.product.title }}</td>
          <td>{{ record.product.price }}</td>
          <td><input type="number" :value="record.quantity" @input="updateCart({id: record.product.id, qty: parseInt($event.target.value)})"></td>
          <td>{{ record.product.price * record.quantity }}</td>
          <td>
            <button @click="removeFromCart(record.product.id)" class="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>Korpa je prazna</p>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      cartContent: 'cartContent',
      numberOfProducts: 'numberOfProducts'
    })
  },
  methods: {
    ...mapMutations({
      updateCart: 'UPDATE_CART',
      removeFromCart: 'REMOVE_FROM_CART'
    }),
  }
}
</script>

