#mysql -uroot --default-character-set=utf8 -hkillinux.com -p
#GRANT ALL ON *.* TO 'root'@'%' IDENTIFIED BY 'haoning';
#FLUSH PRIVILEGES;
#create database haochat;
create table users(
	id int primary key auto_increment ,
	username varchar(30) UNIQUE   ,
	nickname varchar(30) UNIQUE   ,
	img_url varchar(50),
	other varchar(60),
	passwd varchar(30),
	onlinekey int
) ENGINE=MyISAM AUTO_INCREMENT=0 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

insert into users(id,username,nickname,img_url,other,passwd,onlinekey) values('1','haobai','好白','haobai.jpg','我觉得可以啊吧！下次有机会我...','123',1);
insert into users(id,username,nickname,img_url,other,passwd,onlinekey) values('2','laoyu','老于','laoyu.jpg','我觉得可以啊吧！下次有机会我...','123',1);
insert into users(id,username,nickname,img_url,other,passwd,onlinekey) values('3','haoning','好宁','haoning.jpg','我觉得可以！下次有机会我...','123',1);
insert into users(id,username,nickname,img_url,other,passwd,onlinekey) values('4','haofeng','好峰','haofeng.jpg','测试。。。','123',1);
insert into users(id,username,nickname,img_url,other,passwd,onlinekey) values('5','haokui','好魁','haokui.jpg','我觉得可以啊哈！下次有机会我...','123',1);
insert into users(id,username,nickname,img_url,other,passwd,onlinekey) values('6','haoyu','好于','haoyu.jpg','我觉得可以啊！下次有机会我...','123',1);
insert into users(id,username,nickname,img_url,other,passwd,onlinekey) values('7','haolang','好郎','haolang.jpg','我觉得可以啊！下次有机会我...','123',1);



CREATE TABLE `friend` (
  `myname` varchar(30) DEFAULT NULL,
  `yourname` varchar(30) DEFAULT NULL,
  `newmsg` int(11) DEFAULT NULL
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 ; 
insert into friend values('haobai','laoyu',1);
insert into friend values('haobai','haoning',0);
insert into friend values('haobai','haofeng',1);
insert into friend values('haobai','haokui',0);
insert into friend values('haobai','haoyu',0);
insert into friend values('haobai','haolang',1);


insert into friend values('laoyu','haobai',1);
insert into friend values('laoyu','haoning',0);
insert into friend values('laoyu','haofeng',1);
insert into friend values('laoyu','haokui',0);
insert into friend values('laoyu','haoyu',0);
insert into friend values('laoyu','haolang',1);


insert into friend values('haoning','laoyu',1);
insert into friend values('haoning','haobai',0);
insert into friend values('haoning','haofeng',1);
insert into friend values('haoning','haokui',0);
insert into friend values('haoning','haoyu',0);
insert into friend values('haoning','haolang',1);


insert into friend values('haofeng','laoyu',1);
insert into friend values('haofeng','haoning',0);
insert into friend values('haofeng','haobai',1);
insert into friend values('haofeng','haokui',0);
insert into friend values('haofeng','haoyu',0);
insert into friend values('haofeng','haolang',1);


insert into friend values('haokui','laoyu',1);
insert into friend values('haokui','haoning',0);
insert into friend values('haokui','haofeng',1);
insert into friend values('haokui','haobai',0);
insert into friend values('haokui','haoyu',0);
insert into friend values('haokui','haolang',1);


insert into friend values('haoyu','laoyu',1);
insert into friend values('haoyu','haoning',0);
insert into friend values('haoyu','haofeng',1);
insert into friend values('haoyu','haokui',0);
insert into friend values('haoyu','haobai',0);
insert into friend values('haoyu','haolang',1);


insert into friend values('haolang','laoyu',1);
insert into friend values('haolang','haoning',0);
insert into friend values('haolang','haofeng',1);
insert into friend values('haolang','haokui',0);
insert into friend values('haolang','haoyu',0);
insert into friend values('haolang','haobai',1);
