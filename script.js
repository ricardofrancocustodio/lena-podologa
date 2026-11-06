const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('[data-conversion="whatsapp"]').forEach((link) => link.addEventListener('click', () => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-869329821/nQJPCMulim8QndfDngM',
    });
  }
}));
const comparisonTrack = document.querySelector('[data-comparison-track]');
const comparisonStatus = document.querySelector('[data-comparison-status]');
const comparisonPrevious = document.querySelector('[data-comparison-prev]');
const comparisonNext = document.querySelector('[data-comparison-next]');

if (comparisonTrack && comparisonStatus && comparisonPrevious && comparisonNext) {
  const cards = Array.from(comparisonTrack.querySelectorAll('.comparison-card'));
  const updateComparisonControls = () => {
    const firstCard = cards[0];
    const gap = Number.parseFloat(getComputedStyle(comparisonTrack).columnGap) || 0;
    const step = firstCard.offsetWidth + gap;
    const firstVisible = Math.min(cards.length - 1, Math.max(0, Math.round(comparisonTrack.scrollLeft / step)));
    const visibleCount = comparisonTrack.clientWidth >= (step * 2 - gap) ? 2 : 1;
    const lastVisible = Math.min(cards.length, firstVisible + visibleCount);
    comparisonStatus.textContent = visibleCount > 1 ? `${firstVisible + 1}–${lastVisible} de ${cards.length}` : `${firstVisible + 1} de ${cards.length}`;
    comparisonPrevious.disabled = comparisonTrack.scrollLeft < 2;
    comparisonNext.disabled = comparisonTrack.scrollLeft + comparisonTrack.clientWidth >= comparisonTrack.scrollWidth - 2;
  };
  const moveComparison = (direction) => {
    const firstCard = cards[0];
    const gap = Number.parseFloat(getComputedStyle(comparisonTrack).columnGap) || 0;
    comparisonTrack.scrollBy({ left: direction * (firstCard.offsetWidth + gap), behavior: 'smooth' });
  };
  comparisonPrevious.addEventListener('click', () => moveComparison(-1));
  comparisonNext.addEventListener('click', () => moveComparison(1));
  comparisonTrack.addEventListener('scroll', updateComparisonControls, { passive: true });
  window.addEventListener('resize', updateComparisonControls);
  updateComparisonControls();
}
document.getElementById('year').textContent = new Date().getFullYear();
