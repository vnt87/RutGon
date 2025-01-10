<script setup>
import { Moon, Sun } from 'lucide-vue-next'

const colorMode = useColorMode()

function toggleTheme() {
  const preferences = ['light', 'dark']
  const currentIndex = preferences.indexOf(colorMode.preference)
  const nextIndex = (currentIndex + 1) % preferences.length
  colorMode.preference = preferences[nextIndex]
}
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    class="text-gray-500 hover:text-gray-900 dark:hover:text-gray-50"
    @click="toggleTheme"
  >
    <Sun
      class="absolute w-5 h-5 transition-all scale-100 dark:scale-0"
    />
    <Moon
      class="w-5 h-5 transition-all scale-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
