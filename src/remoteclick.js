import uniqueSelector from 'unique-selector';

function remoteclick(selector, options = {}) {
  options = {
    srcAttr: 'href',
    mode: 'append',
    history: false,
    containerSelector: null,
    ...options
  };

  const handleClick = (event) => {
    const target = event.target.closest(selector);

    if (target) {
      if (target.matches(selector)) {
        const container = options.containerSelector
          ? document.querySelector(options.containerSelector)
          : target.parentNode;
        const href = target.getAttribute(options.srcAttr) || target.getAttribute(`data-${options.srcAttr}`);

        if (container && href) {
          const url = new URL(href, window.location.href);
          const containerSelector = options.containerSelector || uniqueSelector(container);
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

                // Update link content
                target.innerHTML = remoteTarget.innerHTML;
              } else {
                // End of list
                target.parentNode.removeChild(target);
              }

              // Find remote container
              const remoteContainer = dom.querySelector(containerSelector);

              if (remoteContainer) {
                // Create content fragment
                const fragment = document.createDocumentFragment();
                // Take care of link wrappers
                const remoteTargetWrapper = [ ...remoteContainer.childNodes ]
                  .find((child) => child.contains(remoteTarget)) || remoteTarget;
                const targetWrapper = [ ...container.childNodes ]
                  .find((child) => child.contains(target)) || target;

                for (const child of remoteContainer.children) {
                  fragment.appendChild(
                    child === remoteTargetWrapper
                      ? targetWrapper
                      : document.importNode(child, true)
                  );
                }

                // Actually update dom content
                switch (options.mode) {
                case 'update':
                  container.appendChild(fragment);
                  break;
                case 'prepend':
                  container.insertBefore(container.firstChild, fragment);
                  break;
                case 'append':
                  container.appendChild(fragment);
                  break;
                }

              }

              // History
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
