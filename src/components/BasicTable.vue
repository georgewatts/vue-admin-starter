<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title">{{ title }}</h4>
          <table class="table is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th v-for="(column, index) in columns" :key="index">
                  {{column}}
                </th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th v-for="(column, index) in columns" :key="index">
                  {{column}}
                </th>
              </tr>
            </tfoot>
            <tbody>
              <tr v-for="(row, index) in data" :key="index">
                <td v-for="field in row" :key="field.index">
                  {{field}}
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
