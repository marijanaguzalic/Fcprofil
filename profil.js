var profil = {
	name: "Marijana",
	lastName: "Guzalic",
	coverImage:"https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.0-9/24993112_10155418386894495_258801312146697510_n.jpg?oh=f62c292f6aa0db833af11ca63f9ec88d&oe=5A8AAC08",
	profileImage:"https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.0-1/c100.3.344.344/s160x160/1620887_10151993254394495_955567886_n.jpg?oh=1ff4228b82334a4dbff6676273b3c081&oe=5A8965FA",
	statusi: [
		'Za domaci smo dobili da napravimo Facebook, samo bolji',
		'Iako ne verujem da cu uspeti, ipak moram probati',
		'jer nikada se ne zna kada se cudo moze desiti'
	]
}



var hero = document.getElementById('hero');
hero.style.backgroundImage.src = "url ('profil.coverImage')";
hero.style.backgroundRepeat = "no-repeat";
hero.style.backgroundPosition = "center";  

var profileImg = document.getElementById('profile-img');
profileImg.src = profil.profileImage; 
profileImg.alt = profil.name + " " + profil.lastName + "profile photo";

var fullName = document.getElementById("full-name");
fullName.innerHTML = profil.name + " " + profil.lastName;

var statusiDiv = document.getElementById('statusi');
var div;
var p;

for(var i = profil.statusi.length-1; i >= 0; i--){
	div = document.createElement('div');
	p = document.createElement('p');
	p.innerHTML = profil.statusi[i];
	div.appendChild(p);
	div.classList.add('status');
	statusiDiv.appendChild(div);
}