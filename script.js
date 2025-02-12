function showCustomModal() {
    Swal.fire({
      html: `
      <div class="modal">
        <div class="modal-header">
          <img src="./img/fast-food-burger-3.png" alt="Burger">
        </div>
  
        <!-- Modal Body -->
        <div class="modal-body">
          <div class="d-flex-between">
            <h3>Burger</h3>
            <span class="badge">25 EGP</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum reiciendis labore tempore soluta, fugiat possimus.</p>
          <span class="cal badge">🔥 520 cal</span>
        </div>
  
        <div class="additional-container">
          <div class="additional-header">
            <h4><i class="fa-solid fa-utensils"></i> Additional Ingredients</h4>
            <span class="badge required">Required</span>
          </div>
          <div class="additional-content">
            <div class="addition-item">
              <h3><img src="./img/onion.png" alt="Onion"> Onions</h3>
              <div><span>5 EGP</span> <input class="custom-checkbox" type="checkbox"></div>
            </div>
            <div class="addition-item">
              <h3><img src="./img/tomato.png" alt="Tomato"> Tomato</h3>
              <div><span>5 EGP</span> <input class="custom-checkbox" type="checkbox"></div>
            </div>
            <div class="addition-item">
              <h3><img src="./img/chilli.png" alt="Chilli"> Chilli</h3>
              <div><span>5 EGP</span> <input class="custom-checkbox" type="checkbox"></div>
            </div>
            <div class="addition-item">
              <h3><img src="./img/salad.png" alt="Salad"> Salad</h3>
              <div><span>5 EGP</span> <input class="custom-checkbox" type="checkbox"></div>
            </div>
          </div>
        </div>
  
        <div class="additional-container">
          <div class="additional-header">
            <h4><i class="fa-solid fa-utensils"></i> Additional Ingredients</h4>
            <span class="badge required">Required</span>
          </div>
  
          <div class="additional-content">
            <label class="addition-item  d-flex-between">
              <h3><img src="./img/salad.png"> Small</h3>
              <div><span>5 EGP</span> <input class="radio-option" type="radio" name="status" checked></div>
            </label>
            <label class="addition-item  d-flex-between">
              <h3><img src="./img/salad.png"> Small</h3>
              <div><span>5 EGP</span> <input class="radio-option" type="radio" name="status" checked></div>
            </label>
            <label class="addition-item  d-flex-between">
              <h3><img src="./img/salad.png"> Small</h3>
              <div><span>5 EGP</span> <input class="radio-option" type="radio" name="status" checked></div>
            </label>
          </div>
        </div>
  
        <!-- Modal Footer -->
        <div class="modal-footer">
          <div class="counter-container">
            <div role="spinbutton" aria-label="Counter" aria-valuemin="0" aria-valuemax="Infinity" aria-valuenow="0" class="counter">
              <button type="button" class="counter-btn" onclick="updateCounter(-1)" aria-label="Decrease value">-</button>
              <input id="counterValue" type="text" value="0" readonly>
              <button type="button" class="counter-btn" onclick="updateCounter(1)" aria-label="Increase value">+</button>
            </div>
          </div>
          <button class="add-to-cart">
            <i class="fa-solid fa-cart-shopping" aria-hidden="true"></i> Add to cart
          </button>
        </div>
      </div>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      customClass: {
        popup: "custom-modal",
      },
      width: "600px",
      background: "#fff",
      position: "top",
      footer:false,

      
    });
  }


// Counter
function updateCounter(value) {
  let counter = document.getElementById("counterValue")
  let currentValue = parseInt(counter.value, 10) || 0
  let newValue = currentValue + value
  if (newValue < 0) newValue = 0
  counter.value = newValue
  counter.classList.add("animate")
  setTimeout(() => counter.classList.remove("animate"), 200)
}

function updateCounter(change) {
  let counterInput = document.getElementById("counterValue");
  let decreaseButton = document.querySelector(".counter button:first-child");

  let currentValue = parseInt(counterInput.value) || 0;
  let newValue = currentValue + change;

  if (newValue < 0) {
      newValue = 0; // Prevent going below zero
  }

  counterInput.value = newValue;

  // Change minus button background color based on value
  if (newValue === 0) {
      decreaseButton.style.background = "rgba(128, 128, 128, 0.356)";
      decreaseButton.style.color = "#000"; // Change text color for contrast
  } else {
      decreaseButton.style.background = "#007bff"; // Restore original color
      decreaseButton.style.color = "white";
  }
}


document.querySelectorAll('.check-item').forEach(item => {
    item.addEventListener('click', function () {
        const checkbox = this.querySelector('.custom-checkboxx');
        checkbox.checked = !checkbox.checked; // Toggle checkbox
        this.classList.toggle('checked', checkbox.checked); // Toggle background color
    });
});




