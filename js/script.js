function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});
$(document).ready(function(){
	$('.ua').click(function(){
		$('.ua').addClass('_active')
		$('.ru').removeClass('_active')
		$('.about-me__title').html('Про мене')
		$('.about-me__paragraph_1').html('Привіт! Моє псевдо - Сом. Мені 16 років, і я такий же підліток, як і ви (швидше за все, фіг його знає ,хто це читає).')
		$('.about-me__paragraph_2').html("Я, в принципі ,як і  більшість моїх ровесників, цікавлюсь іграми, соц. мережами та деякими не дуже складними програмами. Не знаю, чи можна так сказати, але я з комп'ютером на «Ти», тобто я, на мою думку, добре розбираюсь в комп'ютері (не в залізі). Чесно, я не бачу в цьому чогось особливого, але все ж варто це написати, бо це частина мене.")
		$('.about-me__paragraph_3').html("Я люблю прямоту, інколи мабуть навіть занадто. Як і сам люблю говорити прямо, так і прямолінійність від інших. Лише коли це може комусь зробити боляче ,я стараюсь трохи пом'якшити слова. В принципі, я так само люблю і якісь заковиристі речі, по типу багатозначних фраз/жартів чи тому подібного. Щодо багатозначності у розмові я не дуже добре ставлюсь.")
		$('.about-me__paragraph_4').html('Не знаю ,чи так можна сказати, але я працюю разом з одним Ютубером "Uncle Cublay", а саме адмініструю <span style="text-decoration: line-through">наш</span> його <a href="https://discord.gg/Jte6b76" target="_blank" style="color:#b5b6b4;text-decoration: underline;">Діскорд сервер</a> та допомагаю з контролем проходок гравців на його приватний сервер в Minecraft. Можете вважати це дивним, але забавки не тільки для дітей; більша частина його аудиторії — 30+ років, тому я радий та зацікавлений у цьому. Також радий вам сказати, що я співзасновник цього каналу (насправді, я так не вважаю, оскільки я познайомився з Кубом (ми так його називаємо), коли на каналі було 3 тисячі підписників).')
		$('.about-me__paragraph_5').html('Також я зацікавлений у програмуванні, але якщо чесно, я не можу заставити себе вивчати його. Думаю, все ж колись до цього приступлю, надіюсь. Я ще зацікавлений у створенні свого контенту, але теж не наважуюсь на це. Ви могли бачити мої спроби у мене в інстаграмі. Рано чи пізно, я все ж запишу ще кілька тестових розмовних відео, може створю для цього особистий телеграм канал, де можна буде постити голосові записи.')
		$('.about-me__paragraph_6').html('Не знаю що ще можна було б добавити, тож на цьому все. Можливо я ще добавлятиму якусь інформацію. Посилання автора цього сайту та мого крутого друга - <a href="https://fn9ne.github.io/socials" style="color: #ADAEAC; text-decoration: underline;" target="_blank">https://fn9ne.github.io/socials</a>')
	});
	$('.ru').click(function(){
		$('.ru').addClass('_active')
		$('.ua').removeClass('_active')
		$('.about-me__title').html('Обо мне')
		$('.about-me__paragraph_1').html('Привет! Мой ник - Сом. Мне 16 лет, и я такой же подросток, как и вы (скорее всего, фиг его знает, кто это читает).')
		$('.about-me__paragraph_2').html('Я, в принципе, как и большинство моих сверстников, интересуюсь играми, соц. сетями и некоторыми не слишком сложными программами. Не знаю, можно ли так сказать, но я с компьютером на "ты", то есть я, по моему мнению, хорошо разбираюсь в компьютере (не в железе). Честно, я не вижу в этом ничего особенного, но все же стоит это написать, потому что это часть меня.')
		$('.about-me__paragraph_3').html('Я люблю прямоту, иногда пожалуй даже слишком. Как и сам люблю говорить прямо, так и прямолинейность от других. Только когда это может кому-то сделать больно, я стараюсь немного смягчить слова. В принципе, я так же люблю и какие-то заковыристые вещи, типа многозначных фраз/шуток или тому подобного. К многозначности в разговоре я не очень хорошо отношусь.')
		$('.about-me__paragraph_4').html('Не знаю, можно ли так сказать, но я работаю вместе с одним Ютубером "Uncle Cublay", а именно администрирую <span style="text-decoration: line-through">наш</span> его <a href="https://discord.gg/Jte6b76" target="_blank " style=" color: #b5b6b4; text-decoration: underline;">Дискорд сервер</a> и помогаю с контролем проходок игроков на его частный сервер в Minecraft. Можете считать это странным, но игры не только для детей; большая часть его аудитории - 30+ лет, поэтому я рад и заинтересован в этом. Также рад вам сказать, что я сооснаватель этого канала (на самом деле, я так не считаю, поскольку я познакомился с Кубом (мы так его называем), когда на канале было 3000 подписчиков).')
		$('.about-me__paragraph_5').html('Также я заинтересован в программировании, но если честно, я не могу заставить себя изучать его. Думаю, все же когда-то к этому приступлю, надеюсь. Я еще заинтересован в создании своего контента, но тоже не решаюсь на это. Вы могли видеть мои попытки у меня в инстаграмме. Рано или поздно, я все же запишу еще несколько тестовых разговорных видео, может создам для этого личный телеграмм канал, где можно будет постить голосовые записи.')
		$('.about-me__paragraph_6').html('Не знаю что еще можно было бы добавить, поэтому на этом всё. Возможно я ещё буду добавлять какую-то информацию. Ссылка автора этого сайта и моего крутого друга - <a href="https://fn9ne.github.io/socials" style="color: #ADAEAC; text-decoration: underline;" target="_blank">https://fn9ne.github.io/socials</a>')
	});
})