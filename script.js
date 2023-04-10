var container = document.querySelector('#container');

var panorama = new PANOLENS.ImagePanorama('1.jpeg');
var panorama2 = new PANOLENS.ImagePanorama('2.jpeg');
var panorama3 = new PANOLENS.ImagePanorama('3.jpeg');

var viewer = new PANOLENS.Viewer({ container: container });

viewer.add(panorama, panorama2, panorama3);

var infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);

infospot.position.set(0, -2000, -5000);

panorama.add(infospot);

infospot.addEventListener('click', function () {

    viewer.setPanorama(panorama2);

});

var infospot2 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);

infospot2.position.set(0, -2000, -5000);

panorama2.add(infospot2);

infospot2.addEventListener('click', function () {

    viewer.setPanorama(panorama3);

});

var infospot3 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);

infospot3.position.set(0, -2000, -5000);

panorama3.add(infospot3);

infospot3.addEventListener('click', function () {

    viewer.setPanorama(panorama);

});