window.addEventListener("load", solve);

function solve() {
  let publishBtn = document.getElementById("publish");
  publishBtn.type = "button";
  let brandEl = document.getElementById("make");
  let modelEl = document.getElementById("model");
  let productionYearEl = document.getElementById("year");
  let fuelTypeEl = document.getElementById("fuel");
  let originalCostEl = document.getElementById("original-cost");
  let sellingPriceEl = document.getElementById("selling-price");

  let totalProfitEl = document.getElementById('profit');
  publishBtn.addEventListener("click", () => {
    let brand = brandEl.value;
    let model = modelEl.value;
    let productionYear = productionYearEl.value;
    let fuelType = fuelTypeEl.value;
    let originalCost = Number(originalCostEl.value);
    let sellingPrice = Number(sellingPriceEl.value);

    if (
      brand == "" ||
      model == "" ||
      productionYear == "" ||
      fuelType == "" ||
      originalCost == "" ||
      sellingPrice == "" ||
      originalCost > sellingPrice
    ) {
      return;
    }

    let tbodyEl = document.getElementById("table-body");

    let tr = document.createElement("tr");
    tr.classList.add("row");
    let tdBrand = document.createElement("td");
    tdBrand.textContent = brand;
    let tdModel = document.createElement("td");
    tdModel.textContent = model;
    let tdYear = document.createElement("td");
    tdYear.textContent = productionYear;
    let tdFuel = document.createElement("td");
    tdFuel.textContent = fuelType;
    let tdOriginalPrice = document.createElement("td");
    tdOriginalPrice.textContent = originalCost;
    let tdSellingPrice = document.createElement("td");
    tdSellingPrice.textContent = sellingPrice;

    let tdButtons = document.createElement("td");
    let editBtn = document.createElement("button");
    editBtn.classList.add("action-btn",'edit');
    editBtn.textContent = "Edit";
    let sellBtn = document.createElement("button");
    sellBtn.classList.add("action-btn",'sell');
    sellBtn.textContent = "Sell";
    tdButtons.appendChild(editBtn);
    tdButtons.appendChild(sellBtn);

    tr.appendChild(tdBrand);
    tr.appendChild(tdModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdFuel);
    tr.appendChild(tdOriginalPrice);
    tr.appendChild(tdSellingPrice);
    tr.appendChild(tdButtons);

    tbodyEl.appendChild(tr);

    brandEl.value = "";
    modelEl.value = "";
    productionYearEl.value = "";
    fuelTypeEl.value = "";
    originalCostEl.value = "";
    sellingPriceEl.value = "";


    editBtn.addEventListener('click', ()=>{
      tr.remove();

      brandEl.value = brand;
      modelEl.value = model;
      productionYearEl.value = productionYear;
      fuelTypeEl.value = fuelType;
      originalCostEl.value = originalCost;
      sellingPriceEl.value = sellingPrice;
    })
    
    sellBtn.addEventListener('click',()=>{
      tr.remove();
      let soldCarsEl = document.getElementById('cars-list');

      let li = document.createElement('li');
      li.classList.add('each-list');
      let brandSpan = document.createElement('span');
      brandSpan.textContent = `${brand} ${model}`;
      let yearSpan = document.createElement('span');
      yearSpan.textContent = productionYear;
      let priceDiffSpan = document.createElement('span');
      priceDiffSpan.textContent = sellingPrice - originalCost;
      totalProfitEl.textContent = (Number(totalProfitEl.textContent) + Number(priceDiffSpan.textContent)).toFixed(2);
      li.appendChild(brandSpan);
      li.appendChild(yearSpan);
      li.appendChild(priceDiffSpan);

      soldCarsEl.appendChild(li);
    })
  });
}
