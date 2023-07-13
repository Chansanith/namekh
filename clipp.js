let $ = (element) => document.querySelector(element);

let element = $('.copy-content');
let button = $('.btn');

let alertCopied = () => {
  const alert = $('.alert');
  alert.classList.remove('hide');
  
  setTimeout(() => {
    alert.classList.add('hide');
  }, 1000);
};

button.addEventListener('click', (event) => {
  event.preventDefault();
  
  const selection = window.getSelection();
  const range = document.createRange();
  
  range.selectNode(element);
  selection.removeAllRanges();
  selection.addRange(range);
  
  try {
    document.execCommand('copy');
    selection.removeAllRanges();
    
    alertCopied();
  } catch (exception) {
    alert(exception);
  }
});
