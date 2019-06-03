import uniqueSelector from 'unique-selector';
import contains from 'node-contains';

function remoteclick(selector, options = {}) {

  const handleClick = (event) => {
    const target = event.target.closest(selector);

    if (target) {
      // Get options
      options = {
        srcAttr: 'href',
        mode: 'append',
        history: false,
        containerSelector: null,
        pendingClass: 'is-pending',
        ...(
          typeof options === 'function' ? options(target) : options
        )
      };

      let container = null;
      let { containerSelector } = options;

      if (typeof containerSelector === 'function') {
        const containerSelectorResult = containerSelector(target);

        if (typeof containerSelectorResult === 'object') {
          container = containerSelectorResult;
        } else {
          containerSelector = containerSelectorResult;
        }
      }

      if (!container) {
        if (containerSelector) {
          container = document.querySelector(containerSelector);
        } else {
          const nav = target.closest('nav');

          if (nav) {
            container = nav.parentNode;
          } else {
            container = target.parentNode;
          }
        }
      }

      if (container && !containerSelector) {
        containerSelector = containerSelector || uniqueSelector(container);
      }

      const href = target.getAttribute(options.srcAttr) || target.getAttribute(`data-${options.srcAttr}`);

      if (container && href) {
        const url = new URL(href, window.location.href);
        const targetSelector = uniqueSelector(target);

        // Add pending class
        options.pendingClass.split(/\s+/).forEach((className) => {
          target.classList.add(className);
        });

        // Fetch remote content
        fetch(url.href, {
          // Request options
        }).then(response => {
          response.text().then(html => {
            // Remove pending class
            options.pendingClass.split(/\s+/).forEach((className) => {
              target.classList.add(className);
            });

            // Parse html
            const dom = document.createElement('div');
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
                .find((child) => remoteTarget && contains(child, remoteTarget)) || remoteTarget;
              const targetWrapper = [ ...container.childNodes ]
                .find((child) => contains(child, target)) || target;

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

      event.preventDefault();
    }
  };
  window.addEventListener('click', handleClick);
}

if (typeof window !== 'undefined') {
  window.remoteclick = remoteclick;
}

export default remoteclick;
