// Auto-close the collapsible mobile navbar after a nav link is clicked.
$(function () {
  $('#collapsable-nav a').on('click', function () {
    if ($(window).width() < 768) {
      $('#collapsable-nav').collapse('hide');
    }
  });
});

// ---------------------------------------------------------------------------
// Single-Category page: dynamic menu content based on the ?category= URL param
// ---------------------------------------------------------------------------
(function () {
  // Only run on the single-category page
  if (!$('#single-category-title').length) {
    return;
  }

  var categories = {
    'L': {
      name: 'Lunch',
      title: 'Lunch Menu',
      subtitle: 'Lunch is not served until after 1pm.',
      imgFolder: 'B',
      codePrefix: 'L',
      items: [
        { name: 'Veal with Mixed Vegetables', price1: '$10.95', price2: '$14.95', unit1: ' (pint)', unit2: ' (quart)', img: 'B-1.jpg', desc: 'Tender veal stir-fried with crisp bell peppers, snap peas, and carrots in a light savory sauce.' },
        { name: 'Kung Pao Chicken', price1: '$9.95', price2: '$13.95', unit1: ' (pint)', unit2: ' (quart)', img: 'B-2.jpg', desc: 'Spicy Szechuan classic with chicken, peanuts, and dried chilies in a bold chili-garlic sauce.' },
        { name: 'Shrimp with Lobster Sauce', price1: '$11.95', price2: '$15.95', unit1: ' (pint)', unit2: ' (quart)', img: 'B-3.jpg', desc: 'Jumbo shrimp bathed in a rich, savory egg-based sauce with ground pork and fresh scallions.' },
        { name: 'Moo Shu Pork', price1: '$10.95', price2: '$14.95', unit1: ' (pint)', unit2: ' (quart)', img: 'B-4.jpg', desc: 'Shredded pork and vegetables folded into thin pancakes with hoisin sauce. Served with 8 pancakes.' },
        { name: 'General Tso\'s Chicken', price1: '$10.95', price2: '$14.95', unit1: ' (pint)', unit2: ' (quart)', img: 'B-5.jpg', desc: 'Crispy chicken tossed in a sweet and slightly spicy glaze, finished with broccoli florets.' },
        { name: 'Vegetable Lo Mein', price1: '$8.95', price2: '$12.95', unit1: ' (pint)', unit2: ' (quart)', img: 'B-6.jpg', desc: 'Egg noodles stir-fried with fresh broccoli, carrots, mushrooms, and scallions in a savory soy sauce.' }
      ]
    },
    'D': {
      name: 'Dinner',
      title: 'Dinner Menu',
      subtitle: 'Dinner combinations served with rice and soup.',
      imgFolder: 'C',
      codePrefix: 'D',
      items: [
        { name: 'Mongolian Beef', price1: '$13.95', price2: '$19.95', unit1: ' (single)', unit2: ' (family)', img: 'C-1.jpg', desc: 'Crispy beef slices with scallions and a sweet soy-ginger glaze, served over jasmine rice.' },
        { name: 'Peking Duck', price1: '$24.95', price2: '$39.95', unit1: ' (half)', unit2: ' (whole)', img: 'C-2.jpg', desc: 'Roasted duck with crispy skin, served with pancakes, scallions, cucumber, and hoisin sauce.' },
        { name: 'Sesame Chicken', price1: '$13.95', price2: '$19.95', unit1: ' (single)', unit2: ' (family)', img: 'C-3.jpg', desc: 'Crispy chicken coated in a sweet sesame glaze and topped with toasted sesame seeds.' },
        { name: 'Beef with Broccoli', price1: '$12.95', price2: '$18.95', unit1: ' (single)', unit2: ' (family)', img: 'C-4.jpg', desc: 'Flank steak and crisp broccoli in a savory garlic-oyster sauce, a classic family favorite.' },
        { name: 'Sweet and Sour Shrimp', price1: '$14.95', price2: '$21.95', unit1: ' (single)', unit2: ' (family)', img: 'C-5.jpg', desc: 'Crispy shrimp with pineapple, bell peppers, and onions in a tangy sweet-and-sour sauce.' },
        { name: 'Hunan Chicken', price1: '$13.95', price2: '$19.95', unit1: ' (single)', unit2: ' (family)', img: 'C-6.jpg', desc: 'Chicken, peppers, and vegetables stir-fried in a fiery Hunan sauce with fresh chilies.' }
      ]
    },
    'S': {
      name: 'Soups',
      title: 'Soups',
      subtitle: 'Freshly made soups to start your meal.',
      imgFolder: 'SO',
      codePrefix: 'S',
      items: [
        { name: 'Hot and Sour Soup', price1: '$3.95', price2: '$6.95', unit1: ' (cup)', unit2: ' (quart)', img: 'SO-1.jpg', desc: 'Classic spicy-sour broth with tofu, bamboo shoots, and wood ear mushrooms.' },
        { name: 'Wonton Soup', price1: '$3.95', price2: '$6.95', unit1: ' (cup)', unit2: ' (quart)', img: 'SO-2.jpg', desc: 'Pork wontons in a clear chicken broth with fresh scallions and baby bok choy.' },
        { name: 'Egg Drop Soup', price1: '$3.95', price2: '$6.95', unit1: ' (cup)', unit2: ' (quart)', img: 'SO-3.jpg', desc: 'Silky ribbons of egg in a light, savory broth, finished with a sprinkle of scallions.' },
        { name: 'Wonton Soup with Noodles', price1: '$4.95', price2: '$8.95', unit1: ' (cup)', unit2: ' (quart)', img: 'SO-4.jpg', desc: 'Hearty wonton soup served with egg noodles for a complete, satisfying bowl.' },
        { name: 'Sizzling Rice Soup', price1: '$4.95', price2: '$8.95', unit1: ' (cup)', unit2: ' (quart)', img: 'SO-5.jpg', desc: 'Crispy rice sizzled tableside into a rich broth of chicken, shrimp, and vegetables.' },
        { name: 'Corn and Crab Soup', price1: '$5.95', price2: '$10.95', unit1: ' (cup)', unit2: ' (quart)', img: 'SO-6.jpg', desc: 'Sweet corn and delicate crab meat in a velvety, golden broth.' }
      ]
    },
    'A': {
      name: 'Appetizers',
      title: 'Appetizers',
      subtitle: 'Perfect for sharing — served with dipping sauces.',
      imgFolder: 'A',
      codePrefix: 'A',
      items: [
        { name: 'Spring Rolls', price1: '$2.95', price2: '$5.95', unit1: ' (2 pcs)', unit2: ' (4 pcs)', img: 'A-1.jpg', desc: 'Crispy rolls filled with vegetables and served with sweet chili sauce.' },
        { name: 'Vegetable Dumplings', price1: '$4.95', price2: '$8.95', unit1: ' (6 pcs)', unit2: ' (12 pcs)', img: 'A-2.jpg', desc: 'Steamed or pan-fried dumplings stuffed with mixed vegetables and ginger.' },
        { name: 'Chicken Dumplings', price1: '$5.95', price2: '$9.95', unit1: ' (6 pcs)', unit2: ' (12 pcs)', img: 'A-3.jpg', desc: 'Hand-folded dumplings with seasoned chicken, served with soy-vinegar dip.' },
        { name: 'Crab Rangoon', price1: '$5.95', price2: '$10.95', unit1: ' (6 pcs)', unit2: ' (12 pcs)', img: 'A-4.jpg', desc: 'Crispy wontons filled with cream cheese and real crab meat.' },
        { name: 'Pork Spare Ribs', price1: '$7.95', price2: '$13.95', unit1: ' (half rack)', unit2: ' (full rack)', img: 'A-5.jpg', desc: 'Slow-braised ribs glazed in a smoky, sweet barbecue sauce.' },
        { name: 'Edamame', price1: '$4.95', price2: '$8.95', unit1: ' (small)', unit2: ' (large)', img: 'A-6.jpg', desc: 'Steamed young soybeans dusted with sea salt, a light and healthy starter.' }
      ]
    },
    'Ds': {
      name: 'Desserts',
      title: 'Desserts',
      subtitle: 'A sweet ending to your meal.',
      imgFolder: 'SS',
      codePrefix: 'D',
      items: [
        { name: 'Fortune Cookies', price1: '$1.00', price2: '$2.00', unit1: ' (2 pcs)', unit2: ' (4 pcs)', img: 'SS-1.jpg', desc: 'Classic crispy cookies with a sweet message inside.' },
        { name: 'Fried Banana', price1: '$3.95', price2: '$6.95', unit1: ' (single)', unit2: ' (double)', img: 'SS-2.jpg', desc: 'Golden fried banana drizzled with honey and served with vanilla ice cream.' },
        { name: 'Mango Pudding', price1: '$3.95', price2: '$6.95', unit1: ' (single)', unit2: ' (double)', img: 'SS-3.jpg', desc: 'Silky chilled mango pudding topped with fresh mango chunks.' },
        { name: 'Sesame Balls', price1: '$3.95', price2: '$6.95', unit1: ' (4 pcs)', unit2: ' (8 pcs)', img: 'SS-4.jpg', desc: 'Crispy fried rice balls filled with sweet red bean paste and rolled in sesame.' },
        { name: 'Red Bean Soup', price1: '$2.95', price2: '$4.95', unit1: ' (cup)', unit2: ' (bowl)', img: 'SS-5.jpg', desc: 'Warm, sweet red bean soup with a hint of coconut milk.' },
        { name: 'Ice Cream', price1: '$2.95', price2: '$4.95', unit1: ' (scoop)', unit2: ' (double)', img: 'SS-6.jpg', desc: 'Vanilla, green tea, or mango ice cream. Ask for your favorite!' }
      ]
    },
    'Dr': {
      name: 'Drinks',
      title: 'Drinks',
      subtitle: 'Refreshing beverages to complement your meal.',
      imgFolder: 'F',
      codePrefix: 'Dr',
      items: [
        { name: 'Jasmine Tea', price1: '$2.50', price2: '$4.50', unit1: ' (cup)', unit2: ' (pot)', img: 'F-1.jpg', desc: 'Fragrant, lightly floral jasmine tea — a perfect complement to any dish.' },
        { name: 'Green Tea', price1: '$2.50', price2: '$4.50', unit1: ' (cup)', unit2: ' (pot)', img: 'F-2.jpg', desc: 'Refreshing brewed green tea with a smooth, clean finish.' },
        { name: 'Bubble Tea', price1: '$4.95', price2: '$8.95', unit1: ' (small)', unit2: ' (large)', img: 'F-3.jpg', desc: 'Tapioca pearls in your choice of milk, taro, or mango tea.' },
        { name: 'Soda', price1: '$1.95', price2: '$3.95', unit1: ' (can)', unit2: ' (bottle)', img: 'F-4.jpg', desc: 'Coke, Diet Coke, Sprite, or ginger ale.' },
        { name: 'Bottled Water', price1: '$1.50', price2: '$2.50', unit1: ' (small)', unit2: ' (large)', img: 'F-5.jpg', desc: 'Chilled bottled water, still or sparkling.' },
        { name: 'Thai Iced Tea', price1: '$3.95', price2: '$6.95', unit1: ' (small)', unit2: ' (large)', img: 'F-6.jpg', desc: 'Rich, sweet Thai tea with a splash of cream over ice.' }
      ]
    }
  };

  // Helper to read the ?category= query parameter
  function getQueryParam(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  var key = getQueryParam('category');
  var category = categories[key] || categories['L']; // default to Lunch

  // Populate breadcrumb, title, and subtitle
  $('#breadcrumb-category').text(category.name);
  $('#single-category-title').text(category.title);
  $('#single-category-subtitle').text(category.subtitle);
  document.title = category.name + ' Menu | David Chu\'s China Bistro';

  // Populate each menu item
  $('#menu-items-container .menu-item-tile').each(function (index) {
    var item = category.items[index];
    if (!item) return;

    var base = 'images/menu/' + category.imgFolder + '/';
    var itemNum = category.codePrefix + String(index + 1).padStart(2, '0');

    $(this).find('.menu-item-number').text(itemNum);
    $(this).find('.menu-item-img').attr('src', base + item.img);
    $(this).find('.menu-item-title').text(item.name);
    $(this).find('.menu-item-details').text(item.desc);
    $(this).find('.menu-item-price').html(
      item.price1 + '<span>' + item.unit1 + '</span> ' + item.price2 + ' <span>' + item.unit2 + '</span>'
    );
  });
})();
