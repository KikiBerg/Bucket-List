// 1. Create a <p> element and append it to the list
const newItem1 = document.createElement('p');
newItem1.innerText = 'Hike the Inca Trail to Machu Picchu';
document.querySelector('.list').appendChild(newItem1);

// 2. Create another <p> and insert it after existing <p> tags
const newItem2 = document.createElement('p');
newItem2.innerText = 'Learn Greek';
document.querySelector('.list').insertAdjacentElement('beforeend', newItem2);

console.log(document.querySelector('.list').innerHTML);

// 4. Create a string with HTML for a new item
const newItemHTML = '<p>Tell my loved ones how much I care about them</p>';

// 5. Set the innerHTML of the list (commented out)
// document.querySelector('.list').innerHTML = newItemHTML;

// 6. Add the new item to the beginning of the list
document.querySelector('.list').insertAdjacentHTML('afterbegin', newItemHTML);

// 7. Add three more items to the end of the list using a loop
const moreItems = [
  'See the Northern Lights',
  'Hike Mount Everest',
  'See polar bears in Svalbard',
];
for (let item of moreItems) {
  document
    .querySelector('.list')
    .insertAdjacentHTML('beforeend', `<p>${item}</p>`);
}

console.log(
  'Number of items in the bucket list:',
  document.querySelector('.list').children.length
);

// 9. Change the content of the h2 to have your name
document.querySelector('.owner').textContent = "Angeliki's";

// 10. Replace the first item in the list
const newFirstItem = document.createElement('p');
newFirstItem.textContent = 'Get a garden lot';
const firstItem = document.querySelector('.list').firstElementChild;
document.querySelector('.list').replaceChild(newFirstItem, firstItem);

// 11. Replace an element in the middle of the list
const middleIndex = Math.floor(
  document.querySelector('.list').children.length / 2
);
const newMiddleItem = document.createElement('p');
newMiddleItem.textContent = 'Travel to Australia';
document
  .querySelector('.list')
  .replaceChild(
    newMiddleItem,
    document.querySelector('.list').children[middleIndex]
  );

// 12. Remove the last element in the list
const lastItem = document.querySelector('.list').lastElementChild;
document.querySelector('.list').removeChild(lastItem);
// det var 'See polar bears in Svalbard'
