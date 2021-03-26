<template>
  <div
    class="container"
    style="display: block; padding-top: 60px;"
  >
    <div class="md-layout md-alignment-center">
      <div class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto">
        <div class="title">
          <h2 v-if="appName">{{ appName }}</h2>
        </div>

        <form @submit.prevent="submitLogin">
          <md-field>
            <label>E-mail</label>
            <md-input
              v-model="login.email"
              autofocus
            />
          </md-field>

          <md-field
            md-has-password
            :md-toggle-password="togglePassword"
          >
            <label>Password</label>
            <md-input
              v-model="login.password"
              type="password"
            />
          </md-field>

          <div class="actions md-layout md-alignment-center-space-between">
            <md-button
              class="md-raised md-primary"
              type="submit"
            >
              Login
            </md-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function () {
    return {
      togglePassword: false,
      login: {
        email: null,
        password: null,
      },
      appName: process.env.VUE_APP_APP_NAME,
    };
  },

  methods: {
    ...mapActions(["obtainToken"]),

    submitLogin: function () {
      this.obtainToken({ email: this.login.email, password: this.login.password });
    }
  }
};
</script>
