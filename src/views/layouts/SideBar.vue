<template>
  <div class="sidebar">
    <div class="sidebar-title">
      <img alt="Logo" class="sidebar-logo" src="../../assets/logo.png">
      <h3 class="sidebar-name">{{ appName }}</h3>
    </div>

    <md-divider></md-divider>

    <md-list>
      <md-list-item>
        <router-link to="/home">
          <span class="material-icons">home</span> Home
        </router-link>
      </md-list-item>

      <md-list-item>
        <router-link to="/tables">
          <span class="material-icons">table_view</span> Tables
        </router-link>
      </md-list-item>
    </md-list>
  </div>
</template>


<script>
export default {
  data: function () {
    return {
      appName: process.env.VUE_APP_APP_NAME,
    };
  }
};
</script>

<style scoped>
  .sidebar-title {
    text-align: left;
    padding: 4px 16px;
  }

  .sidebar-logo {
    display: inline-block;
    max-width: 24px;
  }

  .sidebar-name {
    display: inline-block;
    text-align: left;
    margin-left: 20px;
  }

  .md-list {
    background-color: transparent !important;
  }

  .md-list a {
    text-decoration: none;
  }

  .md-list a:hover {
    text-decoration: none;
  }
</style>