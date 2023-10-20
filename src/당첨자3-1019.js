var seed = prompt("전체 응모자 수 : ","");
          var picked = Math.floor((Math.random() * seed) + 1);
    
          document.write("전체 응모자 수 : " + seed + "명");
          document.write("<br>");
          document.write("당첨자 : " + picked + "번");