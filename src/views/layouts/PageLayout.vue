<template>
  <div
    class="wrapper"
  >
    <div class="main-sidebar">
      <SideBar />
    </div>

    <div class="main-layout">
      <div class="md-layout">
        <div class="md-layout-item">
          <TopNavbar />
          <Content />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Content from "./Content.vue";
import TopNavbar from "./TopNavbar.vue";
import SideBar from "./SideBar.vue";

export default {
  components: {
    Content,
    TopNavbar,
    SideBar,
  },
  data() {
    return {
    };
  }
};
</script>

<style>
.main-sidebar {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 20%; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
}

.main-layout {
  margin-left: 20%;
}

.wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
