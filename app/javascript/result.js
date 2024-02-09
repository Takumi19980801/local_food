function post() {
  const carbohydrates1Element = document.getElementById('nutrients1-1');
  const carbohydrates2Element = document.getElementById('nutrients1-2');
  const carbohydrates3Element = document.getElementById('nutrients1-3');
  const resultElement = document.getElementById('result1');

  const calculateSum = function() {
    const value1 = parseFloat(carbohydrates1Element.value) || 0;
    const value2 = parseFloat(carbohydrates2Element.value) || 0;
    const value3 = parseFloat(carbohydrates3Element.value) || 0;
    const sum = value1 + value2 + value3;
    resultElement.textContent = sum.toFixed(2);
  };

  // 各要素の変更を監視して合計を計算
  carbohydrates1Element.addEventListener('input', calculateSum);
  carbohydrates2Element.addEventListener('input', calculateSum);
  carbohydrates3Element.addEventListener('input', calculateSum);

  // 初期状態でも合計を計算して表示
  calculateSum();
}

window.addEventListener('turbo:load', post);