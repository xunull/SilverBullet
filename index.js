
(function() {
	var animation_spans = document.querySelectorAll('.bullet_span');
	console.log(animation_spans);
	// 这个方法当animation_spans 是空的时候,(firefox,safari)forEach会提示错误
//	animation_spans.forEach(function(span) {
//		span.addEventListener('animationend', function() {
//			console.log('动画结束了');
//		})
//	});
	// 这个方法不会提示错误
	for(var i=0;i<animation_spans.length;i++){
		animation_spans[i].addEventListener('animationend',function(){
			console.log('动画结束了');
		});
	}
})();

var bullet_div = document.getElementById('test1');
bullet_div.addEventListener('animationend',function(event){
//	console.log('动画结束了，未捕获');
//	console.log(event.target);
	event.target.remove();
});

var zimus=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

/**
 * 一个弹幕的相关属性 
 */
function BulletComment(word) {
	// 弹幕的颜色
	this.color=null;
	this.word=word;
	
}

// 弹幕文字的数组
var bulletComments =[];

function genereateBullet(bulletComment) {
	var bullet = document.createElement('span');
	bullet.className='bullet';
	var classList=bullet.classList;
	classList.add('bullet','bullet-default-animation');
	
	var randomTop=Math.ceil(Math.random()*15);
	bullet.style.top=30*randomTop+'px';
	
	var bulletTextNode = document.createTextNode(bulletComment.word);
	bullet.appendChild(bulletTextNode);
	var bullet_div = document.getElementById('test1');
	bullet_div.appendChild(bullet);
	
}
//函数带() 是不同的
//setInterval(genereateBullet(),1000);

setInterval(temp,400);

function temp() {
	var bulletText='';
	for(var i=0;i<5;i++){
		var randomNum =Math.floor(Math.random()*26);
		bulletText+=zimus[randomNum];
//		bullet.id=bulletText;
	}
	var bulletComment = new BulletComment(bulletText);
	addBullet(bulletComment);
}

/**
 * 调用该方法即可生成一个弹幕
 */
function addBullet(...bulletComments) {
	bulletComments.push(bulletComments);
	for(var i=0;i<bulletComments.length;i++) {
		var bulletComment=bulletComments.shift();
		genereateBullet(bulletComment);
	}
}
