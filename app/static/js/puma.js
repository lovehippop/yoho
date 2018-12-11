var goodsData=(function(){
    return {
        init(){
            this.event();
            this.showData();
            this.$shoplist=document.querySelector('.shop-list')

        },
        event(){
            let _this=this;
        },
        showData(){
            sendAjax('/static/json/pama.json')
            .then(data=>{
                data=JSON.parse(data);
                for(let attr in data){
                    var $divbox=document.createElement('div');
                    $divbox.className='goods-info';
                    var $goodImg=document.createElement('div');
                    var $a=document.createElement('a');
                    var $img=document.createElement('img');
                    $img.src='/static/images/puma/'+data[attr].src+'.jpg';
                    $divbox.appendChild($goodImg);
                    $goodImg.appendChild($a);
                    $a.appendChild($img);
                    this.$shoplist.appendChild($divbox);
                    var $goodmes=document.createElement('div');
                    $goodmes.className='goods-message';
                    $divbox.appendChild($goodmes);
                    var $a=document.createElement('a');
                    $a.innerHTML=data[attr].name;
                    $goodmes.appendChild($a);
                    
                    var $divbrand=document.createElement('div');
                    $divbrand.className='brand';
                    $divbrand.innerHTML=data[attr].brand;
                    $goodmes.appendChild($divbrand);
                    var $divprice=document.createElement('div');
                    $divprice.className='price';
                    $divprice.innerHTML=data[attr].price;
                    $goodmes.appendChild($divprice);
                    


                    


                }

            })
        }
    }
}())