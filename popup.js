import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth/web-extension';

const firebaseConfig = {
  apiKey: 'AIzaSyBwOZi3IlDK936XCY71veQe2Yatdtko7r4',
  authDomain: 'fir-auth-extension-d9afd.firebaseapp.com',
  projectId: 'fir-auth-extension-d9afd',
  storageBucket: 'fir-auth-extension-d9afd.firebasestorage.app',
  messagingSenderId: '216601137822',
  appId: '1:216601137822:web:73f26da541a796dc47618f',
  measurementId: 'G-1Z8Q6HF31W',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const email = document.getElementById('email');
const password = document.getElementById('password');
const signupButton = document.getElementById('signup');
const loginButton = document.getElementById('login');
const status = document.getElementById('status');

signupButton.addEventListener('click', async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const user = userCredential.user;
    await setDoc(doc(db, 'users', user.uid), { email: user.email });
    status.textContent = 'Sign Up Successful!';
    status.style.color = 'green';
  } catch (error) {
    status.textContent = `Error: ${error.message}`;
    status.style.color = 'red';
  }
});

loginButton.addEventListener('click', async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    status.textContent = 'Login Successful!';
    status.style.color = 'green';
  } catch (error) {
    status.textContent = `Error: ${error.message}`;
    status.style.color = 'red';
  }
});
