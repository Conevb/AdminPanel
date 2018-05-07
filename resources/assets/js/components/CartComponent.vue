<template>
  <div class="container">
    <table v-if="numberOfProducts" class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>Naziv</th>
          <th>Cena</th>
          <th>Kolicina</th>
          <th>Ukupno</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in cartContent" v-bind:key="record.product.id">
          <td>{{ record.product.id }}</td>
          <td>{{ record.product.title }}</td>
          <td>{{ record.product.price }}</td>
          <td>{{ record.quantity }}</td>
          <td>{{ record.product.price * record.quantity }}</td>
          <td><button @click="removeFromCart(record.product.id)">Ukloni</button></td>
        </tr>
      </tbody>
    </table>
    <p v-else>Korpa je prazna</p>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      cartContent: 'cartContent',
      numberOfProducts: 'numberOfProducts'
    })
  },
  methods: {
    ...mapActions([
      'removeFromCart'
    ])
  }
}
</script>

