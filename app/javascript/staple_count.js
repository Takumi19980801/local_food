function post() {
  const selectBox = document.getElementById('meal_count_id');
  const carbohydratesElement = document.getElementById('nutrients1-1');
  const proteinElement = document.getElementById('nutrients2-1');
  const lipidElement = document.getElementById('nutrients3-1');

  selectBox.addEventListener('change', function() {
    const selectedId = selectBox.value;
    console.log("選択された値:", selectedId);

    let result;
    if (selectedId === '1') {

      carbohydratesElement.textContent = '';
      proteinElement.textContent = '';
      lipidElement.textContent = '';
    } else if (selectedId === '2') {
      carbohydratesElement.textContent = (parseFloat(carbohydratesElement.textContent) * 1).toFixed(2);
      proteinElement.textContent = (parseFloat(proteinElement.textContent) * 1).toFixed(2);
      lipidElement.textContent = (parseFloat(lipidElement.textContent) * 1).toFixed(2);
    } else if (selectedId === '3') {
      carbohydratesElement.textContent = (parseFloat(carbohydratesElement.textContent) * 2).toFixed(2);
      proteinElement.textContent = (parseFloat(proteinElement.textContent) * 2).toFixed(2);
      lipidElement.textContent = (parseFloat(lipidElement.textContent) * 2).toFixed(2);
    } else if (selectedId === '4') {
      carbohydratesElement.textContent = (parseFloat(carbohydratesElement.textContent) * 3).toFixed(2);
      proteinElement.textContent = (parseFloat(proteinElement.textContent) * 3).toFixed(2);
      lipidElement.textContent = (parseFloat(lipidElement.textContent) * 3).toFixed(2);
    } else if (selectedId === '5') {
      carbohydratesElement.textContent = (parseFloat(carbohydratesElement.textContent) * 4).toFixed(2);
      proteinElement.textContent = (parseFloat(proteinElement.textContent) * 4).toFixed(2);
      lipidElement.textContent = (parseFloat(lipidElement.textContent) * 4).toFixed(2);
    } else {
      carbohydratesElement.textContent = (parseFloat(carbohydratesElement.textContent) * 5).toFixed(2);
      proteinElement.textContent = (parseFloat(proteinElement.textContent) * 5).toFixed(2);
      lipidElement.textContent = (parseFloat(lipidElement.textContent) * 5).toFixed(2);

    }
  });
};

window.addEventListener('turbo:load', post);