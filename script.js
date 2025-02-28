// 定义食物数组
const foods = ["火锅", "披萨", "寿司", "汉堡", "拉面", "饺子", "炒饭"];

// 获取按钮和结果显示元素
const randomButton = document.getElementById('randomButton');
const foodResult = document.getElementById('foodResult');

// 为按钮添加点击事件监听器
randomButton.addEventListener('click', function () {
  // 生成随机索引
  const randomIndex = Math.floor(Math.random() * foods.length);
  // 获取随机食物
  const randomFood = foods[randomIndex];
  // 显示随机食物
  foodResult.textContent = `今天吃：${randomFood}`;
});
