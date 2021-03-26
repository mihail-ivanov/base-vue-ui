<template>
  <vue-good-table
      :columns="columns"
      :rows="rows"/>
</template>


<script>
export default {
  data: function (){
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, score: 0.03343 },
        { id:2, name:"Jane", age: 24, score: 0.03343 },
        { id:3, name:"Susan", age: 16, score: 0.03343 },
        { id:4, name:"Chris", age: 55, score: 0.03343 },
        { id:5, name:"Dan", age: 40, score: 0.03343 },
        { id:6, name:"John", age: 20, score: 0.03343 },
      ],
    };
  },
}
</script>
