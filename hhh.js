var images=['alex1.jpeg', 'alexa.jpg', 'alex9.PNG', 'alex11.PNG']
for(i=0; i<images.length; i++){
   var imagesh=images[i]
   var img =document.createElement('img')
    img.setAttribute('src',imagesh);
   document.body.appendChild(img)
   
}
