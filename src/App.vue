<template>
  <div>
    <nav
      :class="[
        'fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 lg:px-28 transition-all duration-300 z-50',
        isScrolled ? 'bg-gray-100 shadow-lg py-4' : 'bg-transparent',
      ]"
    >
      <!-- Logo -->
      <router-link
        to="/"
        class="text-3xl lg:text-4xl font-extrabold tracking-tight"
        :class="
          isScrolled ? 'text-gray-900' : 'text-[#2b2344] hover:text-emerald-600'
        "
      >
        CHELS.
      </router-link>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex space-x-6 lg:space-x-8">
        <li v-for="link in navLinks" :key="link">
          <a
            href="#"
            class="text-lg lg:text-xl font-medium transition-colors duration-300"
            :class="
              isScrolled
                ? 'text-gray-900 hover:text-gray-600'
                : 'text-[#2b2344] hover:text-emerald-600'
            "
          >
            {{ link }}
          </a>
        </li>
      </ul>

      <!-- Resume Button (Hidden on Small Screens) -->
      <router-link
        to="/"
        class="hidden md:block text-base lg:text-lg font-semibold px-6 py-2 bg-emerald-600 text-white rounded-full transition-all duration-300"
        :class="
          isScrolled
            ? 'bg-emerald-700 hover:bg-emerald-800'
            : 'hover:bg-emerald-700'
        "
      >
        Resume
      </router-link>

      <!-- Mobile Menu Icon -->
      <button @click="toggleMenu" class="md:hidden text-gray-900">
        <AlignJustify size="32" />
      </button>
    </nav>

    <!-- Mobile Menu Drawer -->
    <div v-if="isMenuOpen" class="fixed z-40" @click="toggleMenu"></div>

    <div
      v-if="isMenuOpen"
      class="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 z-50 transform transition-transform duration-300"
    >
      <button @click="toggleMenu" class="text-gray-900 absolute top-4 right-4">
        <X />
      </button>
      <ul class="mt-10 space-y-6">
        <li v-for="link in navLinks" :key="link">
          <a
            href="#"
            class="block text-lg font-medium text-gray-900 hover:text-emerald-600"
            @click="toggleMenu"
          >
            {{ link }}
          </a>
        </li>
      </ul>
    </div>

    <router-view />
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
