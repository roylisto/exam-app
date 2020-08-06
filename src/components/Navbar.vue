<template>
  <div>
    <b-navbar spaced fixed-top>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            @error="onImageLoadFailure($e)"
            src="@/assets/logo/logo_client.png"
            alt="Logo"
          >
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
        <template v-else>
          <b-navbar-item>
            <div class="buttons">
              <button class="button button-round">
                {{userInfo.nama}} - Jadwal Tes {{ moment(userInfo.waktu).format('MMMM Do YYYY') }}
              </button>
            </div>
          </b-navbar-item>
          <b-navbar-item>
            <b-button type="is-text" @click="logout"
              >Log out</b-button
            >
          </b-navbar-item>
        </template>
      </template>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import 'moment/locale/id';

export default {
  name: 'login',
  mounted() {
    this.userInfo
  },
  computed: {
    ...mapGetters("auth", ["user"]),
    token() {
      return sessionStorage.getItem('token');
    },
    userInfo() {
      var user = JSON.parse(this.user)
      return user
    }
  },
  methods: {
    onImageLoadFailure(event) {
      event.target.src = './src/assets/favicon/favicon_client.png'
    },
    moment: function (date) {
      return moment(date);
    },
    logout() {
      this.$store.dispatch('ist/resetJawaban');
      this.$store.dispatch("auth/logout")
        .then(() => {
          localStorage.clear();
          this.$router.replace({ path: '/login' })
        })
    }
  },
}
</script>