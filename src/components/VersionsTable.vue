<template>
    <div class="table-responsive">
      <table class="table table-sm">
        <thead>
          <tr>
            <th v-for="(column, key) in columns" :key="'th-' + key">
              <span class="text-nowrap">{{ column.name }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, key) in rows" :key="'tr' + key">
            <td v-for="(column, key) in columns" :key="'td-' + key">
              <template v-if="entry[column.key].type === 'status'">
                <span :class="getStatusCssClass(entry[column.key].statusCode) + ' text-nowrap'">{{ entry[column.key].value }}</span>
              </template>
              <template v-else-if="entry[column.key].type === 'date'">
                <span class="text-nowrap">{{ entry[column.key].value | formatDate(entry[column.key].format)}}</span>
              </template>
              <template v-else-if="entry[column.key].type === 'component'">
                <component :is="entry[column.key].value"
                           :text="entry[column.key].text"
                           :click-handle="entry[column.key].clickHandle"></component>
              </template>
              <template v-else>
                {{ entry[column.key].value }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
    export default {
        props: ['columns', 'rows'],
        methods: {
          getStatusCssClass: function (status) {
            let cssClass = '';

            switch (status) {
              case 2:
                cssClass = "text-danger";
                break;
              case 3:
                cssClass = "text-success";
                break;
              default:
                cssClass = '';
            }

            return cssClass;
          }
        }
    }
</script>
