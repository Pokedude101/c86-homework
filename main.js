var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL("BirthdyaImage.jpg", function(img){
        bday = img;

        bday.scaleToWidth(700);
        bday.scaleToHeight(510);
        bday.set({
        top:0,
        left:0
        });

        canvas.add(bday);

    })
}

function playSound(){
	x.play();
}
