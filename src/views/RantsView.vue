<script setup lang="ts">
import { ref } from 'vue';

const rants = ref([
    {
        topic: 'Windows',
        icon: 'mdi mdi-microsoft-windows',
        iconColor: 'text-blue-500',
        content: "piece of sh*t",
        tags: ['os']
    },
    {
        topic: 'Ubuntu',
        icon: 'mdi mdi-ubuntu',
        iconColor: 'text-orange-500',
        content: "No 'Sorry,' on login or go to hell",
        tags: ['os','linux']
    },
    {
        topic: 'npm',
        icon: 'mdi mdi-nodejs',
        iconColor: 'text-green-500',
        content: "blackhole maker",
        tags: ['dev']
    },
    {
        topic: 'Jellyfin',
        icon: 'mdi mdi-play',
        iconColor: 'text-purple-500',
        content: "you ate half of my vps memory...",
        tags: ['app','self-hosted']
    }
]);
</script>

<template>
    <div class="min-h-screen w-full bg-zinc-950 px-4 py-12 flex flex-col items-center">

        <!-- Header -->
        <div class="text-center space-y-4 mb-16 animate-fade-in-down">
            <h1 class="text-4xl md:text-6xl font-black tracking-tighter text-white">
                SALTY <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">RANTS</span>
            </h1>
            <p class="text-zinc-400 max-w-xl mx-auto text-lg">
                A collection of unfiltered grievances
            </p>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
            <div
                v-for="(rant, index) in rants"
                :key="rant.topic"
                class="group relative"
                :style="{ animationDelay: `${index * 100}ms` }"
            >
                <div class="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                <div class="relative h-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-2xl">
                    <!-- Card Header -->
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <div class="p-2 rounded-lg bg-zinc-950 border border-zinc-800">
                                <i :class="[rant.icon, rant.iconColor, 'text-2xl']"></i>
                            </div>
                            <h2 class="text-xl font-bold text-zinc-100">{{ rant.topic }}</h2>
                        </div>
                    </div>

                    <!-- Content -->
                    <p class="text-zinc-300 leading-relaxed mb-6 flex-grow">
                        {{ rant.content }}
                    </p>

                    <!-- Footer / Tags -->
                    <div class="flex flex-wrap gap-2 mt-auto">
                        <span
                            v-for="tag in rant.tags"
                            :key="tag"
                            class="px-2 py-1 text-xs font-medium rounded-md bg-zinc-950 text-zinc-500 border border-zinc-800 group-hover:border-zinc-700 transition-colors"
                        >
                            #{{ tag }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

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
