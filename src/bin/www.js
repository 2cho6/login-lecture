const app = require("../app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log("server opened"); //3000번 포트를 열어줘 두번째 인자는 콜백함수
});
