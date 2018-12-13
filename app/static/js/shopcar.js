var shopcar=(function(){
    var $carttable=document.querySelector('.cart-table');
    return {
        init(){
            this.event();
            this.insertdata();
        },
        event(){
            let _this=this;
            
        },
        insertdata(){
            var  data=JSON.parse(localStorage.shopcar);
            
            var $ul=document.createElement('ul');
            $ul.className='table';
            var $li=document.createElement('li');
            $li.className='pre-sell-box';
            $ul.appendChild($li);
            var $div=document.createElement('div');
            $div.className='pay-pro';
            $li.appendChild($div);
            var $i=document.createElement('i');
            $div.appendChild($i);
            var $a=document.createElement('a');
            $div.appendChild($a);
            var $p=document.createElement('p');
            $div.appendChild($p);
            var $pa=document.createElement('a');
            $pa.innerHTML=data.name;
            $p.appendChild($pa);
            var $span=document.createElement('span');
            $span.innerHTML=`尺码:${data.size}`;
            $p.appendChild($span);
            var $b=document.createElement('b');
            $b.innerHTML=`颜色:${data.color}`;
            $span.appendChild($b);
            var $divprice=document.createElement('div');
            $divprice.className='product-price';
            $li.appendChild($divprice);
            var $pricep=document.createElement('p')
            $pricep.innerHTML=data.price;
            $divprice.appendChild($pricep);
            var $divcartnum=document.createElement('div');
            $divcartnum.className='adjust';
            $li.appendChild($divcartnum);
            var $spanreduce=document.createElement('span');
            $spanreduce.innerHTML='-';
            $divcartnum.appendChild($spanreduce);
            var $input=document.createElement('input');
            $input.value=data.count;
            $divcartnum.appendChild($input);
            var $spanadd=document.createElement('span');
            $spanadd.innerHTML='+';
            $divcartnum.appendChild($spanadd);
            var $divsum=document.createElement('div');
            $divsum.className='sub-total';
                $divsum.innerHTML='￥'+data.count*data.price.split('￥')[1]+'.00';
                $li.appendChild($divsum);
            var $divdel=document.createElement('div');
            $divdel.className='cart-operation';
            var $spandel=document.createElement('span');
            $spandel.innerHTML='删除';
            var $spansc=document.createElement('span');
            $spansc.innerHTML='移入收藏';
            $divdel.appendChild($spandel);
            $divdel.appendChild($spansc)
            $li.append($divdel);




            $carttable.appendChild($ul);



        }
        
    }
}())