function post (){
  const selectBox = document.getElementById('meal_staple_food_id');

  let selectedId;

  selectBox.addEventListener('change', function() {
    selectedId = selectBox.value;
    console.log("選択された値:", selectedId);

    // 選択されたidに応じて数値を表示する処理
    if (selectedId === '1') {
      document.getElementById('nutrients1-1').textContent = '';
      document.getElementById('nutrients2-1').textContent = '';
      document.getElementById('nutrients3-1').textContent = '';
    } else if (selectedId === '2') {
      document.getElementById('nutrients1-1').textContent = '51.90';
      document.getElementById('nutrients2-1').textContent = '3.00';
      document.getElementById('nutrients3-1').textContent = '0.30';
    } else if (selectedId === '3') {
      document.getElementById('nutrients1-1').textContent = '29.90';
      document.getElementById('nutrients2-1').textContent = '5.30';
      document.getElementById('nutrients3-1').textContent = '2.40';
    } else if (selectedId === '4') {
      document.getElementById('nutrients1-1').textContent = '67.16';
      document.getElementById('nutrients2-1').textContent = '11.27';
      document.getElementById('nutrients3-1').textContent = '1.38';
    } else {
      document.getElementById('nutrients1-1').textContent = '80.50';
      document.getElementById('nutrients2-1').textContent = '14.50';
      document.getElementById('nutrients3-1').textContent = '2.25';
    }
  });
};

window.addEventListener('turbo:load', post);