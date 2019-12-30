/* TODO: Automatisoidaan navigointilistan päivitykset, kun tehdään uusia sivuja
Eli täytyy muuttaa vain silmukan kokoa*/

window.onload=function(){
	var lista = document.getElementById("dropLista");
	
	var kotiLi = document.createElement("li");
	var kotiA = document.createElement("a");
	kotiA.setAttribute("href","/programming/index.html");
	kotiLi.appendChild(kotiA);
	
	lista.appendChild(kotiLi);
	
  kotiA.textContent = "Koti";
  
  function luoLinkki(s1,s2,lista){
    var luoLi=document.createElement("li");
    var luoA = document.createElement("a");
    luoA.setAttribute("href",s1);
    luoA.textContent=s2;
    luoLi.appendChild(luoA);
    lista.appendChild(luoLi);
  }
  luoLinkki("https://resepti-toni.appspot.com/","Reseptit (2019)",lista)
  luoLinkki("https://kirjanpitouusi.appspot.com/","Kirjanpito (2018)",lista)
  luoLinkki("/programming/websovellukset/websovellukset.html","Websovellukset",lista)
  luoLinkki("/programming/ohjelmointi2/ohjelmointi2.html","Ohjelmointi 2",lista)
  luoLinkki("/programming/ohjelmointi1/ohjelmointi1.html","Ohjelmointi 1",lista)
    
}