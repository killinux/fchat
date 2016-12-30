//console.log("from app.js");
function replace_em(str){
    str = str.replace(/\</g,'&lt;');
    str = str.replace(/\>/g,'&gt;');
    str = str.replace(/\n/g,'<br/>');
    str = str.replace(/\[em_([0-9]*)\]/g,'<img src="./face/arclist/$1.gif" border="0" />');
    return str;
}
function biaoqing_hi(){
	$("#face_div").css("height","240px");
}
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

var ws = null;
window.myname =getQueryString('mid');
if(window.myname==null)window.myname='haoba';
console.log("myname:"+window.myname);
window.yourname = 'haoba';
console.log("yourname:"+window.yourname);

function log(text) {
	console.log(text);
}
String.prototype.startWith=function(s){
	if(s==null||s==""||this.length==0||s.length>this.length)
		return false;
	if(this.substr(0,s.length)==s)
		return true;
	else
		return false;
	return true;
}
function startServer() {
	console.log("enviroment:"+navigator.userAgent);
	var url ="ws://killinux.com:8443/websocketchat/hao/msg";
    if(window.location.href.split(":")[0]=="https"){
        //url="wss://killinux.com:80/websocketchat/hao/msg";
        url="wss://192.168.8.104:80/websocketchat/hao/msg";
    }else{
        //url="ws://killinux.com:8080/websocketchat/hao/msg";
        url="ws://192.168.8.104:8080/websocketchat/hao/msg";
    }
    console.log("websocket url:"+url);
	//if https ,websocket is wss
	//var url ="ws://killinux.com:8443/hao/msg";
	if ('WebSocket' in window) {
		ws = new WebSocket(url);
	} else if ('MozWebSocket' in window) {
		ws = new MozWebSocket(url);
	} else {
		log('浏览器不支持websocket');
		return;
	}
	ws.onopen = function() {
		log('hoho，on websocket open');
	};
	ws.onmessage = function(event) {
		var thisdata = event.data;
		if(thisdata.startWith("open")){
		//	document.getElementById("username").value=thisdata.split(" ")[1];
		}else{
			var showData=event.data.split("#");
			//log(showData[0]+" say:"+showData[2]);
            showData[2]=replace_em(showData[2]);
			if(showData[1]==window.yourname){
				//console.log("right");
				if(showData[3]==undefined||""==showData[3]){
					$("#content").append("<div><ul class='ul_talk reply'><li class='tbox' ><div><span class='head' style=''><img src='img/"+window.myname+".jpg'></span></div><div><span ><svg class='arrow'><path d='M0 10 L20 19 L21 12 L20 14 L0 20 Z' stroke-width='1' stroke='#7EBE2A' fill='#7EBE2A'></path></svg></span></div><div><article class='content'  style='border-radius:5px;box-shadow:  -1px 4px 2px -3px #999999; '>"+showData[2]+"</article></div></li></ul></div>"); 
				}else{ 
					$("#content").append("<div><ul class='ul_talk reply'><li class='tbox' ><div><span class='head' style=''><img src='"+showData[3]+"'></span></div><div><span ><svg class='arrow'><path d='M0 10 L20 19 L21 12 L20 14 L0 20 Z' stroke-width='1' stroke='#7EBE2A' fill='#7EBE2A'></path></svg></span></div><div><article class='content'  style='border-radius:5px;box-shadow:  -1px 4px 2px -3px #999999; '>"+showData[2]+"</article></div></li></ul></div>");  
				}
			}else{
				//console.log("left");
				if(showData[3]==undefined||""==showData[3]){
				$("#content").append("<div><ul class='ul_talk' style='padding:0; margin:0'><li class='tbox' ><div><span class='head'><img src='img/"+window.yourname+".jpg'></span></div><div><span class='arrow'><svg><path d='M50 0 L5 19 L4 20 L5 21 L50 40 Z' stroke-width='1' stroke='#FFFFFF' fill='#FFFFFF'></path></svg></span></div><div><article class='content' style='border-radius:5px;box-shadow: -1px 4px 2px -3px #999999; margin-bottom: 0px;'>"+showData[2]+"</article></div></li></ul></div>");
				}else{ 
				$("#content").append("<div><ul class='ul_talk' style='padding:0; margin:0'><li class='tbox' ><div><span class='head'><img src='"+showData[3]+"'></span></div><div><span class='arrow'><svg><path d='M50 0 L5 19 L4 20 L5 21 L50 40 Z' stroke-width='1' stroke='#FFFFFF' fill='#FFFFFF'></path></svg></span></div><div><article class='content' style='border-radius:5px;box-shadow: -1px 4px 2px -3px #999999; margin-bottom: 0px;'>"+showData[2]+"</article></div></li></ul></div>");
				}
			}
		}
		
	};
	ws.onclose = function() {
		log('Closed! 刷新页面尝试连接.');
	}
}
function sendMessage() {//不用了
	var mytext = document.getElementById("input-pj-text").value;
	if (ws != null && mytext != "") {
		ws.send(window.myname+","+window.yourname+","+mytext);
	}
	document.getElementById("input-pj-text").value="";
}
function stopconn() {
	ws.close();
}
function send_picture() {//https 可以发头像
    $("#face_div").css("height","0px");
	var main = document.querySelector('main');
	var mosaicContainer = document.getElementById('mosaic');
	var videoWidth= 0, videoHeight = 0;
	var videoElement;
	var shooter;
	var imagesPerRow = 5;
	var maxImages = 5;
	window.addEventListener('resize', onResize);
	GumHelper.startVideoStreaming(function(error, stream, videoEl, width, height) {
		if(error) {
			console.log('error: Cannot open the camera. Sad times: ' + error.message);
			//no video send message
			var mytext = document.getElementById("input-pj-text").value;
		        if (ws != null && mytext != "") {
                        	ws.send(window.myname+"#"+window.yourname+"#"+mytext);
                	}
			document.getElementById("input-pj-text").value="";
			return;
		}
		videoElement = videoEl;
		videoElement.width = width / 4;
		videoElement.height = height / 4;
		videoElement.style.display="none";
		videoWidth = width;
		videoHeight = height;
		main.appendChild(videoElement);
		shooter = new VideoShooter(videoElement);
		onResize();
		startCapturing();

	});
	function startCapturing() {
		shooter.getShot(onFrameCaptured, 10, 0.2, function onProgress(progress) {
			// Not doing anything in the callback,
		});
	}
	function onFrameCaptured(pictureData) {
		var mytext = document.getElementById("input-pj-text").value;
        if (ws != null && mytext != "") {
                ws.send(window.myname+"#"+window.yourname+"#"+mytext+"#"+pictureData);
        }
        document.getElementById("input-pj-text").value="";
		var img = document.createElement('img');
		img.src = pictureData;
		var imageSize = getImageSize();
		img.style.width = imageSize[0] + 'px';
		img.style.height = imageSize[1] + 'px';
		mosaicContainer.insertBefore(img, mosaicContainer.firstChild);
		if(mosaicContainer.childElementCount > maxImages) {
			mosaicContainer.removeChild(mosaicContainer.lastChild);	
		}
	}
	function getImageSize() {
		var windowWidth = window.innerWidth;
		var imageWidth = Math.round(windowWidth / imagesPerRow);
		var imageHeight = (imageWidth / videoWidth) * videoHeight;

		return [ imageWidth, imageHeight ];
	}
	function onResize(e) {
		// Don't do anything until we have a video element from which to derive sizes
		if(!videoElement) {
			return;
		}
		var imageSize = getImageSize();
		var imageWidth = imageSize[0] + 'px';
		var imageHeight = imageSize[1] + 'px';
		for(var i = 0; i < mosaicContainer.childElementCount; i++) {
			var img = mosaicContainer.children[i];
			img.style.width = imageWidth;
			img.style.height = imageHeight;
		}
		videoElement.style.width = imageWidth;
		videoElement.style.height = imageHeight;
	}

}
function keydownEvent() {
    var e = window.event || arguments.callee.caller.arguments[0];
	if (e && e.keyCode == 13 ) {
		//alert("您按回车键了");
        send_picture();
	}
}
angular.module('app', [])
.controller('managefootController',function($scope,$document,$rootScope){
		angular.element(document.querySelector('#'+$rootScope.selectScreen)).css('color','#33CC00');	
		$rootScope.showScreen($rootScope.selectScreen);//屏幕显示	
})
.directive('chatContent', [function(){
	return {
		templateUrl: 'tmpl/manage-body/content.html',
		restrict: "A",
		replace: true,
		controller: ['$scope', '$document','$element', '$attrs',function($scope,$document,$element,$attrs){
			$scope.items=[
				 {uname:'haoba',picture:'6.jpg',title:'hello',date:'早上09:56',newmsg:'true',content:'hello a day begin'}
				,{uname:'mashengxi',picture:'hahaha.jpg',title:'工作群',date:'早上11:26',newmsg:'false',content:'他说又加需求'}
				,{uname:'hahaha',picture:'6.jpg',title:'活动',date:'早上12:16',newmsg:'true',content:'出去玩吧，好久没出去了。'}
			];	
		}],
		link: function(scope, element, attrs){	
		}
	};
}])
.directive('chatUsers', [function(){
	return {
		templateUrl: 'tmpl/manage-body/users.html',
		restrict: "A",
		replace: true,
		link: function(scope, element, attrs){	
			scope.users=[
				 {picture:'haoba.jpg',title:'张三',uname:'haoba'}
				,{picture:'hahaha.jpg',title:'李四',uname:'mashengxi'}
				,{picture:'hahaha.jpg',title:'马大',uname:'hahaha'}
			];	
		}
	};
}])
.directive('chatDiscover', [function(){
	return {
		templateUrl: 'tmpl/manage-body/discover.html',
		restrict: "A",
		replace: true,
		link: function(scope, element, attrs){	
		}
	};
}])
.directive('chatMyself', [function(){
	return {
		templateUrl: 'tmpl/manage-body/myself.html',
		restrict: "A",
		replace: true,
		link: function(scope, element, attrs){	
		}
	};
}])
.directive('manageBody', [function(){
	return {
		templateUrl: 'tmpl/manage-body.html',
		restrict: "A",
		replace: true,
		controller: ['$scope', '$document','$rootScope',function($scope,$document,$rootScope){
		// 		angular.forEach($document.find('a'),function(node){
		// 			console.log(node.id);
	  	//          if(node.id == $scope.name){
	  	//          	node.style="color:#33CC00";
	  	//          }
		//      })
		}],
		link: function(scope, element, attrs){	
		}
	};
}])
.directive('manageFooter', ['$rootScope',function($rootScope){ //从这里传入$rootScope
	return {
		templateUrl: 'tmpl/manage-footer.html',
		restrict: "E",
		replace: true,
		controller: 'managefootController',
		link: function(scope, element, attrs){//这里不能用rootScope
			element.find('a').on('click', function(e){
				$rootScope.selectScreen=e.currentTarget.id;
				element.find('a').css('color','#999999');
				angular.element(document.querySelector('#'+$rootScope.selectScreen)).css('color','#33CC00');//底层菜单
				$rootScope.showScreen($rootScope.selectScreen);
			})
		}
	};
}])
.directive('msgBody', ['$rootScope',function($rootScope){ 
	return {
		templateUrl: 'tmpl/msg-body.html',
		restrict: "A",
		replace: true,
		link: function(scope, element, attrs){
		}
	};
}])
.directive('msgFooter', ['$rootScope',function($rootScope){ 
	return {
		templateUrl: 'tmpl/msg-footer.html',
		restrict: "E",
		replace: true,
		link: function(scope, element, attrs){
		}
	};
}])
.run(['$rootScope', function($rootScope){
	$rootScope.showScreen = function(sdiv){//主页面切换
		// angular.element(document.querySelector('#fchat-div')).css('display','none');
		$('#fchat-div').css('display','none');
		$('#users-div').css('display','none');
		$('#discover-div').css('display','none');
		$('#myself-div').css('display','none');
		$('#'+sdiv+'-div').css('display','block');
	};
	$rootScope.showmanage = function(){//显示主页面
		$('#manage-div').css('display','block');
		$('#message-div').css('display','none');
	};
	$rootScope.showmsg = function(toname){//显示消息页面
		window.yourname=toname;
		console.log("showMsg---->"+window.yourname+"  "+window.myname);
		$('#manage-div').css('display','none');
		$('#message-div').css('display','block');
		$('#biaoqing').qqFace({//qq表情
	        id : 'facebox', 
	        //assign:'saytext', 
	        assign:'input-pj-text', 
	        path:'./face/arclist/' //表情存放的路径
	    });
	    $(".sub_btn").click(function(){
	        var str = $("#saytext").val();
	        $("#show").html(replace_em(str));
	    });
	};
	
	$rootScope.selectScreen='fchat';
}])