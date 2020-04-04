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

            anime({
              targets: colorButton,
              translateX: {
                value: '*=1.5',
                duration: 500
              },
              width: {
                value: '+=10px',
                duration: 500,
                easing: 'easeInOutSine'
              },
              rotate: {
                value: '+=1turn',
                duration: 500,
                easing: 'easeInOutSine'
              },
              direction: 'alternate'
            });

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

            anime({
              targets: bwButton,
              translateX: {
                value: '*=1.5',
                duration: 500
              },
              width: {
                value: '+=10px',
                duration: 500,
                easing: 'easeInOutSine'
              },
              rotate: {
                value: '+=1turn',
                duration: 500,
                easing: 'easeInOutSine'
              },
              direction: 'alternate'
            });

            gridItemArr.forEach(grid => {
              grid.addEventListener("mouseover", bandw);

              function bandw() {
                grid.style.backgroundColor = "#000000";
              }
            })
          };

          resetbtn.addEventListener("click", resetSketch)

          function resetSketch() {

            anime({
              targets: resetbtn,
              width: {
                value: '+=10px',
                duration: 500,
                easing: 'easeInOutSine'
              },
              rotate: {
                value: '+=1turn',
                duration: 500,
                easing: 'easeInOutSine'
              },
              direction: 'alternate'
            });

            gridItemArr.forEach(grid => {
           
              grid.style.backgroundColor = "#FFFF"
              
            })
          }

          


  })();

  anime({
    targets: "#title",
    duration: 1500,
    delay: anime.stagger(500, { start: 300, from: "first" }),
    opacity: [0, 1],
    translateY: ["-1rem", 0],
    direction: "normal",

  });

  anime({
    targets: "#sketchContainer",
    duration: 1500,
    delay: 700,
    opacity: [0, 1],
    translateY: ["2rem", 0],
    direction: "normal",

  });

  anime({
    targets: "#buttonsDiv",
    duration: 1500,
    delay: 1400,
    opacity: [0, 1],
    translateY: ["-1rem", 0],
    direction: "normal",

  });


})();




