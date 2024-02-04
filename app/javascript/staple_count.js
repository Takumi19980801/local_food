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

    } else if (selectedId === '2') {

    } else if (selectedId === '3') {

    } else if (selectedId === '4') {

    } else {

    }
  });
};

window.addEventListener('turbo:load', post);