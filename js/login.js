const loginForm = document.querySelector('#login-form');
const signupForm = document.querySelector('#signup-form');
const overlayLog = document.querySelector('.overlay-log');

const logoutBtn = document.querySelector('.logout');
const loginBtn = document.querySelector('.login');
const signup = document.querySelector('.signup');

function showForm(form, val){
  form.style.display = val
}
// overlaySignin.style.display = 'block'

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    overlaySignin.style.display = 'none'

    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        
        console.log(userCredential.user)
        signupForm.reset()
      })
})



logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut()
    .then(() => {
      console.log('user signed out')
    })
})

