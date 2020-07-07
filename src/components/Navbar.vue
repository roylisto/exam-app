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
        <template v-else>
          <b-navbar-item>
            <div class="buttons">
              <button class="button button-round">
                {{userInfo.nama}} - Jadwal tes {{ moment(userInfo.waktu).format('MMMM Do YYYY') }}
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
      return localStorage.getItem('token');
    },
    userInfo() {
      var user = JSON.parse(this.user)
      return user
    }
  },
  methods: {
    moment: function (date) {
      return moment(date);
    },
    logout() {
      this.$store.dispatch("auth/logout")
        .then(() => {
          this.$router.push({ path: '/login' })
        })
    }
  },
}
</script>