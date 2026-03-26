// main.js

/**
 * Will and Ways - Main Entry Point
 * Lazy loading des modules selon les éléments présents sur la page
 */

(function() {
  'use strict';

  console.log('🚀 Will and Ways - Initialisation...');

  // ==========================================
  // CONFIGURATION DES MODULES
  // ==========================================
  const modulesConfig = {
    slider: {
      selector: '.splide',
      modulePath: './modules/slider.js',
      initFn: 'init'
    },
    logoMarquee: {
      selector: '.marquee',
      modulePath: './modules/logoMarquee.js',
      initFn: 'init'
    },
    usecasesStack: {
      selector: '.usecases_item',
      modulePath: './modules/usecasesStack.js',
      initFn: 'init'
    },
  };

  // ==========================================
  // LAZY LOADING
  // ==========================================
  const loadPromises = [];
  let modulesLoaded = 0;
  let modulesSkipped = 0;

  Object.entries(modulesConfig).forEach(([moduleName, config]) => {
    const elementExists = document.querySelector(config.selector);
    
    if (elementExists) {
      console.log(`📦 Chargement ${moduleName}.js...`);
      
      const promise = import(config.modulePath)
        .then(module => {
          if (module[config.initFn]) {
            module[config.initFn]();
            modulesLoaded++;
          } else {
            console.error(`❌ Fonction ${config.initFn} introuvable dans ${moduleName}.js`);
          }
        })
        .catch(error => {
          console.error(`❌ Erreur chargement ${moduleName}.js:`, error);
        });
      
      loadPromises.push(promise);
    } else {
      console.log(`⏭️  Skip ${moduleName}.js (aucun élément "${config.selector}")`);
      modulesSkipped++;
    }
  });

  // ==========================================
  // FINALISATION
  // ==========================================
  if (loadPromises.length === 0) {
    console.log('ℹ️  Aucun module nécessaire sur cette page');
    console.log('✅ Site initialisé !');
  } else {
    Promise.all(loadPromises)
      .then(() => {
        console.log(`✅ ${modulesLoaded} module(s) chargé(s), ${modulesSkipped} skippé(s)`);
        console.log('✅ Site initialisé avec succès !');
      })
      .catch(error => {
        console.error('❌ Erreur lors de l\'initialisation:', error);
      });
  }
  
})();