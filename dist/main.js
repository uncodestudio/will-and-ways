(function() {
  console.log("🚀 Will and Ways - Initialisation...");
  const n = {
    slider: {
      selector: ".splide",
      modulePath: "./modules/slider.js",
      initFn: "init"
    },
    logoMarquee: {
      selector: ".marquee",
      modulePath: "./modules/logoMarquee.js",
      initFn: "init"
    },
    usecasesStack: {
      selector: ".usecases_item",
      modulePath: "./modules/usecasesStack.js",
      initFn: "init"
    }
  }, l = [];
  let t = 0, i = 0;
  Object.entries(n).forEach(([e, s]) => {
    if (document.querySelector(s.selector)) {
      console.log(`📦 Chargement ${e}.js...`);
      const r = import(s.modulePath).then((o) => {
        o[s.initFn] ? (o[s.initFn](), t++) : console.error(`❌ Fonction ${s.initFn} introuvable dans ${e}.js`);
      }).catch((o) => {
        console.error(`❌ Erreur chargement ${e}.js:`, o);
      });
      l.push(r);
    } else
      console.log(`⏭️  Skip ${e}.js (aucun élément "${s.selector}")`), i++;
  }), l.length === 0 ? (console.log("ℹ️  Aucun module nécessaire sur cette page"), console.log("✅ Site initialisé !")) : Promise.all(l).then(() => {
    console.log(`✅ ${t} module(s) chargé(s), ${i} skippé(s)`), console.log("✅ Site initialisé avec succès !");
  }).catch((e) => {
    console.error("❌ Erreur lors de l'initialisation:", e);
  });
})();
