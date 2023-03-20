const sidebarItems = document.querySelectorAll('.sidebar-item');
const mainElements = document.querySelectorAll('.main');
const activeIndex = localStorage.getItem('activeIndex');

if (activeIndex !== null && activeIndex >= 0 && activeIndex < sidebarItems.length) {
  sidebarItems[activeIndex].classList.add('active');
  mainElements[activeIndex].classList.remove('hidden');
}

sidebarItems.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    sidebarItems.forEach(otherItem => otherItem.classList.remove('active'));
    item.classList.add('active');
    const pageName = item.querySelector('span').textContent;
    mainElements.forEach((main, i) => {
      if (index === i) {
        main.classList.remove('hidden');
      } else {
        main.classList.add('hidden');
      }
    });
    const main = document.querySelector('.main:not(.hidden)');
    localStorage.setItem('activeIndex', index);
  });
});
