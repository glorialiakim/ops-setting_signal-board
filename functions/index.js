const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Callable function: admin only — deletes user from Firebase Auth + Firestore
exports.deleteUserAccount = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Must be logged in.');
  }

  // Verify caller is admin via Firestore role
  const callerSnap = await admin.firestore().collection('users').doc(context.auth.uid).get();
  if (!callerSnap.exists || callerSnap.data().role !== 'admin') {
    throw new functions.https.HttpsError('permission-denied', 'Admin only.');
  }

  const { uid } = data;
  if (!uid) {
    throw new functions.https.HttpsError('invalid-argument', 'uid is required.');
  }

  await admin.auth().deleteUser(uid);
  await admin.firestore().collection('users').doc(uid).delete();

  return { success: true };
});
