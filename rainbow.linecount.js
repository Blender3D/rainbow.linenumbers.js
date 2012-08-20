if (window.Rainbow) window.Rainbow.linecount = (function(Rainbow) {
	Rainbow.onHighlight(function(block) {
		var $block = $(block);
		var $dummy = $block.clone().empty();
		var $lines = $('<table />', {class: 'rainbow'}).appendTo($dummy);
		var lines = $block.html().split('\n');

		$.each(lines, function(index, value) {
			index++;

			var $row = $('<tr />', {class: 'rainbow-line rainbow-line-' + index});

			$('<td />', {class: 'rainbow-line-number'}).text(index).appendTo($row);
			$('<td />', {class: 'rainbow-line-code'}).html(value).appendTo($row);

			$lines.append($row);
		});

		$block.replaceWith($lines);
	});
})(window.Rainbow);