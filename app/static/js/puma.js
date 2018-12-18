
var urljson=api.urljson;

var goodsData=(function(){
    var $shopthelist=document.querySelector('.shop-list')
    
    return {
        init(){
            this.event();
            this.showData();
            this.$shoplist=document.querySelector('.shop-list')

        },
        event(){
            let _this=this;
            $shopthelist.onclick=function(e){
                e=e||window.event;
                
                var target=e.target || e.srcElement;
                if(target.nodeName==='IMG'||target.nodeName==='A'){
                    
                     let data=target.parentNode.parentNode.parentNode
                    
                     localStorage.shoplist= data.querySelector('.goods-message a').innerHTML;
                }

            }
        },
        showData(){
            var url=urljson+'pama.json';
            sendAjax(url)
            .then(data=>{
                data=JSON.parse(data);
                for(let attr in data){
                    // console.log(data[attr].name);
                    var $divbox=document.createElement('div');
                    $divbox.className='goods-info';
                    var $goodImg=document.createElement('div');
                    var $a=document.createElement('a');
                    $a.href='product_details.html';
                    $a.target='_blank';
                    var $img=document.createElement('img');
                    $img.src='images/puma/'+data[attr].src+'.jpg';
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