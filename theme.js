/* =====================================================================
   Shared theme controller (Light Default)
   ---------------------------------------------------------------------
   - Persisted across pages via localStorage
   - Toggle button must have id="theme-toggle" and contain an element
     with id="theme-icon" (a Material Symbols span).
   - Apply theme as early as possible to avoid a flash: a matching
     inline boot snippet lives in <head> of each page.
   ===================================================================== */
(function () {
  "use strict";

  var STORAGE_KEY = "siva-theme";
  var THEMES = { DARK: "dark", LIGHT: "light" };

  function currentTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === THEMES.DARK) return THEMES.DARK;
    if (saved === THEMES.LIGHT) return THEMES.LIGHT;
    return THEMES.LIGHT; // Default to Light
  }

  function applyTheme(theme) {
    var html = document.documentElement;
    var isLight = theme === THEMES.LIGHT;
    
    html.classList.toggle("dark", !isLight);
    html.classList.toggle("light", isLight);
    html.setAttribute("data-theme", theme);

    var icon = document.getElementById("theme-icon");
    if (icon) {
      // In light mode, icon displays "dark_mode" (action to toggle)
      // In dark mode, icon displays "light_mode" (action to toggle)
      icon.textContent = isLight ? "dark_mode" : "light_mode";
    }

    // Notify any subscribers (like particle canvases) of the theme change
    window.dispatchEvent(new CustomEvent("themechange", { detail: { theme: theme } }));
  }

  window.SivaTheme = {
    currentTheme: currentTheme,
    applyTheme: applyTheme,
    initToggle: function () {
      var btn = document.getElementById("theme-toggle");
      if (!btn) return;
      
      // Update icon to correct text on load
      var icon = document.getElementById("theme-icon");
      if (icon) {
        icon.textContent = currentTheme() === THEMES.LIGHT ? "dark_mode" : "light_mode";
      }

      btn.addEventListener("click", function () {
        var next = currentTheme() === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
      });
    }
  };

  // Run on page load
  applyTheme(currentTheme());
  if (document.readyState !== "loading") {
    window.SivaTheme.initToggle();
  } else {
    document.addEventListener("DOMContentLoaded", window.SivaTheme.initToggle);
  }
})();
