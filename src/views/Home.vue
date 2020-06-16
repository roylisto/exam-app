<template>
  <div>
    <Navbar />
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="card">
            <div class="card-content">
              <p>
                “There are two hard things in computer science: cache
                invalidation, naming things, and off-by-one errors.”
              </p>
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
    name: "home",
    components: {
      Navbar,
      Footer,
    },
  };
</script>
