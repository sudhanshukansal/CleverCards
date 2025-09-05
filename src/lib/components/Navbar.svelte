<script>
  import { getNavigationData } from "$lib/utils/contentLoader.js";

  const navData = getNavigationData();
  const navItems = navData?.navigation || [];
  const brand = navData?.brand;
  const actions = navData?.actions || [];

  // Mobile menu state
  let isMobileMenuOpen = false;
  let hoveredItem = -1;

  // Toggle mobile menu
  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    // Prevent body scroll when menu is open
    if (typeof document !== "undefined") {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    }
  }

  // Close mobile menu
  function closeMobileMenu() {
    isMobileMenuOpen = false;
    hoveredItem = -1;
    // Restore body scroll
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }
  }

  // Handle item hover
  function handleItemHover(index = -1) {
    hoveredItem = hoveredItem == index ? -1 : index;
  }

  function handleItemLeave() {
    hoveredItem = -1;
  }
</script>

<!-- Full Screen Overlay for mobile menu -->
{#if isMobileMenuOpen}
  <div
    class="fixed bg-black bg-opacity-60 lg:hidden"
    on:click={closeMobileMenu}
    role="button"
    tabindex="0"
    style="top: 0; left: 0; right: 0; bottom: 0; width: 100vw; height: 100vh; z-index: 9998; position: fixed;"
  ></div>
{/if}
<!-- desktop -->
<nav
  class="w-full sticky top-0 bg-gradient-to-r from-gray-900 to-[#473B57] text-white px-4 sm:px-8 py-3 flex items-center justify-between z-50"
  style="z-index: 50;"
>
  <!-- Logo -->
  <div class="flex items-center gap-2 xl:ml-24">
    <i class="{brand.icon} text-xl"></i>
    <span class="text-xl font-bold">{brand.name}</span>
  </div>

  <!-- Desktop Menu -->
  <ul class="hidden lg:flex gap-8">
    {#each navItems as item, index}
      <li class="relative group">
        <a
          href={item.href}
          class="flex items-center gap-1 hover:text-purple-400 transition-colors duration-200 py-2"
          on:mouseenter={() => handleItemHover(index)}
          on:mouseleave={handleItemLeave}
        >
          {item.label}
          {#if item.hasDropdown}
            <span
              class="transition-transform duration-200 mt-1 {hoveredItem !==
              index
                ? 'rotate-180'
                : ''}"
            >
              <i class="fa-solid fa-angle-up"></i>
            </span>
          {/if}
        </a>

        <!-- Dropdown hover effect (placeholder for future dropdown content) -->
        {#if item.hasDropdown && hoveredItem === index}
          <div
            class="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto"
          >
            <div class="p-4">
              <p class="text-subParaFont md:text-paraFont text-black">
                {item.label}
              </p>
            </div>
          </div>
        {/if}
      </li>
    {/each}
  </ul>

  <!-- Desktop Actions -->
  <div class="hidden lg:flex gap-4 items-center">
    {#if actions && actions.length > 0}
      {#each actions as action, idx}
        <a
          href={action.href}
          class="px-4 py-2 rounded-full transition-all duration-200 transform hover:scale-105 {idx ==
          0
            ? 'border border-white hover:bg-white hover:text-black '
            : 'bg-buttonColor hover:bg-purple-700 '}"
        >
          {action.label}
        </a>
      {/each}
    {/if}
  </div>

  <!-- Mobile Hamburger Menu Button -->
  <button
    class="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1"
    on:click={toggleMobileMenu}
  >
    <!-- Hamburger lines with animation -->
    <div>
      <i class="fa-solid fa-bars text-xl"></i>
    </div>
  </button>
</nav>

<!-- Mobile Menu Slide-out Panel -->
<div
  class="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-gray-900 to-[#473B57] text-white transform transition-transform duration-300 ease-in-out lg:hidden {isMobileMenuOpen
    ? 'translate-x-0'
    : 'translate-x-full'}"
  style="height: 100vh; z-index: 9999;"
>
  <!-- Mobile Menu Header -->
  <div class="flex items-center justify-between p-3 border-b border-gray-700">
    <div class="flex items-center gap-2">
      <i class="{brand.icon} text-xl"></i>
    </div>
    <button
      class="w-8 h-8 flex items-center justify-center"
      on:click={closeMobileMenu}
    >
      <i class="fa-solid fa-xmark text-xl"></i>
    </button>
  </div>

  <!-- Mobile Menu Content -->
  <div class="flex flex-col h-[calc(100%_-_57px)]">
    <!-- Navigation Items -->
    <div class="flex-1 py-6">
      <ul class="space-y-2">
        {#each navItems as item, index}
          <li>
            <a
              href={item.href}
              class="flex items-center  justify-between px-6 py-4 hover:bg-gray-800 transition-colors duration-200 group"
              on:click={() => handleItemHover(index)}
            >
              <span class="text-subParaFont md:text-paraFont font-bold">{item.label}</span>
              {#if item.hasDropdown}
                <span
                  class="transition-transform duration-200 {hoveredItem ===
                  index
                    ? 'rotate-180'
                    : ''}"
                >
                  <i class="fa-solid fa-angle-up"></i>
                </span>
              {/if}
            </a>

            <!-- Mobile dropdown content placeholder -->
            {#if item.hasDropdown && hoveredItem === index}
              <div
                on:click={closeMobileMenu}
                class="bg-gray-800 px-6 py-3 ml-4 border-l-2 border-purple-400"
              >
                <p class="text-subParaFont md:text-paraFont text-gray-300">
                  {item.label}
                </p>
              </div>
            {/if}
          </li>
        {/each}
      </ul>
    </div>

    <!-- Mobile Actions -->
    <div class="border-t border-gray-700 p-6 space-y-4 text-subParaFont md:text-paraFont">
      {#if actions && actions.length > 0}
        {#each actions as action, idx}
          <a
            href={action.href}
            class=" block w-full text-center px-4 py-2 rounded-full transition-all duration-200 transform hover:scale-105 {idx ==
            0
              ? 'border border-white hover:bg-white hover:text-black '
              : 'bg-buttonColor hover:bg-purple-700 '}"
            on:click={closeMobileMenu}
          >
            {action.label}
          </a>
        {/each}
      {/if}
    </div>
  </div>
</div>


