"use strict";

// function cake(e) {
//   console.log(e);
//   e.target.classList.toggle("highlighted")
// }


// const bakes = document.getElementById("bakes");
// function greeting() {
//   console.log("Sophies bakes and cakes, the best in town!")
// }
// bakes.addEventListener('click', greeting);


function toggleNav() {
  document.getElementById("sideNav").classList.toggle('open');
}
closeNav.addEventListener('click', toggleNav);
openNav.addEventListener('click', toggleNav);


//js for qna page

(() => {
  const listElement = document.getElementById('shopping');
  const newItem = document.getElementById('newItem');
  const addBtn = document.getElementById('addBtn');
  const clearBtn = document.getElementById('clearBtn');

  function addItem(item) {
    if(!item) return;
    const itemElement = document.createElement('li');
    itemElement.textContent = item;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    itemElement.appendChild(deleteButton);
    deleteButton.addEventListener('click', ev => {
      listElement.removeChild(itemElement);
      save();
    });
    listElement.appendChild(itemElement);
  };

  function addList(list) {
  list.forEach(addItem);
  }

  function clearList() {
    while(listElement.firstChild) {
      listElement.removeChild(listElement.firstChild);
    }
  }

  function save() {
    const items = [...listElement.childNodes];
    if(items.length) {
      const list = items.map(item => {
        return item.textContent.slice(0, -1);
      });
      localStorage.setItem('shopping-list', list);
    } else {
      localStorage.removeItem('shopping-list');
    }
  }

  function load() {
    const shoppingList = localStorage.getItem('shopping-list');
    if(shoppingList) {
      addList(shoppingList.split(','));
    }
  }

  addBtn.addEventListener('click', ev => {
    addList(newItem.value.split(','));
    newItem.value = null;
    save();
  });

  newItem.addEventListener("keyup", ev => {
    if (ev.key === "Enter") {
      addBtn.click();
    }
  });

  clearBtn.addEventListener('click', ev => {
    clearList();
    save();
  });

  // Saving data for later use
  window.addEventListener('beforeunload', save);

  // Loading data from local storage
  window.addEventListener('DOMContentLoaded', load);

  window.addEventListener('storage', ev => {
    if(ev.key == "shopping-list") {
      clearList();
      load();
    }
  })

})();
