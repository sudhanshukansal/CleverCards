<script>
  import ThreeCards from "./ThreeAnimatedCards.svelte";

</script>

<section class="relative  text-white py-20 ">
  <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <!-- Left Content -->
    <div>
      <h1 class="text-miniHeadFont md:text-minHeadFont lg:text-headFont font-bold mb-4">Prepaid Cards</h1>
      <h2 class="text-minSubHead md:text-mobSubHead font-semibold text-gray-300 mb-4">
        For Businesses In Ireland
      </h2>
      <p class="text-gray-400 max-w-md text-subParaFont md:text-paraFont">
        Take control of business spending with prepaid cards for businesses.
        From instant employee rewards to controlled expenses, prepaid cards let
        you go from delivery to spend in seconds.
      </p>
    </div>
    <div class="-rotate-[20deg] mt-20 ">
    <ThreeCards />

    </div>

  </div>
</section>
