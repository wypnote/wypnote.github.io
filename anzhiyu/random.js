var posts=["2025/03/07/Qt几个面试问题/","2025/02/19/Qt聊天室项目/","2025/03/08/基础算法01/","2025/03/08/基础算法02/","2025/03/08/基础算法03/","2025/02/18/如何使用满血版deepseek/","2025/03/08/基础算法04/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };