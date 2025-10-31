import { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithGoogle,
  signInWithEmail,
  signUpWithEmail,
  logOut,
  onAuthChange,
  getCurrentUser,
  resetPassword,
  setupRecaptcha,
  sendPhoneVerification,
  verifyPhoneCode
} from '../config/firebase';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Google Sign In
  const loginWithGoogle = async () => {
    try {
      setError(null);
      const result = await signInWithGoogle();
      
      // Don't set error if user cancelled
      if (!result.success && !result.cancelled && result.error) {
        setError(result.error);
      }
      
      return result;
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  // Email/Password Sign Up
  const signup = async (email, password, displayName) => {
    try {
      setError(null);
      const result = await signUpWithEmail(email, password, displayName);
      if (!result.success) {
        setError(result.error);
      }
      return result;
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  // Email/Password Sign In
  const login = async (email, password) => {
    try {
      setError(null);
      const result = await signInWithEmail(email, password);
      if (!result.success) {
        setError(result.error);
      }
      return result;
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  // Phone Authentication
  const setupPhoneAuth = (containerId) => {
    return setupRecaptcha(containerId);
  };

  const sendPhoneCode = async (phoneNumber, recaptchaVerifier) => {
    try {
      setError(null);
      const result = await sendPhoneVerification(phoneNumber, recaptchaVerifier);
      if (!result.success) {
        setError(result.error);
      }
      return result;
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  const verifyPhone = async (confirmationResult, code) => {
    try {
      setError(null);
      const result = await verifyPhoneCode(confirmationResult, code);
      if (!result.success) {
        setError(result.error);
      }
      return result;
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  // Password Reset
  const forgotPassword = async (email) => {
    try {
      setError(null);
      const result = await resetPassword(email);
      if (!result.success) {
        setError(result.error);
      }
      return result;
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  // Logout
  const logout = async () => {
    try {
      setError(null);
      const result = await logOut();
      if (!result.success) {
        setError(result.error);
      }
      return result;
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    }
  };

  const value = {
    currentUser,
    loading,
    error,
    login,
    signup,
    loginWithGoogle,
    logout,
    forgotPassword,
    setupPhoneAuth,
    sendPhoneCode,
    verifyPhone,
    setError
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
