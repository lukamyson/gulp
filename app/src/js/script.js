const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 40,


  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      var num = index < 9 ? '0' : ""
      return '<span class="' + className + '">' + num + (index + 1) + "</span>";
    },
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});
const headerLink = document.querySelectorAll('.header__list-link'),
  model = document.querySelector('.model'),
  ver =document.querySelector('.ver'),
  headerNav = document.querySelector('.header__nav');

window.addEventListener('scroll', () => {
  for (let i = 0; i < headerLink.length; i++) {
    headerLink[i].classList.remove('active')
    if (window.scrollY >= model.offsetTop && window.scrollY <= ver.offsetTop > model.offsetTop) {
      headerLink[0].classList.add('active')
    }

  }

  if (window.scrollY > 10) {
    headerNav.style = 'backdrop-filter:blur(15px)'
  } else {
    headerNav.style = 'backdrop-filter:none'
  }

})
window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    scrollBy({
      top: window.innerHeight
    })
  }
  if (e.deltaY < 0) {
    scrollBy({
      top: -window.innerHeight
    })
  }
})
const allModel = document.querySelector('.all-model');
allModel.addEventListener('click', (e) => {
  e.preventDefault();
  model.classList.add('active');
})







let aside = document.querySelector('.sidebar'),
  asd = document.querySelector('.menu'),
  link = document.querySelector('.list'),
  rius = document.querySelector('.radius');

asd.addEventListener('click', function () {
  aside.classList.toggle('active');
  link.classList.toggle('active');
  rius.classList.toggle('active');

})
const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add("active")

  })
})
const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active")
  })
}

const aboutMore = document.querySelector('.about-more'),
  bout = document.querySelector('.about');

aboutMore.addEventListener('click', (e) => {
  e.preventDefault();
  bout.classList.add('active');
})  



document.querySelectorAll('.custom-select').forEach(setupSelector);

function setupSelector(selector) {
  selector.addEventListener('change', e => {
    console.log('changed', e.target.value)
  })

  selector.addEventListener('mousedown', e => {
    if(window.innerWidth >= 420) {// override look for non mobile
      e.preventDefault();

      const select = selector.children[0];
      const dropDown = document.createElement('ul');
      dropDown.className = "selector-options";

      [...select.children].forEach(option => {
        const dropDownOption = document.createElement('li');
        dropDownOption.textContent = option.textContent;

        dropDownOption.addEventListener('mousedown', (e) => {
          e.stopPropagation();
          select.value = option.value;
          selector.value = option.value;
          select.dispatchEvent(new Event('change'));
          selector.dispatchEvent(new Event('change'));
          dropDown.remove();
        });

        dropDown.appendChild(dropDownOption);   
      });

      selector.appendChild(dropDown);

      // handle click out
      document.addEventListener('click', (e) => {
        if(!selector.contains(e.target)) {
          dropDown.remove();
        }
      });
    }
  });
}