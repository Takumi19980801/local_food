// 削除ボタン要素を取得
const deleteSelectButton = document.getElementById('deleteSelectButton1');

// 削除ボタンがクリックされたときの処理
deleteSelectButton.addEventListener('click', function() {
  // コンテナからセレクト要素を取得して削除
  const selectContainer = document.getElementById('selectContainer1');
  const selectElement = selectContainer.querySelector('select');
  if (selectElement) {
    selectContainer.removeChild(selectElement);
  }
});