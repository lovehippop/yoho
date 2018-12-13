var shop=(function(){
    var $smalllist=document.querySelector('.smallImg-list')
    var $imgbox=document.querySelector('.imgBox')
    var $showbig=document.querySelector('.showbigimg')
     var linelocal=localStorage.shoplist;
     var $pname=document.querySelector('.product-name')
     var $closs=document.querySelector('.closs');
     
    
    return {
        init(){
           
            this.$addCar=document.querySelector('.addcar');
            this.$reduce=document.querySelector('.reduce');
            this.$plus=document.querySelector('.plus');
            this.$piece=document.querySelector('.piece');
          
            this.setItem();
            this.event();

        },
        event(){
            let _this=this;
            console.log(this.$piece)
            this.$plus.onclick=function(){
                _this.$piece.innerHTML++ ;
            }
            this.$reduce.onclick=function(){
                if(_this.$piece.innerHTML>1){
                    _this.$piece.innerHTML--;
        
                }
               

            }
            //加入购物车
            this.$addCar.onclick=function(){
                sendAjax('/static/json/pama.json')
                .then(data=>{
                    data=JSON.parse(data)
                    var d=0
                    for(let attr in data){
                        if(data[attr].name==$pname.innerHTML){
                            break;
                        }
                        d++;
                    }
                    
                    data[d].size=$closs.innerHTML;
                    data[d].count=_this.$piece.innerHTML;
                
            

                    localStorage.shopcar=JSON.stringify(data[d]);
                   

                })
            }
            
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