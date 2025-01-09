export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server)
    return

  // Redirect from landing page to dashboard
  if (to.path === '/') {
    return navigateTo('/dashboard')
  }

  if (to.path.startsWith('/dashboard') && to.path !== '/dashboard/login') {
    if (!window.localStorage.getItem('SinkSiteToken'))
      return navigateTo('/dashboard/login')
  }

  if (to.path === '/dashboard/login') {
    try {
      await useAPI('/api/verify')
      return navigateTo('/dashboard')
    }
    catch (e) {
      console.warn(e)
    }
  }
})
