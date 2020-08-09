# fchat
angular websocket chat  
npm i  

mysql: 
source WEB-INF/chat.sql  
WEB-INF/src/build.sh  
start tomcat  

2020.0809 新增对话机器人  
使用rasa作为nlu点解析，自己配置回复话术点dm规则  

use rasa_nlu  
conda info --env  
conda activate rasa_chi  
nohup python -m rasa_nlu.server -c sample_configs/config_jieba_mitie_sklearn.yml --path models  >rasa_nlu.log 2>&1 &  


http://www.hackernel.com:8081/fchat/bot.html
