<template>
  <div>
    <b-navbar spaced fixed-top>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            :src="logo"
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
  data: () => ({
    logo: process.env.VUE_APP_LOGO_URL
  }),
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
    },
  },
  methods: {
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

<style>
.navbar-item img {
  height: 50px;
  width: auto;
  max-height: 50px;
  object-fit: cover;
}
</style>