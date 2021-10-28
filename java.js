var dataMod = json;


var palDigi_var = ["",
  "Legnago - B.Fioroni",//1
  "Castagnaro",//2
  "Isola della Scala",//3
  "Minerbe",//4
  "Villabartolomea",//5
  "Isola Rizza",//6
  "San Pietro di Morubio",//7
  "Legnago - B.Bellinato",//8
  "Angiari",//9
  "Bovolone",//10
  "Cerea",//11
  "Terrazzo",//12
  "Roverchiara",//13
  "Legnago - Space13"//14
  ];

var temi_var = ["",
  "Innovazione",//1
  "Open data",//2
  "Agenda digitale",//3
  ];

var attivita_var =["",
    "Kick off",//1
    "Labvan",//2
    "Focus Group",//3
    "Coprogettazione",//4
    "Evento Pubblico",//5
    "Comunicazione"//6
    ];


var isMobile = false; //initiate as false


(function($) { // Begin jQuery
$(function() { // DOM ready
  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
      isMobile = true;
      $("#res").toggleClass('righe');
      $("#btnChangeView").hide();
  }
  if($("#res").hasClass("righe")){
    loadDataRighe(dataMod);
  }
  else {
    loadData(dataMod);
  } 
  // If a link has a dropdown, add sub menu toggle.
  $('nav ul li a:not(:only-child)').click(function(e) {
    $(this).siblings('.nav-dropdown').toggle();
    // Close one dropdown when selecting another
    $('.nav-dropdown').not($(this).siblings()).hide();
    e.stopPropagation();
  });
  // Clicking away from dropdown will remove the dropdown class
  $('html').click(function() {
    $('.nav-dropdown').hide();
  });
  // Toggle open and close nav styles on click
  $('#nav-toggle').click(function() {
    $('nav ul').slideToggle();
  });
  // Hamburger to X toggle
  $('#nav-toggle').on('click', function() {
    this.classList.toggle('active');
  });

    var filPalestre = [];
    var filAttivita = [];
    var filTemi = [];

    var array_filti = {
      palestra: [],
      attivita: [],
      tema: []
    };


    $("#collapseOne").find(':input').click(function(){
      if($(this)[0].checked){
        array_filti["palestra"].push($(this)[0].value);
      } else { 
        for( var i = 0; i < array_filti["palestra"].length; i++){ 
          if ( array_filti["palestra"][i] === $(this)[0].value) { 
            array_filti["palestra"].splice(i, 1); 
          }
        }
      }
      find_in_object(json, array_filti);
    });
    $("#collapseTwo").find(':input').click(function(){
      if($(this)[0].checked){
        array_filti["attivita"].push($(this)[0].value);
      } else { 
        for( var i = 0; i < array_filti["attivita"].length; i++){ 
          if ( array_filti["attivita"][i] === $(this)[0].value) { 
            array_filti["attivita"].splice(i, 1); 
          }
        }
      }
      find_in_object(json, array_filti);
    });
    $("#collapseThree").find(':input').click(function(){
      if($(this)[0].checked){
        array_filti["tema"].push($(this)[0].value);
      } else { 
        for( var i = 0; i < array_filti["tema"].length; i++){ 
          if ( array_filti["tema"][i] === $(this)[0].value) { 
            array_filti["tema"].splice(i, 1); 
          }
        }
      }
      find_in_object(json,array_filti);
    });

    $("#v_righe").click(function(){
      $("#res").removeClass('righe');
      $("#v_griglia").removeClass('nonAttivo');
      $("#v_righe").addClass('nonAttivo');
      find_in_object(json,array_filti);
    });
    $("#v_griglia").click(function(){
      $("#res").addClass('righe');
      $("#v_righe").removeClass('nonAttivo');
      $("#v_griglia").addClass('nonAttivo');
      find_in_object(json,array_filti);
    });




  }); // end DOM ready
})(jQuery); // end jQuery

