var images = document.getElementsByTagName('img');
var p = document.getElementsByTagName('p');

// Change the images
for (var i = 0, l = images.length; i < l; i++) {
    source = images[i].alt;
    if (source.includes('trump') || source.includes('Trump')) {
        images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
    }
}


// Source: https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
// Change the text
document.body.innerHTML = document.body.innerHTML.replace(/Trump/g, "COOKIE MONSTER");
document.body.innerHTML = document.body.innerHTML.replace(/Donald/g, "");
