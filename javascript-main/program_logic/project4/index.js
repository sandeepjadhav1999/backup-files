const {hash} = window.location

const msg = atob(hash.replace('#',''))
if(msg){
  document.querySelector('#message-form').classList.add('hide')
  document.querySelector('#final').classList.remove('hide')
  document.querySelector('h1').innerHTML = msg
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');

  const input = document.querySelector('#message-input');
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
