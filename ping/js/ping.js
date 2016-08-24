function ping(){
    this.init();
}

ping.prototype = {
    init() {
        console.log('this init');
        let _this = this;
        var arr = [
            '所有平台/all',
            '移动App/app',
            '移动网页/mobile-web',
            'PC网页/pc-web',
            '微信公众平台/wechat',
            '手机扫码/qr'];
        var contentArr=[
            '支付宝/移动支付/app',
            '微信支付/APP支付/app',
            '银联/手机支付/app mobile-web wechat',
            'Apple/Apple Pay/app',
            '招行一网通/银行卡支付/app',
            'QQ钱包/App支付/app',
            '百度钱包/App和移动网页支付/app mobile-web wechat',
            '京东支付/App和移动网页支付/app mobile-web wechat',
            '易宝支付/App 和移动网页支付/app mobile-web wechat',
            'Ping++/银行卡支付/app',
            'Ping++/Visa, MasterCard, JCB/app',
            '支付宝/手机网站支付/mobile-web',
            '微信支付/移动网页支付/mobile-web',
            '支付宝/即时到帐/pc-web',
            '微信支付/公众号支付/pc-web wechat qr',
            '银联/网关支付/pc-web',
            '银联/企业网银支付/pc-web',
            '支付宝/扫码支付/qr',
        ]
        _this.setNav(arr,$('.side-bar'));
        _this.setContent(contentArr,$('.grid'));
        _this.setPosition($('.grid-item'));
        _this.setContentHeight($('.grid'),$('.grid-item'));
        _this.setFilter($('.side-bar'),$('.grid-item'));
    },
    setNav(arr,el) {
        if( arr instanceof Array){
            let i=0,l=arr.length,strhtml='';
            for(;i<l;i++){
                var detail = arr[i].split('/');
                strhtml += `<a data-filter=".${detail[1]}" class="${detail[1]}">${detail[0]}</a>`
            }
            el.html(strhtml);
        }
    },
    setContent(contentArr,el) {
        let i=0,l=contentArr.length,strhtml='';
        for(;i<l;i++){
            var detail = contentArr[i].split('/');
            strhtml +=`<div class="grid-item ${detail[2]}">
                            <div class='info'>
                                <h3>${detail[0]}</h3>
                                <p>${detail[1]}</p>
                            </div>
                        </div>
                    `;
        };
        el.html(strhtml);
    },
    setPosition(el){
        let i=0,l=el.length;
        for(;i<l;i++){
            // console.log(i);
            // console.log(el[i]);
            $(el[i]).css({
                'position': 'absolute',
            })
            
            if( i % 3 == 0){
                $(el[i]).css({
                    'top': i * 40+'px',
                    'left':0,
                })
                
            }
            if( i % 3 == 1){
                $(el[i]).css({
                    'top': i * 40 - 40 +'px',
                    'left': 210+'px',
                })
                
            }
            if( i % 3 == 2){
                $(el[i]).css({
                    'top': i * 40 - 80 +'px',
                    'left': 420 +'px',
                })
                
            }
        }
    },
    setContentHeight(el,child){
        console.log(el);
        let l = el.find(child).length;
        let ch = el.find(child).outerHeight()+20;
        el.css({
            'position':'relative',
            'height': l / 3 * ch + 'px', 
        })
    },
    setFilter(el,filterEl) {
        var _this = this;
         el.find('a').eq(0).addClass('hover');
        el.find('a').on('click',function(){
            // console.log($('a').index(this));
            if($(this).data('filter') == '.app'){
                $(this).addClass('hover').siblings().removeClass('hover');
                filterEl.hide();
                $('.grid-item.app').show();
                _this.setPosition($('.grid-item.app'));
                _this.setContentHeight($('.grid'), $('.grid-item.app'));
            }
            if($(this).data('filter') == '.all'){
                $(this).addClass('hover').siblings().removeClass('hover');
                filterEl.show();
                _this.setPosition($('.grid-item'));
                _this.setContentHeight($('.grid'), $('.grid-item'));                
            }
            if($(this).data('filter') == '.mobile-web'){
                $(this).addClass('hover').siblings().removeClass('hover');                
                filterEl.hide();
                $('.grid-item.mobile-web').show();
                _this.setPosition($('.grid-item.mobile-web'));
                _this.setContentHeight($('.grid'),$('.grid-item.mobile-web'));
                
            }
            if($(this).data('filter') == '.pc-web'){
                $(this).addClass('hover').siblings().removeClass('hover');                
                filterEl.hide();
                $('.grid-item.pc-web').show();
                _this.setPosition($('.grid-item.pc-web'));
                _this.setContentHeight($('.grid'),$('.grid-item.pc-web'));
                
            }
            if($(this).data('filter') == '.wechat'){
                $(this).addClass('hover').siblings().removeClass('hover');                
                filterEl.hide();
                $('.grid-item.wechat').show();
                _this.setPosition($('.grid-item.wechat'));
                _this.setContentHeight($('.grid'),$('.grid-item.wechat'));
                
            }
            if($(this).data('filter') == '.qr'){
                $(this).addClass('hover').siblings().removeClass('hover');                
                filterEl.hide();
                $('.grid-item.qr').show();
                _this.setPosition($('.grid-item.qr'));
                _this.setContentHeight($('.grid'),$('.grid-item.qr'));
                
            }
        })
    }

}





document.addEventListener('DOMContentLoaded',function(){
    new ping();
})