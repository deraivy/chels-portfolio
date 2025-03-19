<template>
  <div>
    <!-- Navbar -->
    <nav
      :class="[
        'fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 lg:px-28 transition-all duration-300 z-50',
        isScrolled ? 'bg-[#121212] shadow-lg py-4' : 'bg-transparent',
      ]"
    >
      <!-- Logo -->
      <router-link
        to="/"
        class="text-3xl lg:text-4xl font-extrabold tracking-tight text-white hover:text-emerald-500 transition-colors duration-300"
      >
        CHELS.
      </router-link>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex space-x-6 lg:space-x-8">
        <li v-for="link in navLinks" :key="link">
          <a
            href="#"
            class="text-lg lg:text-xl font-medium text-white hover:text-emerald-500 transition-colors duration-300"
          >
            {{ link }}
          </a>
        </li>
      </ul>

      <!-- Resume Button (Hidden on Small Screens) -->
      <a
        href="/docs/resume.pdf"
        download="resume"
        class="hidden md:block text-base lg:text-lg font-semibold px-6 py-2 bg-emerald-600 text-white rounded-full shadow-md hover:bg-emerald-700 transition-all duration-300"
      >
        Resume
      </a>

      <!-- Mobile Menu Icon -->
      <button @click="toggleMenu" class="md:hidden text-white">
        <AlignJustify size="32" />
      </button>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      @click="toggleMenu"
    ></div>

    <!-- Mobile Menu Drawer -->
    <div
      v-if="isMenuOpen"
      class="fixed top-0 right-0 w-64 h-full bg-gray-900 shadow-lg p-6 z-50 transform transition-transform duration-300"
      :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <button @click="toggleMenu" class="text-white absolute top-4 right-4">
        <X size="24" />
      </button>
      <ul class="mt-10 space-y-6">
        <li v-for="link in navLinks" :key="link">
          <a
            href="#"
            class="block text-lg font-medium text-white hover:text-emerald-500 transition-colors duration-300"
            @click="toggleMenu"
          >
            {{ link }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { AlignJustify, X } from "lucide-vue-next";

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const navLinks = ["Home", "About", "Services", "Contact"];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
