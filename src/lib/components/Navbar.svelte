
<script>
  import { getNavigationData } from '$lib/utils/contentLoader.js';
  
  const navData = getNavigationData();
  const navItems = navData.navigation;
  const brand = navData.brand;
  const actions = navData.actions;
</script>

<nav class="w-full bg-gradient-to-r from-gray-900 to-[#473B57] text-white px-8 py-3 flex items-center justify-between ">
  <!-- Logo -->
  <div class="flex items-center gap-2 lg:ml-24">
    <i class="{brand.icon} text-xl"></i>
    <span class="text-xl font-bold">{brand.name}</span>
  </div>

  <!-- Menu -->
  <ul class="hidden md:flex gap-8">
    {#each navItems as item}
      <li class="relative group">
        <a href={item.href} class="flex items-center gap-1 hover:text-purple-400 transition">
          {item.label}
          {#if item.hasDropdown}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          {/if}
        </a>
      </li>
    {/each}
  </ul>

  <!-- Actions -->
  <div class="flex gap-4">
    {#each actions as action}
      <a
        href={action.href}
        class="px-4 py-2 rounded-full transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 {action.type === 'outline' 
          ? 'border border-white hover:bg-white hover:text-black focus:ring-white' 
          : 'bg-buttonColor hover:bg-purple-700 focus:ring-purple-500'}"
        
      >
        {action.label}
      </a>
    {/each}
  </div>
</nav>