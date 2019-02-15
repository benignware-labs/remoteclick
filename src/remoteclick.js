import uniqueSelector from 'unique-selector';

function remoteclick(selector, options = {}) {
  options = {
    srcAttr: 'href',
    mode: 'append',
    history: false,
    ...options
  };

  const handleClick = (event) => {
    const target = event.target.closest(selector);

    if (target) {
      if (target.matches(selector)) {
        const container = target.parentNode;
        const href = target.getAttribute(options.srcAttr) || target.getAttribute(`data-${options.srcAttr}`);

        if (href) {
          const url = new URL(href, window.location.href);
          const containerSelector = uniqueSelector(container);
          const targetSelector = uniqueSelector(target);

          fetch(url.href, {
            // Request options
          }).then(response => {
            response.text().then(html => {
              // Parse html
              const dom = document.createElement( 'div' );
              dom.innerHTML = html;

              // Find remote target
              const remoteTarget = dom.querySelector(targetSelector);

              if (remoteTarget) {
                // Remove attributes
                for (let { name } of dom.attributes) {
                  target.removeAttribute(name);
                }
                // Update attributes
                for (let { name, value } of remoteTarget.attributes) {
                  target.setAttribute(name, value);
                }
                // Update content
                target.innerHTML = remoteTarget.innerHTML;

                remoteTarget.parentNode.removeChild(remoteTarget);
              } else {
                // End of list
                target.parentNode.removeChild(target);
              }

              // Find remote container
              const remoteContainer = dom.querySelector(containerSelector);

              if (remoteContainer) {
                const isInContainer = target.parentNode === container;

                if (isInContainer) {
                  target.parentNode.removeChild(target);
                }

                switch (options.mode) {
                case 'update':
                  container.innerHTML = remoteContainer.innerHTML;
                  break;
                case 'prepend':
                  container.innerHTML = remoteContainer.innerHTML + container.innerHTML;
                  break;
                case 'append':
                  container.innerHTML = container.innerHTML + remoteContainer.innerHTML;
                  break;
                }

                if (isInContainer) {
                  container.appendChild(target);
                }
              }

              if (options.history) {
                // Find remote title
                const title = (dom.querySelector(targetSelector) || {
                  title: document.title
                }).title;

                history.pushState({
                  title
                }, title, url.href);
              }
            });
          });
        }
      }

      event.preventDefault();
    }
  };
  window.addEventListener('click', handleClick);
}

if (typeof window !== 'undefined') {
  window.remoteclick = remoteclick;
}

export default remoteclick;
