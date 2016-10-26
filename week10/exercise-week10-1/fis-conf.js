
// 对下面列出的文件开启 md5 戳
fis.match('*.{js,css,png,jpg,gif}', {
  useHash: true
});

//资源定位

// 所有的 js
fis.match('**.js', {
    //发布到/static/js目录下
    release : '/static/$0'
});

// 所有的 css
fis.match('**.css', {
    //发布到/static/css目录下
    release : '/static/$0'
});

// 所有image目录下的.png，.jpg,.gif文件
fis.match('/images/(*.{png,gif,jpg})', {
    //发布到/static/pic/xxx目录下
    release: '/static/images/$1$2$3'
});


// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});
//把当前页面的js,css分别合并
fis.match('::packager', {
  postpackager: fis.plugin('loader', {
    allInOne: true
  })
});
