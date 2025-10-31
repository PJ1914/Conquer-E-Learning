# Firebase Authentication Setup Guide

## Overview
This project uses Firebase Authentication with three methods:
1. **Google OAuth** - Sign in with Google account
2. **Email/Password** - Traditional email and password authentication
3. **Phone Number** - SMS verification authentication

## Setup Complete ✅

### Files Created:
1. `frontend/.env` - Environment variables for Firebase config
2. `frontend/src/config/firebase.js` - Firebase initialization and auth functions
3. `frontend/src/context/AuthContext.jsx` - React context for auth state management
4. `frontend/src/pages/LoginPage.jsx` - Login page with email/password and Google
5. `frontend/src/pages/SignupPage.jsx` - Signup page
6. `frontend/src/pages/PhoneLoginPage.jsx` - Phone verification login
7. `frontend/src/pages/ForgotPasswordPage.jsx` - Password reset page

### Routes Added to App.jsx:
- `/login` - Main login page
- `/signup` - Sign up page
- `/phone-login` - Phone number login
- `/forgot-password` - Password reset

## Firebase Console Configuration Required

### 1. Enable Authentication Methods

Go to [Firebase Console](https://console.firebase.google.com/) → Your Project → Authentication → Sign-in method

#### Enable Email/Password:
1. Click on "Email/Password"
2. Toggle "Enable"
3. Save

#### Enable Google Sign-In:
1. Click on "Google"
2. Toggle "Enable"
3. Add support email
4. Save

#### Enable Phone Authentication:
1. Click on "Phone"
2. Toggle "Enable"
3. Add test phone numbers if needed (for development)
4. Save

### 2. Add Authorized Domains

In Authentication → Settings → Authorized domains:
- Add `localhost` (for development)
- Add your production domain when deploying

### 3. Configure Google OAuth (Optional but Recommended)

For production Google Sign-In:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your Firebase project
3. Navigate to "APIs & Services" → "Credentials"
4. Add authorized JavaScript origins and redirect URIs

## Usage Examples

### Using Authentication in Components

```jsx
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { currentUser, logout } = useAuth();

  return (
    <div>
      {currentUser ? (
        <>
          <p>Welcome, {currentUser.displayName || currentUser.email}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}
```

### Available Auth Functions

From `useAuth()` hook:
- `currentUser` - Current logged-in user object or null
- `loading` - Boolean indicating auth state loading
- `error` - Error message if any
- `login(email, password)` - Email/password login
- `signup(email, password, displayName)` - Create new account
- `loginWithGoogle()` - Google OAuth login
- `logout()` - Sign out current user
- `forgotPassword(email)` - Send password reset email
- `setupPhoneAuth(containerId)` - Setup phone authentication
- `sendPhoneCode(phoneNumber, recaptchaVerifier)` - Send SMS code
- `verifyPhone(confirmationResult, code)` - Verify SMS code

### User Object Properties

When logged in, `currentUser` contains:
- `uid` - Unique user ID
- `email` - User's email
- `displayName` - User's display name
- `photoURL` - Profile photo URL (Google auth)
- `phoneNumber` - Phone number (phone auth)
- `emailVerified` - Email verification status

## Protected Routes (TODO)

Create a ProtectedRoute component to restrict access:

```jsx
// frontend/src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
```

Usage in App.jsx:
```jsx
<Route path="/dashboard" element={
  <ProtectedRoute>
    <DashboardPage />
  </ProtectedRoute>
} />
```

## Security Best Practices

### Environment Variables
- ✅ Firebase config stored in `.env`
- ⚠️ Add `.env` to `.gitignore` (already done)
- ✅ Use `import.meta.env.VITE_*` for Vite projects

### Password Requirements
- Minimum 6 characters (Firebase default)
- Consider adding additional validation for stronger passwords

### Phone Number Format
- Must include country code (e.g., +1 for US)
- Format: `+[country code][phone number]`
- Example: `+12345678900`

### reCAPTCHA
- Automatically configured for phone authentication
- Prevents bot attacks on phone verification

## Testing

### Test Accounts (Development)
You can add test phone numbers in Firebase Console:
1. Go to Authentication → Sign-in method → Phone
2. Scroll to "Phone numbers for testing"
3. Add test numbers with verification codes

### Email Verification
- Email verification is sent automatically on signup
- Users can still sign in without verifying (configurable)
- Check verification status: `currentUser.emailVerified`

## Troubleshooting

### Common Issues:

**"auth/popup-blocked"**
- Browser blocked the popup
- User needs to allow popups for the site

**"auth/network-request-failed"**
- Check internet connection
- Verify Firebase config is correct

**"auth/invalid-phone-number"**
- Phone number must include country code
- Format: +[country code][number]

**"auth/too-many-requests"**
- Too many failed attempts
- Wait a few minutes or reset in Firebase Console

**reCAPTCHA not showing**
- Check if `recaptcha-container` div exists
- Verify domain is authorized in Firebase Console

## Next Steps

1. ✅ Firebase configuration complete
2. ✅ Authentication UI pages created
3. ✅ Auth context and state management setup
4. 🔲 Enable authentication methods in Firebase Console
5. 🔲 Test each authentication method
6. 🔲 Create protected routes for authenticated content
7. 🔲 Add user profile management
8. 🔲 Integrate with backend API (send Firebase ID token)

## Backend Integration

When integrating with your backend:

1. Send Firebase ID token with requests:
```javascript
const user = getCurrentUser();
const token = await user.getIdToken();

// Send in Authorization header
fetch('/api/protected', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

2. Verify token on backend:
```javascript
// Backend (Node.js example)
const admin = require('firebase-admin');
const decodedToken = await admin.auth().verifyIdToken(token);
const uid = decodedToken.uid;
```

## Support

For issues or questions:
- Firebase Documentation: https://firebase.google.com/docs/auth
- Stack Overflow: Tag with `firebase-authentication`

---

**Status**: ✅ Authentication Setup Complete
**Last Updated**: November 1, 2025
