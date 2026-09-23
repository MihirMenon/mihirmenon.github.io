(() => {
  try {
    const settings = JSON.parse(localStorage.getItem('mihir-appearance') || '{}');
    const palette = ['lime', 'ice', 'copper', 'silver'].includes(settings.palette) ? settings.palette : 'lime';
    const mode = ['light', 'dark', 'system'].includes(settings.mode) ? settings.mode : 'dark';
    const theme = mode === 'system' ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : mode;
    document.documentElement.dataset.palette = palette;
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.motion = settings.reduceMotion || matchMedia('(prefers-reduced-motion: reduce)').matches ? 'reduced' : 'full';
  } catch (_) {
    document.documentElement.dataset.motion = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'reduced' : 'full';
  }
})();
