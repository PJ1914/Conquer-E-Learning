import admin from "firebase-admin";

const firebaseJson = process.env.FIREBASE_SDK_JSON;
const cred = JSON.parse(firebaseJson);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(cred),
  });
}

export default admin;
