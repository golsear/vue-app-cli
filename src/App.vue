<template>
  <div id="app">
    <filterable-versions-table></filterable-versions-table>
  </div>
</template>

<script>
import FilterableVersionsTable from './components/FilterableVersionsTable.vue'

export default {
  name: 'App',
  components: {
    FilterableVersionsTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
