!function(e){html=document.getElementsByTagName("html")[0],e.indexOf("Chrome")!=-1?html.className=html.className+" chrome":e.indexOf("Opera")!=-1?html.className=html.className+" opera":e.indexOf("Firefox")!=-1?html.className=html.className+" firefox":e.indexOf("MSIE")!=-1||1==!!document.documentMode?html.className=html.className+" ie":e.indexOf("Safari")!=-1?html.className=html.className+" safari":html.className=html.className+" other"}(navigator.userAgent),function(){window.addEventListener("load",function(){var e=document.getElementsByTagName("body")[0];form=document.sign_in,elementos=form.elements,e.addEventListener("mousedown",function(e){e.srcElement?element=e.srcElement:e.target&&(element=e.target)});for(var t=0;t<elementos.length;t++)"text"!=elementos[t].type&&"email"!=elementos[t].type&&"password"!=elementos[t].type||(elementos[t].addEventListener("focus",function(){console.log("Hola"),console.log(this.parentElement.children[1].className),this.parentElement.children[1].className=this.parentElement.children[1].className+" active-label"}),elementos[t].addEventListener("blur",function(){console.log("Hola 2"),console.log(this.parentElement.children[1].className),this.parentElement.children[1].className=this.parentElement.children[1].className.replace("active-label","")})),console.log("Dentro del bucle")})}();