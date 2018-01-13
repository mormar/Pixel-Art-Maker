    var chosenColor = "#002567";
    var changeColor = $(".jscolor").change( function(){
        chosenColor = changeColor.val();
        console.log("chosen color: "+ chosenColor);
    });

    $("#button").click(function makeGrid(event) {
    console.log("Work nice :D");

    var inputHeight = $("#sizePicker").find($("#input_height")); 
    var rows = inputHeight.val();
    console.log(rows);

    var inputWidth = $("#sizePicker").find($("#input_width"));
    var colums = inputWidth.val();
    console.log(colums);

    //$("tr td").remove();
    $("#pixel_canvas").find($("td")).remove(); // Taht's the same but more safe
    //$("table tr").remove();
    $("#pixel_canvas").find($("tr")).remove(); // Taht's the same but more safe

      for(var row = 0; row < rows; row++){
        $("#pixel_canvas").append("<tr id=\""+row+"\">");
          for(var col = 0; col < colums; col++){
            $("#" + row).append("<td id=\""+row +"_"+ col+"\"></td>")
          }
              $("#" + row).append("</tr>");
      }
      $("tr").removeAttr("id");

      $("#pixel_canvas_preview").find($("td")).remove(); // Taht's the same but more safe
      //$("table tr").remove();
      $("#pixel_canvas_preview").find($("tr")).remove(); // Taht's the same but more safe

          for(var row = 0; row < rows; row++){
           $("#pixel_canvas_preview").append("<tr id=\""+"M"+row+"\">");
             for(var col = 0; col < colums; col++){
               $("#M" + row).append("<td id=\""+"M"+row +"_"+ col+"\"></td>")
             }
                 $("#M" + row).append("</tr>");
         }
         $("tr").removeAttr("id");

      event.preventDefault(); // That's for stop autorefreshing
    });

  $("#button").click( function() {
      $(this).css("color", "white");
  });

  $("#rubber").click(function(){
    chosenColor = "#ffffff";
    console.log("Rubber");
  });
  $("#rubber").hover(function(){
      $(this).css({"color":"white"});
  },function(){
      $(this).css({"color":"black"});
  });

  $("#trash").click(function(){
    $("#pixel_canvas").find($("td")).css("background-color","white");
    $("#pixel_canvas_preview").find($("td")).css("background-color","white");
    console.log("trash");
  });
  $("#trash").hover(function(){
      $(this).css({"color":"white"});
  },function(){
      $(this).css({"color":"black"});
  });

  var grid = true;
  $("#grid").click(function(){
    if(grid == true){
      $("#pixel_canvas").find($("td")).css("border","white");
      $("#pixel_canvas").find($("tr")).css("border","white");
      grid = false;
      console.log(grid);
    }
    else if(grid == false){
      $("#pixel_canvas").find($("td")).css("border","1px solid black");
      $("#pixel_canvas").find($("tr")).css("border","1px solid black");
      grid = true;
      console.log(grid);
    }
    console.log("#grid");
  });
  $("#grid").hover(function(){
      $(this).css({"color":"white"});
  },function(){
      $(this).css({"color":"black"});
  });

  $("#ff0000").click(function(){
    chosenColor = "#ff0000";
    console.log("#ff0000")
  });
  $("#ff0000").hover(function(){
      $(this).css({"border-radius":"15px"});
  },function(){
      $(this).css({"border-radius":"0px"});
  });

  $("#000000").click(function(){
    chosenColor = "#000000";
    console.log("#000000")
  });
  $("#000000").hover(function(){
      $(this).css({"border-radius":"15px"});
  },function(){
      $(this).css({"border-radius":"0px"});
  });

  $("#3399ff").click(function(){
    chosenColor = "#3399ff";
    console.log("#3399ff")
  });
  $("#3399ff").hover(function(){
      $(this).css({"border-radius":"15px"});
  },function(){
      $(this).css({"border-radius":"0px"});
  });

  $("#8b0000").click(function(){
    chosenColor = "#8b0000";
    console.log("#8b0000")
  });
  $("#8b0000").hover(function(){
      $(this).css({"border-radius":"15px"});
  },function(){
      $(this).css({"border-radius":"0px"});
  });

  $("#ffc0cb").click(function(){
    chosenColor = "#ffc0cb";
    console.log("#ffc0cb")
  });
  $("#ffc0cb").hover(function(){
      $(this).css({"border-radius":"15px"});
  },function(){
      $(this).css({"border-radius":"0px"});
  });

  $("#008000").click(function(){
    chosenColor = "#008000";
    console.log("#008000")
  });
  $("#008000").hover(function(){
      $(this).css({"border-radius":"15px"});
  },function(){
      $(this).css({"border-radius":"0px"});
  });

  $("#cccccc").click(function(){
    chosenColor = "#cccccc";
    console.log("#cccccc")
  });
  $("#cccccc").hover(function(){
      $(this).css({"border-radius":"15px"});
  },function(){
      $(this).css({"border-radius":"0px"});
  });

  $("#ffa500").click(function(){
    chosenColor = "#ffa500";
    console.log("#ffa500")
  });
  $("#ffa500").hover(function(){
      $(this).css({"border-radius":"15px"});
  },function(){
      $(this).css({"border-radius":"0px"});
  });

  $("#8a2be2").click(function(){
    chosenColor = "#8a2be2";
    console.log("#8a2be2")
  });
  $("#8a2be2").hover(function(){
      $(this).css({"border-radius":"15px"});
  },function(){
      $(this).css({"border-radius":"0px"});
  });

  var position;
  $("#pixel_canvas").click(function(event){
    position = event.target.id;
    console.log("position = "+ position);
    if(position !== "pixel_canvas"){
       $("#" + position).css("background-color", chosenColor);
    }
  });
   var positionPreview;
   $("#pixel_canvas").click(function(event){
     positionPreview = event.target.id;
    console.log("positionPreview = "+ positionPreview);
    if(positionPreview !== "#pixel_canvas_preview"){
      $("#M" + positionPreview).css("background-color", chosenColor);
    }
  });
