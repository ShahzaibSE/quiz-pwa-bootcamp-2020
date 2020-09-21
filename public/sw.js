let cache_name = "the_trivia"
let urlsToCache = [
    '/',
    'index.html',
    '/logo192.png',
    '/logo512.png',
    '/favicon.ico',
    '/static/js/bundle.js',
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/js/1.chunk.js'
  ];

console.log("Service Worker started: ",cache_name)

this.importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js")
this.importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js")

this.firebase.initializeApp({
  apiKey: "AIzaSyBQjQc0CUWse4I4Dc7Alrl7wodBMzUaoLA",
  authDomain: "fir-messaging-8ed83.firebaseapp.com",
  databaseURL: "https://fir-messaging-8ed83.firebaseio.com",
  projectId: "fir-messaging-8ed83",
  storageBucket: "fir-messaging-8ed83.appspot.com",
  messagingSenderId: "942472815958",
  appId: "1:942472815958:web:8bfc18803a8d555119a2f7"
})

this.addEventListener('install', (event)=>{
    event.waitUntil(
        caches.open(cache_name).then(cache => {
           console.log("Opened cache.") 
           cache.addAll(urlsToCache)
        }).catch(err => {
            console.log("Error: ", err)
        })
    )
})

this.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
})

this.firebase.messaging()