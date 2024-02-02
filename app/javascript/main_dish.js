function post (){
  const selectBox = document.getElementById('meal_main_dish_id');

  let selectedId;

  selectBox.addEventListener('change', function() {
    selectedId = selectBox.value;
    console.log("選択された値:", selectedId);

    // 選択されたidに応じて数値を表示する処理
    if (selectedId === '1') {
      document.getElementById('nutrients1-2').textContent = '';
      document.getElementById('nutrients2-2').textContent = '';
      document.getElementById('nutrients3-2').textContent = '';
    } else if (selectedId === '2') {
      document.getElementById('nutrients1-2').textContent = '7.66';
      document.getElementById('nutrients2-2').textContent = '20.81';
      document.getElementById('nutrients3-2').textContent = '25.22';
    } else if (selectedId === '3') {
      document.getElementById('nutrients1-2').textContent = '26.76';
      document.getElementById('nutrients2-2').textContent = '8.28';
      document.getElementById('nutrients3-2').textContent = '13.56';
    } else if (selectedId === '4') {
      document.getElementById('nutrients1-2').textContent = '14.28';
      document.getElementById('nutrients2-2').textContent = '18.59';
      document.getElementById('nutrients3-2').textContent = '17.08';
    } else {
      document.getElementById('nutrients1-2').textContent = '12.11';
      document.getElementById('nutrients2-2').textContent = '10.51';
      document.getElementById('nutrients3-2').textContent = '9.42';
    }
  });
};

window.addEventListener('turbo:load', post);