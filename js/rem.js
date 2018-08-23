// 用于移动端rem适配

(function(doc, win) {
    function rem(design) {
        // 获取根元素
        var html = doc.documentElement;
        console.log('html: '+ html);
        // 获取设备宽度
        var dev_width = html.getBoundingClientRect().width;
        console.log('dev_width: '+dev_width); 
        if(dev_width > design) {
            console.log('dev_width > design');
            dev_width = design;
            console.log('dev_width/ design');
        }
        // 否则将元素的宽度赋值为他们比值的100倍
        var width = (dev_width/ design) * 100;
        html.style.fontSize = width + 'px';
    }
    var design = 750;//设计图的宽度
    // 设置根元素的fontSize值
    rem(design);
    //检测屏幕变化：横竖屏切换重新给根元素fontSize进行赋值 
    window.addEventListener('resize', function() {
        rem(design);
    }, false);
})(document, window);