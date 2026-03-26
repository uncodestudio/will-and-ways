// modules/usecasesStack.js
import { log, warn, ready } from './utils.js'

export function init() {
  ready(() => {
    log('🃏 Initialisation Usecases Highlight')

    if (typeof ScrollTrigger === 'undefined' || typeof gsap === 'undefined') {
      warn('⚠️ GSAP ou ScrollTrigger pas chargé')
      return
    }

    const items = document.querySelectorAll('.usecases_item')

    if (items.length < 1) {
      warn('⚠️ Aucun usecase trouvé')
      return
    }

    log(`🃏 ${items.length} items trouvés`)

    setTimeout(() => {
      log('✅ Setup highlight usecases')

      // État initial : toutes les cartes à 40%
      gsap.set(items, { opacity: 0.2 })

      items.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: 'top 60%',
          end: 'bottom 40%',
          markers: false,
          onEnter: () => gsap.to(item, { opacity: 1, duration: 0.4, ease: 'power2.out' }),
          onLeave: () => gsap.to(item, { opacity: 0.4, duration: 0.4, ease: 'power2.in' }),
          onEnterBack: () => gsap.to(item, { opacity: 1, duration: 0.4, ease: 'power2.out' }),
          onLeaveBack: () => gsap.to(item, { opacity: 0.4, duration: 0.4, ease: 'power2.in' }),
        })

        log(`✅ Usecase ${index + 1} configuré`)
      })

      ScrollTrigger.refresh()
      log('✅ Highlight usecases initialisé')

    }, 3000)
  })
}
