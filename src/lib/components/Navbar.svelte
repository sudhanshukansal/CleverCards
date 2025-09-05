<script>
  const navItems = [
    { label: "Businesses we serve", href: "#", hasDropdown: true },
    { label: "Product", href: "#", hasDropdown: true },
    { label: "Solution", href: "#", hasDropdown: true },
    { label: "Company", href: "#", hasDropdown: true },
  ];
</script>

<nav class="w-full bg-gradient-to-r from-gray-900 to-[#473B57] text-white px-8 py-3 flex items-center justify-between ">
  <!-- Logo -->
  <div class="flex items-center gap-2 lg:ml-24">
    <i class="fa-regular fa-credit-card text-xl"></i>
    <span class="text-xl font-bold">CleverCards</span>
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
    <a
      href="#"
      class="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
    >
      Contact Sales
    </a>
    <a
      href="#"
      class="px-4 py-2 rounded-full bg-buttonColor"
    >
      Login
    </a>
  </div>
</nav>
