<script setup lang="ts">
import { ref } from 'vue';
import { TestimonialSlider } from "@/components/ui/testimonial-slider";

const rants = ref([
    {
        topic: 'Windows',
        content: "piece of sh*t",
    },
    {
        topic: 'Ubuntu',
        content: "No 'Sorry,' on login or go to hell",
    },
    {
        topic: 'npm',
        content: "blackhole maker",
    },
    {
        topic: 'Jellyfin',
        content: "you ate half of my vps memory...",
    },
    {
        topic: '⬛⬜',
        content: "We poor folks simply aren't cut out for options trading.🖕",
    },
    {
        topic: 'Nvidia',
        content: "You are the reason why I can't afford a house.",
    },
    {
        topic: 'Liquid Glass',
        content: "blindingly bright",
    },
    {
        topic: 'WeChat',
        content: "Truly feature-rich lol.",
    },
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

        <div class="bg-background relative h-[500px] w-full overflow-hidden rounded-lg border dark">
            <div class="mt-[64px] flex justify-center px-12">
                <TestimonialSlider :rants="rants" />
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
