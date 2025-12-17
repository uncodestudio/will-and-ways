// modules/slider.js - Gestion de tous les sliders Splide
export function init() {
  // Vérifier dépendance
  if (typeof Splide === 'undefined') {
    console.warn('⚠️  Splide non chargé, retry dans 100ms...');
    setTimeout(init, 100);  // ← Changé ici aussi
    return;
  }
  
  console.log('🎠 Module Sliders - Initialisation...');
  
  // Configurations par type
  const sliderConfigs = {
    'is-testimonies': {
      type: 'loop',
      gap: '1.5rem',
      autoWidth: true,
      arrows: true,
      pagination: false,
      drag: true,
      breakpoints: {
        768: { autoWidth: false, perPage: 1 },
        480: { gap: '1rem' }
      }
    }
  };
  
  // Auto-detection et init
  let totalInitialized = 0;
  
  Object.keys(sliderConfigs).forEach(className => {
    const sliders = document.querySelectorAll(`.splide.${className}`);
    
    if (sliders.length > 0) {
      sliders.forEach(slider => {
        const config = sliderConfigs[className];
        
        try {
          if (config.autoScroll && window.splide?.Extensions) {
            new Splide(slider, config).mount(window.splide.Extensions);
          } else {
            new Splide(slider, config).mount();
          }
          totalInitialized++;
        } catch (error) {
          console.error(`❌ Erreur init slider .${className}:`, error);
        }
      });
      
      console.log(`   ✅ ${sliders.length} slider(s) .${className}`);
    }
  });
  
  if (totalInitialized === 0) {
    console.log('   ℹ️  Aucun slider détecté sur cette page');
  } else {
    console.log(`🎠 Module Sliders - ✅ ${totalInitialized} slider(s) initialisé(s)`);
  }
}