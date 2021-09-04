const alertValid = (field, message) => {
  const formBody = document.querySelector('form');
  const valSec = document.createElement('div');
  valSec.innerHTML = `<div class="alert alert-${message}" role="alert">
  ${field} is required
</div>`;
  formBody.appendChild(valSec);
  setTimeout(() => formBody.removeChild(valSec), 1500);
};

export default alertValid;