const ctaButton = document.getElementById('ctaButton');
const ctaMessage = document.getElementById('ctaMessage');

if (ctaButton && ctaMessage) {
  ctaButton.addEventListener('click', () => {
    ctaMessage.classList.remove('hidden');
  });
}
