/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
import './index.css';
// eslint-disable-next-line import/extensions
import anime from '../node_modules/animejs/lib/anime.es.js';
import '../node_modules/granim/dist/granim.min.js';

(function canvasBg() {
  const canvasBg = document.createElement('canvas');
  canvasBg.id = 'canvas-background';
  document.body.appendChild(canvasBg);

  let canvasBackground = new Granim({
    element: canvasBg,
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    states: {
      'default-state': {
        gradients: [
          [
            { color: '#3d001f', pos: 0.2 },
            { color: '#3d0015', pos: 0.8 },
            { color: '#433b69', pos: 1 },
          ],
          [
            { color: '#785800', pos: 0 },
            { color: '#00260c', pos: 0.2 },
            { color: '#001826', pos: 0.75 },
          ],
        ],
      },
    },
  });
})();

(function etchASketch() {
  let gridItem;
  const gridItemArr = [];

  (function createTitle() {
    const title = document.createElement('h1');
    title.textContent = 'Etch-A-Sketch';
    title.id = 'title';

    document.body.appendChild(title);
  })();

  (function createSketchPad() {
    const sketchDiv = document.createElement('div');
    sketchDiv.id = 'sketchContainer';
    document.body.appendChild(sketchDiv);

    for (let a = 0; a < 4096; a += 1) {
      gridItem = document.createElement('div');
      gridItem.className = 'gridItem';
      gridItemArr.push(gridItem);
      sketchDiv.appendChild(gridItem);
    }
  })();

  (function colorBwBtn() {
    const btnDiv = document.createElement('div');
    btnDiv.id = 'buttonsDiv';
    document.body.appendChild(btnDiv);

    const colorButton = document.createElement('button');
    colorButton.textContent = 'Color';
    colorButton.id = 'colorBtn';
    btnDiv.appendChild(colorButton);

    const bwButton = document.createElement('button');
    bwButton.textContent = 'Black';
    bwButton.id = 'bwBtn';
    btnDiv.appendChild(bwButton);

    const resetbtn = document.createElement('button');
    resetbtn.textContent = 'Reset';
    resetbtn.id = 'reset';
    btnDiv.appendChild(resetbtn);

    function color() {
      anime({
        targets: colorButton,
        translateX: {
          value: '*=1.5',
          duration: 500,
        },
        width: {
          value: '+=10px',
          duration: 500,
          easing: 'easeInOutSine',
        },
        rotate: {
          value: '+=1turn',
          duration: 500,
          easing: 'easeInOutSine',
        },
        direction: 'alternate',
      });

      gridItemArr.forEach((grid) => {
        grid.addEventListener('mouseover', getRandomColor);

        function getRandomColor() {
          const letters = '0123456789ABCDEF';
          let hexNum = '#';
          for (let i = 0; i < 6; i += 1) {
            hexNum += letters[Math.floor(Math.random() * 16)];
          }
          if (hexNum === '#000000') {
            grid.removeEventListener('mouseover', getRandomColor);
          }
          if (grid.style.backgroundColor !== '#FFFFFF') {
            grid.removeEventListener('mouseover', getRandomColor);
          }
          grid.style.backgroundColor = hexNum;
        }
      });
    }

    colorButton.addEventListener('click', color);

    function bw() {
      anime({
        targets: bwButton,
        translateX: {
          value: '*=1.5',
          duration: 500,
        },
        width: {
          value: '+=10px',
          duration: 500,
          easing: 'easeInOutSine',
        },
        rotate: {
          value: '+=1turn',
          duration: 500,
          easing: 'easeInOutSine',
        },
        direction: 'alternate',
      });

      gridItemArr.forEach((grid) => {
        grid.addEventListener('mouseover', bandw);

        function bandw() {
          grid.style.backgroundColor = '#000000';
        }
      });
    }

    bwButton.addEventListener('click', bw);

    function resetSketch() {
      anime({
        targets: resetbtn,
        width: {
          value: '+=10px',
          duration: 500,
          easing: 'easeInOutSine',
        },
        rotate: {
          value: '+=1turn',
          duration: 500,
          easing: 'easeInOutSine',
        },
        direction: 'alternate',
      });

      gridItemArr.forEach((grid) => {
        grid.style.backgroundColor = '#FFFF';
      });
    }

    resetbtn.addEventListener('click', resetSketch);
  })();

  anime({
    targets: '#title',
    duration: 1500,
    delay: anime.stagger(500, { start: 300, from: 'first' }),
    opacity: [0, 1],
    translateY: ['-1rem', 0],
    direction: 'normal',
  });

  anime({
    targets: '#sketchContainer',
    duration: 1500,
    delay: 700,
    opacity: [0, 1],
    translateY: ['2rem', 0],
    direction: 'normal',
  });

  anime({
    targets: '#buttonsDiv',
    duration: 1500,
    delay: 1400,
    opacity: [0, 1],
    translateY: ['-1rem', 0],
    direction: 'normal',
  });
})();
