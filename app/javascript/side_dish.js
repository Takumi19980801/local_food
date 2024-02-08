function post (){
  const selectBox = document.getElementById('meal_side_dish_id');

  let selectedId;

  selectBox.addEventListener('change', function() {
    selectedId = selectBox.value;
    console.log("選択された値:", selectedId);

    // 選択されたidに応じて数値を表示する処理
    if (selectedId === '1') {
      document.getElementById('nutrients1-3').textContent = '';
      document.getElementById('nutrients2-3').textContent = '';
      document.getElementById('nutrients3-3').textContent = '';
    } else if (selectedId === '2') {
      document.getElementById('nutrients1-3').textContent = '12.63';
      document.getElementById('nutrients2-3').textContent = '4.01';
      document.getElementById('nutrients3-3').textContent = '8.59';
    } else if (selectedId === '3') {
      document.getElementById('nutrients1-3').textContent = '14.14';
      document.getElementById('nutrients2-3').textContent = '1.20';
      document.getElementById('nutrients3-3').textContent = '3.08';
    } else if (selectedId === '4') {
      document.getElementById('nutrients1-3').textContent = '2.83';
      document.getElementById('nutrients2-3').textContent = '3.40';
      document.getElementById('nutrients3-3').textContent = '0.32';
    } else {
      document.getElementById('nutrients1-3').textContent = '8.18';
      document.getElementById('nutrients2-3').textContent = '1.56';
      document.getElementById('nutrients3-3').textContent = '15.34';
    }
  });
};

window.addEventListener('turbo:load', post);