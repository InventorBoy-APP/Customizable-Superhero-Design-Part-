var canvas= new fabric.Canvas("myCanvas") 


hero_x=100;
hero_y=100;

body_image_width=30;
body_image_height=30;

var hero_object="";
var body_image_object="";
function player_update(){
    fabric.Image.fromURL("images.jpg",function(Img){
        hero_object=Img;
        hero_object.scaleToWidth(150);
        hero_object.scaleToHeight(150);
        hero_object.set({
            top:hero_y,left:hero_x
        });
        canvas.add(hero_object);
    })
}
function new_img(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        body_image_object=Img;
        body_image_object.scaleToWidth(body_image_width);
        body_image_object.scaleToHeight(body_image_height);
        body_image_object.set({
            top:hero_y,left:hero_x
        });
        canvas.add(body_image_object);
    })
}
