document.addEventListener("DOMContentLoaded", () => {
  const loadHTML = async (selector, file) => {
    const target = document.querySelector(selector);
    if (!target) return;
    try {
      const response = await fetch(file);
      if (response.ok) {
        const data = await response.text();
        target.innerHTML = data;
      }
    } catch (error) {
      console.error("HTMLの読み込みに失敗しました", error);
    }
  };

  loadHTML("#header", "./common/header.html");
  loadHTML("#footer", "./common/footer.html");
});
