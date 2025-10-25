import cron from "node-cron";
import admin from "../config/firebase.js";
import db from "../config/db.js";

cron.schedule("0 0 * * *", async () => {
  console.log("Running subscription expiry check...");

  const now = new Date().toISOString();
  const expiredUsers = await db
    .collection("user_timeline")
    .where("validUntil", "<=", now)
    .where("roleAfter", "==", "paid")
    .get();

  for (const doc of expiredUsers.docs) {
    const data = doc.data();
    const { userId } = data;

    await admin.auth().setCustomUserClaims(userId, { role: "normal" });
    await db.collection("user_timeline").add({
      userId,
      roleBefore: "paid",
      roleAfter: "normal",
      timestamp: new Date().toISOString(),
      notes: "Auto-downgraded after expiry",
    });
  }

  console.log("Subscription check complete ✅");
});
