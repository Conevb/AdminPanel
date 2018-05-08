<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <!-- Previous page -->
      <li class="page-item" :class="{'disabled': meta.current_page == meta.from}">
        <a class="page-link" @click.prevent="changePage(links.prev)">Previous</a>
      </li>
      <!-- First page -->
      <li class="page-item"
        :class="{'disabled': meta.current_page == 1}"
        v-if="meta.current_page>=4">
        <a class="page-link"  @click.prevent="changePage('/api/products?page=1')">1</a>
      </li>
      <!-- Second page -->
      <li class="page-item"
        :class="{'disabled': meta.current_page == 2}"
        v-if="meta.current_page>=5">
        <a class="page-link"  @click.prevent="changePage('/api/products?page=2')">2</a>
      </li>
      <!-- ... separator -->
      <li class="page-item disabled" v-if="meta.current_page>=6">
        <a class="page-link">...</a>
      </li>
      <!-- Current page + 2 pages before and after -->
      <li class="page-item" :class="{'disabled': meta.current_page == i}"
        v-for="i in meta.last_page" v-bind:key="i"
        v-if="i>=meta.current_page-2 && i<=meta.current_page+2">
        <a class="page-link"  @click.prevent="changePage('/api/products?page='+i)">{{i}}</a>
      </li>
      <!-- ... separator -->
      <li class="page-item disabled" v-if="meta.current_page <= meta.last_page-5">
        <a class="page-link">...</a>
      </li>
      <!-- Second to last page -->
      <li class="page-item"
        :class="{'disabled': meta.current_page == meta.last_page-1}"
        v-if="meta.current_page<=meta.last_page-4">
        <a class="page-link"  @click.prevent="changePage('/api/products?page='+(meta.last_page-1))">
          {{meta.last_page-1}}
        </a>
      </li>
      <!-- Last page -->
      <li class="page-item"
        :class="{'disabled': meta.current_page == meta.last_page}"
        v-if="meta.current_page<=meta.last_page-3">
        <a class="page-link"  @click.prevent="changePage('/api/products?page='+meta.last_page)">
          {{meta.last_page}}
        </a>
      </li>
      <!-- Next page -->
      <li class="page-item" :class="{'disabled': meta.current_page == meta.last_page}">
        <a class="page-link" @click.prevent="changePage(links.next)">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: [
    'links',
    'meta'
  ],
  
  methods: {
    changePage(link){
      this.$emit('pageLink', link)
    }
  }
}
</script>
