/* eslint-env browser */
(function($) {
	'use strict';

	$.fn.accessible = function() {

		$(this).on('activate.accessibility', function(event) {
			var el = $(event.currentTarget);
			el.accessibleIcons('.fa');
			el.accessibleIcons('.glyphicon');
			el.accessibleButtons();
		});

		$(this).trigger('activate.accessibility');
	};

	$.fn.accessibleIcons = function(klass) {

		if (!klass) klass = '.fa';
		if (klass[0] !== '.') klass = '.' + klass;

		var icons = $(this).find(klass).not('[aria-hidden]');
		var decorative = icons.not('[title]');
		var interactive = icons.not(decorative);

		decorative.attr('aria-hidden', 'true');
		interactive.each(function() {
			var el = $(this);
			var title = el.attr('title');
			var span = $('<span class="sr-only">' + title + '</span>');
			el.after(span);
		});
	};

	$.fn.accessibleButtons = function() {

		var btns = $(this).find('.btn');
		var colored = btns.not('.btn-default');
		colored.removeClass('btn-success btn-info btn-warning btn-danger');
		colored.addClass('btn-default');
	};

	$(function() {
        $('body').accessible();
    });

})(jQuery);
