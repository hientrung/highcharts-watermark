(function (H) {
	H.Chart.prototype.callbacks.push(function (chart) {
		var opt = chart.options.watermark;
		if (!opt || !opt.url) return;
		opt = $.extend({}, {opacity: 1, top: false, width: 200, height: 200}, opt);
		chart.watermark = chart.renderer.image(opt.url, (chart.plotBox.width - opt.width)/2 + chart.plotBox.x, (chart.plotBox.height - opt.height)/2 + chart.plotBox.y, opt.width, opt.height).css({opacity: opt.opacity}).add();
		if (opt.top)
			chart.watermark.toFront();
		$(chart).on('redraw', function() {
			if (chart.watermark) {
				chart.watermark.attr({ x: (chart.plotBox.width - opt.width) / 2 + chart.plotBox.x, y: (chart.plotBox.height - opt.height) / 2 + chart.plotBox.y });
			}
		});
	});
}(Highcharts));