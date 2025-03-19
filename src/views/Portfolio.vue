<template>
  <div class="bg-[#121212] text-white min-h-screen px-6 py-12">
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold">My Recent Works</h1>
    </div>

    <!-- Category Navigation -->
    <div class="flex flex-wrap justify-center gap-4 mb-10">
      <router-link
        v-for="cat in categories"
        :key="cat"
        :to="`/portfolio/${cat.toLowerCase().replace(' ', '-')}`"
        class="px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300"
        :class="{
          'bg-[#f59e0c] text-black shadow-lg shadow-[#f59e0c]/50':
            currentCategory === cat,
          'bg-gray-800 text-gray-300 hover:bg-gray-700':
            currentCategory !== cat,
        }"
      >
        {{ cat }}
      </router-link>
    </div>

    <!-- Dynamic Category Content -->
    <router-view></router-view>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "PortfolioV",
  setup() {
    const categories = ["All", "Logo", "Flyer", "Animation", "3D Design"];
    const route = useRoute();

    // Extract category from the route
    const currentCategory = computed(() => {
      const categoryParam = route.params.category;
      return categoryParam
        ? categoryParam.replace("-", " ").toLowerCase()
        : "All";
    });

    return { categories, currentCategory };
  },
};
</script>
