function getStyle(ele,attr){
    if(window.getComputedStyle){
    	return window.getComputedStyle(ele,false)[attr];
    }
    return ele.currentStyle[attr];
}