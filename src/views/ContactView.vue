<script setup lang="ts">
import TelegramIcon from '@/assets/icons/telegram.svg?component'
import DiscordIcon from '@/assets/icons/discord.svg?component'
import { ParticlesBg } from '@/components/ui/particles-bg';
import { ArrowRight } from 'lucide-vue-next';
</script>

<template>
  <ParticlesBg
      class="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden bg-zinc-950 md:shadow-xl"
      :quantity="100"
      :ease="100"
      color="#FFF"
      :staticity="10"
      refresh
    >
  <div class="flex flex-col items-center justify-center min-h-[50vh] space-y-8 animate-fade-in-down py-12">
    <div class="text-center space-y-4 mb-16 animate-fade-in-down">
            <h1 class="text-4xl md:text-6xl font-black tracking-tighter text-white">
                CONTACT
            </h1>
            <p class="text-zinc-400 max-w-xl mx-auto text-lg">
                Get in touch with me.
            </p>
        </div>

    <div class="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col space-y-6 max-w-md w-full shadow-xl shadow-black/50">

      <!-- Discord -->
      <div class="flex items-center p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
          <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#5865F2]/10 text-[#5865F2]">
            <DiscordIcon class="w-6 h-6 fill-current" />
          </div>
          <div class="ml-4 flex-grow">
            <h3 class="text-sm font-medium text-zinc-400">Discord</h3>
            <p class="text-lg font-semibold text-white tracking-wide">xmagnetkopf</p>
          </div>
      </div>

      <!-- Telegram -->
      <a href="https://t.me/magnetkopf?direct" target="_blank" class="group flex items-center p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/50 hover:border-[#229ED9] hover:bg-[#229ED9]/5 transition-all cursor-pointer">
          <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#229ED9]/10 text-[#229ED9] group-hover:scale-110 transition-transform">
            <TelegramIcon class="w-6 h-6 fill-current group-hover:text-[#229ED9]" />
          </div>
          <div class="ml-4 flex-grow">
            <h3 class="text-sm font-medium text-zinc-400 group-hover:text-[#229ED9]">Telegram</h3>
            <p class="text-lg font-semibold text-white">@magnetkopf</p>
          </div>
          <div class="text-zinc-600 group-hover:text-[#229ED9] transition-colors">
            <ArrowRight class="w-5 h-5" />
          </div>
      </a>

    </div>
  </div>
  </ParticlesBg>
</template>

<style scoped>
.animate-fade-in-down {
  animation: fadeInDown 0.6s ease-out;
}
@keyframes fadeInDown {
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
