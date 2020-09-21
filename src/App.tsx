import React from 'react';
// Component.
import GridComponent from "./components/Grid/Grid"
// Firebase config.
// Firebase configuration.
import firebase from "./firebase"

function App() {
  const messaging = firebase.messaging()
  Notification.requestPermission().then(() =>{
    return messaging.getToken()
  }).then(token => {
    console.log("Token")
    console.log(token)
  })
  
  return (
    <div>
      <GridComponent />
    </div>
  );
}

export default App;
