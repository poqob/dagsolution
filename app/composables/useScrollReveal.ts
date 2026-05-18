import { useIntersectionObserver } from '@vueuse/core'

export function useScrollReveal(threshold = 0.1) {
  const target = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      if (isIntersecting) isVisible.value = true
    },
    { threshold }
  )

  return { target, isVisible }
}

export function useStaggerReveal(threshold = 0.1) {
  const container = ref<HTMLElement | null>(null)
  const revealed = ref(false)

  useIntersectionObserver(
    container,
    ([{ isIntersecting }]) => {
      if (isIntersecting) revealed.value = true
    },
    { threshold }
  )

  return { container, revealed }
}
