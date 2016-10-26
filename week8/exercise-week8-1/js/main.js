/*
 * @Author: lenovo
 * @Date:   2016-04-17 20:53:57
 * @Last Modified by:   lenovo
 * @Last Modified time: 2016-05-11 13:36:32
 */
'use strict';

define(function(require, exports, module) {
    var $ = require("jquery");
    var click = require("clickEvent");
    var back = require("backstageEvent");

    jQuery(document).ready(function() {
        click.gotoIndex();
        click.gotoUserhome();
        click.gotoUserhomeBack();
        click.gotoSearch();
        click.gotoSearchBack();
        click.gotoMore();
        click.gotoMoreBack();
        click.more();
        click.moreBack();
        click.loginBackStage();
        click.NewsAsk();
        back.accessMySQL();
        back.addToMySQL();
        back.deleteMySQL();
        back.modifyMySQL();
        back.searchMySQL();
    });
});
