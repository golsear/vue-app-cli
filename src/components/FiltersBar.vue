<template>
    <div class="mt-4 mb-2">
        <template v-for="filter in gridFilters">
          <div class="form-check form-check-inline"
               :key="filter.key">
            <input class="form-check-input"
                   type="checkbox"
                   :value="filter.key"
                   :id="filter.key"
                   v-model="checkedFilters">
            <label class="form-check-label"
                   :for="filter.key">
              {{ filter.label }}
            </label>
          </div>
        </template>
    </div>
</template>

<script>
    export default {
        props: ['gridFilters'],
        data() {
            return {
              checkedFilters: []
            }
        },
        methods: {
          setupFilters: function () {
            this.checkedFilters = this.gridFilters.map((filter) => {
              if (filter.isChecked) {
                return filter.key;
              }
            });
          }
        },
        created() {
          this.setupFilters();
        },
        watch: {
          checkedFilters: function (val) {
            this.$store.commit('updateFilters', val);
          },
          gridFilters: function () {
            this.setupFilters();
          }
        }
    }
</script>
