const { Router } = require("express");
const router = Router();

const webpush = require("../webpush");
let pushSubscripton;
var _PushSubscription ;
router.post("/subscription", async (req, res) => {
  const { subscription, PushSubscription } = req.body;
  console.log(pushSubscripton);
  _PushSubscription = PushSubscription
  // Server's Response
  res.status(201).json();
});

router.post("/new-message", async (req, res) => {
  const { message } = req.body;
  // Payload Notification
  const payload = JSON.stringify({
    title: "My Custom Notification",
    message 
  });
  res.status(200).json();
  try {
    console.log('_PushSubscription',_PushSubscription );
    await webpush.sendNotification(_PushSubscription, payload);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
