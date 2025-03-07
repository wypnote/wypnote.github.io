var posts=["2025/02/18/如何使用满血版deepseek/","2025/02/19/Qt聊天室项目/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };