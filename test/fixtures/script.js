window.remoteclick('*[data-remote]', () => ({
  pendingClass: 'pending',
  containerSelector: (element) => element.getAttribute('data-remote')
}));
