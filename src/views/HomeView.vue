<script setup lang="ts">
import Button from 'primevue/button';

const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/magnetkopf',
    icon: 'mdi mdi-github',
    description: 'Check out my code and projects.'
  },
  {
    name: 'Memos',
    url: 'https://memos.magnetkopf.com/',
    icon: 'mdi mdi-notebook-edit',
    description: 'My personal notes and thoughts.'
  }
];
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-16">

    <!-- Hero Section -->
    <section class="text-center space-y-6 animate-fade-in-down">
      <div class="inline-block p-1 rounded-full bg-gradient-to-tr from-primary-500 to-violet-500 mb-4 opacity-80 blur-[1px]"></div>
      <h1 class="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent pb-2">
        MAGNETKOPF
      </h1>
      <p class="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
        Digital explorer, vector artisan, and homelab enthusiast.
      </p>

      <div class="pt-8 flex justify-center gap-4">
        <a href="#links">
            <Button label="Explore" icon="mdi mdi-arrow-down" rounded severity="secondary" outlined class="!px-8 !py-3" />
        </a>
      </div>
    </section>

    <!-- Links Section -->
    <section id="links" class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8">
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.url"
        target="_blank"
        class="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 p-8 transition-all duration-300 hover:border-zinc-600 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div class="relative z-10 flex flex-col items-center text-center space-y-4">
          <div class="p-4 rounded-full bg-zinc-950 border border-zinc-800 group-hover:border-zinc-600 group-hover:scale-110 transition-all duration-300">
            <i :class="[link.icon, 'text-4xl text-zinc-400 group-hover:text-white transition-colors']"></i>
          </div>
          <h2 class="text-2xl font-bold text-zinc-100">{{ link.name }}</h2>
          <p class="text-zinc-400 group-hover:text-zinc-300 transition-colors">{{ link.description }}</p>

          <div class="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <span class="text-sm font-medium text-primary-400 flex items-center gap-1">
              Visit <i class="mdi mdi-arrow-right"></i>
            </span>
          </div>
        </div>
      </a>
    </section>

    <!-- Skills Section -->
    <section class="w-full max-w-4xl px-4 py-12 space-y-12 animate-fade-in-down" style="animation-delay: 0.2s;">
      <div class="text-center space-y-4">
        <h2 class="text-4xl md:text-5xl font-black text-white relative inline-block">
          Technical Arsenal
          <div class="absolute -bottom-2 delay-300 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- Backend -->
        <div class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 flex flex-col items-center space-y-4">
          <h3 class="text-lg font-semibold text-zinc-300">Back-end</h3>
          <div class="h-px w-12 bg-zinc-800"></div>
          <img src="https://skillicons.dev/icons?i=go,php" alt="Backend Skills" class="h-12 hover:scale-110 transition-transform duration-300" />
        </div>

        <!-- Frontend -->
        <div class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 flex flex-col items-center space-y-4">
          <h3 class="text-lg font-semibold text-zinc-300">Front-end</h3>
          <div class="h-px w-12 bg-zinc-800"></div>
          <img src="https://skillicons.dev/icons?i=pnpm,vue" alt="Frontend Skills" class="h-12 hover:scale-110 transition-transform duration-300" />
        </div>

        <!-- Graphical -->
        <div class="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 flex flex-col items-center space-y-4">
          <h3 class="text-lg font-semibold text-zinc-300">Design</h3>
          <div class="h-px w-12 bg-zinc-800"></div>
          <img src="https://skillicons.dev/icons?i=figma" alt="Design Skills" class="h-12 hover:scale-110 transition-transform duration-300" />
        </div>

      </div>

      <!-- Podman Fan Badge -->
      <div class="flex justify-center pt-8">
        <div class="group relative inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 cursor-default">
          <span class="text-2xl mr-3 group-hover:rotate-12 transition-transform duration-300">🦭</span>
          <span class="font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Top <span class="font-black">FAN</span> of Podman :P
          </span>
          <div class="absolute inset-0 rounded-full bg-purple-500/5 blur-md -z-10 group-hover:bg-purple-500/10 transition-colors"></div>
        </div>
      </div>

    </section>



  </div>
</template>

<style scoped>
.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
