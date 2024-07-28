const clog                  = console.log
const cerr                  = console.error
const select                = (selector) => document.querySelector(selector)
const selectAll             = (selector) => document.querySelectorAll(selector)
const ERROR_MESSAGE_TIMEOUT = 3000


function spawnTemplate(template_selector, wrapperElement="div", className="", parent=document.body) {
  const templateFragment  = document.importNode(select(template_selector).content, true) // the true is SOOOO important!
  const wrapper           = document.createElement(wrapperElement)
  wrapper.className       = className
  wrapper.appendChild(templateFragment)
  wrapper.addEventListener

  parent.appendChild(wrapper)
  
  return wrapper
}

function spawnError(title='[error title]', description='[error description]') {
  const errorDiv = spawnTemplate('#template_error_message', 'div', 'error_message');
  errorDiv.querySelector('.title')      .innerText = title
  errorDiv.querySelector('.description').innerText = description

  setTimeout(() => {
    errorDiv.remove()
  }, ERROR_MESSAGE_TIMEOUT);
}

export { clog, cerr, select, selectAll, spawnError, spawnTemplate }