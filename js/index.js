'use strict';


var picture = [{
  'author': '- Senator palpatine',
  'picture': 'Palpatine.jpg'
}, {
  'author': '- Count Dooku',
  'picture': 'Dooku.jpg'
}, {
  'author': '- Princess leia',
  'picture': 'Princess Leia.jpg'
}, {
  'author': '- Yoda',
  'picture': 'Yoda.jpg'
}, {
  'author': '- Obi-Wan-Kenobi',
  'picture': 'Obi-Wan-Kenobi.jpg'
}, {
  'author': '- Darth Vader',
  'picture': 'Dark Vador.jpg'
}];

function Randompicture()
{
	var rnd = Math.floor((Math.random() * 11));
	console.log(picture[rnd].picture);
}

function Getpicture(author) //random search for a picture
{
var rnd = Math.floor((Math.random() * 11));
var end = 0;

	while(!end)
		{
			if(picture[rnd].author.indexOf(author)>-1)
			{
				end = 1;
				console.log(picture[rnd].author);
			}
			
			else
			{
				rnd = Math.floor((Math.random() * 11));
			}
			
			
			
		}
		console.log(picture[rnd].picture);
}

Getpicture('Yoda');
