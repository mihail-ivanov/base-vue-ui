<template>
  <vue-good-table
    v-if="!loading"
    :columns="columns"
    :rows="users" />
</template>


<script>
import authHeader from '@/utils/authHeader';

export default {
  data: function () {
    return {
      api_url: 'ui/users/',
      columns: [
        {
          label: 'Username',
          field: 'username',
        },
        {
          label: 'E-mail',
          field: 'email',
          type: 'email',
        },
      ],
      users: null,

      loading: true,
    }
  },
  mounted: function () {
    this.fetch_objects(this.api_url)
  },
  methods: {
    fetch_objects: function (url) {
      this.loading = true

      this.$api
        .get(url, { headers: authHeader() })
        .then(response => {
          this.users = response.data
        })
        .finally(() => this.loading = false)
    }
  }
}
</script>
