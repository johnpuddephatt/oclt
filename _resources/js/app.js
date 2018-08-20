(function() {
  // Get all the <h3> headings
  const headings = document.querySelectorAll('.section--home-faqs h3')

  Array.prototype.forEach.call(headings, heading => {
    // Give each <h3> a toggle button child
    // with the SVG plus/minus icon
    heading.innerHTML = `
      <button aria-expanded="false">
        ${heading.textContent}
        <svg aria-hidden="true" focusable="false" viewBox="0 0 14 30">
          <path fill="#53C5BD" d="M13.9 14.9c0 .3-.1.7-.3.9l-11 13.5c-.5.6-1.4.7-2.1.2-.6-.5-.7-1.4-.2-2.1l10.2-12.5L.3 2.4C-.2 1.8-.1.9.5.3 1.1-.2 2-.1 2.6.5l11 13.5c.2.3.3.6.3.9z"/>
        </svg>
      </button>
    `

    // Function to create a node list
    // of the content between this <h3> and the next
    const getContent = (elem) => {
      let elems = []
      while (elem.nextElementSibling && elem.nextElementSibling.tagName !== 'H3') {
        elems.push(elem.nextElementSibling)
        elem = elem.nextElementSibling
      }

      // Delete the old versions of the content nodes
      elems.forEach((node) => {
        node.parentNode.removeChild(node)
      })

      return elems
    }

    // Assign the contents to be expanded/collapsed (array)
    let contents = getContent(heading)

    // Create a wrapper element for `contents` and hide it
    let wrapper = document.createElement('div')
    wrapper.hidden = true

    // Add each element of `contents` to `wrapper`
    contents.forEach(node => {
      wrapper.appendChild(node)
    })

    // Add the wrapped content back into the DOM
    // after the heading
    heading.parentNode.insertBefore(wrapper, heading.nextElementSibling)

    // Assign the button
    let btn = heading.querySelector('button')

    btn.onclick = () => {
      // Cast the state as a boolean
      let expanded = btn.getAttribute('aria-expanded') === 'true' || false

      // Switch the state
      if (expanded === false) {
        headings.forEach(heading => {
          heading.querySelector('button').setAttribute('aria-expanded', false)
          heading.nextElementSibling.hidden = true
        });
      }

      btn.setAttribute('aria-expanded', !expanded)
      wrapper.hidden = expanded

      // Switch the content's visibility

    }
  })
})()