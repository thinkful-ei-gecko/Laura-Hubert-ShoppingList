'use strict';

//Hint: you may find it helpful to read up on and use the following jQuery methods: 
//.submit(), preventDefault(), toggleClass(), and closest().

function addItem() {
    const shoppingInput = $('#shopping-list-entry').val();
    //shoppingInput.on('click', function(item) {})
    $('form').submit(function(event) {
        event.preventDefault(); // prevents submit button from executing default action
        $('.shopping-list').append(`
        <li>
        <span class="shopping-item">${shoppingInput}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      `)
    })
};

function removeItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
}

//strikes a line through the shopping list item
function checkItem() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('span.shopping-item').toggleClass('shopping-item__checked');
    })
}

$(addItem);
$(removeItem);
$(checkItem);