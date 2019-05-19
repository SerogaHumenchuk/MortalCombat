(() => {
  let name = document.querySelector('.name');
  let firstPageForm = document.querySelector('.firstPage__form');
  let firstPageWrapp = document.querySelector('.firstPageWrapp');
  let secondPageWrapp = document.querySelector('.secondPageWrapp');

  const changeFirstPageToSecondPage = function() {
    firstPageWrapp.classList.add('hide');
    secondPageWrapp.classList.remove('hide');
  };

  const onSubmit = function(e) {
    e.preventDefault();
    if (/^[A-Za-z0-9_-]{3,16}$/.test(name.value)) {
      // globalObj.user.name = name.value;
      changeFirstPageToSecondPage();
    } else {
      alert('Invalid UserName');
    }
  };
  firstPageForm.addEventListener('submit', onSubmit);
  // console.log(globalObj);
})();
