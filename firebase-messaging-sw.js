importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD8oBWqJMYhZnqdPKresifitHHbCvfhAbA",
  authDomain: "olmc2-90b41.firebaseapp.com",
  projectId: "olmc2-90b41",
  storageBucket: "olmc2-90b41.firebasestorage.app",
  messagingSenderId: "984236456405",
  appId: "1:984236456405:web:0e83bd61fdd8548866255c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title || "Walid Enterprise";
  const notificationOptions = {
    body: payload.notification.body || "আপনার অর্ডার আপডেট করা হয়েছে।",
    icon: 'https://cdn-icons-png.flaticon.com/512/2662/2662503.png' 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});