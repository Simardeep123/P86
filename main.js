var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 function player_update() {
    fabric.Image.fromURL("BirthdayImage.jpg", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(600);
        player_object.scaleToHeight(600);
        player_object.set({
            top: 0,
            left: 0
        });
        canvas.add(player_object);
    });
}

function playSound(){
	x.play();
}
