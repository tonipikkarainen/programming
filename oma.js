/* Automaatisoidaan navigointilistan päivitykset, kun tehdään uusia sivuja
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
    
    var listaWeb=document.createElement("li");
    var listaWebA = document.createElement("a");
    listaWebA.setAttribute("href","/programming/websovellukset/websovellukset.html");
    listaWebA.textContent="Websovellukset";
    listaWeb.appendChild(listaWebA);
    
    lista.appendChild(listaWeb);
    
    var listaOhj1=document.createElement("li");
    var listaOhj1A = document.createElement("a");
    listaWebA.setAttribute("href","/programming/ohjelmointi1/ohjelmointi1.html");
    listaWebA.textContent="Ohjelmointi 1";
    listaWeb.appendChild(listaOhj1A);
    
    lista.appendChild(listaOhj1);
    
    var listaOhj2=document.createElement("li");
    var listaOhj2A = document.createElement("a");
    listaWebA.setAttribute("href","/programming/ohjelmointi2/ohjelmointi2.html");
    listaWebA.textContent="Ohjelmointi 2";
    listaWeb.appendChild(listaOhj2A);
    
    lista.appendChild(listaOhj2);
    
    
    
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