//*******************  Changing Product***************

//Creating Arrays for images and texts

var imgb=["StackOfBooks.jpg", "idea.jpg", "java.jpg", "js.jpg"];
var imgc=["cd.jpg", "Adele.jpg","bodyguard.jpg", "girlFire.jpg"];
var imgd=["dvd.jpg", "inception.jpg", "matrix.jpg", "django.jpg"];
var textb=["Click on the left menu on 'Books' to browse a sample of our IT books we have in stock.", "The Web designer's idea book is written by Patrick McNeil. The author provides a great guide of theme, style and trends for designing a website.", "Head First Java is written by Kathy Sierra and Bert Bates. If you are new to object-oriented programming, this book will help you to understand the concept. This manual is a full introduction to object-oriented programming and Java. NB. the image is a the property of O'Reilly Media.", "JavaScript: the good part is written by Douglas Crockford. The author indicates great ideas that make JavaScript an extraordinary language to learn."];
var textc=["What kind of music do you like? Pop, Soul, RnB, Salsa? You name it! We have a great collection of music in the store. Drop by or browse online to find the latest album. Click back on CD's from the left menu to browse a sample of our CD's", "Adele, 19 is the debut album of Adele, a British songwriter and singer. The album was released in 2008. Her first album was a hit.", "The Bodyguard is an American film starred with Whitney Houston and Kevin Costner. The soundtrack was sold more than 45 million copies all over the world.  It became the best-selling soundtrack of the history.", "Released in 2012, 'Girl on Fire' is a song recorded by Alicia Keys, an American singer-songwriter. The song is a mix of R&B and hip hop style written by Keys, Jeff Bhasker, Salaam Remi and Billy Squier."];
var textd=["Movies are a great way to enjoy an evening with the whole family. Our collection is from classic to recent movies. You prefer, TV series? No problem, we store a great deal of series. We have all the series you can think of. Click back on DVDs and check out our sample of movies that we have from our large stock", "Released in 2010, Inception is a science-fiction movie co-produced by Christopher Nolan and Emma Thomas. As a box office success, the film won four Academy Awards for best cinematography, best visual Effects, best Sound mixing, and best Sound editing. The main character, Leonardo DiCaprio is a professional stealer who takes information from people's mind by penetrating the subconscious.", "Released in 1999, The Matrix is a trilogy science fiction movie written and directed by The Wachowskis brothers. Keanu Reeves, the main character representing Neo, a computer programmer who discovered that the reality in which humans live is in fact a simulated reality called ‘the Matrix’. ", "'Django Unchained', a western movie written and directed by Quentin Tarantino. The film was released in starring Jamie Foxx, Leonardo DiCaprio, Christoph Waltz, Samuel L. Jackson and Kerry Washington. "];
var cntb=0, cntc=0, cntd=0;
//Creation of function to change the image and associating texts
function changeProduct(x)
{

	if(x==0)
	{
		document.getElementById('prodimg').src="images/"+imgb[cntb];
        document.getElementById('txt').innerHTML=textb[cntb];
		cntb++;
		if(cntb==4)
			cntb=0;
	}
if(x==1)
	{
		document.getElementById('prodimg').src="images/"+imgc[cntc];
        document.getElementById('txt').innerHTML=textc[cntc];
		cntc++;
if(cntc==4)
			cntc=0;
	}
	if(x==2)
	{
		document.getElementById('prodimg').src="images/"+imgd[cntd];
        document.getElementById('txt').innerHTML=textd[cntd];
		cntd++;
         if(cntd==4)
			cntd=0;
	}
}


//******************** Changing Font Color of Text *********
function chgColor(col){
	switch(col){
      case 'colorRed':
        document.body.style.color  = "red";
        break;
		case 'colorPurple':
        document.body.style.color  = "#9606a7";
        break;
		case 'colorBlue':
        document.body.style.color  = "#56578d";
        break;
		case 'colorGreen':
        document.body.style.color  = "green";
        break;
}
}
