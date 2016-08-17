var animation_spans = document.querySelectorAll('.bullet_span');
	console.log(animation_spans);
	animation_spans.forEach(function(span) {
		span.addEventListener('animationend', function() {
			console.log('动画结束了');
		})
});

var zimus=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function genereateBullet() {
	var bullet = document.createElement('span');
	bullet.className='bullet';
	var classList=bullet.classList;
	classList.add('bullet','bullet-default-animation');
	var bulletText='';
	for(var i=0;i<5;i++){
		var randomNum =Math.floor(Math.random()*26);
		bulletText+=zimus[randomNum];
		bullet.id=bulletText;
	}
	var randomTop=Math.ceil(Math.random()*10);
	bullet.style.top=30*randomTop+'px';
	
	var bulletTextNode = document.createTextNode(bulletText);
	bullet.appendChild(bulletTextNode);
	var bullet_div = document.getElementById('test1');
	bullet_div.appendChild(bullet);
	
}
//函数带() 是不同的
//setInterval(genereateBullet(),1000);

setInterval(genereateBullet,700);