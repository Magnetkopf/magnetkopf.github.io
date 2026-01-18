<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const isMobileMenuOpen = ref(false);

const items = [
    {
        label: 'Home',
        icon: 'mdi mdi-home-outline',
        to: '/'
    },
    {
        label: 'Contact',
        icon: 'mdi mdi-email-outline',
        to: '/contact'
    },
    {
        label: 'Rants',
        icon: 'mdi mdi-shaker',
        to: '/rants'
    }
];

const toggleMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    if (isMobileMenuOpen.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

const closeMenu = () => {
    isMobileMenuOpen.value = false;
    document.body.style.overflow = '';
};

// Close menu when route changes
watch(route, () => {
    closeMenu();
});
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans selection:bg-primary-500 selection:text-white bg-zinc-950 text-white">
    
    <!-- Navbar -->
    <header class="sticky top-0 z-50 transition-all duration-300 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                
                <!-- Logo -->
                <div class="flex-shrink-0 cursor-pointer group" @click="router.push('/')">
                     <div class="font-bold text-xl tracking-tight text-white transition-opacity">
                        MAGNETKOPF
                    </div>
                </div>

                <!-- Desktop Menu -->
                <nav class="hidden md:flex space-x-1">
                    <a v-for="item in items" 
                       :key="item.label"
                       @click="router.push(item.to)"
                       class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer flex items-center space-x-2 text-zinc-400 hover:text-white hover:bg-white/5"
                       :class="{ '!text-primary-400 !bg-primary-500/10': route.path === item.to }"
                    >
                        <i :class="[item.icon, 'text-lg']"></i>
                        <span>{{ item.label }}</span>
                    </a>
                </nav>

                <!-- Mobile Menu Button -->
                <div class="flex md:hidden">
                    <button @click="toggleMenu" class="relative z-50 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors focus:outline-none">
                        <div class="w-5 h-5 flex flex-col justify-center gap-1.5 transition-all duration-300">
                            <span :class="['w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center', isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-white' : 'bg-zinc-300']"></span>
                            <span :class="['w-full h-0.5 bg-current rounded-full transition-all duration-300', isMobileMenuOpen ? 'opacity-0' : 'bg-zinc-300']"></span>
                            <span :class="['w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center', isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : 'bg-zinc-300']"></span>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-[-10px]"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-[-10px]"
    >
        <div v-if="isMobileMenuOpen" class="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-3xl md:hidden pt-24 px-6 flex flex-col">
            <nav class="flex flex-col space-y-4">
                 <a v-for="item in items" 
                       :key="item.label"
                       @click="router.push(item.to)"
                       class="p-4 rounded-2xl text-lg font-medium transition-all duration-200 cursor-pointer flex items-center space-x-4 border border-transparent"
                       :class="route.path === item.to ? 'bg-primary-500/20 text-primary-400 border-primary-500/20' : 'text-zinc-400 hover:text-white hover:bg-white/5'"
                    >
                        <i :class="[item.icon, 'text-2xl']"></i>
                        <span>{{ item.label }}</span>
                        <i class="mdi mdi-arrow-right ml-auto opacity-50"></i>
                </a>
            </nav>
            
            <div class="mt-auto pb-12 text-center">
                 <p class="text-zinc-600 text-sm">© {{ new Date().getFullYear() }} Magnetkopf</p>
            </div>
        </div>
    </transition>

    <!-- Page Content -->
    <main class="flex-grow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <RouterView v-slot="{ Component }">
          <transition 
            enter-active-class="transition ease-out duration-300" 
            enter-from-class="opacity-0 translate-y-4" 
            enter-to-class="opacity-100 translate-y-0" 
            leave-active-class="transition ease-in duration-200" 
            leave-from-class="opacity-100 translate-y-0" 
            leave-to-class="opacity-0 -translate-y-4"
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
        </RouterView>
      </div>
    </main>

    <footer class="border-t border-zinc-900 bg-zinc-950 py-8">
      <div class="max-w-7xl mx-auto px-4 text-center text-zinc-500 text-sm">
        &copy; {{ new Date().getFullYear() }} Magnetkopf. All rights reserved.
      </div>
    </footer>
  </div>
</template>

