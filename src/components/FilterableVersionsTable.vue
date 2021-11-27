<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="h3 mt-4 mb-4">Vue grid component</h1>
        </div>
        <div class="col-12">
          <button @click="updateData()"
                  class="btn btn-outline-primary btn-sm">Оновити дані</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <filters-bar :grid-filters="filters"></filters-bar>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <versions-table :columns="filteredColumns"
                          :rows="filteredRows"></versions-table>
        </div>
      </div>
    </div>
</template>

<script>
    import { defaultData } from '../default-data'

    export default {
      props: [],
        data() {
            return {
              gridData: defaultData[0],
              defaultDataIndexes: Array.from(defaultData.keys()),
              currentIndex: 1
            }
        },
        computed: {
          checkedFilters: function () {
            return this.$store.state.filters;
          },
          filteredColumnsKeys: function () {
            return this.filteredColumns.map(( column ) => column.key );
          },
          filteredColumns: function () {
            let self = this;

            return this.gridData.columns.filter((column) => {
              return ( column.isFiltered && self.checkedFilters.indexOf(column.key) > -1 ) || !column.isFiltered ? true : false;
            });
          },
          filteredRows: function () {
            let self = this;

            return this.gridData.rows.map((row) => {
              return Object.keys(row)
                      .filter(key => self.filteredColumnsKeys.includes(key))
                      .reduce((obj, key) => {
                        obj[key] = row[key];
                        return obj;
                      }, {});
            });
          },
          filters: function () {
            return this.gridData.filters;
          }
        },
        methods: {
          updateData: function () {
            const arrLength = this.defaultDataIndexes.length;

            if ( this.currentIndex == arrLength ) {
              this.currentIndex = 0;
            }

            this.gridData = defaultData[this.currentIndex];
            this.currentIndex += 1;
          }
        }
    }
</script>
