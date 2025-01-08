import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import glaze from 'glazejs'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

gsap.registerPlugin(ScrollTrigger)

export default defineNuxtPlugin((_nuxtApp) => {
  const configOptions = useRuntimeConfig().public.glaze ?? {}

  _nuxtApp.hook('app:beforeMount', () => {
    glaze({
      lib: {
        gsap: {
          core: gsap,
        },
      },
      ...configOptions,
    })
  })
})
