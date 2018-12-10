var magnifyGlass=(function(){
    return {
        init(ele){
            this.$ele=document.querySelector(ele);
            this.$imgBox=this.$ele.querySelector('.imgBox')
            this.$move=this.$ele.querySelector('magnify')
            this.event();
        },
        event(){
    
            let _this=this;
            
            this.$imgBox.onmouseenter=function(e){
                
               console.log(111)
               
            }
            
        }
    }
}())