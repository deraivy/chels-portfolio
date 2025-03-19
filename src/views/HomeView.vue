<template>
  <div class="bg-[#121212] text-gray-100 font-sans">
    <!-- Sidebar -->
    <aside class="fixed bottom-0 left-4 z-50 hidden md:block">
      <div class="flex flex-col items-center">
        <Dribbble
          class="mb-6 text-emerald-500 hover:text-[#ea4c89] transition-colors"
          :size="24"
        />
        <Instagram
          class="mb-6 text-emerald-500 hover:text-[#e1306c] transition-colors"
          :size="24"
        />
        <Github
          class="mb-6 text-emerald-500 hover:text-[#4078c0] transition-colors"
          :size="24"
        />
        <Linkedin
          class="mb-6 text-emerald-500 hover:text-[#0077b5] transition-colors"
          :size="24"
        />
        <div
          class="border border-emerald-500 opacity-50 h-56 w-0 mt-6 transition-all hover:opacity-100"
        ></div>
      </div>
    </aside>

    <!-- Hero Section -->
    <section
      class="w-full h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div class="absolute inset-0">
        <img
          src="/images/line.png"
          alt="Background"
          class="w-full h-full object-cover opacity-10 transition-opacity duration-500 hover:opacity-20"
        />
      </div>
      <div class="relative text-center z-10 px-4 sm:px-6 lg:px-8">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest text-gray-300 animate-fadeIn"
        >
          Hello, I'm
        </h2>
        <h1
          class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-300 animate-fadeIn"
          style="animation-delay: 0.2s"
        >
          Ejikeme Chelsea
        </h1>
        <h3
          class="text-xl sm:text-2xl md:text-3xl font-semibold text-emerald-500 mt-5 animate-fadeIn"
          style="animation-delay: 0.4s"
        >
          I am {{ displayText }}
        </h3>
        <p
          class="text-base sm:text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed text-gray-400 animate-fadeIn"
          style="animation-delay: 0.6s"
        >
          I specialize in bringing ideas to life through stunning visuals,
          creative designs, and engaging multimedia content.
        </p>
        <a
          href="#contact"
          class="mt-10 inline-flex items-center bg-emerald-600 text-white py-3 px-10 rounded-full font-semibold text-lg shadow-lg hover:bg-emerald-700 hover:scale-110 transition-all duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>

    <!-- Services Section -->
    <section
      class="mx-auto w-full max-w-7xl px-4 sm:px-6 py-12 md:py-16 lg:py-24"
    >
      <div class="mb-12 text-center">
        <h2
          class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 animate-slideUp"
        >
          My Specialties
        </h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          class="bg-[#1e1e1e] rounded-xl shadow-lg p-8 text-center hover:bg-[#2d2d2d] hover:scale-105 transition-all duration-300"
        >
          <Box
            class="mx-auto mb-5 text-white opacity-80 hover:opacity-100 transition-opacity"
            :size="52"
          />
          <h3
            class="text-gray-100 text-2xl font-semibold hover:text-emerald-500 transition-colors"
          >
            3D Design
          </h3>
          <p class="text-gray-400 mt-2">
            Creating realistic and interactive 3D models.
          </p>
        </div>
        <div
          class="bg-[#1e1e1e] rounded-xl shadow-lg p-8 text-center hover:bg-[#2d2d2d] hover:scale-105 transition-all duration-300"
        >
          <Images
            class="mx-auto mb-5 text-white opacity-80 hover:opacity-100 transition-opacity"
            :size="52"
          />
          <h3
            class="text-gray-100 text-2xl font-semibold hover:text-emerald-500 transition-colors"
          >
            Flyer Design
          </h3>
          <p class="text-gray-400 mt-2">
            Designing eye-catching promotional flyers.
          </p>
        </div>
        <div
          class="bg-[#1e1e1e] rounded-xl shadow-lg p-8 text-center hover:bg-[#2d2d2d] hover:scale-105 transition-all duration-300"
        >
          <MonitorPlay
            class="mx-auto mb-5 text-white opacity-80 hover:opacity-100 transition-opacity"
            :size="52"
          />

          <h3
            class="text-gray-100 text-2xl font-semibold hover:text-emerald-500 transition-colors"
          >
            Motion Graphics
          </h3>
          <p class="text-gray-400 mt-2">
            Creating engaging animated graphics and videos.
          </p>
        </div>
        <div
          class="bg-[#1e1e1e] rounded-xl shadow-lg p-8 text-center hover:bg-[#2d2d2d] hover:scale-105 transition-all duration-300"
        >
          <Layers2
            class="mx-auto mb-5 text-white opacity-80 hover:opacity-100 transition-opacity"
            :size="52"
          />

          <h3
            class="text-gray-100 text-2xl font-semibold hover:text-emerald-500 transition-colors"
          >
            Logo Design
          </h3>
          <p class="text-gray-400 mt-2">
            Crafting unique and professional brand logos.
          </p>
        </div>
      </div>
    </section>

    <!-- Experience, Education, Skills Section -->
    <section class="">
      <div
        class="mx-auto w-full max-w-7xl px-6 sm:px-12 md:px-16 py-16 md:py-24 lg:py-32"
      >
        <div
          class="flex flex-col md:flex-row items-start space-x-0 md:space-x-16"
        >
          <div class="md:w-1/3 lg:w-1/4">
            <div class="flex flex-col space-y-4">
              <button
                v-for="(tab, index) in tabs"
                :key="index"
                class="text-lg font-medium py-4 px-8 rounded-lg transition-all duration-300 flex justify-between items-center"
                :class="{
                  'bg-emerald-600 text-white shadow-md': selected === tab.id,
                  'text-gray-400 hover:bg-[#2d2d2d] hover:text-gray-100':
                    selected !== tab.id,
                }"
                @click="selected = tab.id"
              >
                {{ tab.label }}
                <ArrowUpRight
                  :color="selected === tab.id ? 'white' : 'emerald-500'"
                  :size="28"
                />
              </button>
            </div>
          </div>
          <div
            class="md:w-2/3 lg:w-3/4 bg-[#1e1e1e] p-10 rounded-xl shadow-md mt-8 md:mt-0"
          >
            <transition name="fade" mode="out-in">
              <div v-if="selected">
                <div v-if="selected === 'experience'" key="experience">
                  <h3 class="text-3xl font-semibold text-gray-100 mb-6">
                    Experience
                  </h3>
                  <div class="space-y-6">
                    <div>
                      <p class="font-medium text-xl text-emerald-500">
                        Software Engineer - XYZ Company
                      </p>
                      <p class="text-sm text-gray-400">2020 - Present</p>
                      <p class="mt-3 text-gray-100">
                        Developed and maintained web applications using modern
                        technologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div v-if="selected === 'education'" key="education">
                  <h3 class="text-3xl font-semibold text-gray-100 mb-6">
                    Education
                  </h3>
                  <div class="space-y-6">
                    <div>
                      <p class="font-medium text-xl text-emerald-500">
                        Bells University Of Technology
                      </p>
                      <p class="text-sm text-gray-400">2018 - 2023</p>
                      <p class="mt-3 text-gray-100">
                        B.Tech in Computer Science
                      </p>
                    </div>
                  </div>
                </div>
                <div v-if="selected === 'skills'" key="skills">
                  <h3 class="text-3xl font-semibold text-gray-100 mb-6">
                    Skills
                  </h3>
                  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div
                      class="bg-emerald-600 p-4 rounded-lg text-center text-white font-medium hover:bg-emerald-700 transition-colors"
                    >
                      Adobe Illustrator
                    </div>
                    <div
                      class="bg-emerald-600 p-4 rounded-lg text-center text-white font-medium hover:bg-emerald-700 transition-colors"
                    >
                      Blender
                    </div>
                    <div
                      class="bg-emerald-600 p-4 rounded-lg text-center text-white font-medium hover:bg-emerald-700 transition-colors"
                    >
                      Adobe Photoshop
                    </div>
                    <div
                      class="bg-emerald-600 p-4 rounded-lg text-center text-white font-medium hover:bg-emerald-700 transition-colors"
                    >
                      Photoshop
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section
      class="mx-auto w-full max-w-7xl px-4 sm:px-6 py-12 md:py-16 lg:py-24"
    >
      <div class="text-center mb-12">
        <h2
          class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 animate-slideUp"
        >
          My Projects
        </h2>
        <p
          class="text-gray-400 mt-4 text-lg sm:text-xl max-w-3xl mx-auto animate-slideUp"
          style="animation-delay: 0.2s"
        >
          A showcase of my creative work, blending art and technology to craft
          unique visual experiences.
        </p>
      </div>
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-6">
        <div
          class="break-inside-avoid mb-6 transform hover:scale-105 transition duration-300"
        >
          <img
            class="h-auto w-full rounded-xl shadow-md hover:shadow-lg transition-shadow"
            src="/images/flyer1.png"
            alt="Project 1"
          />
        </div>
        <div
          class="break-inside-avoid mb-6 transform hover:scale-105 transition duration-300"
        >
          <img
            class="h-auto w-full rounded-xl shadow-md hover:shadow-lg transition-shadow"
            src="/images/flyer2.jpg"
            alt="Project 2"
          />
        </div>
        <div
          class="break-inside-avoid mb-6 transform hover:scale-105 transition duration-300"
        >
          <img
            class="h-auto w-full rounded-xl shadow-md hover:shadow-lg transition-shadow"
            src="/images/flyer3.png"
            alt="Project 3"
          />
        </div>
      </div>
      <div class="flex justify-end mt-10">
        <router-link
          to="/portfolio"
          class="bg-emerald-600 px-10 py-3 text-white rounded-full font-semibold text-lg hover:bg-emerald-700 hover:scale-105 transition-all duration-300 shadow-md"
        >
          See More
        </router-link>
      </div>
    </section>

    <!-- Contact Section -->
    <div class="relative overflow-hidden">
      <div
        class="mx-auto w-full max-w-7xl px-4 sm:px-6 py-12 md:py-16 lg:py-24 relative z-10"
      >
        <h2
          class="text-4xl sm:text-5xl md:text-6xl text-center font-bold text-gray-100 animate-slideUp"
        >
          Get In Touch
        </h2>
        <p
          class="text-center text-lg sm:text-xl text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed animate-slideUp"
          style="animation-delay: 0.2s"
        >
          Need eye-catching visuals, stunning 3D designs, or sleek motion
          graphics? I specialize in bringing ideas to life. My inbox is always
          open—whether you have a project, a question, or just want to connect!
        </p>
        <div class="flex justify-center mt-8">
          <a
            :href="emailLink"
            class="inline-flex items-center bg-emerald-600 text-white font-semibold text-lg sm:text-xl px-8 py-3 rounded-full shadow-md hover:bg-emerald-700 hover:scale-105 transition-all duration-300 animate-slideUp"
            style="animation-delay: 0.4s"
          >
            Say Hello
          </a>
        </div>
        <div
          class="flex flex-col sm:flex-row justify-between items-center px-24 mt-12 text-gray-100 space-y-6 sm:space-y-0 sm:space-x-8"
        >
          <div class="text-center">
            <h3 class="text-lg font-semibold">Location</h3>
            <p class="text-gray-400 mt-1">Lagos, Nigeria</p>
          </div>
          <div class="text-center">
            <h3 class="text-lg font-semibold">Phone</h3>
            <p class="text-gray-400 mt-1">(+234) 000 000 0000</p>
          </div>
          <div class="text-center">
            <h3 class="text-lg font-semibold">Email</h3>
            <p class="text-gray-400 mt-1">your.email@example.com</p>
          </div>
        </div>
      </div>
      <img
        src="/images/help.png"
        alt="Decorative corner"
        class="absolute bottom-0 right-0 w-32 sm:w-40 md:w-48 lg:w-80 opacity-30 pointer-events-none z-0"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  ArrowUpRight,
  Dribbble,
  Instagram,
  Linkedin,
  Github,
  Layers2,
} from "lucide-vue-next";
import { Box } from "lucide-vue-next";
import { MonitorPlay } from "lucide-vue-next";
import { Images } from "lucide-vue-next";

const email = "nwanorohfavoured@gmail.com"; // Replace with your actual email
const emailLink = ref(`mailto:${email}`);
const words = ["Creative Designer", "Visual Artist", "Freelancer"];
const displayText = ref("");
let i = 0;
let j = 0;
let isDeleting = false;
const selected = ref("experience");

const tabs = [
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
];

const type = () => {
  const currentWord = words[i];
  if (isDeleting) {
    displayText.value = currentWord.substring(0, j - 1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  } else {
    displayText.value = currentWord.substring(0, j + 1);
    j++;
    if (j === currentWord.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 1500);
      return;
    }
  }
  setTimeout(type, 100);
};

onMounted(type);
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}
.animate-slideUp {
  animation: slideUp 0.8s ease-out forwards;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
