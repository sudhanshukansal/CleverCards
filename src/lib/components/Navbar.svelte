<script>
  import { getNavigationData } from '$lib/utils/contentLoader.js';
  
  const navData = getNavigationData();
  const navItems = navData?.navigation || [];
  const brand = navData?.brand || { name: 'CleverCards', icon: 'fa-regular fa-credit-card' };
  const actions = navData?.actions || [];
  
  
  // Mobile menu state
  let isMobileMenuOpen = false;
  let hoveredItem = null;
  
  // Toggle mobile menu
  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    // Prevent body scroll when menu is open
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    }
  }
  
  // Close mobile menu when clicking outside
  function closeMobileMenu() {
    isMobileMenuOpen = false;
    hoveredItem = null;
    // Restore body scroll
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  }
  
  // Handle item hover
  function handleItemHover(index) {
    hoveredItem = index;
  }
  
  function handleItemLeave() {
    hoveredItem = null;
  }
</script>

<!-- Full Screen Overlay for mobile menu -->
{#if isMobileMenuOpen}
  <div 
    class="fixed bg-black bg-opacity-60 md:hidden"
    on:click={closeMobileMenu}
    role="button"
    tabindex="0"
    style="top: 0; left: 0; right: 0; bottom: 0; width: 100vw; height: 100vh; z-index: 9998; position: fixed;"
  ></div>
{/if}

<nav class="w-full bg-gradient-to-r from-gray-900 to-[#473B57] text-white px-4 sm:px-8 py-3 flex items-center justify-between relative z-50" style="z-index: 9999;">
  <!-- Logo -->
  <div class="flex items-center gap-2 lg:ml-24">
    <i class="{brand.icon} text-xl"></i>
    <span class="text-xl font-bold">{brand.name}</span>
  </div>

  <!-- Desktop Menu -->
  <ul class="hidden md:flex gap-8">
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
            <svg 
              class="w-4 h-4 transition-transform duration-200 {hoveredItem === index ? 'rotate-180' : ''}" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          {/if}
        </a>
        
        <!-- Dropdown hover effect (placeholder for future dropdown content) -->
        {#if item.hasDropdown && hoveredItem === index}
          <div class="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
            <div class="p-4">
              <p class="text-sm text-gray-600">{item.label} options</p>
            </div>
          </div>
        {/if}
      </li>
    {/each}
  </ul>

  <!-- Desktop Actions -->
  <div class="hidden md:flex gap-4 items-center">
    
    {#if actions && actions.length > 0}
      {#each actions as action, index}
        <a
          href={action.href}
          class="px-4 py-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-105 {action.type === 'outline' 
            ? 'border border-white hover:bg-white hover:text-black focus:ring-white' 
            : 'bg-buttonColor hover:bg-purple-700 focus:ring-purple-500 shadow-lg hover:shadow-xl'}"
        >
          {action.label}
        </a>
      {/each}
    {:else}
      <!-- Fallback buttons for desktop -->
      <a
        href="#contact"
        class="px-4 py-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-105 border border-white hover:bg-white hover:text-black focus:ring-white"
      >
        Contact Sales
      </a>
      <a
        href="#login"
        class="px-4 py-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-105 bg-buttonColor hover:bg-purple-700 focus:ring-purple-500 shadow-lg hover:shadow-xl"
      >
        Login
      </a>
    {/if}
  </div>

  <!-- Mobile Hamburger Menu Button -->
  <button
    class="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded"
    on:click={toggleMobileMenu}
  >
    <!-- Hamburger lines with animation -->
    <span 
      class="block w-6 h-0.5 bg-white transition-all duration-300 {isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}"
    ></span>
    <span 
      class="block w-6 h-0.5 bg-white transition-all duration-300 {isMobileMenuOpen ? 'opacity-0' : ''}"
    ></span>
    <span 
      class="block w-6 h-0.5 bg-white transition-all duration-300 {isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}"
    ></span>
  </button>
</nav>

<!-- Mobile Menu Slide-out Panel -->
<div 
  class="fixed top-0 right-0 h-full w-full bg-gradient-to-b from-gray-900 to-[#473B57] text-white transform transition-transform duration-300 ease-in-out z-50 md:hidden {isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}"
  style="height: 100vh; z-index: 9999;"
>
  <!-- Mobile Menu Header -->
  <div class="flex items-center justify-between px-4 sm:px-8 py-3 border-b border-gray-700">
    <div class="flex items-center gap-2">
      <i class="{brand.icon} text-xl"></i>
      <span class="text-xl font-bold">{brand.name}</span>
    </div>
    <button
      class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 transition-colors"
      on:click={closeMobileMenu}
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
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
              class="flex items-center justify-between px-6 py-4 hover:bg-gray-800 transition-colors duration-200 group"
              on:click={closeMobileMenu}
              on:mouseenter={() => handleItemHover(index)}
              on:mouseleave={handleItemLeave}
            >
              <span class="text-lg">{item.label}</span>
              {#if item.hasDropdown}
                <svg 
                  class="w-5 h-5 transition-transform duration-200 {hoveredItem === index ? 'rotate-180' : ''}" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              {/if}
            </a>
            
            <!-- Mobile dropdown content placeholder -->
            {#if item.hasDropdown && hoveredItem === index}
              <div class="bg-gray-800 px-6 py-3 ml-4 border-l-2 border-purple-400">
                <p class="text-sm text-gray-300">{item.label} options</p>
              </div>
            {/if}
          </li>
        {/each}
      </ul>
    </div>

    <!-- Mobile Actions -->
    <div class="border-t border-gray-700 p-6 space-y-4">
      
      {#if actions && actions.length > 0}
        {#each actions as action, index}
          <a
            href={action.href}
            class="block w-full text-center px-4 py-3 rounded-full transition-all duration-200 transform hover:scale-105 font-medium {action.type === 'outline' 
              ? 'border-2 border-white hover:bg-white hover:text-gray-900 text-white' 
              : 'bg-buttonColor hover:bg-purple-700 shadow-lg text-white'}"
            on:click={closeMobileMenu}
          >
            {action.label}
          </a>
        {/each}
      {:else}
        <!-- Fallback buttons if data doesn't load -->
        <a
          href="#contact"
          class="block w-full text-center px-4 py-3 rounded-full transition-all duration-200 transform hover:scale-105 font-medium border-2 border-white hover:bg-white hover:text-gray-900 text-white"
          on:click={closeMobileMenu}
        >
          Contact Sales
        </a>
        <a
          href="#login"
          class="block w-full text-center px-4 py-3 rounded-full transition-all duration-200 transform hover:scale-105 font-medium bg-buttonColor hover:bg-purple-700 shadow-lg text-white"
          on:click={closeMobileMenu}
        >
          Login
        </a>
      {/if}
    </div>
  </div>
</div>

<style>
  /* Ensure smooth animations */
  * {
    box-sizing: border-box;
  }
  
  /* Custom scrollbar for mobile menu */
  .mobile-menu-content::-webkit-scrollbar {
    width: 4px;
  }
  
  .mobile-menu-content::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .mobile-menu-content::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
  }
</style>