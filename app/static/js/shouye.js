var urljson=api.urljson;


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
            var url=urljson+'shouye.json'
            sendAjax(url)
            .then(data=>{
                
		   	data=JSON.parse(data)
		   	for(var attr in data){
		   		// console.log(data[attr])
            var $li=document.createElement('li');
             var $a=document.createElement('a');
                $a.href=data[attr].href;
                $a.target='_blank';
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