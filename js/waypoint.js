var $intro = $('.intro')
$intro.waypoint(function(){
	$intro.addClass('gogo animated slideInRight')
},{offset:'60%'})

var $abt = $('.abt')
$abt.waypoint(function(){
	$abt.addClass('dudu animated slideInLeft')
},{offset:'60%'})

var $renraku = $('.renraku')
$renraku.waypoint(function(){
	$renraku.addClass('juju animated slideInRight')
}, {offset: '60%'})

var $shashin = $('.shashin')
$shashin.waypoint(function(){
	$shashin.addClass('ruru animated slideInLeft')
}, {offset: '60%'})

