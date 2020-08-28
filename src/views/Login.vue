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
                  <b-field label="Email">
                    <b-input type="email"
                      v-model="email"
                      @keyup.native.enter="login()"
                      placeholder="Masukkan email Anda"
                      ></b-input>
                  </b-field>
                  <b-field label="Password">
                    <b-input type="password"
                      v-model="password"
                      placeholder="Masukkan password Anda"
                      @keyup.native.enter="login()"
                      password-reveal></b-input>
                  </b-field>
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
    password: '',
    user: '',
    title: process.env.VUE_APP_TITLE
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
          this.user = JSON.parse(response)
          this.$buefy.toast.open({
              duration: 5000,
              message: `Berhasil login.`,
              position: 'is-bottom',
              type: 'is-success'
          })
          this.$nextTick(() => {
            this.$buefy.dialog.alert({
                title: 'Selamat datang!',
                message: `Hai ${this.user.nama}, <br/><br/>  <b>selamat datang di portal Tes Minat Bakat by ${this.title}</b>. Dalam portal ini kamu akan dihadapkan pada serangkaian tes untuk mengetahui Minat dan Bakat kamu. Oleh karena itu, diharapkan untuk mengerjakan tes ini sebaik mungkin sesuai dengan kemampuan kamu ya. Kejujuranmu sangat diperlukan dalam mengerjakan tes yang ada agar hasil yang keluar benar2 sesuai dengan diri kamu. Perhatikan instruksi pengerjaan tes yang tersedia. <br/> <b>Jika kamu sedang menggunakan hp atau tablet, harap rotasi layarnya dihidupkan dan rotasi layar menjadi Mode Landscape.</b> Selamat mengerjakan 😊`,
                confirmText: 'Terima kasih!'
            })
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
