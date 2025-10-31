// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Authentication Functions

// Google Sign In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return { success: true, user };
  } catch (error) {
    // Handle specific error codes
    const errorCode = error.code;
    let errorMessage = error.message;

    // Don't treat these as errors - user cancelled intentionally
    if (errorCode === 'auth/popup-closed-by-user' || 
        errorCode === 'auth/cancelled-popup-request') {
      return { success: false, error: null, cancelled: true };
    }

    // User-friendly error messages
    switch (errorCode) {
      case 'auth/popup-blocked':
        errorMessage = 'Popup was blocked. Please allow popups for this site.';
        break;
      case 'auth/network-request-failed':
        errorMessage = 'Network error. Please check your internet connection.';
        break;
      case 'auth/unauthorized-domain':
        errorMessage = 'This domain is not authorized. Please contact support.';
        break;
      case 'auth/operation-not-allowed':
        errorMessage = 'Google sign-in is not enabled. Please contact support.';
        break;
      default:
        errorMessage = 'Failed to sign in with Google. Please try again.';
    }

    return { success: false, error: errorMessage };
  }
};

// Email/Password Sign Up
export const signUpWithEmail = async (email, password, displayName) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update user profile with display name
    if (displayName) {
      await updateProfile(result.user, {
        displayName: displayName
      });
    }
    
    // Send email verification
    await sendEmailVerification(result.user);
    
    return { success: true, user: result.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Email/Password Sign In
export const signInWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: result.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Phone Number Sign In
export const setupRecaptcha = (containerId) => {
  try {
    const recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
      size: 'normal',
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber
        console.log('reCAPTCHA verified');
      },
      'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        console.log('reCAPTCHA expired');
      }
    });
    return recaptchaVerifier;
  } catch (error) {
    console.error('Error setting up reCAPTCHA:', error);
    return null;
  }
};

export const sendPhoneVerification = async (phoneNumber, recaptchaVerifier) => {
  try {
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
    return { success: true, confirmationResult };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const verifyPhoneCode = async (confirmationResult, code) => {
  try {
    const result = await confirmationResult.confirm(code);
    return { success: true, user: result.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Password Reset
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true, message: 'Password reset email sent!' };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Sign Out
export const logOut = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Auth State Observer
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// Get Current User
export const getCurrentUser = () => {
  return auth.currentUser;
};

export { auth, analytics };
export default app;
