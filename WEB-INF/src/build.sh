#!/bin/sh
rm -rf ../classes/*
cp *.properties ../classes
export JAVA_HOME=/usr/local/jdk1.6.0_45
export CLASSPATH=$JAVA_HOME/jre/lib/rt.jar:.
export PATH=$JAVA_HOME/bin:$PATH
export root_lib=/usr/local/apache-tomcat-7.0.62/webapps/websocketchat/WEB-INF/lib
export tomcat_lib=/usr/local/apache-tomcat-7.0.62/lib
javac -cp $root_lib/commons-beanutils.jar:$root_lib/commons-collections-3.2.1.jar:$root_lib/commons-lang-2.4.jar:$root_lib/commons-logging.jar:$root_lib/ezmorph-1.0.6.jar:$root_lib/json-lib-2.2.3-jdk13.jar:$root_lib/mysql-connector-java-5.1.35.jar:$tomcat_lib/annotations-api.jar:$tomcat_lib/catalina-ant.jar:$tomcat_lib/catalina-ha.jar:$tomcat_lib/catalina.jar:$tomcat_lib/catalina-tribes.jar:$tomcat_lib/ecj-4.4.2.jar:$tomcat_lib/el-api.jar:$tomcat_lib/jasper-el.jar:$tomcat_lib/jasper.jar:$tomcat_lib/jsp-api.jar:$tomcat_lib/servlet-api.jar:$tomcat_lib/tomcat7-websocket.jar:$tomcat_lib/tomcat-api.jar:$tomcat_lib/tomcat-coyote.jar:$tomcat_lib/tomcat-dbcp.jar:$tomcat_lib/tomcat-i18n-es.jar:$tomcat_lib/tomcat-i18n-fr.jar:$tomcat_lib/tomcat-i18n-ja.jar:$tomcat_lib/tomcat-jdbc.jar:$tomcat_lib/tomcat-util.jar:$tomcat_lib/websocket-api.jar:. com/hao/*.java -d ../classes 
