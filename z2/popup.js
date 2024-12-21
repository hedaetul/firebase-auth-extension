// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBwOZi3IlDK936XCY71veQe2Yatdtko7r4',
  authDomain: 'fir-auth-extension-d9afd.firebaseapp.com',
  projectId: 'fir-auth-extension-d9afd',
  storageBucket: 'fir-auth-extension-d9afd.firebasestorage.app',
  messagingSenderId: '216601137822',
  appId: '1:216601137822:web:73f26da541a796dc47618f',
  measurementId: 'G-1Z8Q6HF31W',
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  // DOM elements
  const authForm = document.getElementById('auth-form');
  const userInfo = document.getElementById('user-info');
  const welcomeMessage = document.getElementById('welcome-message');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const logoutBtn = document.getElementById('logout-btn');
  
  // Helper function to show/hide elements
  function showElement(element, show) {
    element.style.display = show ? 'block' : 'none';
  }
  
  // Update UI based on auth state
  function updateUI(user) {
    if (user) {
      welcomeMessage.textContent = `Welcome back, ${user.email}!`;
      showElement(authForm, false);
      showElement(userInfo, true);
    } else {
      showElement(authForm, true);
      showElement(userInfo, false);
    }
  }
  
  // Listen for auth state changes
  auth.onAuthStateChanged((user) => {
    updateUI(user);
  });
  
  // Login
  loginBtn.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;
  
    auth.signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.error('Error logging in:', error);
        alert(error.message);
      });
  });
  
  // Sign up
  signupBtn.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.error('Error signing up:', error);
        alert(error.message);
      });
  });
  
  // Logout
  logoutBtn.addEventListener('click', () => {
    auth.signOut()
      .catch((error) => {
        console.error('Error logging out:', error);
        alert(error.message);
      });
  });
  
  