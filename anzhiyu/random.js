var posts=["2025/02/07/hello-world/","2025/02/09/qt/","2025/02/09/入门/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };