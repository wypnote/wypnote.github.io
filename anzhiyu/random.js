var posts=["2025/02/09/next数组/","2025/02/09/world/","2025/02/09/文档/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };