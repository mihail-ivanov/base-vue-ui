<template>
  <div>
    <md-toolbar
      md-elevation="0"
      class="md-transparent"
    >
      <div class="md-toolbar-section-start">
      </div>

      <div class="md-toolbar-section-end">
        <md-list>
          <md-list-item>
            <md-button
              class="md-simple md-primary"
              @click="logoutUser"
            >
              <i class="material-icons">person</i>
              Sign out
            </md-button>
          </md-list-item>
        </md-list>
      </div>

    </md-toolbar>
  </div>

</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(["signOut"]),

    logoutUser() {
      this.signOut();
      this.$router.push("/auth/login");
    }
  }
};
</script>

<style scoped>
  .md-list {
    background-color: transparent !important;
  }
</style>