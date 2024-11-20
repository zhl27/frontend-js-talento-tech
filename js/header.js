//Crear una variable miHeader 


let miHeader = `
    <div class="menu container">
                    <!-- Logo -->
                    <div>
                        <img src="/images/img/logonegro2.png" alt="logo" class="logo">
                    </div>
                <input type="checkbox" id="menu"/>
                <label for="menu">
                    <img src="/images/menu.png" class="menu-icono" alt="menu">
                </label>
                <nav class="navbar">
                    <ul>
                        <li><a href="/index.html">Inicio</a></li>
                        <li><a href="/template/Productos.html">Productos</a></li>
                        <li><a href="/template/Contacto.html">Contacto</a></li>
                    </ul>
                </nav>
            </div>
            <div class="header-content container">
                <div class="header-img">
                <img src="/images/cacerolas.varias.png" alt="" />
                </div>
                <div class="header-txt">
                    <h1>Bienvenido a nuestro servicio de restauración de productos de bazar</h1>
                    <p>¡Devuelve el brillo y la funcionalidad a tus utensilios de cocina!</p>
                    <a href="#" class="btn-1">Informacion</a>
                </div>

            </div>
`
//Selecciono el header y con innerHTML agrego lo que defini en la variable miHeader
document.querySelector("header").innerHTML = miHeader