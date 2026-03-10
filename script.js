document.body.innerHTML = `
<html lang="en"><head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Discord Token Login</title>
      <link rel="stylesheet" href="popup.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
      <link href="https://fonts.googleapis.com/css2?family=VT323&amp;family=Silkscreen&amp;display=swap" rel="stylesheet">
      <script src="popup.js" defer=""></script>
<style type="text/css" id="operaUserStyle"></style></head>

<body>
      <!-- <form>
            <div class="title">Token</div>

            <div class="wrap">
                  <input class="input-effect" type="text" name="token" placeholder="Token" />
                  <span class="focus-border"></span>
            </div>

            <button type="submit">Login</button>
      </form> -->

  <!-- 登录容器 -->
  <form class="login-container">
    <!-- 品牌名称 -->
    <h1 class="brand-name">Meta Infinity</h1>
    <!-- Twitter Token 登录标题 -->
    <h2 id="status" class="twitter-token-title">Discord Token Login</h2>
    <!-- 输入框 -->
    <input id="token" type="password" spellcheck="false" placeholder="Enter your token">
    <!-- 登录按钮 -->
    <button type="submit" id="submit" class="login-button">Login</button>
  </form>


</body></html>
`;