// Get the canvas context
var ctx = document
  .querySelector('canvas')
  .getContext('2d');

// Fix a stupid context bug that blurs
// the pixels
ctx.translate(0.5, 0.5);

//
// TODO: Put all drawing logic and shtuff here...
//

ctx.fillStyle = 'Green';
ctx.fillRect(0, 0, 200, 400);

ctx.fillStyle = 'white';
ctx.fillRect(200, 0, 200, 400);

ctx.fillStyle= '#F29405';
ctx.fillRect(400, 0, 200, 400);
