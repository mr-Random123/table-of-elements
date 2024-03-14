var dragvalue;
var dragelement;
var debounce;
document.body.onload = () =>{
    var elements = document.getElementsByClassName("wrapper");
    for (let i = 0; i < elements.length; i++){
        let element = elements[i];
        element.style.position = "absolute";
        element.onmousedown = () =>{
            debounce = true;
            dragvalue = window.getComputedStyle(element);
            dragelement = element;
        }
    }
    
  
    document.onmouseup = (e) => {
        debounce = false;
    }
    document.onmousemove = (e) => {
        if (debounce == true){
            var x = parseInt(dragvalue.left);
            var y = parseInt(dragvalue.top);
        
            dragelement.style.left = `${x+e.movementX}px`;
            dragelement.style.top = `${y+e.movementY}px`;
        }
    }
    
}