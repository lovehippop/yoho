var shop=(function(){
    var $smalllist=document.querySelector('.smallImg-list')
    var $imgbox=document.querySelector('.imgBox')
    var $showbig=document.querySelector('.showbigimg')
     var linelocal=localStorage.shoplist;
    return {
        init(){
            this.event();
            this.setItem();
            this.$addCar=document.querySelector('.addcar');


        },
        event(){
            let _this=this;
            
        },
        setItem(){
            //获取原有数据
            sendAjax('/static/json/pama.json')
            .then(data=>{
                data=JSON.parse(data);
                var t=0;
                for(let attr in data){
                    
                   
                   
                 if(data[attr].name==linelocal){
                            // console.log(data[attr].name)
                           
                            // console.log(t)
                            break;
                            
                        

                    }
                    t++;
                
                }
                console.log(t);
                $('.product-name')[0].innerHTML=data[t].name;
                $('.promotional-price')[0].innerHTML=data[t].price;
                // $('.clo-color a')[0].innerHTML=data[3].color;
                var $lipic=document.createElement('li');
                $lipic.className='imgli';
                var $img=document.createElement('img');
                $img.src=`/static/images/puma/${data[t].small}.jpg`;
                $lipic.appendChild($img);
                $smalllist.appendChild($lipic);
                var $bigimg=document.createElement('img');
                $bigimg.src=`/static/images/puma/${data[t].big}.jpg`;
                $imgbox.appendChild($bigimg);
                var $bigger=document.createElement('img');
                $bigger.src=`/static/images/puma/${data[t].big}.jpg`;
                $showbig.appendChild($bigger);
                localStorage.removeItem("shoplist")
                // console.log($('.product-name'))
            })
        },
        insertData(){

        }
        
    }
}())