function showCustomModal() {
  Swal.fire({
    html: `
                <!-- Modal Header -->
                <div class="modal-header">
                    <img src="./img/fast-food-burger-3.png" alt="Burger">
                </div>

                <!-- Modal Body -->
                <div class="modal-body">
                    <div class="d-flex-between">
                        <h3>Burger</h3>
                        <span class="badge">25 EG</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum reiciendis labore tempore soluta, fugiat possimus.</p>
                    <span class="cal badge">🔥 520 cal</span>
                </div>

                <!-- Additional Ingredients Section -->
                <div class="check-items">
                    <div onclick="toggleChecked(this)"  class="check-items-header d-flex-between">
                        <h4><i class="fa-solid fa-utensils"></i> Additional Ingredients</h4>
                        <span class="badge" style="background-color: black; color: white">Required</span>
                    </div>
                    <div class="ingredients-list">
                        <div  class="check-item d-flex-between">
                            <h3><img src="./img/onion.png" alt="Onion"> Onions</h3>
                            <div><span>400$</span><input class="custom-checkbo" type="checkbox"></div>
                        </div>
                        <div class="check-item d-flex-between">
                            <h3><img src="./img/tomato.png" alt="Tomato"> Tomato</h3>
  <div><span>400$</span><input class="custom-checkbo" type="checkbox"></div>
                        </div>
                        <div class="check-item d-flex-between">
                            <h3><img src="./img/chilli.png" alt="Chilli"> Chilli</h3>
  <div><span>400$</span><input class="custom-checkbo" type="checkbox"></div>
                        </div>
                        <div class="check-item d-flex-between">
                            <h3><img src="./img/salad.png" alt="Salad"> Salad</h3>
  <div><span>400$</span><input class="custom-checkbo" type="checkbox"></div>
                        </div>
                    </div>
                </div>
                
                 <div class="check-items">
                    <div class="check-items-header d-flex-between">
                        <h4><i class="fa-solid fa-utensils"></i> Additional Ingredients</h4>
                        <span class="badge" style="background-color: black; color: white">Required</span>
                    </div>
                    <div class="ingredients-list">
                        <div class="check-item d-flex-between">
                            <h3><img src="./img/onion.png" alt="Onion"> Onions</h3>
  <div><span>400$</span><input class="custom-checkbo" type="checkbox"></div>
                        </div>
                        <div class="check-item d-flex-between">
                            <h3><img src="./img/tomato.png" alt="Tomato"> Tomato</h3>
  <div><span>400$</span><input class="custom-checkbo" type="checkbox"></div>
                        </div>
                        <div class="check-item d-flex-between">
                            <h3><img src="./img/chilli.png" alt="Chilli"> Chilli</h3>
  <div><span>400$</span><input class="custom-checkbo" type="checkbox"></div>
                        </div>
                        <div id="check-item" class="check-item d-flex-between">
                            <h3><img src="./img/salad.png" alt="Salad"> Salad</h3>
  <div><span>400$</span><input class="custom-checkbo" type="checkbox"></div>
                        </div>
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
  })
}


document.getElementById("check-item").addEventListener("click", function () {
 prompt("kfjdl");
});


