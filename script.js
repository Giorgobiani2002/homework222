/// homework 1

let intervalID;
let timeoutID;

intervalID = setTimeout(() => {
  window.addEventListener("mousemove", (e) => {
    clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      console.log(e.clientX, "mouse X");
      console.log(e.clientY, "mouse Y");
    }, 300);
  });
}, 1000);

/// home work 2
// const container = document.querySelector(".container");
// console.log(container);

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => displayData(data))
//   .catch((error) => console.error("Error:", error));

// function displayData(data) {
//   const html = data.map((el) => {
//     return `
//       <div class="child">
//         <h3>${el.id}</h3>
//         <h2>${el.name}</h2>
//         <h2>${el.username}</h2>
//         <h2>${el.email}</h2>
//       </div>
//     `;
//   });

//   container.innerHTML = html;
// }

// homework 3

const input = document.querySelector("input");
const container = document.querySelector(".container");
let intervalID2;

input.addEventListener("input", async (e) => {
  const title = e.target.value;
  clearInterval(intervalID2);
  intervalID2 = setTimeout(async () => {
    const resp = await fetch(
      `https://dummyjson.com/products/search?q=${title}`
    );
    const data = await resp.json();

    if (data.products) {
      displayData(data.products);
    }
  }, 1000);
});

function displayData(products) {
  const html = products.map(
    (el) =>
      `
        <div>
            <h1>${el.title}</h1>
            <h2>${el.category}</h2>
            <p>${el.description}</p>

        </div>
        `
  );

  container.innerHTML = html;
}
