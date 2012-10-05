(function($)
{
	var nativeSupport = ('placeholder' in $('<input>')[0])

	$.fn.fixPlaceholder = function()
	{
		if (!nativeSupport)
		{
			this.each(function()
			{
				var $el = $(this).off('.fixPlaceholder')
				$el.data('realValue', $el.val())

				if ($el.data('realValue') == '')
					$el.val($el.attr('placeholder')).addClass('placeholder').data('realValue', '')

				$el.on('focus.fixPlaceholder', function()
				{
					if ($el.data('realValue') == '')
						$el.val('').removeClass('placeholder').data('realValue', '')
				})

				$el.on('blur.fixPlaceholder', function()
				{
					$el.data('realValue', $(this).val())

					if ($el.data('realValue') == '')
						$el.val($(this).attr('placeholder')).addClass('placeholder').data('realValue', '')
				})

				$el.parents('form').on('submit', function()
				{
					if ($el.data('realValue') == '')
						$el.val('')
				})
			})
		}

		return this
	}
})(jQuery)