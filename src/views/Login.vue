<template>
  <div>
    <Navbar />
    <section class="hero is-medium is-bold login-image">
      <div class="hero-body has-text-centered">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-half">
              <div class="card">
                <div class="card-content">
                  <p class="title">
                    Log in to your account
                  </p>
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        type="email"
                        placeholder="Email"
                        v-model="email"
                        v-on:keyup.enter="login"
                      />
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <b-input
                        class="input"
                        type="password"
                        password-reveal
                        placeholder="Password"
                        v-model="password"
                        v-on:keyup.enter="login"
                      ></b-input>
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <b-button expanded type="is-primary" @click="login" native-type="submit"
                        >Log in</b-button
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "login",
  data: () => ({
    email: '',
    password: ''
  }),
  components: {
    Navbar,
    Footer
  },
  mounted() {
    localStorage.clear();
  },
  methods: {
    login() {
      const loadingComponent = this.$buefy.loading.open()

      let payload = {
        email: this.email,
        password: this.password
      }


      this.$store.dispatch('ist/resetJawaban');
      this.$store.dispatch('auth/login', payload)
        .then((response) => {
          this.$buefy.toast.open({
              duration: 5000,
              message: `Berhasil login.`,
              position: 'is-bottom',
              type: 'is-success'
          })
          this.$router.push({
            path: '/rincian-test'
          })
        })
        .catch((error) => {
          this.$buefy.toast.open({
              duration: 5000,
              message: `Email atau password salah. Silahkan ulangi kembali`,
              position: 'is-bottom',
              type: 'is-danger'
          })
        })
        .finally(() => {
          loadingComponent.close()
        })
    }
  }
};
</script>
