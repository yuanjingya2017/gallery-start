var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var dark = document.querySelector('.dark');
var darkflag = true;
btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
var pics = [];
for (var i=1;i<6;i++){
    pics.push('images/pic'+i+'.jpg');
    /* Looping through images */
    var newImage = document.createElement('img');
    newImage.setAttribute('src', pics[i-1]);
    newImage.setAttribute('id', i-1);
    thumbBar.appendChild(newImage);
}
thumbBar.addEventListener('click',function (e) {
    displayedImage.src = pics[e.target.id];
});
dark.addEventListener('click',function () {
    if(darkflag){
        dark.innerHTML = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.3)';
    }
    else{
        dark.innerHTML = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
    darkflag = !darkflag;
});


/* Wiring up the Darken/Lighten button */

