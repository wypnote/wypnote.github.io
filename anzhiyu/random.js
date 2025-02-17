var posts=["2025/02/09/next数组/","2025/02/09/world/","2025/02/18/如何使用满血版deepseek/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };