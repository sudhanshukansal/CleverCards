<script>
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import "../../app.css";
  let items = [
    {
      title: "Track Spends",
      content: "Employers can monitor and track spending on the cards digitally in real-time from a business dashboard. This eliminates the tiring process of claiming reimbursements and increases efficiency."
    },
    {
      title: "Item 2",
      content: "Additional content here."
    },
    {
      title: "Item 3",
      content: "More content here."
    }
  ];
</script>

<section class="relative w-full bg-[#15111B]">
  <Navbar />





  <div class="relative w-full mx-auto overflow-hidden ">
    <slot />
  </div>
  
  <Footer />
</section>
