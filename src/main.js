import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import FilterableVersionsTable from './components/FilterableVersionsTable.vue';
import FiltersBar from './components/FiltersBar.vue';
import VersionsTable from './components/VersionsTable.vue';
import GridButton from './components/GridButton.vue';

Vue.component('filterable-versions-table', FilterableVersionsTable);
Vue.component('filters-bar', FiltersBar);
Vue.component('versions-table', VersionsTable);
Vue.component('grid-button', GridButton);

Vue.config.productionTip = false

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Vuex);

Vue.filter('formatDate', function (value, format) {
  if (value) {
    let date = moment.unix(Number(value)).locale('uk');
    return date.isValid() ? moment.unix(Number(value)).locale('uk').format(format) : value;
  }
});

const store = new Vuex.Store({
  state: {
    filters: []
  },
  mutations: {
    updateFilters (state, filters) {
      state.filters = filters;
    }
  }
});

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
