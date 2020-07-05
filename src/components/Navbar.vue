<template>
  <div>
    <b-navbar spaced fixed-top>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <a class="button button-outline">
            bakatku.id
          </a>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="router-link" :to="{ path: '/login' }" v-if="!token">
          <div class="buttons">
            <a class="button button-round">
              Log in
            </a>
          </div>
        </b-navbar-item>
        <b-navbar-item v-else>
          <div class="buttons">
            <button class="button button-round" @click="logout">
              Log out
            </button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    logout() {
      this.$store.dispatch("auth/logout")
        .then(() => {
          this.$router.push({ path: '/login' })
        })
    }
  },
  computed: {
    token() {
      return localStorage.getItem('token');
    }
  }
}
</script>