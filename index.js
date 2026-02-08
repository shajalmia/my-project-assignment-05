const historyData = [];

//Heart Feature:
const hearts = document.getElementsByClassName("heart-count");
for (const heart of hearts) {
  heart.addEventListener("click", function (e) {
    console.log("Heart Button Clicked.");
    const heartInitial = parseInt(
      document.getElementById("heart-increment").innerText,
    );

    const updateHeart = heartInitial + 1;
    document.getElementById("heart-increment").innerText = updateHeart;
    // console.log(heartInitial)
  });
}

//Coin Feature:
const btns = document.getElementsByClassName("btn-call");

for (const btn of btns) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const initialCoin = parseInt(
      document.getElementById("coin-decrement").innerText,
    );

    if (initialCoin <= 20) {
      alert("Balance Is Less Than 20.");
      return;
    }

    let card = this.closest(".card");
    let service = card.dataset.service;
    let number = card.dataset.number;

    alert(`Service Name:${service}\nService Number:${number}`);
    const data = {
      name: service,
      number: number,
      date: new Date().toLocaleTimeString(),
    };
    historyData.push(data);

    const coinDecrement = initialCoin - 20;
    document.getElementById("coin-decrement").innerText = coinDecrement;

    //Card Add
    const cartContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.innerHTML = `
        <div 
            class="history-cart flex justify-between items-center p-[10px] bg-[#fafafa] w-[300px]"
          >
            <div class="cart-left">
              <h1 class="font-bold">${data.name}</h1>
              <p>${data.number}</p>
            </div>
            <div class="cart-date">
              <p>${data.date}</p>
            </div>
          </div>


        `;
    cartContainer.appendChild(div);
  });
}

// Clear Feature:

document.getElementById("btn-clear").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("history-container").innerText = "";
});

//Copy Feature:
const copyBtns = document.getElementsByClassName("btn-copy");

for (const btn of copyBtns) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const initialCopyCount = parseInt(
      document.getElementById("copy-count").innerText,
    );
    const updateCopyCount = initialCopyCount + 1;
    document.getElementById("copy-count").innerText = updateCopyCount;

    let card = this.closest(".card");
    let number = card.dataset.number;

    navigator.clipboard.writeText(number).then(() => {
      alert("Copied:" + number);
    });
  });
}
