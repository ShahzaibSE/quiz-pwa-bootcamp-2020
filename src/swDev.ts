export default function swDev() {
    let swDev = `${process.env.PUBLIC_URL}/sw.js`
    // let firebaseDev = `${process.env.PUBLIC_URL}/firebase-messaging-sw.js`
    navigator.serviceWorker.register(swDev).then(result => {
        console.log("Created service worker, result:", result)
    })
    // navigator.serviceWorker.register(firebaseDev).then(result => {
    //     console.log("Created push notification service worker, result:", result)
    // })
}