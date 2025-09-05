<script>
  let currentTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true });
</script>

<div class="flex justify-center items-center min-h-[350px]">
  <div class="relative" style="perspective:1200px; width: 300px; height: 260px;">
    <!-- Top Card (Blue) -->
    <div
      class="absolute left-0 top-0 w-[280px] h-[200px] rounded-xl shadow-2xl text-white p-6 flex flex-col justify-between bg-gradient-to-tr from-blue-700 to-blue-400"
      style="transform: translateZ(40px) translateY(-40px) rotateY(10deg) rotateZ(-10deg) rotateX(50deg); transition: transform 0.4s; z-index: 2;"
    >
      <div class="flex justify-between items-center">
        <span class="font-bold text-lg">CleverCards</span>
        <span class="text-white text-xl">Business</span>
      </div>
      <div>
        <p class="text-xs tracking-widest mb-2">DIGITAL PREPAID</p>
        <p class="text-lg font-mono mb-2">**** **** **** 3972</p>
        <p class="text-xs">Time: {currentTime} IST</p>
      </div>
      <div class="flex justify-between items-end">
        <span class="text-2xl">📶</span>
       
      </div>
    </div>
    <!-- Second Card (Dark) -->
    <div
      class="absolute -left-10 top-0 w-[280px] h-[200px] rounded-xl shadow-xl text-white p-6 flex flex-col justify-between bg-gradient-to-tr from-gray-900 to-gray-700"
      style="transform: translateZ(40px) translateY(20px) rotateY(10deg) rotateZ(-10deg) rotateX(50deg); transition: transform 0.4s; z-index: 1; opacity: 0.9;"
    >
      <div class="flex justify-between items-center">
        <span class="font-bold text-lg">CleverCards</span>
        <span class="text-white text-xl">Business</span>
      </div>
      <div>
        <p class="text-xs tracking-widest mb-2">DIGITAL PREPAID</p>
        <p class="text-lg font-mono mb-2">**** **** **** 3972</p>
        <p class="text-xs">Time: {currentTime} IST</p>
      </div>
      <div class="flex justify-between items-end">
        <span class="text-2xl">📶</span>
       
      </div>

      </div>

       <div
      class="absolute left-10 -top-32 w-[280px] h-[200px] rounded-xl shadow-xl text-white p-6 flex flex-col justify-between bg-gradient-to-tr from-gray-900 to-gray-700"
      style="transform: translateZ(40px) translateY(20px) rotateY(10deg) rotateZ(-20deg) rotateX(40deg); transition: transform 0.4s; z-index: 3; opacity: 0.9;"
    >
      <div class="flex justify-between items-center">
        <span class="font-bold text-lg">CleverCards</span>
        <span class="text-white text-xl">Business</span>
      </div>
      <div>
        <p class="text-xs tracking-widest mb-2">DIGITAL PREPAID</p>
        <p class="text-lg font-mono mb-2">**** **** **** 3972</p>
        <p class="text-xs">Time: {currentTime} IST</p>
      </div>
      <div class="flex justify-between items-end">
        <span class="text-2xl">📶</span>
       
      </div>

      </div>

      </div>
      </div>