function find_in_object(array, filters){
  filteredData = $.grep(json, function (value, i) {
      var flag = [0,0,0];
      //cat 1
      for (var i = 0; i < filters["tema"].length; i++) {
          if (arr_check(value["tema"],filters["tema"][i])) flag[0]=1;
      }  
      //cat 2
      for (var i = 0; i < filters["attivita"].length; i++) {
          if (arr_check(value["attivita"],filters["attivita"][i])) flag[1]=1;
      }            
      //cat 3
      for (var i = 0; i < filters["palestra"].length; i++) {
          if (arr_check(value["palestra"],filters["palestra"][i])) flag[2]=1;
      }
      if (filters["tema"].length == 0) flag[0] = 1;
      if (filters["attivita"].length == 0) flag[1] = 1;
      if (filters["palestra"].length == 0) flag[2] = 1;
      if(flag[0] == 1 && flag[1] == 1 && flag[2] == 1)  return true;        
  }); 
  if($("#res").hasClass("righe")){
    loadDataRighe(filteredData);
  }
  else {
    loadData(filteredData);
  }       
}

function arr_check (arr,value) {
  arr_split = arr.split("-");
  if(arr_split.indexOf(value.toString()) !== -1) {
      return true;
  } else {
      return false;
  }
}

function loadData(json_da_stampa){
  var outputstr = "";
  $.each(json_da_stampa, function (i, n) {
      outputstr += "<div class=\"col-lg-4 d-flex justify-content-center row_progetto\" data-palDig=\"" + n["palestra"] + "\" data-attivita=\"" + n["attivita"] + "\" data-tema=\"" + n["tema"] + "\"><div class=\"card\"><div class=\"card-body text-center\"><div class=\"card-img py-2\"><img src=\"" + n["linkImg"] + "\" alt=\"" + n["descrizioneImg"] + "\"></div><div class=\"name h5\">" + n["titolo"] + "</div><div class=\"description\"> " + n["descrizioneBreve"] + " </div><a class=\"btn btn-primary mt-3\" role=\"button\" target=\"_blanck\" href=\"" + n["linkRisorsa"] + "\">" + n["CTA"] + "</a></div></div></div>";
  });
  $("#res").html(outputstr);
}

function loadDataRighe(json_da_stampa){
  var outputstr = "";
  $.each(json_da_stampa, function (i, n) {
      var stringaCatPalAtt = "";
      var appSplitTemi = n["tema"].split("-");
      var appSplitAtt = n["attivita"].split("-");
      var appSplitPal = n["palestra"].split("-");
      stringaCatPalAtt += cicloStampa(appSplitPal, "palestra");
      stringaCatPalAtt += " / ";
      stringaCatPalAtt += cicloStampa(appSplitAtt, "attivita");
      stringaCatPalAtt += " / ";
      stringaCatPalAtt += cicloStampa(appSplitTemi, "tema");
      console.log(stringaCatPalAtt.trim(" ").split(" / "));
      if(stringaCatPalAtt.trim(" ").split(" / ").length !== 3) stringaCatPalAtt = "";
      outputstr += "<div class=\"card w-100 mb-4\"><div class=\"row g-0\"><div class=\"col-md-2 positionRelative\"><img src=\"" + n["linkImg"] + "\" class=\"img-fluid rounded-start\" alt=\"" + n["descrizioneImg"] + "\"></div><div class=\"col-md-8\"><div class=\"card-body\"><h5 class=\"card-title\"><a href=\"" + n["linkRisorsa"] + "\" target=\"_blank\">" + n["titolo"] + "</a></h5><p class=\"card-text\">" + n["descrizione"] + "</p><p class=\"card-text\"><small class=\"text-muted\"><p>" + stringaCatPalAtt + "</p></small></p></div></div></div></div>";
  });
  $("#res").html(outputstr);
}

function cicloStampa(splittato, tipo){
  strignaRitorno = "";
  for(var i = 0 ; i < splittato.length ; i++){
    if(i > 0) strignaRitorno += " & ";
    if (tipo == "palestra") strignaRitorno += " " + palDigi_var[splittato[i]] + " ";
    if (tipo == "attivita") strignaRitorno += " " + attivita_var[splittato[i]] + " ";
    if (tipo == "tema") strignaRitorno += " " + temi_var[splittato[i]] + " ";
  }
  return strignaRitorno;
}
