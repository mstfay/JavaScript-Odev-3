const menu = [
  {
    id: 1,
    title: "Chameleon Gri T-shirt",
    category: "Tshirt",
    price: 99.90,
    img: "https://www.chameleontr.com/wp-content/uploads/2021/01/TargetDekupeOn.jpg",
    desc: `%100 Pamuklu Gri T-shirt`,
  },
  {
    id: 2,
    title: "Chameleon Siyah Hoodie",
    category: "Hoodie",
    price: 89.90,
    img: "https://www.chameleontr.com/wp-content/uploads/2020/12/Gece-Mavisi-On.jpg",
    desc: `%3 Elastan, %97 Pamuk Siyah Kapüşonlu `,
  },
  {
    id: 3,
    title: "Chameleon Beyaz T-shirt",
    category: "Tshirt",
    price: 74.90,
    img: "https://www.chameleontr.com/wp-content/uploads/2021/01/aaa.jpg",
    desc: `%100 Pamuklu Beyaz T-shirt`,
  },
  {
    id: 4,
    title: "Beyaz Spor Ayakkabı",
    category: "Shoes",
    price: 139.99,
    img: "https://www.target.com.au/medias/static_content/product/images/full/07/18/A1390718.jpg?impolicy=product_portrait_hero",
    desc: `Beyaz renk yürüyüş ayakkabısı`,
  },
  {
    id: 5,
    title: "Pempe Spor Ayakkabı",
    category: "Shoes",
    price: 249.99,
    img: "https://cdn.shopify.com/s/files/1/0274/3641/7160/products/PG.SEGALAXIE3-LPI01.PZ.jpg?v=1612908052",
    desc: `Pembe renk koşu ayakkabısı`,
  },
  {
    id: 6,
    title: "Chameleon Turuncu Hoodie",
    category: "Hoodie",
    price: 84.90,
    img: "https://www.chameleontr.com/wp-content/uploads/2020/12/Turuncu-On.jpg",
    desc: `%3 Elastan, %97 Pamuk Turuncu Hoodie`,
  },
  {
    id: 7,
    title: "Chameleon Pembe T-shirt",
    category: "Tshirt",
    price: 69.90,
    img: "https://www.chameleontr.com/wp-content/uploads/2021/08/DukkanOn-2.jpg",
    desc: `%100 Pamuklu Pembe T-shirt`,
  },
  {
    id: 8,
    title: "Renkli Spor Ayakkabı",
    category: "Shoes",
    price: 244.99,
    img: "https://i1.adis.ws/i/tom_ford/J1100T-TOF001_U4006_APPENDGRID?$listing_grid$",
    desc: `Unisex Renkli Spor Ayakkabı`,
  },
  {
    id: 9,
    title: "Chameleon Sarı Hoodie",
    category: "Hoodie",
    price: 79.90,
    img: "https://www.chameleontr.com/wp-content/uploads/2020/12/Sari-On-1.jpg",
    desc: `%3 Elastan, %97 Pamuk Sarı Hoodie`,
  },
];
const section = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  
  const categoryList = () => {
    const categoryBtns = categories
      .map((category) => {
        return `<button class="btn btn-outline-secondary btn-item" data-id=${category}>${category}</button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".btn-item");
  
    //filter menu
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        console.log(category);
        const menuCategory = menu.filter((menuItem) => {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "All") {
          menuList(menu);
        } else {
          menuList(menuCategory);
        }
      });
    });
  };
  
  const menuList = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
      return `<div class="menu-items col-lg-6 col-sm-12">
              <img
                src=${item.img}
                alt=${item.title}
                class="photo"
              />
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price} TL</h4>
                </div>
                <div class="menu-text">
                  ${item.desc}
                </div>
              </div>
            </div>
      `;
    });
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;
  };
  
  menuList(menu);
  categoryList();