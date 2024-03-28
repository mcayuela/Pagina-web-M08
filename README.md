<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="fotos-portafoli/favicon-32.png" type="image/x-icon">
</head>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

body {
    font-family: 'Fira Code', monospace;
    background-color: #1E1E1E;
    color: #ABB2BF;
}

.titol {
    font-size: 50px;
    color: #ABB2BF;
    margin: 20px 20px 10px 20px;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-left: 20px;
    margin-right: 20px;
}

.contenidor-titol-logo {
    display: flex;
    align-items: center;
}

.contingut-principal-contacte {
    margin-top: 100px;
}

.descripcio-contacte {
    margin-bottom: 90px;
}

.contingut-principal {
    top: 50%;
}

.menu-superior {
    list-style: none;
    display: flex;
    margin: 0px 10px 0px 50px;
}

.li-menu-superior {
    flex: 1;
    margin: 10px 10px;
    position: relative;
    text-decoration: none;
    padding-bottom: 4px;
}

.li-menu-superior::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #C778DD;
    transition: width 0.5s;
}

.li-menu-superior:hover::after {
    width: 100%;
}

a {
    text-decoration: none;
    color: #ABB2BF;
}

.text-rosa {
    color: #C778DD;
}

.contingut-principal {
    align-items: center;
    padding: 0 100px;
}

.contingut-principal-cv {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 100px;
    margin-left: 350px;
}


.contenidor-superior {
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    margin-bottom: 50px;
}

.contenidor-superior-cv {
    display: flex;
    flex-direction: row;
    margin-top: 70px;
    margin-bottom: 50px;
    align-items: center;
    
}

.contenidor-iconos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.contenidor-iconos img {
    margin-bottom: 10px;
}

.menu-cv {
    list-style-type: none;
}

a {
    margin-left: 10px;
}

.avatar {
    width: 200px;
    height: auto;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 50px;
}

.icono {
    filter: brightness(50%);
}

.icono:hover {
    filter: brightness(100%);
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #1E1E1E;
}

::-webkit-scrollbar-thumb {
    background: #C778DD;
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: #ABB2BF;
}

.foto-icono-sobremi {
    width: 50px;
    filter: brightness(70%);
}

.fotos-tecnologies {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 100px;
}

.link-projecte {
    align-items: center;
    list-style: none;
    display: flex;
    margin-right: 100px;
}

.li-link-projecte {
    padding: 10px;
    border: 2px solid #C778DD;
    border-radius: 5px;
}

.li-link-projecte:hover {
    color: black;
    background-color: #C778DD;
}

.titol-contactam {
    margin-top: 50px;
}

.titol-formulari {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
    margin-bottom: 20px;
}

.titol-formulari2 {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
    margin-bottom: 20px;
    padding-top: 100px;
}

form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
}

input[type="text"],
input[type="correu"],
textarea {
    padding: 10px;
    border: 1px solid #C778DD;
    border-radius: 5px;
    background-color: #333;
    color: #ABB2BF;
    margin-top: -20px;
}

input[type="submit"] {
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background-color: #C778DD;
    color: #fff;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #ABB2BF;
    color: #333;
}

@media screen and (max-width: 600px) {
    header {
        flex-direction: column;
    }
    .menu-superior {
        flex-direction: column;
        align-items: left;
        text-align: left;
        margin: 10px 10px;
        padding: 0px;
    }
    .contingut-principal {
        align-items: left;
        text-align: left;
        padding: 20px;
    }    
    .li-menu-superior {
        margin: 10px 0;
    }
    .contenidor-superior {
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 20px;
    }
    .avatar {
        width: 100px;
        margin-right: 0;
        margin-bottom: 20px;
    }
}

@media screen and (min-width: 601px) and (max-width: 900px) {
    .avatar {
        width: 150px;
    }
}

@media screen and (min-width: 901px) and (max-width: 1200px) {
    .avatar {
        width: 200px;
    }
}

@media screen and (min-width: 1201px) {
    .avatar {
        width: 250px;
    }
}

.li-link-cv {
    padding: 10px 20px;
    border: 2px solid #C778DD;
    border-radius: 5px;
}

.li-link-cv:hover {
    cursor: pointer;
    color: black;
    background-color: #C778DD;
    animation: 10s;
}

.icono-descarrega {
    height: 20px;
    margin: 0px;
    padding: 0px;
}

.contenidor-iconos img, .icono-descarrega{
    margin-bottom: -4px;
    margin-left: -5px;
}

.imatge-cv {
    height: 500px;
    width: auto;
}
</style>
<body>
    <header>
        <nav>
            <ul class="menu-superior">
                <li><a class="li-menu-superior" href="index.html"><span class="text-rosa"></span>inici</a></li>
                <li><a class="li-menu-superior" href="activitats2.html"><span class="text-rosa"></span>activitats</a></li>
                <li><a class="li-menu-superior" href="sobre-mi.html"><span class="text-rosa"></span>sobre mi</a></li>
                <li><a class="li-menu-superior" href="contacte.html"><span class="text-rosa"> </span>contacte</a></li>
                <li><a class="li-link-cv" href="cv.html">CV</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <div class="contingut-principal">
            <div class="contenidor-superior">
                <div class="contenidor-iconos">
                    <a href="https://github.com/mcayuela" class="icono" target="_blank"><img class="foto-icono" src="fotos-portafoli/Github.svg" alt=""></a>
                    <a href="https://www.linkedin.com/in/marcel-cayuela-dolcet-1a29a62b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" class="icono"><img class="foto-icono" src="fotos-portafoli/Linkedin.svg" alt=""></a>
                    <a href="mailto:mcayueladolcet@gmail.com?subject=Soc ...&body=Bones Marcel," class="icono"><img class="foto-icono" src="fotos-portafoli/Email.svg" alt=""></a>
                </div>
            </div>
            <div class="contenidor-inferior">
                <div class="descripcio">
                    <h1>Marcel Cayuela Dolcet<span class="text-rosa">.</span></h1>
                    <h2>Alumne d'<span class="text-rosa">SMIX</span> i entusiasta de la programació <span class="text-rosa">&lt&#47&gt</span></h2>
                    <p>Apasionat de la tecnologia, amant de l'innovació i del progrés.</p>
                </div>
            </div>
        </div>
    </main>
</body>
</html>

