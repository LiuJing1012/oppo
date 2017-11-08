SET NAMES UTF8;
DROP DATABASE IF EXISTS oppo;
CREATE DATABASE oppo CHARSET=UTF8;
USE oppo;

/**用户信息**/
CREATE TABLE oppo_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32)
);
/**数据插入**/
INSERT INTO oppo_user VALUES
(NULL,'jingjing','123456'),
(NuLL,'xinxin','123456'),
(NULL,'lala','123456');


/**轮播广告**/
CREATE TABLE oppo_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);
/**数据插入**/
INSERT INTO oppo_carousel VALUES
(NULL,'img/index/img2.jpg','R11','#'),
(NULL,'img/index/img3.jpg','R11Plus','#'),
(NULL,'img/index/img4.jpg','A57','#'),
(NULL,'img/index/img1.jpg','R11 巴萨版','#');


/**商品页的商品**/
CREATE TABLE oppo_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  series VARCHAR(64),
  img VARCHAR(128),
  title VARCHAR(64),
  introduce VARCHAR(64)
);
/**数据插入**/
INSERT INTO oppo_product VALUES
(NULL,'R系列','img/product/r11.jpg','R11 热力红','前后2000万，拍照更清晰'),
(NULL,'R系列','img/product/r11plus.jpg','R11 Plus','前后2000万，拍照更清晰'),
(NULL,'R系列','img/product/r9s.jpg','R9s/R9s Plus','这一刻 ，更清晰(已下架)'),
(NULL,'A系列','img/product/a57.jpg','A57','1600万美颜自拍'),
(NULL,'A系列','img/product/a77.jpg','A77','新品上市'),
(NULL,'A系列','img/product/a59s.jpg','A59s','4GB运存+32GB内存'),
(NULL,'A系列','img/product/a37.jpg','A37','全新美颜4.0'),
(NULL,'Find系列','img/product/find1.png','Find 7 标准版','1300万像素|闪充(已下架)'),
(NULL,'Find系列','img/product/find2.png','Find 7 轻装版','1300万像素|闪充(已下架)'),
(NULL,'N系列','img/product/n1.png','N3','1600电动旋转摄像头(已下架)'),
(NULL,'N系列','img/product/n2.png','N1mini','1300旋转摄像头(已下架)');


/**商城商品**/
CREATE TABLE oppo_store(
  sid INT PRIMARY KEY AUTO_INCREMENT,
  series VARCHAR(64),
  img VARCHAR(128),
  title VARCHAR(64),
  price VARCHAR(10)
);
/**数据插入**/
INSERT INTO oppo_store VALUES
(NULL,'phone','img/store/phone1.png','R11 巴萨限量版','￥3499.00'),
(NULL,'phone','img/store/phone2.png','R11 玫瑰金色','￥2799.00'),
(NULL,'phone','img/store/phone3.png','R11 热力红 旗舰爆款','￥2999.00'),
(NULL,'phone','img/store/phone4.jpg','R11 Plus 玫瑰金色','￥3699.00'),
(NULL,'phone','img/store/phone5.png','A57 玫瑰金 1600万美颜自拍','￥1399.00'),
(NULL,'phone','img/store/phone6.png','A77 玫瑰金色3GB+32GB新品开售','￥1799.00'),
(NULL,'phone','img/store/phone7.png','A59s 黑色 1600万金属自拍神器','￥1799.00'),
(NULL,'phone','img/store/phone8.png','A37金 留住美一刻','￥1199.00'),
(NULL,'fittings','img/store/part1.jpg','VOOC闪充电源适配器AK779','￥79.00'),
(NULL,'fittings','img/store/part2.jpg','原装电源适配器','￥19.00'),
(NULL,'fittings','img/store/part3.jpg','VOOC闪充USB数据线DL118','￥29.00'),
(NULL,'fittings','img/store/part4.jpg','原装USB数据线','￥19.00'),
(NULL,'fittings','img/store/part5.png','OPPO原装入耳式耳机MH130 白色','￥59.00'),
(NULL,'fittings','img/store/part6.png','R9s液态硅胶保护壳 白色','￥29.00'),
(NULL,'fittings','img/store/part7.png','OPPO时尚单品自拍杆 晴空蓝','￥39.00'),
(NULL,'fittings','img/store/part8.png','OPPO时尚单品自拍杆 樱花粉','￥39.00');


