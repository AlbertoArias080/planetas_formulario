var tierra = false;
var saturno = false;
var jupiter = false;
var marte = false;
var planetaGenerico = false;

function tamanotierra() {
    if (tierra == false) {
        $("#imgjupiter").hide();
        $("#imgmarte").hide();
        $("#imgsaturno").hide();
        tierra = true;
    } else {
        $("#imgjupiter").show();
        $("#imgmarte").show();
        $("#imgsaturno").show();
        tierra = false;
    }

}

function tamanomarte() {
    if (marte == false) {
        $("#imgjupiter").hide();
        $("#imgtierra").hide();
        $("#imgsaturno").hide();
        marte = true;

    } else {
        $("#imgjupiter").show();
        $("#imgtierra").show();
        $("#imgsaturno").show();
        marte = false;
    }

}

function tamanosaturno() {
    if (saturno == false) {
        $("#imgjupiter").hide();
        $("#imgtierra").hide();
        $("#imgmarte").hide();
        saturno = true;

    } else {
        $("#imgjupiter").show();
        $("#imgtierra").show();
        $("#imgmarte").show();
        saturno = false;
    }

}

function tamanojupiter() {
    if (jupiter == false) {
        $("#imgsaturno").hide();
        $("#imgtierra").hide();
        $("#imgmarte").hide();
        jupiter = true;

    } else {
        $("#imgsaturno").show();
        $("#imgtierra").show();
        $("#imgmarte").show();
        jupiter = false;
    }

}

function gravedad() {  
    var vel=0;
    if (jupiter == true) {
        vel=790;   
        $("#astro").animate({marginLeft:"+=1300px"},vel);         
    } else if (tierra == true) {   
        vel=2000;
        $("#astro").animate({marginLeft:"+=1300px"},vel);
    } else if (marte == true) {
        vel=5283;       
        $("#astro").animate({marginLeft:"+=1300px"},vel);
    } else if (saturno == true) {
        vel=1877;  
        $("#astro").animate({marginLeft:"+=1300px"},vel);     
    }
}


function gravedadG() {
        vel = (2000/parseFloat($("#gravedad").val()))*9.8
        $("#astro").animate({marginLeft:"+=1300px"},vel);
}

function reiniciar(){
    $("#astro").animate({marginTop:"30px", marginLeft:"10px"},1);
}


