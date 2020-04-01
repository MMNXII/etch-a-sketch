import './index.css';
import anime from '../node_modules/animejs/lib/anime.es.js';


(function () {

  let gridItem;
  let gridItemArr = [];


  (function createTitle () {
    var title = document.createElement("h1");
        title.textContent = "Etch-A-Sketch";
        title.id = "title";

        document.body.appendChild(title);
  })();


  (function createSketchPad () {

    let sketchDiv = document.createElement("div");
        sketchDiv.id = "sketchContainer";
        document.body.appendChild(sketchDiv);

      for (var a = 0; a < 4096; a++) {

        gridItem = document.createElement("div");
        gridItem.className = "gridItem";
        gridItemArr.push(gridItem);
        sketchDiv.appendChild(gridItem);
      }

  })();


  (function colorBwBtn () {
    let btnDiv = document.createElement("div");
        btnDiv.id = "buttonsDiv";
        document.body.appendChild(btnDiv);


    let colorButton = document.createElement("button");
        colorButton.textContent = "Color";
        colorButton.id = "colorBtn";
          btnDiv.appendChild(colorButton);
          
    let bwButton = document.createElement("button");
        bwButton.textContent = "Black";
        bwButton.id = "bwBtn";
          btnDiv.appendChild(bwButton);

  
    let resetbtn = document.createElement("button");
        resetbtn.textContent = "Reset";
        resetbtn.id = "reset";
          btnDiv.appendChild(resetbtn);

          colorButton.addEventListener("click", color);

          function color() {
            gridItemArr.forEach(grid => {
              grid.addEventListener("mouseover", getRandomColor);

              function getRandomColor() {
                let letters = "0123456789ABCDEF";
                let color = "#";
                  for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                  }
                    if (color == "#000000") {
                      grid.removeEventListener("mouseover", getRandomColor);
                  } if (grid.style.backgroundColor != "#FFFFFF") {
                      grid.removeEventListener("mouseover", getRandomColor);
                  }
                      grid.style.backgroundColor = color;
              };
            });
          }

          bwButton.addEventListener("click", bw);
          
          function bw() {
            gridItemArr.forEach(grid => {
              grid.addEventListener("mouseover", bandw);

              function bandw() {
                grid.style.backgroundColor = "#000000";
              }
            })
          };

          resetbtn.addEventListener("click", resetSketch)

          function resetSketch() {
            gridItemArr.forEach(grid => {
           
              grid.style.backgroundColor = "#FFFF"
              
            })
          }

          


  })();


})();




