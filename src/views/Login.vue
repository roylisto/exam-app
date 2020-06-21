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
                      />
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <input
                        class="input"
                        type="password"
                        placeholder="Password"
                        v-model="password"
                      />
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <b-button expanded type="is-primary" @click="login"
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
  components: {
    Navbar,
    Footer
  },
  methods: {
    login() {
      console.log("login");
    }
  }
};
</script>
