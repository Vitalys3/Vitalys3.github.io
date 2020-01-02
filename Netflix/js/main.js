const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content

function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border tab
    this.classList.add('tab-border');

    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Shw clss
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

// Click tab items
tabItems.forEach(item => item.addEventListener('click', selectItem));