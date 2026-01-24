<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { AuroraBackground } from '@/components/ui/aurora-background';

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
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/magnetkopf',
    icon: 'mdi mdi-circle-outline',
    description: 'Here are my design works.'
  },
  {
    name: 'HuggingFace',
    url: 'https://huggingface.co/magnetkopf',
    icon: 'mdi mdi-hand-wave',
    description: 'Although nothing there yet....'
  }
];

const scrollToLinks = () => {
  const element = document.getElementById('links');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="min-h-screen bg-zinc-950 font-sans text-white dark">

    <!-- Hero Section -->
    <AuroraBackground
      class="
        w-full
        !h-[60svh] md:!h-[80vh]
        !items-start !justify-end
        px-6 pb-12
        md:px-20 md:pb-32
        overflow-hidden text-left
        rounded-4xl
        md:rounded-6xl
      "
    >
      <div class="relative z-10 w-full max-w-5xl space-y-6 animate-fade-in-up">
        <h1 class="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white leading-none">
          Magnetkopf
        </h1>
        <p class="text-lg sm:text-xl md:text-2xl text-zinc-100 max-w-2xl font-light leading-relaxed">
          Digital explorer, vector artisan, and homelab enthusiast.
        </p>

        <div class="pt-8">
          <Button
            @click="scrollToLinks"
            class="rounded-full px-8 py-6 text-base font-medium bg-zinc-100 text-black hover:bg-zinc-300 transition-transform duration-300 hover:scale-105"
          >
            Explore
          </Button>
        </div>
      </div>
    </AuroraBackground>

    <!-- Links Section -->
    <section id="links" class="relative z-10 px-6 py-24 md:px-16 bg-zinc-950">
      <div class="max-w-7xl mx-auto">
        <div class="mb-12 flex items-center gap-4">
          <div class="h-px w-8 bg-zinc-700"></div>
          <h2 class="text-xs font-bold uppercase tracking-widest text-zinc-500">Destinations</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            v-for="link in links"
            :key="link.name"
            :href="link.url"
            target="_blank"
            class="group relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 transition-all duration-300 hover:bg-zinc-900 hover:border-zinc-700 hover:shadow-2xl"
          >
            <div class="flex flex-col items-start gap-4">
               <div class="p-3 rounded-lg bg-zinc-950 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                  <i :class="[link.icon, 'text-3xl text-zinc-400 group-hover:text-white transition-colors']"></i>
               </div>
               <div>
                  <h3 class="text-2xl font-bold text-white mb-2">{{ link.name }}</h3>
                  <p class="text-zinc-400 group-hover:text-zinc-300 transition-colors">{{ link.description }}</p>
               </div>

               <div class="mt-auto pt-6 flex items-center text-sm font-medium text-zinc-500 group-hover:text-white transition-colors">
                 Visit <i class="mdi mdi-arrow-top-right ml-1"></i>
               </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="relative z-10 px-6 py-24 md:px-16 bg-zinc-950 border-t border-zinc-900">
      <div class="max-w-7xl mx-auto">
         <div class="mb-12 flex items-center gap-4">
          <div class="h-px w-8 bg-zinc-700"></div>
          <h2 class="text-xs font-bold uppercase tracking-widest text-zinc-500">Technical Arsenal</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Common card style -->
          <div v-for="(category, index) in [
              { title: 'Back-end', icons: 'go,php' },
              { title: 'Front-end', icons: 'pnpm,vue' },
              { title: 'Design', icons: 'figma' }
            ]"
            :key="index"
            class="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300 flex flex-col items-start space-y-4"
          >
            <h3 class="text-lg font-semibold text-zinc-300">{{ category.title }}</h3>
            <div class="w-full h-px bg-zinc-800"></div>
            <img :src="`https://skillicons.dev/icons?i=${category.icons}`" :alt="category.title" class="h-10 opacity-80 hover:opacity-100 transition-opacity" />
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
      </div>
    </section>

  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(40px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
