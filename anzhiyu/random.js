var posts=["2025/02/09/next数组/","2025/02/19/Qt聊天室项目/","2025/02/09/world/","2025/02/24/回声服务器/","2025/02/24/IO多路转接（复用）之EPOLL/","2025/02/18/如何使用满血版deepseek/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };