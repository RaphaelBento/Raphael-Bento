  function EscondElementos(e){
    $(".EspacCard").remove();
    $("#TitleCards").remove();
    switch(e)
    {
      case 'BuildIt': 
      $("#BoxBuildIt").css("display","block");
      console.log("Elemento recebido " + e);
      break;

      case 'Libra':
      $("#BoxLibra").css("display","block");  
      console.log("Elemento recebido " + e);
      break;

      case 'ABSIS': 
      $("#BoxAbsis").css("display","block");
      console.log("Elemento recebido " + e);
      break;

      case 'BBDI':
      $("#BoxBBDI").css("display","block");  
      console.log("Elemento recebido " + e);
      break;

      case 'Mynarski':
        $("#BoxMynarski").css("display","block");  
        console.log("Elemento recebido " + e);
        break;

      case 'NUMERIA':
        $("#BoxNUMERIA").css("display","block");
        console.log("Elemento recebido " + e);
        break;
    }
   }