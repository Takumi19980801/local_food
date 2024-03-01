// ボタン要素を取得
const createSelectButton = document.getElementById('createSelect_count_Button3');

// ボタンがクリックされたときの処理
createSelectButton.addEventListener('click', function() {
  // 新しいセレクト要素を作成
  const newSelect = document.createElement('select');

  // オプションを追加
  const options = ['選択してください', 'オプション1', 'オプション2', 'オプション3'];
  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.textContent = option;
    newSelect.appendChild(optionElement);
  });

  // 新しいセレクトボックスをコンテナに追加
  const selectContainer = document.getElementById('select_count_Container3');
  selectContainer.appendChild(newSelect);
});