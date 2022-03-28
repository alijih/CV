var landing, HeightPantalla, first_sector, second_sector, HeightFirst, aboutME, posY, posx, posXfinal, posYfinal, background, video, wwi, css, js, node, angular, html;
var escalaAboutME = 0, posicionY = window.scrollY;
var direccionY = 0;
var aleteo = 0;
var porcentaje_scroll = 0;
var barra_progreso_scroll = { style: 0 };
var estado = 0;
window.scroll(0, 0)
window.addEventListener('load', () => {
    landing = document.querySelector('.landing');
    wwi = document.querySelector('.wwi');
    second = document.querySelector('.second')
    landing.style.opacity = 1;
    HeightPantalla = landing.offsetHeight;
    first_sector = document.querySelector('.first-sector');
    second_sector = document.querySelector('.second-sector');
    HeightFirst = first_sector.offsetHeight;
    aboutME = document.querySelector('.aboutME');
    background = document.querySelector('.background-negro');
    video = document.querySelector('.video');
    css = document.querySelector('.css');
    js = document.querySelector('.js');
    angular = document.querySelector('.angular');
    node = document.querySelector('.node');
    html = document.querySelector('.html');
    posY = 0;
    posX = 0;

    window.addEventListener('scroll', () => {
        window.scrollY > posicionY ? (direccionY = 1) : (direccionY = -1);
        posicionY = window.scrollY;
        posicionY % 2 === 0 ? aleteo = 0 : aleteo = 1;
        if (posicionY == 0) {
            landing.style.opacity = 1;
        }
        if (posicionY < HeightPantalla) {//*****x**********SOBRE EL LANDING
            aboutME.style.opacity = 0;
            landing.style.opacity = 1 - (posicionY * 100 / HeightPantalla * 0.01);
            estado = 0;

        }
        if (posicionY > HeightPantalla) {

            landing.style.opacity = 0;
            aboutME.style.opacity = 1;

            if (direccionY == 1) {
                if (Math.abs(posicionY * 0.001 - 0.5) <= 2) {
                    escalaAboutME = Math.abs(posicionY * 0.001 - 0.5);
                    aboutME.style.transform = `scale(${escalaAboutME})`;
                    estado = 1;
                    posY = 0;
                    posX = 0;

                } else {
                    if (Math.abs(posicionY * 0.001 - 0.5) >= 2) {
                        if (aboutME.getBoundingClientRect().x > 20) {
                            posY += 2;
                            posX -= 6;
                            aboutME.style.transform = ` scale(${2})  translate(${posX}px,${posY}px)`
                            estado = 2;
                        } else {
                            if (estado == 2) {
                                posXfinal = aboutME.getBoundingClientRect().x;
                                posXfinal = aboutME.getBoundingClientRect().y;
                                background.style.opacity = 0;
                                wwi.style.animation = "wwi-appear 5s 1";
                                wwi.style.opacity = 1;
                                setTimeout(() => { estado = 3 }, 4000)
                            } else {
                                if (estado == 3) {
                                    aboutME.style.animation = "background 5s 1"
                                    second.style.display = 'block'
                                    second.style.animation = "secondAnimation 3s 1"
                                    setTimeout(() => {
                                        estado = 4
                                    }, 5000);
                                } else {
                                    if (estado == 4) {
                                        background.style.opacity = 1;
                                        video.style.opacity = 1;
                                        setTimeout(() => {
                                            estado = 5
                                        }, 2000);
                                    }
                                    else {
                                        if (estado == 5) {
                                            angular.style.opacity = 1;
                                            angular.style.animation = "languages 5s 1";
                                            css.style.opacity = 1;
                                            css.style.animation = "languages 5s 1";
                                            js.style.opacity = 1;
                                            js.style.animation = "languages 5s 1";
                                            node.style.opacity = 1;
                                            node.style.animation = "languages 5s 1";
                                            html.style.opacity = 1;
                                            html.style.animation = "languages 5s 1";
                                            setTimeout(() => {
                                                estado = 6
                                            }, 2000);
                                        }else{
                                            if(estado==6){
                                                //se va lo anterior
                                                second_sector.style.opacity=1;
                                                second_sector.style.animation="caer 5s 1 linear"

                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            }
            if (direccionY == -1) {
                if ((Math.abs(posicionY * 0.001 - 0.5) >= 0) && Math.abs(posicionY * 0.001 - 0.5) <= 2) {
                    escalaAboutME = Math.abs(posicionY * 0.001 - 0.5);
                    aboutME.style.transform = `scale(${escalaAboutME})`;
                    estado = 1;
                    posY = 0;
                    posX = 0;
                }
                if ((Math.abs(posicionY * 0.001 - 0.5) >= 2) && (estado == 2)) {   //
                    //hacer validacion antes de arrancar a moverse
                    estado = 2;
                    posY -= 2
                    posX += 6
                    aboutME.style.transform = ` scale(${2})  translate(${posX}px,${posY}px)`

                }
            }


        }
    })





})//cierre load










//TOP POSICION SCROLL
function GetScrollPositions() {
    if ('pageXOffset' in window) {  // all browsers, except IE before version 9
        var scrollLeft = window.pageXOffset;
        var scrollTop = window.pageYOffset;
    }
    else {      // Internet Explorer before version 9
        var zoomFactor = this.GetZoomFactor();
        var scrollLeft = Math.round(document.documentElement.scrollLeft / zoomFactor);
        var scrollTop = Math.round(document.documentElement.scrollTop / zoomFactor);
    }
    // console.log("X= "+ scrollLeft + "px"," y en Y= "+ scrollTop + "px")    MUESTRO DONDE ESTA EL SCROLL EN X E Y
    return scrollTop;
}
//IF THERE IS SOME ZOOM
function GetZoomFactor() {
    var factor = 1;
    if (document.body.getBoundingClientRect) {
        // rect is only in physical pixel size in IE before version 8 
        var rect = document.body.getBoundingClientRect();
        var physicalW = rect.right - rect.left;
        var logicalW = document.body.offsetWidth;

        // the zoom level is always an integer percent value
        factor = Math.round((physicalW / logicalW) * 100) / 100;
    }
    return factor;
}




// const bg=['color1','color2','color3'];
// document.querySelector('body').style.backgroundColor =
//   bg[Math.floor(Math.random() * bg.length)];