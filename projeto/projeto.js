var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

var plataforma_raio=10;
var tecla = [];
var jogador1_x= 0;
var jogador1_y=750;
var jogador2_x= 760;
var jogador2_y=750;
var bala1_x = jogador1_x+30;
var bala1_y = jogador1_y+25;
var tecla2=0;
var bala2_x = jogador2_x;
var bala2_y = jogador2_y+25;


document.addEventListener("keydown", function(evento) {
    tecla2 = evento.keyCode;
});
document.addEventListener("keydown", function(evento) {
    if(!(tecla.includes(parseInt(evento.keyCode)))){
        tecla.push(parseInt(evento.keyCode));
    }
});
document.addEventListener("keyup", function (evento) {
    let indice =tecla.indexOf(parseInt(evento.keyCode));
    tecla.splice(indice,1);
});
function atualiza(){
    desenha();
    bala();
    movimentodosjogadores();
    requestAnimationFrame(atualiza);
}
function desenha() {
    //fundo:
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    var jogador1 = new Image();
    jogador1.src = 'jogador1.gif';
    ctx.drawImage(jogador1, jogador1_x, jogador1_y, 50, 50);
    var jogador2 = new Image();
    jogador2.src = 'jogador2.png';
    ctx.drawImage(jogador2, jogador2_x, jogador2_y, 50, 50);
    var plataforma = new Image();
    plataforma.src = 'plataformas.png';
    let logo = new Image();
    logo.src='logo.png';
    ctx.drawImage(logo, 0, 0, plataforma_raio*80,plataforma_raio*30);
    // todas as coordenadas das plataformas:
    ctx.drawImage(plataforma, 430, 350, plataforma_raio*50,plataforma_raio*4 );
    ctx.drawImage(plataforma, -180, 350, plataforma_raio*50,plataforma_raio*4 );
    ctx.drawImage(plataforma, -5, 450, plataforma_raio*15,plataforma_raio*4 );
    ctx.drawImage(plataforma, 220, 450, plataforma_raio*15,plataforma_raio*4 );
    ctx.drawImage(plataforma, 450, 450, plataforma_raio*10,plataforma_raio*4 );
    ctx.drawImage(plataforma, 630, 450, plataforma_raio*10,plataforma_raio*4 );
    ctx.drawImage(plataforma, 550, 550, plataforma_raio*25,plataforma_raio*4 );
    ctx.drawImage(plataforma, 410, 550, plataforma_raio*7,plataforma_raio*4 );
    ctx.drawImage(plataforma, 270, 550, plataforma_raio*7,plataforma_raio*4 );
    ctx.drawImage(plataforma, 130, 550, plataforma_raio*7,plataforma_raio*4 );
    ctx.drawImage(plataforma, 0, 550, plataforma_raio*7,plataforma_raio*4 );
    ctx.drawImage(plataforma, 70, 630, plataforma_raio*7,plataforma_raio*4 );
    ctx.drawImage(plataforma, 350, 630, plataforma_raio*7,plataforma_raio*4 );
    ctx.drawImage(plataforma, 490, 630, plataforma_raio*7,plataforma_raio*4 );
    ctx.drawImage(plataforma, 770, 630, plataforma_raio*7,plataforma_raio*4 );
    ctx.drawImage(plataforma, 60, 710, plataforma_raio*15,plataforma_raio*4 );
    ctx.drawImage(plataforma, 280, 710, plataforma_raio*16,plataforma_raio*4 );
    ctx.drawImage(plataforma, 500, 710, plataforma_raio*16,plataforma_raio*4 );
    ctx.drawImage(plataforma, 720, 710, plataforma_raio*15,plataforma_raio*4 );
    ctx.drawImage(plataforma, 360, 740, plataforma_raio*2,plataforma_raio*7 );
//ufa deu trabalho :[
}

