/**
 * Created by Administrator on 2017/9/1.
 */
(function (w,t) {
    //移动端适配方案
    w.setFontSize = function () {
        var width = document.documentElement.clientWidth / 16;
        var styleNode = document.createElement("style");
        styleNode.innerHTML = "html{font-size:" + width + "px!important}";
        document.head.appendChild(styleNode);
    }
    w.goBack = function () {
        history.go(-1)
    }
    t.fn.touchByM = function (callback) {
        this.on('touchstart',function () {
            this.isMove = false;
        });
        this.on('touchmove',function () {
            if(!this.isMove){
                this.isMove=true;
            }

        })
        this.on('touchend',function (ev) {
            if (this.isMove) {
                return;
            }
            callback.call(this,ev);
        })
    }
})(window,$);
setFontSize();
