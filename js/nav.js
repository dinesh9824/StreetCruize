
const createNav = () => {
    let nav =document.querySelector('.navbar');
    nav.innerHTML = ` 
    <div class="nav">
    <img src="img/dark-logo.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input typr="text" class="search-box" placeholder="search brand, products">
            <button class="search-btn">search</button>
        </div>
        <a>
        <img src="img/user.png" id="user-img" alt="">
        <div class= " login-logout-popup hide">
            <p class="accout-info">Login in as, name</p>
            <button class="btn" id="user-btn">logout</button>
        </div> 
        </a>
    <a href="#"><img src="img/cart.png"></a>
    </div>
</div>
<ul class="links-container">
<li class="link-items"><a href="index.html" class="">home</a></li>
<li class="link-items"><a href="womens.html" class="link">women</a></li>
<li class="link-items"><a href="mens.html" class="link">men</a></li>
<li class="link-items"><a href="acessories.html" class="link">accessories</a></li>
</ul>
    `;
}

createNav();

// nav popups 
const userImageButton = document.querySelector('#user-img');
const userPop = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () =>{
    userPop.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        //means user logged in
        popuptext.innerHTML = `logged in as, ${user.name}`;
        actionBtn.innerHTML = 'Logout';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    }else{
        //user logged out
        popuptext.innerHTML = 'log in place order';
        actionBtn.innerHTML = ' log in';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
}