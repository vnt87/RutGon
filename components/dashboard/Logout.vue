<script setup>
import { LogOut } from 'lucide-vue-next'

function logOut() {
  localStorage.removeItem('SinkSiteToken')
  navigateTo('/dashboard/login')
}
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child>
      <LogOut
        class="w-5 h-5 cursor-pointer text-gray-500 hover:text-gray-900 dark:hover:text-gray-50"
      />
    </AlertDialogTrigger>
    <AlertDialogContent class="max-w-[95svw] max-h-[95svh] md:max-w-lg grid-rows-[auto_minmax(0,1fr)_auto]">
      <AlertDialogHeader>
        <AlertDialogTitle>LogOut ?</AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure you want to log out ?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="logOut">
          LogOut
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
