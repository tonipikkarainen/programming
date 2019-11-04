/* TODO: Automatisoidaan navigointilistan päivitykset, kun tehdään uusia sivuja
Eli täytyy muuttaa vain silmukan kokoa*/

window.onload=function(){
	var lista = document.getElementById("dropLista");
	
	var kotiLi = document.createElement("li");
	var kotiA = document.createElement("a");
	kotiA.setAttribute("href","/programming/index.html");
	kotiLi.appendChild(kotiA);
	
	lista.appendChild(kotiLi);
	//kotiA.setAttribute("value","Koti");
  kotiA.textContent = "Koti";
  function luoLinkki(s1,s2,lista){
    var luoLi=document.createElement("li");
    var luoA = document.createElement("a");
    luoA.setAttribute("href",s1);
    luoA.textContent=s2;
    luoLi.appendChild(luoA);
    lista.appendChild(luoLi);
  }

  luoLinkki("https://kirjanpitouusi.appspot.com/","Kirjanpito (2018)",lista)
  luoLinkki("https://resepti-toni.appspot.com/","Reseptit (2019)",lista)
    /*var listaKir=document.createElement("li");
    var listaKirA = document.createElement("a");
    listaKirA.setAttribute("href","https://kirjanpitouusi.appspot.com/");
    listaKirA.textContent="Kirjanpito (2018)";
    listaKir.appendChild(listaKirA);  

    lista

    var listaWeb=document.createElement("li");
    var listaWebA = document.createElement("a");
    listaWebA.setAttribute("href","/programming/websovellukset/websovellukset.html");
    listaWebA.textContent="Websovellukset";
    listaWeb.appendChild(listaWebA);
    
    lista.appendChild(listaWeb);
    
    var listaOhj1=document.createElement("li");
    var listaOhj1A = document.createElement("a");
    listaOhj1A.setAttribute("href","/programming/ohjelmointi1/ohjelmointi1.html");
    listaOhj1A.textContent="Ohjelmointi 1";
    listaOhj1.appendChild(listaOhj1A);
    
    lista.appendChild(listaOhj1);
    
    var listaOhj2=document.createElement("li");
    var listaOhj2A = document.createElement("a");
    listaOhj2A.setAttribute("href","/programming/ohjelmointi2/ohjelmointi2.html");
    listaOhj2A.textContent="Ohjelmointi 2";
    listaOhj2.appendChild(listaOhj2A);
    
    lista.appendChild(listaOhj2);*/
    
   
    
    /*for(var i=0 ; i<9 ; i++){
		var luku = i+1;
		var listaLi = document.createElement("li");
		var listaA = document.createElement("a");
		listaA.setAttribute("href","teht"+luku+".html");
		listaLi.appendChild(listaA);
		
		lista.appendChild(listaLi);
		//listaA.setAttribute("value","Tehtävä "+luku);
		listaA.textContent="Tehtävä "+luku;
	}*/
}