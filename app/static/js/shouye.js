var addproduct=(function(){
    return {
        init(){
            this.event();
            this.showdata();
            this.$ulHot=document.querySelector('.hot-pro-main');
        },
        event(){
            let _this=this;

        },
        showdata(){
            sendAjax('/static/json/shouye.json')
            .then(data=>{
                
		   	data=JSON.parse(data)
		   	for(var attr in data){
		   		// console.log(data[attr])
            var $li=document.createElement('li');
             var $a=document.createElement('a');

		   	var $img=document.createElement('img')
		   	$img.src=data[attr].src;
               $li.appendChild($a);
               $a.appendChild($img);
		   	this.$ulHot.appendChild($li)
		   	 	
            }
        })

    }
}
}())