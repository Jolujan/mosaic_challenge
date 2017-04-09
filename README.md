# Photo mosaic Challenge

The goal of this task is to implement the following flow in a client-side app.
1. A user selects a local image file.
2. The app loads that image, divides the image into tiles, computes the average
 color of each tile, fetches each tile from the server, and composites the
 results into a photo mosaic of the original image.
3. The composited photo mosaic should be displayed according to the following
 constraints:
  - tiles should be rendered a complete row at a time (a user should never
    see a row with some completed tiles and some incomplete)
  - the mosaic should be rendered from the top row to the bottom row.
4. The client app should make effective use of parallelism and asynchrony.

The project skeleton contains a lightweight server (written in node) for
serving the client app and the tile images. To start it, run npm start.<BR>
`/              serves mosaic.html`<BR>
`/(js|css)/*    serves static resources`<BR>
`/color/<hex>   serves an SVG mosaic tile for color <hex>.  e.g., /color/0e4daa`<BR>

The tile size should be configurable via the code constants in js/mosaic.js.
The project skeleton is already set up to include those constants in both the
mosaic client and the mosaic server.  The default size is 16x16.

You should:
- use HTML5 features where appropriate;

You may:
- edit `/etc/hosts`;
- use any HTML5 feature supported by current Chrome (e.g., Promise, Worker);
- be as creative as you like with the submission UI (file input, drag & drop,
 etc); however, it is not the focus of the task, a minimal UI is fine.

Your must NOT:
- use JS libraries (e.g. jQuery, Modernizr, React) as browser APIs
 are sufficient for the exercise;
- use any build tools other than npm (e.g. Browserify, webpack, etc)
- resize or scale the uploaded image
- modify the server