const classes = {
  activeClass: 'active',
};
const lists = document.querySelector('.list');
const listItems = lists.querySelectorAll('.list-item');

listItems.forEach((ele) => {
  ele.addEventListener('click', function () {
    const activeItem = lists.querySelector(`.${classes.activeClass}`);
    if (activeItem) {
      activeItem.classList.remove(classes.activeClass);
    }
    ele.classList.add(classes.activeClass);
  });
});

var acc = document.getElementsByClassName('accordion-item');

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    // Toggle between adding and removing the "active" class
    this.classList.toggle('active');

    // Toggle between hiding and showing the active panel
    var panel = this.querySelector('.panel');
    console.log(panel.scrollHeight);
    if (panel.scrollHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}
