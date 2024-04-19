const header = function() {
    return `
    <header>
    <div class="logo">
        <a href=""><img src="img/logo.svg" alt=""></a>
    </div>
    <div class="munu">
    <nav>
        <ul>
            <li><a href="">Electric Skateboards</a></li>
            <li><a href="">Electric Scooters</a></li>
            <li><a href="">Accessories</a></li>
            <li><a href="">Gift Card</a></li>
            <li><a href="">More Info</a></li>
        </ul>
    </nav>
    </div>
    <div class="icons">
        <a href=""><img src="img/Frame.svg" alt=""></a>
        <a href=""><img src="img/cart.svg" alt=""></a>
    </div>
</header>
    `
}

const conteiner = document.querySelector(".container")
conteiner.insertAdjacentHTML('beforebegin', header())



