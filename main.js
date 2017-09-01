(function ($) {
    $(function () {
        var $element = $('.custom-select .select');
        var $selectList = $('.select-list')
        $('.custom-select').find('.selected').on('click', function (e) {
            $(this).parent().find('.select-list').toggleClass('visible');
        });
        $('.select-list li').on('click', function (e) {
            e.preventDefault();
            var $option = $(this);
            var newValue = $option.html();
            var lastValue = $element.html();
            $element.html(newValue);
            if (newValue != lastValue) {
                $element.trigger('change');
            }
            $option.parent().removeClass('visible');
        });
        $(document).on('mouseup', function (e) {
            if (!$selectList.is(e.target) && !$element.is(e.target) && $selectList.has(e.target).length === 0) {
                $selectList.removeClass('visible');
            }
        });
    });
})(jQuery);