// Import and configure the Firebase SDK
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXR6NakEE4yB93rK5rSxG2-OUBPnqazgY",
  authDomain: "pet-locate-42222.firebaseapp.com",
  databaseURL: "https://pet-locate-42222-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pet-locate-42222",
  storageBucket: "pet-locate-42222.firebasestorage.app",
  messagingSenderId: "320851125516",
  appId: "1:320851125516:web:440744a87b0984d47c9529",
  measurementId: "G-GL55SGR8V8"
};

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/pets/images/icon-192x192.png',
    badge: '/pets/images/icon-192x192.png',
    data: payload.data
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

