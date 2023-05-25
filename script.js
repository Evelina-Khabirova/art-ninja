const header = document.querySelector('.header');
const companyName = header.querySelector('.header__company-name');
const emailText = header.querySelector('.header__email-text');

function changeHeader() {
  if (window.scrollY > 50 && !header.classList.contains('header_white')) {
    header.classList.add('header_white');
    companyName.classList.add('header__company-name_black');
    emailText.classList.add('header__email-text_black');
  }
  else if (window.scrollY < 50 && header.classList.contains('header_white')) {
    header.classList.remove('header_white');
    companyName.classList.remove('header__company-name_black');
    emailText.classList.remove('header__email-text_black');
  }
  else {
    return;
  }
}

document.addEventListener('scroll', changeHeader);