<script>
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import "../../app.css";
</script>

<section class="relative w-full bg-[#15111B]">
  <!-- <Navbar /> -->

  <div class="relative w-full mx-auto overflow-hidden">
    <slot />
  </div>

  <Footer />
</section>
