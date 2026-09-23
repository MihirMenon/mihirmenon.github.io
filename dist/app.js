import { profile } from './portfolio.js';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const e = escapeHTML;
const safeUrl = value => {
  if (!value) return '';
  try {
    const url = new URL(value, location.href);
    return ['https:', 'http:', 'mailto:'].includes(url.protocol) ? url.href : '';
  } catch { return ''; }
};
const externalLink = (url, text, className = 'text-link') => {
  const safe = safeUrl(url);
  return safe ? `<a class="${e(className)}" href="${e(safe)}" target="_blank" rel="noopener noreferrer">${e(text)} <span aria-hidden="true">↗</span></a>` : '';
};

const projectVisuals = {
  drm: `<div class="drm-diagram"><div class="drm-key"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6L12 3Z"/><rect x="9" y="10" width="6" height="5" rx="1"/><path d="M10 10V8a2 2 0 0 1 4 0v2"/></svg></div><div class="drm-crypto"><strong>RSA-2048 + AES-128</strong><p>HYBRID LICENSING / HMAC</p></div><div class="validation-stages">${Array.from({length:6},(_,i)=>`<span class="validation-stage" style="--stage:${i}" aria-hidden="true">${String(i+1).padStart(2,'0')}</span>`).join('')}</div></div><div class="visual-caption"><span>6-stage validation</span><span>On-premise / HAL</span></div>`,
  pii: `<div><div class="pii-window"><div class="window-top"><span>document.txt</span><span>Pseudonymized</span></div><div class="pii-example">Name: <mark>Person_01</mark><br>Email: <mark>Email_01</mark><br>Phone: <mark>Phone_01</mark></div></div><div class="pii-layers"><span>NER models</span><span>Regex</span><span>Heuristics</span></div></div><div class="visual-caption"><span>Illustrative output</span><span>AWS → Azure</span></div>`,
  churn: `<div class="churn-result"><strong>89.02<span style="font-size:.55em">%</span></strong><p>Reported classification accuracy</p><div class="churn-pipeline"><span>Glue</span><b>→</b><span>Athena</span><b>→</b><span>SageMaker</span></div></div><div class="visual-caption"><span>XGBoost classification</span><span>Customer retention</span></div>`
};

$('#projects').innerHTML = profile.projects.map(project => `
  <article class="project reveal" id="${e(project.id)}" aria-labelledby="title-${e(project.id)}">
    <div class="project-copy">
      <div class="project-meta"><span class="project-number">${e(project.number)}</span><span class="project-category">${e(project.category)}</span></div>
      <h3 id="title-${e(project.id)}">${project.title.split('<br>').map(e).join('<br>')}</h3>
      <p>${e(project.description)}</p>
      <ul class="tech-tags" aria-label="Technologies">${project.tags.map(tag => `<li>${e(tag)}</li>`).join('')}</ul>
      <button class="text-link project-open" data-project="${e(project.id)}" aria-haspopup="dialog" aria-label="Read project notes: ${e(project.shortTitle)}">Read project notes <span aria-hidden="true">↗</span></button>
    </div>
    <div class="project-visual ${e(project.id)}-visual"><span class="visual-label">${e(project.shortTitle)}</span>${projectVisuals[project.id]}</div>
  </article>
`).join('');

$('#experience-list').innerHTML = profile.experience.map(item => `
  <article class="experience reveal">
    <div class="experience-summary"><p class="eyebrow">${e(item.date)}</p><h3>${e(item.company)}</h3><p class="experience-role">${e(item.role)}</p><p class="experience-location">${e(item.location)}</p></div>
    <div class="experience-body"><p class="experience-description">${e(item.description)}</p><div class="experience-stats">${item.highlights.map(stat => `<div class="experience-stat"><strong>${e(stat.value)}</strong><span>${e(stat.label)}</span></div>`).join('')}</div>${item.evidence ? `<div class="evidence-link">${externalLink(item.evidence,'View supporting document')}</div>` : ''}</div>
  </article>
`).join('');

$('#about-content').innerHTML = `
  <div class="about-intro reveal"><p class="about-bio">I’m a <strong>fourth-year Computer Science and Engineering student at SRMIST</strong>, specializing in Cloud Computing. My work spans data pipelines, applied machine learning and enterprise software.<br><br>Alongside building, I lead corporate partnerships at F.A.S.T, bringing people and opportunities together through technical events.</p><div class="education"><span class="eyebrow">Education / 2023 — 2027</span><h3>SRM Institute of Science<br>and Technology</h3><p>B.Tech, Computer Science & Engineering<br>Specialization in Cloud Computing</p><p class="education-meta"><span>Kattankulathur, Chennai</span><span>8.33 / 10 CGPA</span></p></div></div>
  <div class="reveal"><h3 class="skills-heading">The tools behind the work</h3><div class="skills-grid">${profile.skills.map(group => `<div class="skill-group"><h4>${e(group.title)}</h4><p>${group.items.map(item => `<span>${e(item)}</span>`).join('')}</p></div>`).join('')}</div></div>
  <div class="reveal"><h3 class="certifications-heading">Certifications & learning</h3><div class="certification-list">${profile.certifications.map(cert => `<div class="certification"><div><p class="certification-name">${cert.url ? externalLink(cert.url,cert.name) : e(cert.name)}</p><p class="certification-issuer">${e(cert.issuer)}</p></div><time>${e(cert.date)}</time></div>`).join('')}</div></div>
`;