function movimentodosjogadores() {

    if (tecla.includes(39)) {
        jogador2_x +=0.01;
        jogador2_x-=0.008;

    } else if (tecla.includes(37)) {
        jogador2_x -= 0.01;
        jogador2_x+=0.008;

    } else if (tecla.includes(38)) {
        jogador2_y -= 0.01;
        jogador2_y+=0.008;

    } else if (tecla.includes(40)) {
        jogador2_y += 0.01;
        jogador2_y -=0.008;
    }
    if (jogador1_x < 0) {
        jogador1_x = 0;
    }
    if (jogador1_x > 750) {
        jogador1_x = 750;
    }
    if(jogador1_y<0){
        jogador1_y=0;
    }
    if(jogador1_y>750){
        jogador1_y=750;
    }
    if (tecla.includes(68)) {
        jogador1_x += 0.01;
        jogador1_x -= 0.008;

    } else if (tecla.includes(65)) {
        jogador1_x -= 0.01;
        jogador1_x += 0.008;

    } else if (tecla.includes(87)) {
        jogador1_y -= 0.01;
        jogador1_y += 0.008;

    } else if (tecla.includes(83)) {
        jogador1_y += 0.01;
        jogador1_y -= 0.008;
    }
    if (jogador2_y < 0) {
        jogador2_y = 0;
    }
    if (jogador2_y > 750) {
        jogador2_y = 750;

    }
    if (jogador2_x < 0) {
        jogador2_x = 0;
    }
    if (jogador2_x > 750) {
        jogador2_x = 750;
    }

    // FISICA NAS PLATAFORMAS!! para o jogador1

//plataforma1
    if (jogador1_x + 50 > 60) {
        if (jogador1_x < 190) {
            if (jogador1_y > 730) {
                jogador1_y = 750;

            }
        }
    }
    if (jogador1_x + 50 > 60) {
        if (jogador1_x < 190) {
            if (jogador1_y > 670) {
                if (jogador1_y < 700) {
                    jogador1_y = 670;
                }
            }
        }
    }
    if (jogador1_x + 40 < 60) {
        if (jogador1_y > 700) {
            if (jogador1_y < 740) {
                jogador1_x = 0;
            }
        }
    }
    if (jogador1_x + 40 > 190) {
        if (jogador1_x + 40 < 280) {
            if (jogador1_y > 700) {
                if (jogador1_y < 740) {
                    jogador1_x = 220;
                }
            }
        }
    }
//ctx.drawImage(plataforma, 280, 710, plataforma_raio*15,plataforma_raio*4 );
    if (jogador1_x + 50 > 280) {
        if (jogador1_x < 430) {
            if (jogador1_y > 730) {
                jogador1_y = 750;
                if (jogador1_y < 660) {
                    jogador1_y = 665;
                }
            }
        }
    }
    if (jogador1_x + 50 > 280) {
        if (jogador1_x < 430) {
            if (jogador1_y > 670) {
                if (jogador1_y < 700) {
                    jogador1_y = 670;
                }
            }
        }
    }
    if (jogador1_x + 40 < 280) {
        if (jogador1_x + 40 > 280) {
            if (jogador1_y > 700) {
                if (jogador1_y < 740) {
                    jogador1_x = 220;
                }
            }
        }
    }
    if (jogador1_x + 40 > 430) {
        if (jogador1_x + 40 < 540) {
            if (jogador1_y > 700) {
                if (jogador1_y < 740) {
                    jogador1_x = 450;
                }
            }
        }
    }
   // ctx.drawImage(plataforma, 500, 710, plataforma_raio*15,plataforma_raio*4 );
    if (jogador1_x  > 500) {
        if (jogador1_x < 650) {
            if (jogador1_y > 730) {
                jogador1_y = 750;
                if(jogador1_y<670){
                    jogador1_y=670;
                }
            }
        }
    }
    if (jogador1_x + 50 > 500) {
        if (jogador1_x < 650) {
            if (jogador1_y > 670) {
                if (jogador1_y < 700) {
                    jogador1_y = 670;
                }
            }
        }
    }
    if (jogador1_x  < 500) {
        if (jogador1_x > 500) {
            if (jogador1_y > 700) {
                if (jogador1_y < 740) {
                    jogador1_x = 440;
                }
            }
        }
    }
    if (jogador1_x +40 > 640) {
        if (jogador1_x < 650) {
            if (jogador1_y > 700) {
                if (jogador1_y < 740) {
                    jogador1_x = 680;
                }
            }
        }
    }
    //ctx.drawImage(plataforma, 700, 710, plataforma_raio*15,plataforma_raio*4 );
    if (jogador1_x +40 > 700) {
        if (jogador1_x < 800) {
            if (jogador1_y > 710) {
                jogador1_y = 750;
                if (jogador1_y < 750) {
                    jogador1_y = 750;
                }
            }
        }
    }
    if (jogador1_x  > 700) {
        if (jogador1_x < 800) {
            if (jogador1_y > 670) {
                if (jogador1_y < 700) {
                    jogador1_y = 670;
                }
            }
        }
    }
    if (jogador1_x+40 > 720) {
        if (jogador1_y > 700) {
            if (jogador1_y < 740) {
                jogador1_x = 680;
                }
            }
        }
    //ctx.drawImage(plataforma, 770, 630, plataforma_raio*7,plataforma_raio*4 );
    if (jogador1_x +50 > 770) {
        if (jogador1_x < 920) {
            if (jogador1_y > 660) {
                if(jogador1_y<700){
                    jogador1_y=670;
                }
            }
        }
    }
    if (jogador1_x +50> 770) {
        if (jogador1_x < 800) {
            if (jogador1_y > 580) {
                if (jogador1_y < 620) {
                    jogador1_y = 580;
                }
            }
        }
    }
    if (jogador1_x +50 > 770) {
        if (jogador1_y> 620) {
            if (jogador1_y < 670) {
                jogador1_x = 720;
                }
            }
        }
    //ctx.drawImage(plataforma, 490, 630, plataforma_raio*7,plataforma_raio*4 );
    if (jogador1_x + 50 > 490) {
        if (jogador1_x < 560) {
            if (jogador1_y > 660) {
                if(jogador1_y<680){
                    jogador1_y=670;
                }
            }
        }
    }
    if (jogador1_x + 50 > 490) {
        if (jogador1_x < 560) {
            if (jogador1_y > 580) {
                if (jogador1_y < 620) {
                    jogador1_y = 580;
                }
            }
        }
    }
    if (jogador1_x +50 > 490) {
        if (jogador1_x < 490) {
            if (jogador1_y > 620) {
                if (jogador1_y < 670) {
                    jogador1_x = 450;
                }
            }
        }
    }
    if (jogador1_x > 560) {
        if (jogador1_x < 570) {
            if (jogador1_y > 620) {
                if (jogador1_y < 670) {
                    jogador1_x = 565;
                }
            }
        }
    }
//ctx.drawImage(plataforma, 350, 630, plataforma_raio*7,plataforma_raio*4 );
    if (jogador1_x + 50 > 350) {
        if (jogador1_x < 410) {
            if (jogador1_y > 660) {
                if(jogador1_y<680){
                    jogador1_y=670;
                }
            }
        }
    }
    if (jogador1_x + 50 > 350) {
        if (jogador1_x < 410) {
            if (jogador1_y > 580) {
                if (jogador1_y < 620) {
                    jogador1_y = 580;
                }
            }
        }
    }
    if (jogador1_x +50 > 350) {
        if (jogador1_x < 350) {
            if (jogador1_y > 620) {
                if (jogador1_y < 670) {
                    jogador1_x = 300;
                }
            }
        }
    }
    if (jogador1_x > 420) {
        if (jogador1_x < 421) {
            if (jogador1_y > 620) {
                if (jogador1_y < 660) {
                    jogador1_x = 425;
                }
            }
        }
    }
//ctx.drawImage(plataforma, 70, 630, plataforma_raio*7,plataforma_raio*4 );
    if (jogador1_x + 50 > 70) {
        if (jogador1_x < 140) {
            if (jogador1_y > 660) {
                if(jogador1_y<680){
                    jogador1_y=670;
                }
            }
        }
    }
    if (jogador1_x + 50 > 70) {
        if (jogador1_x < 140) {
            if (jogador1_y > 580) {
                if (jogador1_y < 620) {
                    jogador1_y = 580;
                }
            }
        }
    }
    if (jogador1_x +50 > 70) {
        if (jogador1_x < 70) {
            if (jogador1_y > 620) {
                if (jogador1_y < 670) {
                    jogador1_x = 30;
                }
            }
        }
    }
    if (jogador1_x > 140) {
        if (jogador1_x < 141) {
            if (jogador1_y > 620) {
                if (jogador1_y < 660) {
                    jogador1_x = 141;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 0, 550, plataforma_raio*7,plataforma_raio*4 );
    if (jogador1_x + 50 > 0) {
        if (jogador1_x < 70) {
            if (jogador1_y > 580) {
                if(jogador1_y<600){
                    jogador1_y=590;
                }
            }
        }
    }
    if (jogador1_x + 50 > 0) {
        if (jogador1_x < 70) {
            if (jogador1_y > 500) {
                if (jogador1_y < 540) {
                    jogador1_y = 500;
                }
            }
        }
    }
    if (jogador1_x +50 > 0) {
        if (jogador1_x < 0) {
            if (jogador1_y > 540) {
                if (jogador1_y < 590) {
                    jogador1_x = 0;
                }
            }
        }
    }
    if (jogador1_x >70) {
        if (jogador1_x < 71) {
            if (jogador1_y > 540) {
                if (jogador1_y < 590) {
                    jogador1_x = 71;

                }
            }
        }
    }
    // ctx.drawImage(plataforma, 130, 550, plataforma_raio*7,plataforma_raio*4 );
    if (jogador1_x + 50 > 130) {
        if (jogador1_x < 200) {
            if (jogador1_y > 580) {
                if(jogador1_y<600){
                    jogador1_y=590;
                }
            }
        }
    }
    if (jogador1_x + 50 > 130) {
        if (jogador1_x < 200) {
            if (jogador1_y > 500) {
                if (jogador1_y < 550) {
                    jogador1_y = 500;
                }
            }
        }
    }
    if (jogador1_x +50 > 130) {
        if (jogador1_x < 130) {
            if (jogador1_y > 520) {
                if (jogador1_y < 590) {
                    jogador1_x = 80;
                }
            }
        }
    }
    if (jogador1_x >200) {
        if (jogador1_x < 201) {
            if (jogador1_y > 540) {
                if (jogador1_y < 590) {
                    jogador1_x = 201;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 270, 550, plataforma_raio*7,plataforma_raio*4 );
    if (jogador1_x + 50 > 270) {
        if (jogador1_x < 340) {
            if (jogador1_y > 580) {
                if(jogador1_y<600){
                    jogador1_y=590;
                }
            }
        }
    }
    if (jogador1_x + 50 > 270) {
        if (jogador1_x < 340) {
            if (jogador1_y > 500) {
                if (jogador1_y < 550) {
                    jogador1_y = 500;
                }
            }
        }
    }
    if (jogador1_x +50 > 270) {
        if (jogador1_x < 270) {
            if (jogador1_y > 520) {
                if (jogador1_y < 590) {
                    jogador1_x = 220;
                }
            }
        }
    }
    if (jogador1_x >340) {
        if (jogador1_x < 341) {
            if (jogador1_y > 540) {
                if (jogador1_y < 590) {
                    jogador1_x = 341;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 410, 550, plataforma_raio*7,plataforma_raio*4 );
    if (jogador1_x + 50 > 410) {
        if (jogador1_x < 480) {
            if (jogador1_y > 580) {
                if(jogador1_y<600){
                    jogador1_y=590;
                }
            }
        }
    }
    if (jogador1_x + 50 > 410) {
        if (jogador1_x < 480) {
            if (jogador1_y > 500) {
                if (jogador1_y < 550) {
                    jogador1_y = 500;
                }
            }
        }
    }
    if (jogador1_x +50 > 410) {
        if (jogador1_x < 410) {
            if (jogador1_y > 520) {
                if (jogador1_y < 590) {
                    jogador1_x = 360;
                }
            }
        }
    }
    if (jogador1_x >480) {
        if (jogador1_x < 481) {
            if (jogador1_y > 540) {
                if (jogador1_y < 590) {
                    jogador1_x = 481;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 550, 550, plataforma_raio*25,plataforma_raio*4 );
    if (jogador1_x + 50 > 550) {
        if (jogador1_x < 800) {
            if (jogador1_y > 580) {
                if(jogador1_y<600){
                    jogador1_y=590;
                }
            }
        }
    }
    if (jogador1_x + 50 > 550) {
        if (jogador1_x < 800) {
            if (jogador1_y > 500) {
                if (jogador1_y < 550) {
                    jogador1_y = 500;
                }
            }
        }
    }
    if (jogador1_x +50 > 550) {
        if (jogador1_x < 550) {
            if (jogador1_y > 520) {
                if (jogador1_y < 590) {
                    jogador1_x = 500;
                }
            }
        }
    }
    if (jogador1_x >800) {
        if (jogador1_x < 801) {
            if (jogador1_y > 540) {
                if (jogador1_y < 590) {
                    jogador1_x = 801;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 630, 450, plataforma_raio*10,plataforma_raio*4 );
    if (jogador1_x + 50 > 630) {
        if (jogador1_x < 730) {
            if (jogador1_y > 450) {
                if(jogador1_y<490){
                    jogador1_y=490;
                }
            }
        }
    }
    if (jogador1_x + 50 > 630) {
        if (jogador1_x < 730) {
            if (jogador1_y > 400) {
                if (jogador1_y < 440) {
                    jogador1_y = 400;
                }
            }
        }
    }
    if (jogador1_x +50 > 630) {
        if (jogador1_x < 630) {
            if (jogador1_y > 420) {
                if (jogador1_y < 490) {
                    jogador1_x = 580;
                }
            }
        }
    }
    if (jogador1_x >730) {
        if (jogador1_x < 731) {
            if (jogador1_y > 420) {
                if (jogador1_y < 490) {
                    jogador1_x = 731;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 450, 450, plataforma_raio*10,plataforma_raio*4 );
    if (jogador1_x + 50 > 450) {
        if (jogador1_x < 550) {
            if (jogador1_y > 450) {
                if(jogador1_y<490){
                    jogador1_y=490;
                }
            }
        }
    }
    if (jogador1_x + 50 > 450) {
        if (jogador1_x < 550) {
            if (jogador1_y > 400) {
                if (jogador1_y < 440) {
                    jogador1_y = 400;
                }
            }
        }
    }
    if (jogador1_x +50 > 450) {
        if (jogador1_x < 450) {
            if (jogador1_y > 420) {
                if (jogador1_y < 490) {
                    jogador1_x = 400;
                }
            }
        }
    }
    if (jogador1_x >550) {
        if (jogador1_x < 551) {
            if (jogador1_y > 420) {
                if (jogador1_y < 490) {
                    jogador1_x = 551;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 220, 450, plataforma_raio*15,plataforma_raio*4 );
    if (jogador1_x + 50 > 220) {
        if (jogador1_x < 370) {
            if (jogador1_y > 450) {
                if(jogador1_y<490){
                    jogador1_y=490;
                }
            }
        }
    }
    if (jogador1_x + 50 > 220) {
        if (jogador1_x < 370) {
            if (jogador1_y > 400) {
                if (jogador1_y < 440) {
                    jogador1_y = 400;
                }
            }
        }
    }
    if (jogador1_x +50 > 220) {
        if (jogador1_x < 220) {
            if (jogador1_y > 420) {
                if (jogador1_y < 490) {
                    jogador1_x = 170;
                }
            }
        }
    }
    if (jogador1_x >370) {
        if (jogador1_x < 371) {
            if (jogador1_y > 420) {
                if (jogador1_y < 490) {
                    jogador1_x = 371;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, -5, 450, plataforma_raio*15,plataforma_raio*4 );
    if (jogador1_x + 50 > -5) {
        if (jogador1_x < 145) {
            if (jogador1_y > 450) {
                if(jogador1_y<490){
                    jogador1_y=490;
                }
            }
        }
    }
    if (jogador1_x + 50 > -5) {
        if (jogador1_x < 145) {
            if (jogador1_y > 400) {
                if (jogador1_y < 440) {
                    jogador1_y = 400;
                }
            }
        }
    }
    if (jogador1_x +50 > -5) {
        if (jogador1_x < -5) {
            if (jogador1_y > 420) {
                if (jogador1_y < 490) {
                    jogador1_x = -35;
                }
            }
        }
    }
    if (jogador1_x >145) {
        if (jogador1_x < 146) {
            if (jogador1_y > 420) {
                if (jogador1_y < 490) {
                    jogador1_x = 146;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, -180, 350, plataforma_raio*50,plataforma_raio*4 );
    if (jogador1_x + 50 > -180) {
        if (jogador1_x < 320) {
            if (jogador1_y > 350) {
                if(jogador1_y<390){
                    jogador1_y=390;
                }
            }
        }
    }
    if (jogador1_x + 50 > -180) {
        if (jogador1_x < 320) {
            if (jogador1_y > 300) {
                if (jogador1_y < 340) {
                    jogador1_y = 300;
                }
            }
        }
    }
    if (jogador1_x +50 > -180) {
        if (jogador1_x < -180) {
            if (jogador1_y > 320) {
                if (jogador1_y < 390) {
                    jogador1_x = -190;
                }
            }
        }
    }
    if (jogador1_x >320) {
        if (jogador1_x < 321) {
            if (jogador1_y > 320) {
                if (jogador1_y < 390) {
                    jogador1_x = 321;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 430, 350, plataforma_raio*50,plataforma_raio*4 );
    if (jogador1_x + 50 > 430) {
        if (jogador1_x < 930) {
            if (jogador1_y > 350) {
                if(jogador1_y<390){
                    jogador1_y=390;
                }
            }
        }
    }
    if (jogador1_x + 50 > 430) {
        if (jogador1_x < 930) {
            if (jogador1_y > 300) {
                if (jogador1_y < 340) {
                    jogador1_y = 300;
                }
            }
        }
    }
    if (jogador1_x +50 > 430) {
        if (jogador1_x < 430) {
            if (jogador1_y > 320) {
                if (jogador1_y < 390) {
                    jogador1_x = 380;
                }
            }
        }
    }
    if (jogador1_x >930) {
        if (jogador1_x < 931) {
            if (jogador1_y > 320) {
                if (jogador1_y < 390) {
                    jogador1_x = 931;

                }
            }
        }
    }
    // ctx.drawImage(plataforma, 360, 740, plataforma_raio*2,plataforma_raio*7 );
    if(jogador1_x+50>360){
        if(jogador1_x<361){
            if(jogador1_y>741){
                if(jogador1_y<800){
                    jogador1_x=310;
                }
            }
        }
    }
    if(jogador1_x<370){
        if(jogador1_x>361){
            if(jogador1_y>741){
                if(jogador1_y<800){
                    jogador1_x=370;
                }
            }
        }
    }
    // ctx.drawImage(plataforma, 360, 740, plataforma_raio*2,plataforma_raio*7 );
    if(jogador2_x+50>360){
        if(jogador2_x<361){
            if(jogador2_y>741){
                if(jogador2_y<800){
                    jogador2_x=310;
                }
            }
        }
    }
    if(jogador2_x<370){
        if(jogador2_x>361){
            if(jogador2_y>741){
                if(jogador2_y<800){
                    jogador2_x=370;
                }
            }
        }
    }
    if (jogador2_x + 50 > 60) {
        if (jogador2_x < 190) {
            if (jogador2_y > 730) {
                jogador2_y = 750;

            }
        }
    }
    if (jogador2_x + 50 > 60) {
        if (jogador2_x < 190) {
            if (jogador2_y > 670) {
                if (jogador2_y < 700) {
                    jogador2_y = 670;
                }
            }
        }
    }
    if (jogador2_x + 40 < 60) {
        if (jogador2_y > 700) {
            if (jogador2_y < 740) {
                jogador2_x = 0;
            }
        }
    }
    if (jogador2_x + 40 > 190) {
        if (jogador2_x + 40 < 280) {
            if (jogador2_y > 700) {
                if (jogador2_y < 740) {
                    jogador2_x = 220;
                }
            }
        }
    }
//ctx.drawImage(plataforma, 280, 710, plataforma_raio*15,plataforma_raio*4 );
    if (jogador2_x + 50 > 280) {
        if (jogador2_x < 430) {
            if (jogador2_y > 730) {
                jogador2_y = 750;
                if (jogador2_y < 660) {
                    jogador2_y = 665;
                }
            }
        }
    }
    if (jogador2_x + 50 > 280) {
        if (jogador2_x < 430) {
            if (jogador2_y > 670) {
                if (jogador2_y < 700) {
                    jogador2_y = 670;
                }
            }
        }
    }
    if (jogador2_x + 40 < 280) {
        if (jogador2_x + 40 > 280) {
            if (jogador2_y > 700) {
                if (jogador2_y < 740) {
                    jogador2_x = 220;
                }
            }
        }
    }
    if (jogador2_x + 40 > 430) {
        if (jogador2_x + 40 < 540) {
            if (jogador2_y > 700) {
                if (jogador2_y < 740) {
                    jogador2_x = 450;
                }
            }
        }
    }
    // ctx.drawImage(plataforma, 500, 710, plataforma_raio*15,plataforma_raio*4 );
    if (jogador2_x  > 500) {
        if (jogador2_x < 650) {
            if (jogador2_y > 730) {
                jogador2_y = 750;
                if(jogador2_y<670){
                    jogador2_y=670;
                }
            }
        }
    }
    if (jogador2_x + 50 > 500) {
        if (jogador2_x < 650) {
            if (jogador2_y > 670) {
                if (jogador2_y < 700) {
                    jogador2_y = 670;
                }
            }
        }
    }
    if (jogador2_x  < 500) {
        if (jogador2_x > 500) {
            if (jogador2_y > 700) {
                if (jogador2_y < 740) {
                    jogador2_x = 440;
                }
            }
        }
    }
    if (jogador2_x +40 > 640) {
        if (jogador2_x < 650) {
            if (jogador2_y > 700) {
                if (jogador2_y < 740) {
                    jogador2_x = 680;
                }
            }
        }
    }
    //ctx.drawImage(plataforma, 700, 710, plataforma_raio*15,plataforma_raio*4 );
    if (jogador2_x +40 > 700) {
        if (jogador2_x < 800) {
            if (jogador2_y > 710) {
                jogador2_y = 750;
                if (jogador2_y < 750) {
                    jogador2_y = 750;
                }
            }
        }
    }
    if (jogador2_x  > 700) {
        if (jogador2_x < 800) {
            if (jogador2_y > 670) {
                if (jogador2_y < 700) {
                    jogador2_y = 670;
                }
            }
        }
    }
    if (jogador2_x+40 > 720) {
        if (jogador2_y > 700) {
            if (jogador2_y < 740) {
                jogador2_x = 680;
            }
        }
    }
    //ctx.drawImage(plataforma, 770, 630, plataforma_raio*7,plataforma_raio*4 );
    if (jogador2_x +50 > 770) {
        if (jogador2_x < 920) {
            if (jogador2_y > 660) {
                if(jogador2_y<700){
                    jogador2_y=670;
                }
            }
        }
    }
    if (jogador2_x +50> 770) {
        if (jogador2_x < 800) {
            if (jogador2_y > 580) {
                if (jogador2_y < 620) {
                    jogador2_y = 580;
                }
            }
        }
    }
    if (jogador2_x +50 > 770) {
        if (jogador2_y> 620) {
            if (jogador2_y < 670) {
                jogador2_x = 720;
            }
        }
    }
    //ctx.drawImage(plataforma, 490, 630, plataforma_raio*7,plataforma_raio*4 );
    if (jogador2_x + 50 > 490) {
        if (jogador2_x < 560) {
            if (jogador2_y > 660) {
                if(jogador2_y<680){
                    jogador2_y=670;
                }
            }
        }
    }
    if (jogador2_x + 50 > 490) {
        if (jogador2_x < 560) {
            if (jogador2_y > 580) {
                if (jogador2_y < 620) {
                    jogador2_y = 580;
                }
            }
        }
    }
    if (jogador2_x +50 > 490) {
        if (jogador2_x < 490) {
            if (jogador2_y > 620) {
                if (jogador2_y < 670) {
                    jogador2_x = 450;
                }
            }
        }
    }
    if (jogador2_x > 560) {
        if (jogador2_x < 570) {
            if (jogador2_y > 620) {
                if (jogador2_y < 670) {
                    jogador2_x = 565;
                }
            }
        }
    }
//ctx.drawImage(plataforma, 350, 630, plataforma_raio*7,plataforma_raio*4 );
    if (jogador2_x + 50 > 350) {
        if (jogador2_x < 410) {
            if (jogador2_y > 660) {
                if(jogador2_y<680){
                    jogador2_y=670;
                }
            }
        }
    }
    if (jogador2_x + 50 > 350) {
        if (jogador2_x < 410) {
            if (jogador2_y > 580) {
                if (jogador2_y < 620) {
                    jogador2_y = 580;
                }
            }
        }
    }
    if (jogador2_x +50 > 350) {
        if (jogador2_x < 350) {
            if (jogador2_y > 620) {
                if (jogador2_y < 670) {
                    jogador2_x = 300;
                }
            }
        }
    }
    if (jogador2_x > 420) {
        if (jogador2_x < 421) {
            if (jogador2_y > 620) {
                if (jogador2_y < 660) {
                    jogador2_x = 425;
                }
            }
        }
    }
//ctx.drawImage(plataforma, 70, 630, plataforma_raio*7,plataforma_raio*4 );
    if (jogador2_x + 50 > 70) {
        if (jogador2_x < 140) {
            if (jogador2_y > 660) {
                if(jogador2_y<680){
                    jogador2_y=670;
                }
            }
        }
    }
    if (jogador2_x + 50 > 70) {
        if (jogador2_x < 140) {
            if (jogador2_y > 580) {
                if (jogador2_y < 620) {
                    jogador2_y = 580;
                }
            }
        }
    }
    if (jogador2_x +50 > 70) {
        if (jogador2_x < 70) {
            if (jogador2_y > 620) {
                if (jogador2_y < 670) {
                    jogador2_x = 30;
                }
            }
        }
    }
    if (jogador2_x > 140) {
        if (jogador2_x < 141) {
            if (jogador2_y > 620) {
                if (jogador2_y < 660) {
                    jogador2_x = 141;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 0, 550, plataforma_raio*7,plataforma_raio*4 );
    if (jogador2_x + 50 > 0) {
        if (jogador2_x < 70) {
            if (jogador2_y > 580) {
                if(jogador2_y<600){
                    jogador2_y=590;
                }
            }
        }
    }
    if (jogador2_x + 50 > 0) {
        if (jogador2_x < 70) {
            if (jogador2_y > 500) {
                if (jogador2_y < 540) {
                    jogador2_y = 500;
                }
            }
        }
    }
    if (jogador2_x +50 > 0) {
        if (jogador2_x < 0) {
            if (jogador2_y > 540) {
                if (jogador2_y < 590) {
                    jogador2_x = 0;
                }
            }
        }
    }
    if (jogador2_x >70) {
        if (jogador2_x < 71) {
            if (jogador2_y > 540) {
                if (jogador2_y < 590) {
                    jogador2_x = 71;

                }
            }
        }
    }
    // ctx.drawImage(plataforma, 130, 550, plataforma_raio*7,plataforma_raio*4 );
    if (jogador2_x + 50 > 130) {
        if (jogador2_x < 200) {
            if (jogador2_y > 580) {
                if(jogador2_y<600){
                    jogador2_y=590;
                }
            }
        }
    }
    if (jogador2_x + 50 > 130) {
        if (jogador2_x < 200) {
            if (jogador2_y > 500) {
                if (jogador2_y < 550) {
                    jogador2_y = 500;
                }
            }
        }
    }
    if (jogador2_x +50 > 130) {
        if (jogador2_x < 130) {
            if (jogador2_y > 520) {
                if (jogador2_y < 590) {
                    jogador2_x = 80;
                }
            }
        }
    }
    if (jogador2_x >200) {
        if (jogador2_x < 201) {
            if (jogador2_y > 540) {
                if (jogador2_y < 590) {
                    jogador2_x = 201;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 270, 550, plataforma_raio*7,plataforma_raio*4 );
    if (jogador2_x + 50 > 270) {
        if (jogador2_x < 340) {
            if (jogador2_y > 580) {
                if(jogador2_y<600){
                    jogador2_y=590;
                }
            }
        }
    }
    if (jogador2_x + 50 > 270) {
        if (jogador2_x < 340) {
            if (jogador2_y > 500) {
                if (jogador2_y < 550) {
                    jogador2_y = 500;
                }
            }
        }
    }
    if (jogador2_x +50 > 270) {
        if (jogador2_x < 270) {
            if (jogador2_y > 520) {
                if (jogador2_y < 590) {
                    jogador2_x = 220;
                }
            }
        }
    }
    if (jogador2_x >340) {
        if (jogador2_x < 341) {
            if (jogador2_y > 540) {
                if (jogador2_y < 590) {
                    jogador2_x = 341;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 410, 550, plataforma_raio*7,plataforma_raio*4 );
    if (jogador2_x + 50 > 410) {
        if (jogador2_x < 480) {
            if (jogador2_y > 580) {
                if(jogador2_y<600){
                    jogador2_y=590;
                }
            }
        }
    }
    if (jogador2_x + 50 > 410) {
        if (jogador2_x < 480) {
            if (jogador2_y > 500) {
                if (jogador2_y < 550) {
                    jogador2_y = 500;
                }
            }
        }
    }
    if (jogador2_x +50 > 410) {
        if (jogador2_x < 410) {
            if (jogador2_y > 520) {
                if (jogador2_y < 590) {
                    jogador2_x = 360;
                }
            }
        }
    }
    if (jogador2_x >480) {
        if (jogador2_x < 481) {
            if (jogador2_y > 540) {
                if (jogador2_y < 590) {
                    jogador2_x = 481;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 550, 550, plataforma_raio*25,plataforma_raio*4 );
    if (jogador2_x + 50 > 550) {
        if (jogador2_x < 800) {
            if (jogador2_y > 580) {
                if(jogador2_y<600){
                    jogador2_y=590;
                }
            }
        }
    }
    if (jogador2_x + 50 > 550) {
        if (jogador2_x < 800) {
            if (jogador2_y > 500) {
                if (jogador2_y < 550) {
                    jogador2_y = 500;
                }
            }
        }
    }
    if (jogador2_x +50 > 550) {
        if (jogador2_x < 550) {
            if (jogador2_y > 520) {
                if (jogador2_y < 590) {
                    jogador2_x = 500;
                }
            }
        }
    }
    if (jogador2_x >800) {
        if (jogador2_x < 801) {
            if (jogador2_y > 540) {
                if (jogador2_y < 590) {
                    jogador2_x = 801;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 630, 450, plataforma_raio*10,plataforma_raio*4 );
    if (jogador2_x + 50 > 630) {
        if (jogador2_x < 730) {
            if (jogador2_y > 450) {
                if(jogador2_y<490){
                    jogador2_y=490;
                }
            }
        }
    }
    if (jogador2_x + 50 > 630) {
        if (jogador2_x < 730) {
            if (jogador2_y > 400) {
                if (jogador2_y < 440) {
                    jogador2_y = 400;
                }
            }
        }
    }
    if (jogador2_x +50 > 630) {
        if (jogador2_x < 630) {
            if (jogador2_y > 420) {
                if (jogador2_y < 490) {
                    jogador2_x = 580;
                }
            }
        }
    }
    if (jogador2_x >730) {
        if (jogador2_x < 731) {
            if (jogador2_y > 420) {
                if (jogador2_y < 490) {
                    jogador2_x = 731;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 450, 450, plataforma_raio*10,plataforma_raio*4 );
    if (jogador2_x + 50 > 450) {
        if (jogador2_x < 550) {
            if (jogador2_y > 450) {
                if(jogador2_y<490){
                    jogador2_y=490;
                }
            }
        }
    }
    if (jogador2_x + 50 > 450) {
        if (jogador2_x < 550) {
            if (jogador2_y > 400) {
                if (jogador2_y < 440) {
                    jogador2_y = 400;
                }
            }
        }
    }
    if (jogador2_x +50 > 450) {
        if (jogador2_x < 450) {
            if (jogador2_y > 420) {
                if (jogador2_y < 490) {
                    jogador2_x = 400;
                }
            }
        }
    }
    if (jogador2_x >550) {
        if (jogador2_x < 551) {
            if (jogador2_y > 420) {
                if (jogador2_y < 490) {
                    jogador2_x = 551;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 220, 450, plataforma_raio*15,plataforma_raio*4 );
    if (jogador2_x + 50 > 220) {
        if (jogador2_x < 370) {
            if (jogador2_y > 450) {
                if(jogador2_y<490){
                    jogador2_y=490;
                }
            }
        }
    }
    if (jogador2_x + 50 > 220) {
        if (jogador2_x < 370) {
            if (jogador2_y > 400) {
                if (jogador2_y < 440) {
                    jogador2_y = 400;
                }
            }
        }
    }
    if (jogador2_x +50 > 220) {
        if (jogador2_x < 220) {
            if (jogador2_y > 420) {
                if (jogador2_y < 490) {
                    jogador2_x = 170;
                }
            }
        }
    }
    if (jogador2_x >370) {
        if (jogador2_x < 371) {
            if (jogador2_y > 420) {
                if (jogador2_y < 490) {
                    jogador2_x = 371;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, -5, 450, plataforma_raio*15,plataforma_raio*4 );
    if (jogador2_x + 50 > -5) {
        if (jogador2_x < 145) {
            if (jogador2_y > 450) {
                if(jogador2_y<490){
                    jogador2_y=490;
                }
            }
        }
    }
    if (jogador2_x + 50 > -5) {
        if (jogador2_x < 145) {
            if (jogador2_y > 400) {
                if (jogador2_y < 440) {
                    jogador2_y = 400;
                }
            }
        }
    }
    if (jogador2_x +50 > -5) {
        if (jogador2_x < -5) {
            if (jogador2_y > 420) {
                if (jogador2_y < 490) {
                    jogador2_x = -35;
                }
            }
        }
    }
    if (jogador2_x >145) {
        if (jogador2_x < 146) {
            if (jogador2_y > 420) {
                if (jogador2_y < 490) {
                    jogador2_x = 146;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, -180, 350, plataforma_raio*50,plataforma_raio*4 );
    if (jogador2_x + 50 > -180) {
        if (jogador2_x < 320) {
            if (jogador2_y > 350) {
                if(jogador2_y<390){
                    jogador2_y=390;
                }
            }
        }
    }
    if (jogador2_x + 50 > -180) {
        if (jogador2_x < 320) {
            if (jogador2_y > 300) {
                if (jogador2_y < 340) {
                    jogador2_y = 300;
                }
            }
        }
    }
    if (jogador2_x +50 > -180) {
        if (jogador2_x < -180) {
            if (jogador2_y > 320) {
                if (jogador2_y < 390) {
                    jogador2_x = -190;
                }
            }
        }
    }
    if (jogador2_x >320) {
        if (jogador2_x < 321) {
            if (jogador2_y > 320) {
                if (jogador2_y < 390) {
                    jogador2_x = 321;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 430, 350, plataforma_raio*50,plataforma_raio*4 );
    if (jogador2_x + 50 > 430) {
        if (jogador2_x < 930) {
            if (jogador2_y > 350) {
                if(jogador2_y<390){
                    jogador2_y=390;
                }
            }
        }
    }
    if (jogador2_x + 50 > 430) {
        if (jogador2_x < 930) {
            if (jogador2_y > 300) {
                if (jogador2_y < 340) {
                    jogador2_y = 300;
                }
            }
        }
    }
    if (jogador2_x +50 > 430) {
        if (jogador2_x < 430) {
            if (jogador2_y > 320) {
                if (jogador2_y < 390) {
                    jogador2_x = 380;
                }
            }
        }
    }
    if (jogador2_x >930) {
        if (jogador2_x < 931) {
            if (jogador2_y > 320) {
                if (jogador2_y < 390) {
                    jogador2_x = 931;

                }
            }
        }
    }
    requestAnimationFrame(movimentodosjogadores);
}
function bala() {
    if (tecla.includes(71)) {
        ctx.fillStyle = "red";
        ctx.fillRect(bala1_x, bala1_y, 10, 10);
        ctx.fill();
        bala1_x= jogador1_x+30;
        bala1_y=jogador1_y+25;



        if(bala1_x>800){
            ctx.clearRect(bala1_x,bala1_y,10,10);
        }
    }
    if(tecla.includes(72)){
        ctx.fillStyle = "red";
        ctx.fillRect(bala1_x, bala1_y, 10, 10);
        ctx.fill();
        bala1_x+=0.01;
        if(bala1_x>800){
            ctx.clearRect(bala1_x,bala1_y,10,10);
        }
    }
    if (tecla.includes(79)) {
        ctx.fillStyle = "red";
        ctx.fillRect(bala2_x, bala2_y, 10, 10);
        ctx.fill();
        bala2_x= jogador2_x;
        bala2_y=jogador2_y+25;



        if(bala2_x<0){
            ctx.clearRect(bala1_x,bala1_y,10,10);
        }
    }
    if(tecla.includes(80)){
        ctx.fillStyle = "red";
        ctx.fillRect(bala2_x, bala2_y, 10, 10);
        ctx.fill();
        bala2_x-=0.01;
        if(bala2_x<0){
            ctx.clearRect(bala2_x,bala2_y,10,10);
        }

    }
    if (bala1_x + 50 > 60) {
        if (bala1_x < 190) {
            if (bala1_y > 730) {
                bala1_y = 750;

            }
        }
    }
    if (bala1_x + 50 > 60) {
        if (bala1_x < 190) {
            if (bala1_y > 670) {
                if (bala1_y < 700) {
                    bala1_y = 670;
                }
            }
        }
    }
    if (bala1_x + 40 < 60) {
        if (bala1_y > 700) {
            if (bala1_y < 740) {
                bala1_x = 0;
            }
        }
    }
    if (bala1_x + 40 > 190) {
        if (bala1_x + 40 < 280) {
            if (bala1_y > 700) {
                if (bala1_y < 740) {
                    bala1_x = 220;
                }
            }
        }
    }
//ctx.drawImage(plataforma, 280, 710, plataforma_raio*15,plataforma_raio*4 );
    if (bala1_x + 50 > 280) {
        if (bala1_x < 430) {
            if (bala1_y > 730) {
                bala1_y = 750;
                if (bala1_y < 660) {
                    bala1_y = 665;
                }
            }
        }
    }
    if (bala1_x + 50 > 280) {
        if (bala1_x < 430) {
            if (bala1_y > 670) {
                if (bala1_y < 700) {
                    bala1_y = 670;
                }
            }
        }
    }
    if (bala1_x + 40 < 280) {
        if (bala1_x + 40 > 280) {
            if (bala1_y > 700) {
                if (bala1_y < 740) {
                    bala1_x = 220;
                }
            }
        }
    }
    if (bala1_x + 40 > 430) {
        if (bala1_x + 40 < 540) {
            if (bala1_y > 700) {
                if (bala1_y < 740) {
                    bala1_x = 450;
                }
            }
        }
    }
    // ctx.drawImage(plataforma, 500, 710, plataforma_raio*15,plataforma_raio*4 );
    if (bala1_x  > 500) {
        if (bala1_x < 650) {
            if (bala1_y > 730) {
                bala1_y = 750;
                if(bala1_y<670){
                    bala1_y=670;
                }
            }
        }
    }
    if (bala1_x + 50 > 500) {
        if (bala1_x < 650) {
            if (bala1_y > 670) {
                if (bala1_y < 700) {
                    bala1_y = 670;
                }
            }
        }
    }
    if (bala1_x  < 500) {
        if (bala1_x > 500) {
            if (bala1_y > 700) {
                if (bala1_y < 740) {
                    bala1_x = 440;
                }
            }
        }
    }
    if (bala1_x +40 > 640) {
        if (bala1_x < 650) {
            if (bala1_y > 700) {
                if (bala1_y < 740) {
                    bala1_x = 680;
                }
            }
        }
    }
    //ctx.drawImage(plataforma, 700, 710, plataforma_raio*15,plataforma_raio*4 );
    if (bala1_x +40 > 700) {
        if (bala1_x < 800) {
            if (bala1_y > 710) {
                bala1_y = 750;
                if (bala1_y < 750) {
                    bala1_y = 750;
                }
            }
        }
    }
    if (bala1_x  > 700) {
        if (bala1_x < 800) {
            if (bala1_y > 670) {
                if (bala1_y < 700) {
                    bala1_y = 670;
                }
            }
        }
    }
    if (bala1_x+40 > 720) {
        if (bala1_y > 700) {
            if (bala1_y < 740) {
                bala1_x = 680;
            }
        }
    }
    //ctx.drawImage(plataforma, 770, 630, plataforma_raio*7,plataforma_raio*4 );
    if (bala1_x +50 > 770) {
        if (bala1_x < 920) {
            if (bala1_y > 660) {
                if(bala1_y<700){
                    bala1_y=670;
                }
            }
        }
    }
    if (bala1_x +50> 770) {
        if (bala1_x < 800) {
            if (bala1_y > 580) {
                if (bala1_y < 620) {
                    bala1_y = 580;
                }
            }
        }
    }
    if (bala1_x +50 > 770) {
        if (bala1_y> 620) {
            if (bala1_y < 670) {
                bala1_x = 720;
            }
        }
    }
    //ctx.drawImage(plataforma, 490, 630, plataforma_raio*7,plataforma_raio*4 );
    if (bala1_x + 50 > 490) {
        if (bala1_x < 560) {
            if (bala1_y > 660) {
                if(bala1_y<680){
                    bala1_y=670;
                }
            }
        }
    }
    if (bala1_x + 50 > 490) {
        if (bala1_x < 560) {
            if (bala1_y > 580) {
                if (bala1_y < 620) {
                    bala1_y = 580;
                }
            }
        }
    }
    if (bala1_x +50 > 490) {
        if (bala1_x < 490) {
            if (bala1_y > 620) {
                if (bala1_y < 670) {
                    bala1_x = 450;
                }
            }
        }
    }
    if (bala1_x > 560) {
        if (bala1_x < 570) {
            if (bala1_y > 620) {
                if (bala1_y < 670) {
                    bala1_x = 565;
                }
            }
        }
    }
//ctx.drawImage(plataforma, 350, 630, plataforma_raio*7,plataforma_raio*4 );
    if (bala1_x + 50 > 350) {
        if (bala1_x < 410) {
            if (bala1_y > 660) {
                if(bala1_y<680){
                    bala1_y=670;
                }
            }
        }
    }
    if (bala1_x + 50 > 350) {
        if (bala1_x < 410) {
            if (bala1_y > 580) {
                if (bala1_y < 620) {
                    bala1_y = 580;
                }
            }
        }
    }
    if (bala1_x +50 > 350) {
        if (bala1_x < 350) {
            if (bala1_y > 620) {
                if (bala1_y < 670) {
                    bala1_x = 300;
                }
            }
        }
    }
    if (bala1_x > 420) {
        if (bala1_x < 421) {
            if (bala1_y > 620) {
                if (bala1_y < 660) {
                    bala1_x = 425;
                }
            }
        }
    }
//ctx.drawImage(plataforma, 70, 630, plataforma_raio*7,plataforma_raio*4 );
    if (bala1_x + 50 > 70) {
        if (bala1_x < 140) {
            if (bala1_y > 660) {
                if(bala1_y<680){
                    bala1_y=670;
                }
            }
        }
    }
    if (bala1_x + 50 > 70) {
        if (bala1_x < 140) {
            if (bala1_y > 580) {
                if (bala1_y < 620) {
                    bala1_y = 580;
                }
            }
        }
    }
    if (bala1_x +50 > 70) {
        if (bala1_x < 70) {
            if (bala1_y > 620) {
                if (bala1_y < 670) {
                    bala1_x = 30;
                }
            }
        }
    }
    if (bala1_x > 140) {
        if (bala1_x < 141) {
            if (bala1_y > 620) {
                if (bala1_y < 660) {
                    bala1_x = 141;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 0, 550, plataforma_raio*7,plataforma_raio*4 );
    if (bala1_x + 50 > 0) {
        if (bala1_x < 70) {
            if (bala1_y > 580) {
                if(bala1_y<600){
                    bala1_y=590;
                }
            }
        }
    }
    if (bala1_x + 50 > 0) {
        if (bala1_x < 70) {
            if (bala1_y > 500) {
                if (bala1_y < 540) {
                    bala1_y = 500;
                }
            }
        }
    }
    if (bala1_x +50 > 0) {
        if (bala1_x < 0) {
            if (bala1_y > 540) {
                if (bala1_y < 590) {
                    bala1_x = 0;
                }
            }
        }
    }
    if (bala1_x >70) {
        if (bala1_x < 71) {
            if (bala1_y > 540) {
                if (bala1_y < 590) {
                    bala1_x = 71;

                }
            }
        }
    }
    // ctx.drawImage(plataforma, 130, 550, plataforma_raio*7,plataforma_raio*4 );
    if (bala1_x + 50 > 130) {
        if (bala1_x < 200) {
            if (bala1_y > 580) {
                if(bala1_y<600){
                    bala1_y=590;
                }
            }
        }
    }
    if (bala1_x + 50 > 130) {
        if (bala1_x < 200) {
            if (bala1_y > 500) {
                if (bala1_y < 550) {
                    bala1_y = 500;
                }
            }
        }
    }
    if (bala1_x +50 > 130) {
        if (bala1_x < 130) {
            if (bala1_y > 520) {
                if (bala1_y < 590) {
                    bala1_x = 80;
                }
            }
        }
    }
    if (bala1_x >200) {
        if (bala1_x < 201) {
            if (bala1_y > 540) {
                if (bala1_y < 590) {
                    bala1_x = 201;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 270, 550, plataforma_raio*7,plataforma_raio*4 );
    if (bala1_x + 50 > 270) {
        if (bala1_x < 340) {
            if (bala1_y > 580) {
                if(bala1_y<600){
                    bala1_y=590;
                }
            }
        }
    }
    if (bala1_x + 50 > 270) {
        if (bala1_x < 340) {
            if (bala1_y > 500) {
                if (bala1_y < 550) {
                    bala1_y = 500;
                }
            }
        }
    }
    if (bala1_x +50 > 270) {
        if (bala1_x < 270) {
            if (bala1_y > 520) {
                if (bala1_y < 590) {
                    bala1_x = 220;
                }
            }
        }
    }
    if (bala1_x >340) {
        if (bala1_x < 341) {
            if (bala1_y > 540) {
                if (bala1_y < 590) {
                    bala1_x = 341;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 410, 550, plataforma_raio*7,plataforma_raio*4 );
    if (bala1_x + 50 > 410) {
        if (bala1_x < 480) {
            if (bala1_y > 580) {
                if(bala1_y<600){
                    bala1_y=590;
                }
            }
        }
    }
    if (bala1_x + 50 > 410) {
        if (bala1_x < 480) {
            if (bala1_y > 500) {
                if (bala1_y < 550) {
                    bala1_y = 500;
                }
            }
        }
    }
    if (bala1_x +50 > 410) {
        if (bala1_x < 410) {
            if (bala1_y > 520) {
                if (bala1_y < 590) {
                    bala1_x = 360;
                }
            }
        }
    }
    if (bala1_x >480) {
        if (bala1_x < 481) {
            if (bala1_y > 540) {
                if (bala1_y < 590) {
                    bala1_x = 481;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 550, 550, plataforma_raio*25,plataforma_raio*4 );
    if (bala1_x + 50 > 550) {
        if (bala1_x < 800) {
            if (bala1_y > 580) {
                if(bala1_y<600){
                    bala1_y=590;
                }
            }
        }
    }
    if (bala1_x + 50 > 550) {
        if (bala1_x < 800) {
            if (bala1_y > 500) {
                if (bala1_y < 550) {
                    bala1_y = 500;
                }
            }
        }
    }
    if (bala1_x +50 > 550) {
        if (bala1_x < 550) {
            if (bala1_y > 520) {
                if (bala1_y < 590) {
                    bala1_x = 500;
                }
            }
        }
    }
    if (bala1_x >800) {
        if (bala1_x < 801) {
            if (bala1_y > 540) {
                if (bala1_y < 590) {
                    bala1_x = 801;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 630, 450, plataforma_raio*10,plataforma_raio*4 );
    if (bala1_x + 50 > 630) {
        if (bala1_x < 730) {
            if (bala1_y > 450) {
                if(bala1_y<490){
                    bala1_y=490;
                }
            }
        }
    }
    if (bala1_x + 50 > 630) {
        if (bala1_x < 730) {
            if (bala1_y > 400) {
                if (bala1_y < 440) {
                    bala1_y = 400;
                }
            }
        }
    }
    if (bala1_x +50 > 630) {
        if (bala1_x < 630) {
            if (bala1_y > 420) {
                if (bala1_y < 490) {
                    bala1_x = 580;
                }
            }
        }
    }
    if (bala1_x >730) {
        if (bala1_x < 731) {
            if (bala1_y > 420) {
                if (bala1_y < 490) {
                    bala1_x = 731;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 450, 450, plataforma_raio*10,plataforma_raio*4 );
    if (bala1_x + 50 > 450) {
        if (bala1_x < 550) {
            if (bala1_y > 450) {
                if(bala1_y<490){
                    bala1_y=490;
                }
            }
        }
    }
    if (bala1_x + 50 > 450) {
        if (bala1_x < 550) {
            if (bala1_y > 400) {
                if (bala1_y < 440) {
                    bala1_y = 400;
                }
            }
        }
    }
    if (bala1_x +50 > 450) {
        if (bala1_x < 450) {
            if (bala1_y > 420) {
                if (bala1_y < 490) {
                    bala1_x = 400;
                }
            }
        }
    }
    if (bala1_x >550) {
        if (bala1_x < 551) {
            if (bala1_y > 420) {
                if (bala1_y < 490) {
                    bala1_x = 551;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 220, 450, plataforma_raio*15,plataforma_raio*4 );
    if (bala1_x + 50 > 220) {
        if (bala1_x < 370) {
            if (bala1_y > 450) {
                if(bala1_y<490){
                    bala1_y=490;
                }
            }
        }
    }
    if (bala1_x + 50 > 220) {
        if (bala1_x < 370) {
            if (bala1_y > 400) {
                if (bala1_y < 440) {
                    bala1_y = 400;
                }
            }
        }
    }
    if (bala1_x +50 > 220) {
        if (bala1_x < 220) {
            if (bala1_y > 420) {
                if (bala1_y < 490) {
                    bala1_x = 170;
                }
            }
        }
    }
    if (bala1_x >370) {
        if (bala1_x < 371) {
            if (bala1_y > 420) {
                if (bala1_y < 490) {
                    bala1_x = 371;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, -5, 450, plataforma_raio*15,plataforma_raio*4 );
    if (bala1_x + 50 > -5) {
        if (bala1_x < 145) {
            if (bala1_y > 450) {
                if(bala1_y<490){
                    bala1_y=490;
                }
            }
        }
    }
    if (bala1_x + 50 > -5) {
        if (bala1_x < 145) {
            if (bala1_y > 400) {
                if (bala1_y < 440) {
                    bala1_y = 400;
                }
            }
        }
    }
    if (bala1_x +50 > -5) {
        if (bala1_x < -5) {
            if (bala1_y > 420) {
                if (bala1_y < 490) {
                    bala1_x = -35;
                }
            }
        }
    }
    if (bala1_x >145) {
        if (bala1_x < 146) {
            if (bala1_y > 420) {
                if (bala1_y < 490) {
                    bala1_x = 146;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, -180, 350, plataforma_raio*50,plataforma_raio*4 );
    if (bala1_x + 50 > -180) {
        if (bala1_x < 320) {
            if (bala1_y > 350) {
                if(bala1_y<390){
                    bala1_y=390;
                }
            }
        }
    }
    if (bala1_x + 50 > -180) {
        if (bala1_x < 320) {
            if (bala1_y > 300) {
                if (bala1_y < 340) {
                    bala1_y = 300;
                }
            }
        }
    }
    if (bala1_x +50 > -180) {
        if (bala1_x < -180) {
            if (bala1_y > 320) {
                if (bala1_y < 390) {
                    bala1_x = -190;
                }
            }
        }
    }
    if (bala1_x >320) {
        if (bala1_x < 321) {
            if (bala1_y > 320) {
                if (bala1_y < 390) {
                    bala1_x = 321;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 430, 350, plataforma_raio*50,plataforma_raio*4 );
    if (bala1_x + 50 > 430) {
        if (bala1_x < 930) {
            if (bala1_y > 350) {
                if(bala1_y<390){
                    bala1_y=390;
                }
            }
        }
    }
    if (bala1_x + 50 > 430) {
        if (bala1_x < 930) {
            if (bala1_y > 300) {
                if (bala1_y < 340) {
                    bala1_y = 300;
                }
            }
        }
    }
    if (bala1_x +50 > 430) {
        if (bala1_x < 430) {
            if (bala1_y > 320) {
                if (bala1_y < 390) {
                    bala1_x = 380;
                }
            }
        }
    }
    if (bala1_x >930) {
        if (bala1_x < 931) {
            if (bala1_y > 320) {
                if (bala1_y < 390) {
                    bala1_x = 931;

                }
            }
        }
    }
    // ctx.drawImage(plataforma, 360, 740, plataforma_raio*2,plataforma_raio*7 );
    if(bala1_x+50>360){
        if(bala1_x<361){
            if(bala1_y>741){
                if(bala1_y<800){
                    bala1_x=310;
                }
            }
        }
    }
    if(bala1_x<370){
        if(bala1_x>361){
            if(bala1_y>741){
                if(bala1_y<800){
                    bala1_x=370;
                }
            }
        }
    }
    // ctx.drawImage(plataforma, 360, 740, plataforma_raio*2,plataforma_raio*7 );
    if(bala2_x+50>360){
        if(bala2_x<361){
            if(bala2_y>741){
                if(bala2_y<800){
                    bala2_x=310;
                }
            }
        }
    }
    if(bala2_x<370){
        if(bala2_x>361){
            if(bala2_y>741){
                if(bala2_y<800){
                    bala2_x=370;
                }
            }
        }
    }
    if (bala2_x + 50 > 60) {
        if (bala2_x < 190) {
            if (bala2_y > 730) {
                bala2_y = 750;

            }
        }
    }
    if (bala2_x + 50 > 60) {
        if (bala2_x < 190) {
            if (bala2_y > 670) {
                if (bala2_y < 700) {
                    bala2_y = 670;
                }
            }
        }
    }
    if (bala2_x + 40 < 60) {
        if (bala2_y > 700) {
            if (bala2_y < 740) {
                bala2_x = 0;
            }
        }
    }
    if (bala2_x + 40 > 190) {
        if (bala2_x + 40 < 280) {
            if (bala2_y > 700) {
                if (bala2_y < 740) {
                    bala2_x = 220;
                }
            }
        }
    }
//ctx.drawImage(plataforma, 280, 710, plataforma_raio*15,plataforma_raio*4 );
    if (bala2_x + 50 > 280) {
        if (bala2_x < 430) {
            if (bala2_y > 730) {
                bala2_y = 750;
                if (bala2_y < 660) {
                    bala2_y = 665;
                }
            }
        }
    }
    if (bala2_x + 50 > 280) {
        if (bala2_x < 430) {
            if (bala2_y > 670) {
                if (bala2_y < 700) {
                    bala2_y = 670;
                }
            }
        }
    }
    if (bala2_x + 40 < 280) {
        if (bala2_x + 40 > 280) {
            if (bala2_y > 700) {
                if (bala2_y < 740) {
                    bala2_x = 220;
                }
            }
        }
    }
    if (bala2_x + 40 > 430) {
        if (bala2_x + 40 < 540) {
            if (bala2_y > 700) {
                if (bala2_y < 740) {
                    bala2_x = 450;
                }
            }
        }
    }
    // ctx.drawImage(plataforma, 500, 710, plataforma_raio*15,plataforma_raio*4 );
    if (bala2_x  > 500) {
        if (bala2_x < 650) {
            if (bala2_y > 730) {
                bala2_y = 750;
                if(bala2_y<670){
                    bala2_y=670;
                }
            }
        }
    }
    if (bala2_x + 50 > 500) {
        if (bala2_x < 650) {
            if (bala2_y > 670) {
                if (bala2_y < 700) {
                    bala2_y = 670;
                }
            }
        }
    }
    if (bala2_x  < 500) {
        if (bala2_x > 500) {
            if (bala2_y > 700) {
                if (bala2_y < 740) {
                    bala2_x = 440;
                }
            }
        }
    }
    if (bala2_x +40 > 640) {
        if (bala2_x < 650) {
            if (bala2_y > 700) {
                if (bala2_y < 740) {
                    bala2_x = 680;
                }
            }
        }
    }
    //ctx.drawImage(plataforma, 700, 710, plataforma_raio*15,plataforma_raio*4 );
    if (bala2_x +40 > 700) {
        if (bala2_x < 800) {
            if (bala2_y > 710) {
                bala2_y = 750;
                if (bala2_y < 750) {
                    bala2_y = 750;
                }
            }
        }
    }
    if (bala2_x  > 700) {
        if (bala2_x < 800) {
            if (bala2_y > 670) {
                if (bala2_y < 700) {
                    bala2_y = 670;
                }
            }
        }
    }
    if (bala2_x+40 > 720) {
        if (bala2_y > 700) {
            if (bala2_y < 740) {
                bala2_x = 680;
            }
        }
    }
    //ctx.drawImage(plataforma, 770, 630, plataforma_raio*7,plataforma_raio*4 );
    if (bala2_x +50 > 770) {
        if (bala2_x < 920) {
            if (bala2_y > 660) {
                if(bala2_y<700){
                    bala2_y=670;
                }
            }
        }
    }
    if (bala2_x +50> 770) {
        if (bala2_x < 800) {
            if (bala2_y > 580) {
                if (bala2_y < 620) {
                    bala2_y = 580;
                }
            }
        }
    }
    if (bala2_x +50 > 770) {
        if (bala2_y> 620) {
            if (bala2_y < 670) {
                bala2_x = 720;
            }
        }
    }
    //ctx.drawImage(plataforma, 490, 630, plataforma_raio*7,plataforma_raio*4 );
    if (bala2_x + 50 > 490) {
        if (bala2_x < 560) {
            if (bala2_y > 660) {
                if(bala2_y<680){
                    bala2_y=670;
                }
            }
        }
    }
    if (bala2_x + 50 > 490) {
        if (bala2_x < 560) {
            if (bala2_y > 580) {
                if (bala2_y < 620) {
                    bala2_y = 580;
                }
            }
        }
    }
    if (bala2_x +50 > 490) {
        if (bala2_x < 490) {
            if (bala2_y > 620) {
                if (bala2_y < 670) {
                    bala2_x = 450;
                }
            }
        }
    }
    if (bala2_x > 560) {
        if (bala2_x < 570) {
            if (bala2_y > 620) {
                if (bala2_y < 670) {
                    bala2_x = 565;
                }
            }
        }
    }
//ctx.drawImage(plataforma, 350, 630, plataforma_raio*7,plataforma_raio*4 );
    if (bala2_x + 50 > 350) {
        if (bala2_x < 410) {
            if (bala2_y > 660) {
                if(bala2_y<680){
                    bala2_y=670;
                }
            }
        }
    }
    if (bala2_x + 50 > 350) {
        if (bala2_x < 410) {
            if (bala2_y > 580) {
                if (bala2_y < 620) {
                    bala2_y = 580;
                }
            }
        }
    }
    if (bala2_x +50 > 350) {
        if (bala2_x < 350) {
            if (bala2_y > 620) {
                if (bala2_y < 670) {
                    bala2_x = 300;
                }
            }
        }
    }
    if (bala2_x > 420) {
        if (bala2_x < 421) {
            if (bala2_y > 620) {
                if (bala2_y < 660) {
                    bala2_x = 425;
                }
            }
        }
    }
//ctx.drawImage(plataforma, 70, 630, plataforma_raio*7,plataforma_raio*4 );
    if (bala2_x + 50 > 70) {
        if (bala2_x < 140) {
            if (bala2_y > 660) {
                if(bala2_y<680){
                    bala2_y=670;
                }
            }
        }
    }
    if (bala2_x + 50 > 70) {
        if (bala2_x < 140) {
            if (bala2_y > 580) {
                if (bala2_y < 620) {
                    bala2_y = 580;
                }
            }
        }
    }
    if (bala2_x +50 > 70) {
        if (bala2_x < 70) {
            if (bala2_y > 620) {
                if (bala2_y < 670) {
                    bala2_x = 30;
                }
            }
        }
    }
    if (bala2_x > 140) {
        if (bala2_x < 141) {
            if (bala2_y > 620) {
                if (bala2_y < 660) {
                    bala2_x = 141;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 0, 550, plataforma_raio*7,plataforma_raio*4 );
    if (bala2_x + 50 > 0) {
        if (bala2_x < 70) {
            if (bala2_y > 580) {
                if(bala2_y<600){
                    bala2_y=590;
                }
            }
        }
    }
    if (bala2_x + 50 > 0) {
        if (bala2_x < 70) {
            if (bala2_y > 500) {
                if (bala2_y < 540) {
                    bala2_y = 500;
                }
            }
        }
    }
    if (bala2_x +50 > 0) {
        if (bala2_x < 0) {
            if (bala2_y > 540) {
                if (bala2_y < 590) {
                    bala2_x = 0;
                }
            }
        }
    }
    if (bala2_x >70) {
        if (bala2_x < 71) {
            if (bala2_y > 540) {
                if (bala2_y < 590) {
                    bala2_x = 71;

                }
            }
        }
    }
    // ctx.drawImage(plataforma, 130, 550, plataforma_raio*7,plataforma_raio*4 );
    if (bala2_x + 50 > 130) {
        if (bala2_x < 200) {
            if (bala2_y > 580) {
                if(bala2_y<600){
                    bala2_y=590;
                }
            }
        }
    }
    if (bala2_x + 50 > 130) {
        if (bala2_x < 200) {
            if (bala2_y > 500) {
                if (bala2_y < 550) {
                    bala2_y = 500;
                }
            }
        }
    }
    if (bala2_x +50 > 130) {
        if (bala2_x < 130) {
            if (bala2_y > 520) {
                if (bala2_y < 590) {
                    bala2_x = 80;
                }
            }
        }
    }
    if (bala2_x >200) {
        if (bala2_x < 201) {
            if (bala2_y > 540) {
                if (bala2_y < 590) {
                    bala2_x = 201;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 270, 550, plataforma_raio*7,plataforma_raio*4 );
    if (bala2_x + 50 > 270) {
        if (bala2_x < 340) {
            if (bala2_y > 580) {
                if(bala2_y<600){
                    bala2_y=590;
                }
            }
        }
    }
    if (bala2_x + 50 > 270) {
        if (bala2_x < 340) {
            if (bala2_y > 500) {
                if (bala2_y < 550) {
                    bala_y = 500;
                }
            }
        }
    }
    if (bala2_x +50 > 270) {
        if (bala2_x < 270) {
            if (bala2_y > 520) {
                if (bala2_y < 590) {
                    bala2_x = 220;
                }
            }
        }
    }
    if (bala2_x >340) {
        if (bala2_x < 341) {
            if (bala2_y > 540) {
                if (bala2_y < 590) {
                    bala2_x = 341;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 410, 550, plataforma_raio*7,plataforma_raio*4 );
    if (bala2_x + 50 > 410) {
        if (bala2_x < 480) {
            if (bala2_y > 580) {
                if(bala2_y<600){
                    bala2_y=590;
                }
            }
        }
    }
    if (bala2_x + 50 > 410) {
        if (bala2_x < 480) {
            if (bala2_y > 500) {
                if (bala2_y < 550) {
                    bala2_y = 500;
                }
            }
        }
    }
    if (bala2_x +50 > 410) {
        if (bala2_x < 410) {
            if (bala2_y > 520) {
                if (bala2_y < 590) {
                    bala2_x = 360;
                }
            }
        }
    }
    if (bala2_x >480) {
        if (bala2_x < 481) {
            if (bala2_y > 540) {
                if (bala2_y < 590) {
                    bala2_x = 481;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 550, 550, plataforma_raio*25,plataforma_raio*4 );
    if (bala2_x + 50 > 550) {
        if (bala2_x < 800) {
            if (bala2_y > 580) {
                if(bala2_y<600){
                    bala2_y=590;
                }
            }
        }
    }
    if (bala2_x + 50 > 550) {
        if (bala2_x < 800) {
            if (bala2_y > 500) {
                if (bala2_y < 550) {
                    bala2_y = 500;
                }
            }
        }
    }
    if (bala2_x +50 > 550) {
        if (bala2_x < 550) {
            if (bala2_y > 520) {
                if (bala2_y < 590) {
                    bala2_x = 500;
                }
            }
        }
    }
    if (bala2_x >800) {
        if (bala2_x < 801) {
            if (bala2_y > 540) {
                if (bala2_y < 590) {
                    bala2_x = 801;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 630, 450, plataforma_raio*10,plataforma_raio*4 );
    if (bala2_x + 50 > 630) {
        if (bala2_x < 730) {
            if (bala2_y > 450) {
                if(bala2_y<490){
                    bala2_y=490;
                }
            }
        }
    }
    if (bala2_x + 50 > 630) {
        if (bala2_x < 730) {
            if (bala2_y > 400) {
                if (bala2_y < 440) {
                    bala2_y = 400;
                }
            }
        }
    }
    if (bala2_x +50 > 630) {
        if (bala2_x < 630) {
            if (bala2_y > 420) {
                if (bala2_y < 490) {
                    bala2_x = 580;
                }
            }
        }
    }
    if (bala2_x >730) {
        if (bala2_x < 731) {
            if (bala2_y > 420) {
                if (bala2_y < 490) {
                    bala2_x = 731;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 450, 450, plataforma_raio*10,plataforma_raio*4 );
    if (bala2_x + 50 > 450) {
        if (bala2_x < 550) {
            if (bala2_y > 450) {
                if(bala2_y<490){
                    bala2_y=490;
                }
            }
        }
    }
    if (bala2_x + 50 > 450) {
        if (bala2_x < 550) {
            if (bala2_y > 400) {
                if (bala2_y < 440) {
                    bala2_y = 400;
                }
            }
        }
    }
    if (bala2_x +50 > 450) {
        if (bala2_x < 450) {
            if (bala2_y > 420) {
                if (bala2_y < 490) {
                    bala2_x = 400;
                }
            }
        }
    }
    if (bala2_x >550) {
        if (bala2_x < 551) {
            if (bala2_y > 420) {
                if (bala2_y < 490) {
                    bala2_x = 551;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 220, 450, plataforma_raio*15,plataforma_raio*4 );
    if (bala2_x + 50 > 220) {
        if (bala2_x < 370) {
            if (bala2_y > 450) {
                if(bala2_y<490){
                    bala2_y=490;
                }
            }
        }
    }
    if (bala2_x + 50 > 220) {
        if (bala2_x < 370) {
            if (bala2_y > 400) {
                if (bala2_y < 440) {
                    bala2_y = 400;
                }
            }
        }
    }
    if (bala2_x +50 > 220) {
        if (bala2_x < 220) {
            if (bala2_y > 420) {
                if (bala2_y < 490) {
                    bala2_x = 170;
                }
            }
        }
    }
    if (bala2_x >370) {
        if (bala2_x < 371) {
            if (bala2_y > 420) {
                if (bala2_y < 490) {
                    bala2_x = 371;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, -5, 450, plataforma_raio*15,plataforma_raio*4 );
    if (bala2_x + 50 > -5) {
        if (bala2_x < 145) {
            if (bala2_y > 450) {
                if(bala2_y<490){
                    bala2_y=490;
                }
            }
        }
    }
    if (bala2_x + 50 > -5) {
        if (bala2_x < 145) {
            if (bala2_y > 400) {
                if (bala2_y < 440) {
                    bala2_y = 400;
                }
            }
        }
    }
    if (bala2_x +50 > -5) {
        if (bala2_x < -5) {
            if (bala2_y > 420) {
                if (bala2_y < 490) {
                    bala2_x = -35;
                }
            }
        }
    }
    if (bala2_x >145) {
        if (bala2_x < 146) {
            if (bala2_y > 420) {
                if (bala2_y < 490) {
                    bala2_x = 146;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, -180, 350, plataforma_raio*50,plataforma_raio*4 );
    if (bala2_x + 50 > -180) {
        if (bala2_x < 320) {
            if (bala2_y > 350) {
                if(bala2_y<390){
                    bala2_y=390;
                }
            }
        }
    }
    if (bala2_x + 50 > -180) {
        if (bala2_x < 320) {
            if (bala2_y > 300) {
                if (bala2_y < 340) {
                    bala2_y = 300;
                }
            }
        }
    }
    if (bala2_x +50 > -180) {
        if (bala2_x < -180) {
            if (bala2_y > 320) {
                if (bala2_y < 390) {
                    bala2_x = -190;
                }
            }
        }
    }
    if (bala2_x >320) {
        if (bala2_x < 321) {
            if (bala2_y > 320) {
                if (bala2_y < 390) {
                    bala2_x = 321;

                }
            }
        }
    }
    //ctx.drawImage(plataforma, 430, 350, plataforma_raio*50,plataforma_raio*4 );
    if (bala2_x + 50 > 430) {
        if (bala2_x < 930) {
            if (bala2_y > 350) {
                if(bala2_y<390){
                    bala2_y=390;
                }
            }
        }
    }
    if (bala2_x + 50 > 430) {
        if (bala2_x < 930) {
            if (bala2_y > 300) {
                if (bala2_y < 340) {
                    bala2_y = 300;
                }
            }
        }
    }
    if (bala2_x +50 > 430) {
        if (bala2_x < 430) {
            if (bala2_y > 320) {
                if (bala2_y < 390) {
                    bala2_x = 380;
                }
            }
        }
    }
    if (bala2_x >930) {
        if (bala2_x < 931) {
            if (bala2_y > 320) {
                if (bala2_y < 390) {
                    bala2_x = 931;

                }
            }
        }
    }
    if(bala1_y >= jogador2_y && bala1_y <= bala1_y){
        if(bala1_x >= jogador2_x && bala1_x <= jogador2_x + 50){
            alert('Player 1 wins');
            //break;
        }
    }

    if(bala2_y >= jogador1_y && bala2_y <= bala2_y){
        if(bala2_x >= jogador1_x && bala2_x <= jogador1_x + 50){
            alert("Player 2 wins");
            // break;
        }

    }
    requestAnimationFrame(bala)
}



