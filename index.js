let sketchContainer = document.getElementById("sketchContainer");

  function etch() {
    for (a = 0; a < 4096; a++) {
      let div = document.createElement("div");
        sketchContainer.appendChild(div);
        div.className = "gridItem";

      let colorButton = document.getElementById("colorBtn");
        colorButton.addEventListener("click", color);

      function color() {
        div.addEventListener("mouseover", getRandomColor);

          function getRandomColor() {
            let letters = "0123456789ABCDEF";
            let color = "#";
              for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
              }
                if (color == "#000000") {
                  div.removeEventListener("mouseover", getRandomColor);
              } if (div.style.backgroundColor != "#FFFFFF") {
                  div.removeEventListener("mouseover", getRandomColor);
                }
                  div.style.backgroundColor = color;
            }
          }

    let blackAndWhite = document.getElementById("blackAndWhiteBtn");
      blackAndWhite.addEventListener("click", bw);

      function bw() {
        div.addEventListener("mouseover", bandw);

        function bandw() {
          div.style.backgroundColor = "#000000";
        }
      }
  
    
    let reset = document.getElementById("reset");
      reset.addEventListener("click", resetSketch);

      function resetSketch() {
        div.style.backgroundColor = "#FFFFFF";

      }
    }
  }


  etch();