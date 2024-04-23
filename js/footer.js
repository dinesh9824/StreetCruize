const createFoot = () => {
    let nav =document.querySelector('footer');
    nav.innerHTML = ` 
    <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watches</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watches</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">about us</p>
    <p class="info">Welcome to Clothing Haven, your ultimate destination for trendy and affordable fashion! Explore our diverse collection of stylish clothing, curated to suit every taste and occasion. From casual chic to formal elegance, we have something for everyone. Browse through our latest arrivals and exclusive deals to stay ahead of the fashion curve. With fast shipping and hassle-free returns, revamp your wardrobe effortlessly with Clothing Haven. Embrace style, embrace confidence. Shop now!</p>
    <p class="info">Support emails - help@clothing.com, customercare@clothing.com</p>
    <p class="info">telephone - 1800 141 9824 </p>
    <p class="info"></p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-links">terms & Services</a>
            <a href="#" class="social-links">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-links">instagram</a>
            <a href="#" class="social-links">facebook</a>
            <a href="#" class="social-links">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online stores</p>
    `;
}

createFoot();