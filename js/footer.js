// Crear variable miFooter

let miFooter = `
    <div class="footer-content container">
        <div>
            <img class="logo" src="/images/img/logoBlanco2.png" alt="">
        </div>

        <div class="link">
            <h3>Nuestras redes sociales</h3>
            <ul>
                <li><a href="#" class="icon"><img src="/images/img/logofb.png" alt="">Facebook</a></li>
                <li><a href="#" class="icon"><img src="/images/img/logoig.png" alt="">Instagram</a></li>
                <li><a href="#" class="icon"><img src="/images/img/logowpp.png" alt="">Whatsapp</a></li>
                <li><a href="#" class="icon"><img src="/images/img/logoyoutube.png" alt="">Youtube</a></li>
            </ul>
        </div>

        <div class="link">
            <h3>Nuestros medios de pago</h3>
            <ul>
                <li><img src="/images/medios de pago/mercadopago.ico" alt="mercadopago"></li>
                <li><img src="/images/medios de pago/logovisa.ico" alt="logovisa"></li>
                <li><img src="/images/medios de pago/logo_mastercard-despues.ico" alt="logo_mastercard"></li>
                <li><img src="/images/medios de pago/efectivo.ico" alt="efectivo"></li>
            </ul>
            <h3>Nuestros formas de envio</h3>
            <ul>
                <li><img src="/images/medios de pago/correoargentino2.ico" alt=""></li>
            </ul>

        </div>

        <div class="link">
            <h3>Centro de atencion al cliente</h3>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209662.4827408761!2d-58.53833053679247!3d-34.8065382919361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1713818709305!5m2!1ses-419!2sar" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

        <div class="link" id="clima">
            <h3>Información del Clima</h3>
            <div id="weather-info">
                <p>Cargando información del clima...</p>
            </div>
        </div>
    </div>

    <a
      href="https://wa.me/541112345555?text=Hola quiero informacion de su negocio"
      class="btn-wsp"
      target="_blank"
    >
      <img src="/images/whatsapp-fill.svg" alt="" />
    </a>
`

//Selecciono el footer y con innterHTML agrego lo que defini en la variable miFooter
document.querySelector("footer").innerHTML = miFooter

// ejecutar script de clima
fetch("https://api.open-meteo.com/v1/forecast?latitude=-34.603851&longitude=-58.381775&current=temperature_2m,wind_speed_10m,precipitation")
    .then(response => response.json())
    .then(data => {
        let weatherInfo = document.getElementById("weather-info");
        weatherInfo.innerHTML = `
            <p><u>Temperatura actual</u>: ${data.current.temperature_2m}°C</p>
            <p><u>Velocidad del viento</u>: ${data.current.wind_speed_10m} km/h</p>
            <p><u>Llueve</u>: ${data.current.precipitation ? "Sí" : "No"}</p>
        `
    });


