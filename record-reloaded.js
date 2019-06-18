// ページがリロードされたか判定
// リロードされたときにhash値が残っているため挙動がおかしい
if (window.performance) {
  if (performance.navigation.type === 1) {
    // リロードされたときhashを消す
    window.location.href = "./record.html";
  }
}
