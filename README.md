<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mokepon</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <section id="seleccionar-mascota">

        <h1>Mokepon</h1>

        <h2>Elige a tu mascota</h2>

        <div id="contenedorTarjetas" class="tarjetas">

        </div>

        <button id="boton-mascota">Seleccionar</button>
    </section>

    <section id="ver_mapa">
        <h2 class="subtitulo">Recorre el mapa con tu mokepon</h2>
        <canvas id="mapa"></canvas>
        <button ontouchend="detenerMovimiento()" ontouchstar="moverArriba()">Arriba</button>
        <div>
            <button ontouchend="detenerMovimiento()" ontouchstar="moverIzquierda()">Izquierda</button>
            <button ontouchend="detenerMovimiento()" ontouchstart="moverAbajo()">Abajo</button>
            <button ontouchend="detenerMovimiento()" ontouchstart="moverDerecha()">Derecha</button>
        </div>
    </section>

    <section id="seleccionar-ataque">
        <h1>Mokepon</h1>
        <h2>Elige tu ataque</h2>

        <div id="contenedorAtaques" class="buttons_ataque">
            
        </div>

        <div id="mensajes">
            <p id="resultado">MUCHA SUERTE</p>
                
            <section id="reiniciar">
                <button id="boton-reiniciar">reiniciar</button>
            </section>
        </div>
        

        <div class="ataques">
            <div class="ataques_jugador">
                <p id="vidas_jugador">0</p>
                <p id="mascota_jugador"></p> 
                <div id="ataquesDelJugador"></div>
            </div>
            <div class="ataques_enemigo">
                <p id="vidas_enemigo">0</p>
                <p id="mascota_enemigo"></p>
                <div id="ataquesDelEnemigo"></div>
            </div>
        </div>  
    </section>
    <script src="main.js"></script>
</body>
</html>
