<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { Button } from '@/components/ui/button'
import { AuroraBackground } from '@/components/ui/aurora-background';
import { Github, NotebookPen, Dribbble, Hand, ArrowUpRight, MapPin, Twitter, Plus } from 'lucide-vue-next';
import BlueskyIcon from '@/assets/icons/bluesky.svg?component';

useHead({
  title: 'Magnetkopf',
})

const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/magnetkopf',
    icon: Github,
    description: 'Code & projects'
  },
  {
    name: 'Memos',
    url: 'https://memos.magnetkopf.com/',
    icon: NotebookPen,
    description: 'Notes & thoughts'
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/magnetkopf',
    icon: Dribbble,
    description: 'Design works'
  },
  {
    name: 'HuggingFace',
    url: 'https://huggingface.co/magnetkopf',
    icon: Hand,
    description: 'AI & models'
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
  <div class="min-h-screen bg-zinc-950 font-sans text-white dark selection:bg-purple-500/30">

    <!-- Hero Section -->
    <AuroraBackground
      class="
        w-full
        !h-[85svh] md:!h-[90vh]
        !items-center !justify-center
        px-8 py-12
        md:px-24
        overflow-hidden text-center
        rounded-4xl md:rounded-6xl
      "
    >
      <div class="relative z-10 w-full max-w-5xl animate-fade-in-up flex flex-col items-center -mt-18 md:-mt-24">
        <!-- Avatar Profile Card -->
        <div class="relative group mb-1">
          <div class="absolute -inset-1.5  blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <img src="https://github.com/magnetkopf.png" alt="Magnetkopf" class="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-[2px] border-zinc-900 object-cover shadow-2xl" />
        </div>

        <h1 class="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 leading-tight pb-2 mb-6">
          MagnetkopF
        </h1>

        <p class="text-lg sm:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed mb-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span>Digital explorer</span>
          <span class="hidden md:inline text-zinc-600">•</span>
          <span>Vector artisan</span>
          <span class="hidden md:inline text-zinc-600">•</span>
          <span>Homelab enthusiast</span>
        </p>

        <div class="flex flex-col items-center gap-4 mb-3 text-sm text-zinc-400">
          <div class="flex items-center gap-1.5 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 px-4 py-2 rounded-full shadow-inner">
            <MapPin class="w-4 h-4 text-purple-400" />
            <span>Earth</span>
          </div>

          <div class="flex items-center gap-4">
            <a href="https://x.com/magnetkopf" target="_blank" title="X (Twitter)" class="p-3 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-full hover:bg-zinc-800 hover:text-white transition-all hover:scale-110 text-zinc-400 shadow-inner group">
               <Twitter class="w-5 h-5 group-hover:text-white transition-colors" />
            </a>
            <a href="https://bsky.app/magnetkopf.com" target="_blank" title="Bluesky" class="p-3 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-full hover:bg-zinc-800 hover:text-white transition-all hover:scale-110 text-zinc-400 shadow-inner group">
               <BlueskyIcon class="w-5 h-5 fill-current group-hover:text-white transition-colors" />
            </a>
            <RouterLink to="/contact" title="Contact" class="p-3 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-full hover:bg-zinc-800 hover:text-white transition-all hover:scale-110 text-zinc-400 shadow-inner group">
               <Plus class="w-5 h-5 transition-colors" />
            </RouterLink>
          </div>
        </div>

        <div>
          <Button
            @click="scrollToLinks"
            class="rounded-full px-8 py-6 text-base font-medium bg-white text-black hover:bg-zinc-200 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#ffffff80]"
          >
            Discover More
          </Button>
        </div>
      </div>
    </AuroraBackground>

    <!-- Links Section -->
    <section id="links" class="relative z-10 px-6 py-20 md:px-16 bg-zinc-950">
      <div class="max-w-4xl mx-auto">
        <div class="mb-10 flex flex-col items-center gap-3">
          <h2 class="text-2xl font-bold text-white">Destinations</h2>
          <div class="h-1 w-12 bg-primary rounded-full"></div>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            v-for="link in links"
            :key="link.name"
            :href="link.url"
            target="_blank"
            class="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/80 p-5 transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-600 hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="flex flex-col items-center text-center gap-3">
               <div class="p-3 rounded-full bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700 transition-colors shadow-sm">
                  <component :is="link.icon" class="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
               </div>
               <div>
                  <h3 class="text-base font-bold text-zinc-100 mb-1">{{ link.name }}</h3>
                  <p class="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">{{ link.description }}</p>
               </div>
            </div>
            <ArrowUpRight class="absolute top-3 right-3 w-4 h-4 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="relative z-10 px-6 py-20 md:px-16 bg-zinc-950 border-t border-zinc-900/50">
      <div class="max-w-4xl mx-auto">
         <div class="mb-10 flex flex-col items-center gap-3">
          <h2 class="text-2xl font-bold text-white">Technical Arsenal</h2>
          <div class="h-1 w-12 bg-primary rounded-full"></div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 tracking-wide">
          <!-- Common card style -->
          <div v-for="(category, index) in [
              { title: 'Backend',   icons: 'go,php' },
              { title: 'Frontend',  icons: 'vue,react,flutter' },
              { title: 'Design',    icons: 'figma,sketchup' },
              { title: 'Infra',     icons: 'linux,ipfs,git' },
            ]"
            :key="index"
            class="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:bg-zinc-800/60 hover:border-zinc-700 transition-all duration-300 flex flex-col items-center text-center gap-4 hover:-translate-y-1"
          >
            <h3 class="text-xs font-bold uppercase tracking-wider text-zinc-400">{{ category.title }}</h3>
            <img :src="`https://skillicons.dev/icons?i=${category.icons}`" :alt="category.title" class="h-8 hover:scale-110 transition-transform duration-300 cursor-pointer" />
          </div>
        </div>

        <!-- Podman Fan Badge -->
        <div class="flex justify-center pt-16">
          <div class="group relative inline-flex items-center px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 cursor-default">
            <span class="text-xl mr-2 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">🦭</span>
            <span class="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
              Top <span class="font-bold text-purple-400">FAN</span> of Podman
            </span>
            <div class="absolute inset-0 rounded-full bg-purple-500/5 opacity-0 group-hover:opacity-100 blur-md -z-10 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
