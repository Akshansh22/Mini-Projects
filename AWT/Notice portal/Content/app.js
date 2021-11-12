const menu = [
  {
    id: 1,
    title: "End Sem Exams",
    category: "CT",
    date: "22/10/21",
    img: "./images/item-1.jpeg",
    desc: `If you're visiting this page, you're likely here because you're searching for a random sentence.`,
  },
  {
    id: 2,
    title: "Guidance on higher studies",
    category: "IT",
    date: "22/10/21",
    img: "./images/item-2.jpeg",
    desc: `Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play`,
  },
  {
    id: 3,
    title: "Consent form for offline classes",
    category: "FY",
    date: "22/10/21",
    img: "./images/item-3.jpeg",
    desc: `By inputting the desired number, you can make a list of as many random sentences as you want or need.`,
  },
  {
    id: 4,
    title: "Industry Report",
    category: "CT",
    date: "22/10/21",
    img: "./images/item-4.jpeg",
    desc: `Producing random sentences can be helpful in a number of different ways.`,
  },
  {
    id: 5,
    title: "Change in Time table",
    category: "IT",
    date: "22/10/21",
    img: "./images/item-5.jpeg",
    desc: `For writers, a random sentence can help them get their creative juices flowing.`,
  },
  {
    id: 6,
    title: "First years students freshers",
    category: "FY",
    date: "22/10/21",
    img: "./images/item-6.jpeg",
    desc: `Since the topic of the sentence is completely unknown, it forces the writer to be creative when the sentence appears.`,
  },
  {
    id: 7,
    title: "Web Technology introduction",
    category: "CT",
    date: "22/10/21",
    img: "./images/item-7.jpeg",
    desc: `Since the topic of the sentence is completely unknown, it forces the writer to be creative when the sentence appears.`,
  },
  {
    id: 8,
    title: "How to start a startup",
    category: "IT",
    date: "22/10/21",
    img: "./images/item-8.jpeg",
    desc: `Instruction for Conduction of Proctored MSE Online Examination for ODD Term AY 2021-22.`,
  },
  {
    id: 9,
    title: "Gate exam forms",
    category: "FY",
    date: "22/10/21",
    img: "./images/item-9.jpeg",
    desc: `Notice regarding computer technology is organizing a webinar on guidance on higher studies.`,
  },
  {
    id: 10,
    title: "Generate exam form",
    category: "Commmon",
    date: "22/10/21",
    img: "./images/item-10.jpeg",
    desc: `Industry Visit and its report 2021-22 Evaluation Seminar.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="date">${item.date}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}

//Navbar
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});
