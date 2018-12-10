var magnifyGlass=(function(){
    return {
        init(ele){
            this.$ele=document.querySelector(ele);
            this.$imgBox=this.$ele.querySelector('.imgBox')
            this.$move=this.$ele.querySelector('.magnify')
            this.$bigImg=this.$ele.querySelector('.showbigimg')
        
            this.event();
        },
        event(){
    
            let _this=this;
            
            this.$imgBox.onmouseenter=function(e){
                
                e=e||window.event;
                _this.$move.style.display='block';
                _this.$bigImg.style.display='block';
                _this.$bigImg.querySelector('img').style.width=this.offsetWidth*2 + 'px';
               
            }
            this.$imgBox.onmouseleave=function(){
                _this.$move.style.display='none';
                _this.$bigImg.style.display='none';
               
            }
            this.$imgBox.onmousemove=function(ev){
    
                ev=ev||window.event;
                var maxX=this.clientWidth-_this.$move.offsetWidth,
                maxY=this.clientHeight-_this.$move.offsetHeight;
          
                
                var x=ev.clientX-this.offsetLeft-_this.$move.offsetWidth/2,
                y=ev.clientY-this.offsetTop-_this.$move.offsetHeight/2;
                
                if(x>=maxX){
                    x=maxX
                }else if(x< 0){
                    x=0;
                }
                if(y>=maxY){
                    y=maxY
                }
                else if(y<=0){
                    y=0;
                }
                _this.$move.style.left=x+'px';
                _this.$move.style.top=y+'px';
                // 放大后的图片的位置
                var img = _this.$bigImg.querySelector('img');
                img.style.left = - x*2 + 'px';
                img.style.top = -y*2 + 'px';

               }
                //    小图片列表
              

            
        }
    }
}())