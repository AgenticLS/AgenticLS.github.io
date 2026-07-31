// Mobile navigation toggle + active link highlight
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var open = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  // Highlight the current page in the nav
  var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').toLowerCase();
    if (href === here || (here === '' && href === 'index.html')) a.classList.add('active');
  });
})();
