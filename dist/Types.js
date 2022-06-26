"use strict";
var Types = /** @class */ (function () {
    function Types(obj) {
        this.counter = 0;
        this.counterTwo = 0;
        this.loop_all = 0;
        this.speed = obj.speed;
        this.el = obj.el;
        this.data_set = obj.el.dataset;
        this.dataset_value = this.data_set.words;
        this.loopAll();
    }
    Types.prototype.loopAll = function () {
        var _this = this;
        var real_speed = this.speed * 1000; //Transformando milesegundos em segundos
        var val = this.getDataSet();
        this.counter = val.length;
        this.loop_all = setInterval(function () {
            _this.counterTwo >= _this.counter ? _this.counterTwo = 0 : 0;
            _this.el.innerHTML = val[_this.counterTwo];
            _this.counterTwo++;
        }, real_speed);
        console.log(this.getDataSet());
    };
    Types.prototype.getDataSet = function () {
        return this.dataset_value.split(',').map(function (word) {
            return word.split(" ");
        });
    };
    return Types;
}());
