// Google Login Authentication
const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');
const loginUpdate = document.getElementById('loginUpdate');
const userDetails = document.getElementById('userDetails');
// Created new instance
const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in using event handlers
// G-mail Sign in

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();
auth.onAuthStateChanged((user) => {
  if (user) {
    // signed in
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    redirect_Page();
    userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p> <a href="./index.html"><button class="login__SignInBtn">Take me back to homepage</button></a>`;
    loginUpdate.innerHTML = `<h3 style="color: #f8d05d;">Hello ${user.displayName}!</h3>|<a href="./loginPage"><button style="color: #f8d05d">Logout.</button></a>`;
  } else {
    // not signed in
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetails.innerHTML = '';
    loginUpdate.innerHTML = 'Login';
  }
});

function redirect_Page() {
  var tID = setTimeout(function () {
    window.location.href = './index.html';
    window.clearTimeout(tID); // clear time out.
  }, 20000);
}

// const signUpFunction = () => {
//   // Email-ID password Signin
//   const mailField = document.getElementById('mail');
//   const passwordField = document.getElementById('password');
//   const signUp = document.getElementById('signUp');
//   String;
//   email = mailField.value;
//   const password = passwordField.value;

//   //Built in firebase function responsible for signing up a user
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then(() => {
//       console.log('Signed Up Successfully !');
//       window.location.href = './index.html';
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   signUp.addEventListener('click', signUpFunction());
// };

// const sendVerificationEmail = () => {
//   //Built in firebase function responsible for sending the verification email
//   auth.currentUser
//     .sendEmailVerification()
//     .then(() => {
//       console.log('Verification Email Sent Successfully !');
//       //redirecting the user to the profile page once everything is done correctly
//       window.location.assign('https://fitgeneix.web.app/');
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };
