var Login=(function(){
    var $sbtn=document.querySelector('.switch_btn');
    var $sbchange=document.querySelector('.switch_change');
    var $lgRight=document.querySelector('.lg_right');
    var $changeRight=document.querySelector('.lg_right_change');
    var $usualLg=document.querySelector('.usual_lg');
    var $telLg=document.querySelector('.tel_lg');
    var $formCommon=document.querySelector('.form_common_lg');
    var $formTel=document.querySelector('.form_tel_lg');
    var $inputAll=$formCommon.querySelectorAll('input');
    var $inpNext=$formTel.querySelector('input');
    var $message=document.querySelector('.message');
    var $loginMain=document.querySelector('#login_main_wrapper')

    //验证表单
    var checkInput = {
        username(str) {
            if(str.length==11){
                var reg = /^1[3579]\d{9}$/;
                return reg.test(str);
            }
            else{
                var reg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
                
                return reg.test(str);
            }
           
        },
        password(str) {
            var reg = /^\w{6,20}$/;
            return reg.test(str);
        },
        tel(str) {
            var reg = /^1[3579]\d{9}$/;
            return reg.test(str);
        }

    }

    return {
        init(){
            this.event()
        },
        event(){
            let _this=this;
            //切换登录模式
            $sbtn.onclick=function(){
                $lgRight.style.display="none";
                
                $changeRight.style.display="block";
                $loginMain.style.height='730px';
 
            }
            $sbchange.onclick=function(){
             $lgRight.style.display="block";
              
                $changeRight.style.display="none";
                $loginMain.style.height='690px';
                
                $sbtn.previousElementSibling.style.display="none";
                this.previousElementSibling.style.display="none";
            }
            //手机号登录
            $telLg.onclick=function(){
                this.style.zIndex="2";
                this.style.background="#000";
                this.style.color="#fff";
                
                $usualLg.style.zIndex="1";
                $usualLg.style.background="#ccc";
                $usualLg.style.color="#000";
             $formCommon.style.display="none";
             $formTel.style.display="block";
                $message.style.display="block";
 
 
            }
            $usualLg.onclick=function(){
                this.style.zIndex="2";
                this.style.background="#000";
                this.style.color="#fff";
                
                $telLg.style.zIndex="1";
                $telLg.style.background="#ccc";
                $telLg.style.color="#000";
                $formCommon.style.display="block";
             $formTel.style.display="none";
             $message.style.display="none";
 
            }
            //验证表单
            for(let i=0;i<$inputAll.length;i++){
                $inputAll[i].onblur=function(){
                     var $em=this.nextElementSibling.querySelector('em');
                    
                    if(this.value==''){
                        this.style.borderColor="orangered";
                        this.nextElementSibling.className='check_color';
                        $em.previousElementSibling.className='check_i';
                        $em.innerHTML = this.getAttribute('data-null');
                    }
                    else{
                        var bool = checkInput[this.name](this.value);
                        if (bool) {
                            // $p.className = 'text-success bg-success';
                            // $p.innerHTML = '验证正确';
                        } else {
                            // $em.previousElementSibling.className='check_i';
                            this.style.borderColor="orangered";
                            $em.innerHTML = this.getAttribute('data-error');
                        }
                    }
                }
                $inputAll[i].onfocus=function(){
                    var $em=this.nextElementSibling.querySelector('em');
                    $em.previousElementSibling.className='';
                    $em.innerHTML='';
                }
            }
            //手机验证
           


            
        }
    }
}());
