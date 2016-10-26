/*
 * @Author: lenovo
 * @Date:   2016-04-17 20:53:57
 * @Last Modified by:   lenovo
 * @Last Modified time: 2016-04-19 18:47:44
 */

define(function(require, exports, module) {
    var $ = require("jquery");
    var click = require("clickEvent");
    var hover = require("hoverEvent");
    var auto = require("autoPlay");

    jQuery(document).ready(function() {
        click.clickEvent();
        hover.hoverEvent();
        auto.autoPlay();
        auto.handPlay();
        auto.handPlayStrategy();
        auto.handPlaySchool();
        auto.handPlayReport();
    });
});
