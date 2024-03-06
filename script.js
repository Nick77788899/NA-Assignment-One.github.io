require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Home",
  "esri/widgets/Sketch",
  "esri/layers/GraphicsLayer"
], function (esriConfig, Map, MapView, Home, Sketch, GraphicsLayer) {
  esriConfig.apiKey =
    "AAPKba49800962e1496a970ca351803746aci22OB8ovoutr16rXtMZzQHB9wmeTE8vEjvfZOD8FmwGPEKUxisJ3L56nWtGLbNQY";

  const graphicsLayer = new GraphicsLayer();
  const map = new Map({
    basemap: "arcgis/topographic", // base map styles service
    Layers: [graphicsLayer]
  });

  const view = new MapView({
    map: map,
    center: [-118.805, 34.027], // Longitude, latitude
    zoom: 13, // Zoom level
    container: "viewDiv" // Div element
  });
  view.when(() => {
    const sketch = new Sketch({
      layer: graphicsLayer,
      view: view,
      // graphic will be selected as soon as it is created
      creationMode: "update"
    });

    view.ui.add(sketch, "top-right");
  });

  const homeBtn = new Home({
    view: view
  });

  view.ui.add(homeBtn, "top-left"); // Add the home button to the top left corner of the view
});