for (const key of ['linkedin', 'github']) {
  if (profile.links[key]) $('#contact-links').insertAdjacentHTML('afterbegin', externalLink(profile.links[key], key === 'linkedin' ? 'LinkedIn' : 'GitHub'));
}
const resumeUrl = safeUrl(profile.links.resume);
if (resumeUrl) $$('a[href="./assets/mihir-menon-resume.pdf"]').forEach(link => { link.href = resumeUrl; });
$('#year').textContent = new Date().getFullYear();

// Native dialogs preserve keyboard focus, support Escape, and keep background content inert.
const appearanceDialog = $('#appearance-dialog');
const projectDialog = $('#project-dialog');
const updateDialogState = () => document.body.classList.toggle('dialog-open', $$('dialog[open]').length > 0);
const showDialog = dialog => {
  if (!dialog.open) dialog.showModal();
  updateDialogState();
};
$('#appearance-open').addEventListener('click', () => showDialog(appearanceDialog));
$$('.close-dialog').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
$$('dialog').forEach(dialog => {
  dialog.addEventListener('close', updateDialogState);
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
});

let previousHash = '#work';
function openProject(id, updateHash = true) {
  const project = profile.projects.find(item => item.id === id);
  if (!project) return;
  const linkLabels = { repository: 'Source code', demo: 'Live demo', presentation: 'Project presentation', evidence: 'Supporting evidence' };
  const links = Object.entries(project.links).map(([key,url]) => externalLink(url, linkLabels[key], 'button')).join('');
  $('#project-detail').innerHTML = `
    <p class="eyebrow project-detail-meta">${e(project.number)} / ${e(project.category)}</p>
    <h2 id="project-detail-title">${e(project.shortTitle)}</h2>
    <p class="project-detail-context">${e(project.context)} · ${e(project.date)}</p>
    <ul class="tech-tags" aria-label="Technologies">${project.tags.map(tag=>`<li>${e(tag)}</li>`).join('')}</ul>
    <div class="project-detail-metric"><strong>${e(project.metric)}</strong><span>${e(project.metricLabel)}</span></div>
    <section class="detail-section"><h3>The problem</h3><p>${e(project.problem)}</p></section>
    <section class="detail-section"><h3>What I built</h3><ul>${project.approach.map(item=>`<li>${e(item)}</li>`).join('')}</ul></section>
    <section class="detail-section"><h3>The outcome</h3><p>${e(project.result)}</p></section>
    ${links ? `<div class="project-detail-links">${links}</div>` : ''}
    ${project.visibility ? `<p class="project-visibility">${e(project.visibility)}</p>` : ''}
  `;
  projectDialog.setAttribute('aria-labelledby', 'project-detail-title');
  if (updateHash) {
    previousHash = location.hash && !location.hash.startsWith('#project-') ? location.hash : '#work';
    history.pushState(null, '', '#project-' + project.id);
  }
  showDialog(projectDialog);
  projectDialog.scrollTop = 0;
}
$$('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project)));
projectDialog.addEventListener('close', () => {
  if (location.hash.startsWith('#project-')) history.replaceState(null, '', previousHash);
});
function readProjectHash() {
  if (location.hash.startsWith('#project-')) openProject(location.hash.slice(9), false);
  else if (projectDialog.open) projectDialog.close();
}
window.addEventListener('hashchange', readProjectHash);
window.addEventListener('popstate', readProjectHash);

// Preferences stay on this device. No analytics, accounts or tracking cookies.
const palettes = [
  {id:'lime',label:'Graphite + Lime',colors:['#0b0d0c','#f0f1eb','#ceff69']},
  {id:'ice',label:'Midnight + Ice',colors:['#090e14','#eff5fc','#94cbff']},
  {id:'copper',label:'Ink + Copper',colors:['#110e0c','#f3eee8','#e4a478']},
  {id:'silver',label:'Black + Silver',colors:['#0d0d0f','#f2f2f4','#d5d7e0']}
];
const systemDark = matchMedia('(prefers-color-scheme: dark)');
const systemReduced = matchMedia('(prefers-reduced-motion: reduce)');
let preferences = {palette:'lime',mode:'dark',reduceMotion:false};
try {
  const saved = JSON.parse(localStorage.getItem('mihir-appearance') || '{}');
  if (palettes.some(p => p.id === saved.palette)) preferences.palette = saved.palette;
  if (['dark','light','system'].includes(saved.mode)) preferences.mode = saved.mode;
  preferences.reduceMotion = saved.reduceMotion === true;
} catch { /* Browser storage can be unavailable; defaults remain usable. */ }

$('#palette-options').innerHTML = palettes.map(palette=>`<button type="button" class="palette-option" data-palette-choice="${palette.id}" aria-pressed="false"><span class="palette-swatch" aria-hidden="true">${palette.colors.map(color=>`<i style="background:${color}"></i>`).join('')}</span><span>${palette.label}</span></button>`).join('');
const sunIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>';
const moonIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 13A8 8 0 0 1 11 4a8.5 8.5 0 1 0 9 9Z"/></svg>';
function applyPreferences() {
  const theme = preferences.mode === 'system' ? (systemDark.matches ? 'dark' : 'light') : preferences.mode;
  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.palette = preferences.palette;
  document.documentElement.dataset.motion = preferences.reduceMotion || systemReduced.matches ? 'reduced' : 'full';
  const modeLabel = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
  $('#theme-toggle').setAttribute('aria-label', modeLabel);
  $('#theme-toggle').title = modeLabel;
  $('#theme-toggle').innerHTML = theme === 'dark' ? sunIcon : moonIcon;
  $$('[data-palette-choice]').forEach(button=>button.setAttribute('aria-pressed', String(button.dataset.paletteChoice === preferences.palette)));
  $$('[data-theme-choice]').forEach(button=>button.setAttribute('aria-pressed', String(button.dataset.themeChoice === preferences.mode)));
  $('#reduce-motion').checked = preferences.reduceMotion || systemReduced.matches;
  $('#reduce-motion').disabled = systemReduced.matches;
  $('#reduce-motion').title = systemReduced.matches ? 'Reduced motion is enabled in your device settings.' : '';
  $('meta[name="theme-color"]').content = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
  if (document.documentElement.dataset.motion === 'reduced') $$('.reveal').forEach(el=>el.classList.add('is-visible'));
  try { localStorage.setItem('mihir-appearance',JSON.stringify(preferences)); } catch { /* Preferences are optional. */ }
}
function changeAppearance(action) {
  if (document.startViewTransition && document.documentElement.dataset.motion !== 'reduced') document.startViewTransition(action);
  else action();
}
$('#theme-toggle').addEventListener('click',()=>changeAppearance(()=>{
  preferences.mode = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyPreferences();
}));
$$('[data-palette-choice]').forEach(button=>button.addEventListener('click',()=>changeAppearance(()=>{preferences.palette=button.dataset.paletteChoice;applyPreferences();})));
$$('[data-theme-choice]').forEach(button=>button.addEventListener('click',()=>changeAppearance(()=>{preferences.mode=button.dataset.themeChoice;applyPreferences();})));
$('#reduce-motion').addEventListener('change',event=>{preferences.reduceMotion=event.target.checked;applyPreferences();});
systemDark.addEventListener('change', applyPreferences);
systemReduced.addEventListener('change', applyPreferences);
applyPreferences();

// Reveal content in normal document flow, without taking over the user's scrolling.
if ('IntersectionObserver' in window && document.documentElement.dataset.motion !== 'reduced') {
  document.documentElement.classList.add('motion-ready');
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },{threshold:0.08,rootMargin:'0px 0px -10px 0px'});
  $$('.reveal').forEach(el=>observer.observe(el));
}

// Small depth response for pointer devices, completely disabled for reduced motion.
const art = $('.hero-art');
if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
  let animationFrame;
  art.addEventListener('pointermove',event=>{
    if (document.documentElement.dataset.motion === 'reduced') return;
    cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(()=>{
      const rect = art.getBoundingClientRect();
      art.style.setProperty('--px',`${(event.clientX - rect.left - rect.width/2)*.025}px`);
      art.style.setProperty('--py',`${(event.clientY - rect.top - rect.height/2)*.025}px`);
    });
  });
  art.addEventListener('pointerleave',()=>{cancelAnimationFrame(animationFrame);art.style.setProperty('--px','0px');art.style.setProperty('--py','0px');});
}

let toastTimer;
function toast(message) {
  clearTimeout(toastTimer);
  $('#toast').textContent=message;
  $('#toast').classList.add('visible');
  toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3000);
}
$('#copy-email').addEventListener('click',async()=>{
  try { await navigator.clipboard.writeText(profile.email); toast('Email copied to clipboard'); }
  catch { toast(`Email: ${profile.email}`); }
});

readProjectHash();