/**体验店**/
CREATE TABLE oppo_experience(
  eid INT PRIMARY KEY AUTO_INCREMENT,
  ename VARCHAR(24),
  type VARCHAR(12),
  address VARCHAR(128),
  phone VARCHAR(16)
);
/**数据插入**/
INSERT INTO oppo_experience VALUES
(NULL,'杭州富阳新登新兴路一','专卖店','浙江省杭州市富阳市新登镇新登镇新兴路41号','0571-63580158'),
(NULL,'杭州萧山萧绍路众泽专卖','专卖店','广东省东莞市中堂镇中麻路40-20','0571-57161133'),
(NULL,'杭州富阳桂花西路店','专卖店','浙江省杭州市富阳市桂花西路26-8','0571-23282223'),
(NULL,'杭州萧山市心广场店','专卖店','浙江省杭州市萧山区市心广场D座1016','0571-82106502'),
(NULL,'杭州富阳桂花西路旗舰店','旗舰店','浙江省杭州市富阳市桂花西路25-3号','0571-63586561'),
(NULL,'杭州武林门旗舰店','旗舰店','浙江省杭州市下城区体育场路367号','0571-82106502'),
(NULL,'杭州中泰骏飞店','专卖店','浙江省杭州市余杭区航泰路135号','0571-57898685'),
(NULL,'老余杭安乐路专卖店','专卖店','浙江省杭州市余杭区余杭街道安乐148-150号','0571-86101583'),
(NULL,'杭州老余杭德裕店','专卖店','浙江省杭州市余杭区余杭街道禹航路937号','0571-88661716'),
(NULL,'杭州乔司大井店','专卖店','浙江省杭州市余杭区乔司街道葛家车村269号','0571-86282050');


/**商品详情列表**/
CREATE TABLE product_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  dname VARCHAR(36),
  color VARCHAR(16),
  bg_img1 VARCHAR(128),
  bg_img2 VARCHAR(128),
  bg_img3 VARCHAR(128),
  bg_img4 VARCHAR(128),
  bg_img5 VARCHAR(128),
  sm_img1 VARCHAR(128),
  sm_img2 VARCHAR(128),
  sm_img3 VARCHAR(128),
  sm_img4 VARCHAR(128),
  sm_img5 VARCHAR(128),
  introduce VARCHAR(48)
);
/**数据插入**/
INSERT INTO product_detail VALUES
(NULL,'R11 黑色 新品上市','黑色','img/R11_black/b01.png','img/R11_black/b02.png','img/R11_black/b03.png',
'img/R11_black/b04.png','img/R11_black/b05.png','img/R11_black/s01.png','img/R11_black/s02.png',
'img/R11_black/s03.png','img/R11_black/s04.png','img/R11_black/s05.png','明星旗舰产品，前后2000W，拍照更清晰'),
(NULL,'R11 玫瑰金色 旗舰爆款','玫瑰金色','img/R11_pink/b01.png','img/R11_pink/b02.png','img/R11_pink/b03.png',
'img/R11_pink/b04.png','img/R11_pink/b05.png','img/R11_pink/s01.png','img/R11_pink/s02.png','img/R11_pink/s03.png',
'img/R11_pink/s04.png','img/R11_pink/s05.png','明星旗舰产品，前后2000W，拍照更清晰'),
(NULL,'R11 热力红色 旗舰爆款','热力红色','img/R11_red/b01.png','img/R11_red/b02.png','img/R11_red/b03.png',
'img/R11_red/b04.png','img/R11_red/b05.png','img/R11_red/s01.png','img/R11_red/s02.png','img/R11_red/s03.png',
'img/R11_red/s04.png','img/R11_red/s05.png','明星旗舰产品，前后2000W，拍照更清晰'),
(NULL,'R11 金色 旗舰爆款','金色','img/R11/b01.png','img/R11/b02.png','img/R11/b03.png',
'img/R11/b04.png','img/R11/b05.png','img/R11/s01.png','img/R11/s02.png','img/R11/s03.png',
'img/R11/s04.png','img/R11/s05.png','明星旗舰产品，前后2000W，拍照更清晰');


