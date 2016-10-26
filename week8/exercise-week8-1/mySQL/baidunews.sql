-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 05 月 11 日 17:26
-- 服务器版本: 5.5.38
-- PHP 版本: 5.4.33

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `imgnews`
--

CREATE TABLE IF NOT EXISTS `imgnews` (
  `newsclass` varchar(50) NOT NULL,
  `newsid` int(11) NOT NULL AUTO_INCREMENT,
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `newsaddtime` date NOT NULL,
  PRIMARY KEY (`newsid`),
  KEY `newstitle` (`newstitle`,`newsimg`),
  KEY `newsclass` (`newsclass`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `imgnews`
--

INSERT INTO `imgnews` (`newsclass`, `newsid`, `newstitle`, `newsimg`, `newscontent`, `newsaddtime`) VALUES
('图片', 1, '林志玲穿低胸蕾丝裙扮贵妇', 'img1.jpg', '2016年04月30日，上海，42岁林志玲现身马术展活动，尽显雍容华贵。提问环节，林志玲被问及与李治廷的绯闻和在《花样姐姐》中亲密的互动，是否已经处于恋爱之中，志玲姐姐，笑而不语，满脸甜蜜。当天，林志玲头戴复古贵妇帽，一袭黑色蕾丝抹胸裙亮相，性感妩媚，贵气十足，举手投足彰显女神范儿。人气爆棚的林志玲，引人群围堵，现场气氛嗨炸天。', '2016-05-01'),
('图片', 2, '摔跤冠军醉驾 与7名警察激战', 'img2.jpg', '2016年4月30日报道，29日，乌克兰一名前奥运摔跤金牌得主，涉嫌醉酒驾驶被警车拦截，他下车与警员理论时，动粗袭击警员。警员以胡椒喷雾和警棍还击，金牌选手头破血流仍负隅顽抗，最后出动了7名警员，才将他制服拘捕。 (来自:腾讯图片)', '2016-05-01'),
('图片', 3, 'C罗旧爱婚纱秀 透视装秀身材', 'img3.jpg', '腾讯体育讯 西班牙巴塞罗那，当地时间4月29日，C罗前女友伊莲娜-沙耶克（Irina Shayk）助阵巴塞罗那2017婚纱周Pronovias秀。她蕾丝裹身裙大秀曼妙身材。 (来自:腾讯体育)', '2016-05-01'),
('图片', 4, '美军首任步兵女指挥官亮相', 'img4.jpg', '美军首次任命女性成为步兵指挥官，可指挥作战，打破几个世纪以来女性无法上前线的传统。新任指挥官叫KristenGriest，去年夏天通过美国陆军游骑兵训练。“无论是精神上还是体力上，男人能搞定的我们都可以，”Kristen说。大声告诉我，帅不帅！！（来源：网易综合）', '2016-05-01'),
('图片', 5, '学生自称扶起老人后反被起诉', 'img5.jpg', '网友@立方霖 是蚌埠三中的高三学生，其称：2016年元月25号，一老人走路时摔倒，他上去扶时被老人抓着不放，后被起诉到法院。4月28日庭审老人一家眼看要败诉，就来到蚌埠三中门口纠缠。', '2016-05-01'),
('图片', 6, '肯尼亚公开焚烧105吨象牙', 'img6.jpg', '4月30日，在肯尼亚内罗毕，野保警察在焚烧象牙和犀牛角的现场警戒。当日，在肯尼亚首都内罗毕，肯政府公开焚烧105吨象牙和1.3吨犀牛角，以显示肯尼亚政府在推动全球禁止象牙和犀牛角贸易方面所做出的不懈努力。 (来自:腾讯图片)', '2016-05-01'),
('图片', 7, '三星开发者大会宛若科幻片', 'img7.jpg', '腾讯科技讯5月1日，据科技网站CNET报道，三星的C-Lab实验室是员工发挥自己创想的圣地，这里诞生了无数奇思妙想的产品，不过遗憾的是，许多产品我们可能永远也买不到，但在三星的开发者大会上大家可以一起过过眼瘾。在展会上，我们首先遇到了一台可以感知情绪的机器人，这家伙是以三星Artik开发板（树莓派的竞争对手）为基础打造的。随后，我们在展会上见到了许多疯狂的配件产品，比如VR项圈和机车头盔通话器等，这些产品都是三星C-Lab的员工一手打造的。“三星员工有许多疯狂的创意，但其中有一些对公司作用不大，”三星创新和发明中心助理主管在本周的三星开发者大会上说道。“不过我们可不愿让这些创意付诸东流，因此三星三年前创立了C-Lab，让员工有机会实现自己的梦想。”C-Lab就像三星的Kickstarter，如果项目前景较好，就很有可能转化成正式商品，不过大多数创想最终都胎死腹中。下面，我们来一起见识下这些天马行空的创意吧。 (来自:腾讯科技)', '2016-05-01');

-- --------------------------------------------------------

--
-- 表的结构 `localnews`
--

CREATE TABLE IF NOT EXISTS `localnews` (
  `newsclass` varchar(50) NOT NULL,
  `newsid` int(11) NOT NULL AUTO_INCREMENT,
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newscontent` text NOT NULL,
  `newsaddtime` date NOT NULL,
  PRIMARY KEY (`newsid`),
  KEY `newstitle` (`newsaddtime`),
  KEY `newstitle_2` (`newstitle`),
  KEY `newsclass` (`newsclass`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `localnews`
--

INSERT INTO `localnews` (`newsclass`, `newsid`, `newstitle`, `newsimg`, `newscontent`, `newsaddtime`) VALUES
('本地', 1, '中国电信北京公司多名干部公款吃喝，从私设的“小金库”支付', 'local1.jpg', '据中央纪委监察部网站消息，日前，中央纪委对7起国有企业和金融机构人员违反中央八项规定精神问题进行公开曝光，这7起问题是：\r\n中国电信北京公司原资深总裁刘博等人违规公款吃喝等问题。2015年1月，中国电信北京公司在河北省某酒店三次组织公款吃喝和高消费娱乐活动，刘博和党委委员、副总经理、纪委书记王庆玉，党委委员、副总经理孙昊等公司领导及员工共61人次参加，合计消费7.95万元，从公司设在该酒店的“小金库”支付。刘博等人还存在违规提拔干部、私设“小金库”等问题。中国电信北京公司党委决定给予刘博留党察看一年处分，降岗两级，免去其职务；给予王庆玉撤销党内职务处分，降岗一级，免去其职务；给予孙昊党内严重警告处分；给予其他责任人相应党纪处分和组织处理；责令有关人员退赔相关费用。公司党委书记、总经理张志勇因履行主体责任不力被通报批评。', '2016-04-26'),
('本地', 2, '北京臭水中放生500斤活鱼 围观者称鱼入水即翻肚', 'local2.jpg', '核心事实300多只放生的狐狸和貉大闹怀柔汤河口村一事刚刚平息，昨天（25日），又有市民拨打本报热线电话称，有10多个人将500斤活鱼整筐整筐地放生潮白河。北京晚报记者在现场看到，河水乌黑散发着臭味儿，有的鱼刚入水就翻了白肚。', '2016-04-26'),
('本地', 3, '2016年北京电子竞技公开赛启动仪式在京举行', 'local3.jpg', '4月26日，嘉宾一起为2016年北京电子竞技公开赛大赛揭幕。当日，2016年北京电子竞技公开赛（NEA）发布会暨大赛启动仪式在北京举行。本届大赛自启动之日起，官网、官方微信将全面上线，并陆续开启报名渠道。7月1日至3日，NEA大赛将在国家体育场“鸟巢”举办为期三天的巅峰对决，以全面参与、全民竞技的形式打造一场电子竞技的盛会。新华社记者孔卉摄 ', '2016-04-26'),
('本地', 4, 'B20反腐败专题论坛将在北京迎“首秀”', 'local4.jpg', '中新社北京4月26日电(记者李晓喻)B20(二十国集团工商界活动)反腐败专题论坛27日将于北京“首秀”。这是反腐败首次以专题论坛的形式现身B20。\r\n 近年来，二十国集团(G20)和B20对反腐败日益重视。继2014年通过《2015-2016年G20反腐败行动计划》，提出加强相关机构的合作，严防出现腐败官员“安全避难所”后，2015年G20领导人安塔利亚峰会进一步明确，要有效落实这一计划，促进国际社会形成对腐败问题的零容忍环境，视需加强在民事和行政程序上的国际合作。', '2016-04-26'),
('本地', 5, '“考拉海购”诉媒体报道侵权索赔千万', 'local5.jpg', '原告网易雷火科技有限公司委托代理人在法庭上，该公司提出千万元索赔。昨天下午，跨境电商“网易考拉海购”告中国经营报社侵权的官司在海淀法院开庭审理。作为网站经营方网易雷火科技有限公司（简称雷火公司）认为，中国经营报《跨境电商命门凸显网易考拉现自营危机》一文报道失实，索赔1000万元，同时对转载此文的网站索赔500万元。而对于起诉，报社表示，这是真实的新闻报道并且没有任何主观恶意。', '2016-04-26'),
('本地', 6, '五一小长假北京部分高速暴堵12小时 14游客被甩团', 'local6.jpg', '▲昨天13时，京平高速出京方向拥堵。京华时报记者潘之望摄\r\n昨天，“五一”小长假以晴好天气拉开序幕，市属11家公园及园博馆接待游客53万人次。今天市属公园将迎来客流高峰，当核心景区达到最大承载量，将首次启动“临时限流”措施。交通方面，昨天北京11条高速路发生拥堵，受新国展车展影响，京承高速进出京方向均堵，上午堵到了六环外。', '2016-05-01'),
('本地', 7, '北京突遭雷雨天气 13个航班成功备降石家庄机场', 'local7.jpg', '4月29日傍晚，北京地区遭遇雷雨天气，石家庄机场启动航班大面积备降黄色预警，保障备降飞往首都机场、南苑机场的13个航班，保障旅客2000余名。从29日18时左右开始，陆续有航班备降。19时左右，根据天气状况，石家庄机场及时启动航班大面积备降黄色预警，机务、地面服务、监护、地面运输等保障部门人员、设备全部到岗待命。23时左右，北京天气好转，9个航班安全离港，4个航班取消。', '2016-05-01');

-- --------------------------------------------------------

--
-- 表的结构 `playnews`
--

CREATE TABLE IF NOT EXISTS `playnews` (
  `newsclass` varchar(50) NOT NULL,
  `newsid` int(11) NOT NULL AUTO_INCREMENT,
  `newstitle` varchar(100) NOT NULL,
  `newsimg` varchar(200) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL,
  `newscontent` text NOT NULL,
  `newsaddtime` date NOT NULL,
  PRIMARY KEY (`newsid`),
  KEY `newstitle` (`newstitle`,`newsimg`,`newsaddtime`),
  KEY `newsclass` (`newsclass`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `playnews`
--

INSERT INTO `playnews` (`newsclass`, `newsid`, `newstitle`, `newsimg`, `newscontent`, `newsaddtime`) VALUES
('娱乐', 1, '春浪音乐节首日苏打绿压轴 丁当微信告密谭维维', 'play1.jpg', '娱乐讯（文/毛予倩）昨天（4月30日）是2016年“五一”小长假首日，春浪音乐节也在上海滴水湖畔正式开唱。包括苏打绿、谭维维、丁当、逃跑计划在内的近10组嘉宾陆续登场，一路从艳阳高照唱到了夜色深沉，压轴出场的苏打绿以一曲《频率》结束了春浪音乐节第一天。今天（5月1日），春浪音乐节将继续第二天的演出，腾讯视频Live Music仍将全程独家网络高清直播。', '2016-05-01'),
('娱乐', 2, 'AOA现身机场秀美腿 为出席拼盘活动赴常州', 'play2.jpg', 'AOA现身机场秀美腿为出席拼盘活动赴常州 5月1日早上，韩国人气女子组合AOA经由仁川机场赶赴常州出席"常州嬉戏谷五周年音乐趴体"。 当天，AOA除成员草娥以外全部口罩遮面，成员们更是大多数身着短裤，大秀美腿。面对大批记者拍照，AOA成员则是低着头快步走入机场。', '2016-05-01'),
('娱乐', 3, '全国最大流动剧场6月底完工 占地面积近3700平方米', 'play3.jpg', '在世博会西班牙馆门前的空地上，一座巨大的白色尖顶帐篷在春日的艳阳下反射出耀眼的光。在成功立柱之后，这个占地面积近3700平方米，主篷总高度超过31米，可以容纳1900名观众的流动马戏大篷，距离6月底正式完工又迈进了一步。据上海杂技团有关人士透露，今年夏天这座全国最大的马戏“移动城堡”里将上演自巴黎载誉而归的大型杂技表演秀《十二生肖》。', '2016-05-01'),
('娱乐', 4, '菜鸟也能玩转蔡司（Zeiss ）CP2 镜头', 'play4.jpg', '摄影就是个败家玩意儿。不管你败不败，我就是败了，我的佳能“无敌兔”原本完好无损，“5D III”和“5Ds”又出来了，禁不住挑逗，权衡再三，最终选择了“5D3”。可怜我的“无敌兔”，当初1万多的机身，最后只能沦落成白菜价甩卖。 所谓工欲善其事，必先利其器。这还不算完，因为出行多，又开始有些拍摄视频的任务在身，佳能镜头显然有些局限了，在玩家的推荐下，选择了这支电影级摄影镜头——蔡司CP.2 35mm/T2.1镜头，CP2拥有灵活适配的转接环，可接单反进行高清视频拍摄。说实话，第一次用，心里还是挺没底的。不过，既然利器到手，怎么着也得赶紧尝个鲜。', '2016-05-01'),
('娱乐', 5, '谢娜泄露了大秘密！她录节目被电发飙很多人忽视的原因 ', 'play5.jpg', '娱乐圈有两个“不孕”女神的肚子一直成为媒体焦距的对象，一个是谢娜，一个是baby。人们总以为谢娜又怀上了，不过每次都是她说自己没怀孕。baby则忙得没时间和黄晓明见面，所以一直没有动静。早在2014年12月时，谢娜缺席《快乐大本营》，当时维嘉何炅煞有介事的调侃谢娜缺席原因。何炅说：“娜娜遇到好事的时候就会请假”。维嘉爆料她不是一个人再走，并且进入到了人生的新阶段，让人们误以为谢娜怀孕。', '2016-05-01'),
('娱乐', 6, '关晓彤回母校合影 关晓彤拍剧陷多角恋', 'play6.jpg', '4月30日，关晓彤回母校合影，并发文：“刚去学校拿卷子…拍卷子…p卷子…写卷子最重要。写写写…希望大家可以有一个劳逸结合的假期。”近期，关晓彤[微博]在北京电影学院考试中，专业课排名第一，学霸范十足，如今作为高三党一枚的她正准备高考。4月30日，关晓彤晒出在母校门口的留影，并发文：“刚去学校拿卷子…拍卷子…p卷子…写卷子最重要。写写写…希望大家可以有一个劳逸结合的假期。”', '2016-05-01');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;