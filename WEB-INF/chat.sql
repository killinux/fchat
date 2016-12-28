#mysql -uroot --default-character-set=utf8 -hkillinux.com -p
#GRANT ALL ON *.* TO 'root'@'%' IDENTIFIED BY 'haoning';
#FLUSH PRIVILEGES;
#create database haochat;
create table users(id int primary key auto_increment ,username varchar(30) UNIQUE   ,nickname varchar(30) UNIQUE   ,img_url varchar(50),other varchar(60),passwd varchar(30),onlinekey int) ENGINE=MyISAM AUTO_INCREMENT=1826 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
insert into users(id,username,nickname,img_url,other,passwd,onlinekey) values('1','haoba','好吧','haoba.jpg','我觉得可以啊吧！下次有机会我...','123',1);
insert into users(id,username,nickname,img_url,other,passwd,onlinekey) values('2','mashengxi','麻生希','mashengxi.jpg','我觉得可以啊吧！下次有机会我...','123',1);
insert into users(id,username,nickname,img_url,other,passwd,onlinekey) values('3','jjfz','酒井法子','jjfz.jpg','我觉得可以！下次有机会我...','123',1);
insert into users(id,username,nickname,img_url,other,passwd,onlinekey) values('4','cjk','苍井空','cjk.jpg','测试。。。','123',1);
insert into users(id,username,nickname,img_url,other,passwd,onlinekey) values('5','hahaha','哈哈哈','hahaha.jpg','我觉得可以啊哈！下次有机会我...','123',1);
insert into users(id,username,nickname,img_url,other,passwd,onlinekey) values('6','yoyoyo','哟哟哟','yoyoyo.jpg','我觉得可以啊！下次有机会我...','123',1);
insert into users(id,username,nickname,img_url,other,passwd,onlinekey) values('7','yyy','哟哟哟','yyy.jpg','我觉得可以啊！下次有机会我...','123',1);

CREATE TABLE `friend` (
  `uid` int(11) DEFAULT NULL,
  `fid` int(11) DEFAULT NULL
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 ; 
insert into friend values(1,2);
insert into friend values(1,3);
insert into friend values(1,4);
insert into friend values(1,5);
insert into friend values(2,1);