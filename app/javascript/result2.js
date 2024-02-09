function post() {
  const carbohydrates1Element = document.getElementById('nutrients2-1');
  const carbohydrates2Element = document.getElementById('nutrients2-2');
  const carbohydrates3Element = document.getElementById('nutrients2-3');
  const resultElement = document.getElementById('result2');
  // 主食
  const selectBox = document.getElementById('meal_staple_food_id');
  const count = document.getElementById('meal_staple_food_count_id');
  // 主菜
  const main_selectBox = document.getElementById('meal_main_dish_id');
  const main_count = document.getElementById('meal_main_dish_count_id');
  // 副菜
  const side_selectBox = document.getElementById('meal_side_dish_id');
  const side_count = document.getElementById('meal_side_dish_count_id');

  const calculateSum = function() {
    const value1 = parseFloat(carbohydrates1Element.textContent) || 0;
    const value2 = parseFloat(carbohydrates2Element.textContent) || 0;
    const value3 = parseFloat(carbohydrates3Element.textContent) || 0;
    const sum = value1 + value2 + value3;
    resultElement.textContent = sum.toFixed(2);
  };

  // 各要素の変更を監視して合計を計算
  // 主食
  selectBox.addEventListener('change', calculateSum);
  count.addEventListener('change', calculateSum);
  // 主菜
  main_selectBox.addEventListener('change', calculateSum);
  main_count.addEventListener('change', calculateSum);
  // 副菜
  side_selectBox.addEventListener('change', calculateSum);
  side_count.addEventListener('change', calculateSum);

  // 初期状態でも合計を計算して表示
  calculateSum();
}

window.addEventListener('load', post);