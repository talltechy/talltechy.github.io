const resource = [
  /* --- CSS --- */
  '/wyen.me/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/wyen.me/app.js',
  '/wyen.me/sw.js',

  /* --- HTML --- */
  '/wyen.me/index.html',
  '/wyen.me/404.html',

  
    '/wyen.me/categories/',
  
    '/wyen.me/tags/',
  
    '/wyen.me/archives/',
  
    '/wyen.me/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/wyen.me/assets/img/favicons/android-chrome-192x192.png',
    '/wyen.me/assets/img/favicons/android-chrome-512x512.png',
    '/wyen.me/assets/img/favicons/apple-touch-icon.png',
    '/wyen.me/assets/img/favicons/favicon-16x16.png',
    '/wyen.me/assets/img/favicons/favicon-32x32.png',
    '/wyen.me/assets/img/favicons/favicon.ico',
    '/wyen.me/assets/img/favicons/mstile-150x150.png',
    '/wyen.me/assets/js/dist/categories.min.js',
    '/wyen.me/assets/js/dist/commons.min.js',
    '/wyen.me/assets/js/dist/home.min.js',
    '/wyen.me/assets/js/dist/misc.min.js',
    '/wyen.me/assets/js/dist/page.min.js',
    '/wyen.me/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'wyen.me',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

