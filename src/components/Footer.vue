<template>
  <footer class="bg-[#121212] text-white py-16">
    <div
      class="max-w-6xl mx-auto px-8 lg:px-28 flex flex-col items-center gap-4"
    >
      <!-- Branding -->
      <router-link
        to="/"
        class="text-2xl mb-6 font-extrabold tracking-tight text-emerald-500 hover:text-emerald-400 transition-colors duration-300"
      >
        CHELS.
      </router-link>

      <!-- Socials -->
      <div
        class="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-10"
      >
        <div class="bg-[#1e1e1e] rounded-md p-4">
          <a
            href="https://dribbble.com/yourprofile"
            target="_blank"
            class="flex items-center gap-2 hover:text-emerald-500 transition-colors duration-300"
          >
            <Dribbble class="w-5 h-5" />
          </a>
        </div>

        <div class="bg-[#1e1e1e] rounded-md p-4">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            class="flex items-center gap-2 hover:text-emerald-500 transition-colors duration-300"
          >
            <Linkedin class="w-5 h-5" />
          </a>
        </div>
        <div class="bg-[#1e1e1e] rounded-md p-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            class="flex items-center gap-2 hover:text-emerald-500 transition-colors duration-300"
          >
            <Github class="w-5 h-5" />
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <p class="text-xs text-gray-500">© {{ currentYear }} CHELS.</p>
    </div>
  </footer>
</template>

<script>
import { computed } from "vue";
import { Dribbble, Linkedin, Github } from "lucide-vue-next"; // Import Lucide icons

export default {
  name: "FooterView",
  components: {
    Dribbble,
    Linkedin,
    Github,
  },
  setup() {
    const currentYear = computed(() => new Date().getFullYear());
    return { currentYear };
  },
};
</script>

<style scoped>
footer {
  background-color: #121212;
}
</style>
