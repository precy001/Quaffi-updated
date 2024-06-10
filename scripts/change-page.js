 const signInButton = document.querySelector('.js-sign-in');
 const signUpButton = document.querySelector('.js-sign-up');
 const container = document.querySelector('.form')

 function changePage(button){
    if(button === 'Up'){
        container.innerHTML = `<p class="title">Create a new account</p>
        <label>
            <input required="" placeholder="" type="text" class="input">
            <span>Username</span>
        </label>
            
    <label>
        <input required="" placeholder="" type="email" class="input">
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" class="input">
        <span>Password</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" class="input">
        <span>Confirm password</span>
    </label>
    <button class="submit">Submit</button>
    <p class="signin">Already have an acount ? <button class="js-sign-up" onclick="changePage('In');">Sign up</button> </p>`
        container.classList.add('margin')
        document.title = 'Sign up | Quaffi logistics';
    }else if(button === 'In'){
        container.innerHTML = `<p class="title">Sign in to your account</p>
        <label>
            <input required="" placeholder="" type="text" class="input">
            <span>Username</span>
        </label>
        
        <label>
            <input required="" placeholder="" type="password" class="input">
            <span>Password</span>
        </label>
        <button class="submit">Login</button>
        <p class="signin">Already have an acount ? <button class="js-sign-up" onclick="changePage('Up');">Sign up</button> </p>`
        container.classList.remove('margin')
        document.title = 'Sign in | Quaffi logistics';
    }
 }