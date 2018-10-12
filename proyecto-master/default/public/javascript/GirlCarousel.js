/* global Class */

(function($) {
    jQuery.fn.GirlCarousel = function(settings) {
        $.each(this, function(index, elem) {
            new GirlCarousel(elem, settings);
        });
        return this;
    };
    var GirlCarousel = Class.extend({
        init: function(elem, settings) {
            this.dom = $(elem);
            this.timeout;
            this.interval;
            var instance = this;
            var tap = ("ontouchstart" in document.documentElement);
            if (tap) {
                this.dom.on('touchstart', function(e) {
                    instance.mouseIn(e);
                });
                this.dom.on('stopcarousel', function(e) {
                    instance.mouseOut(e);
                });
                this.dom.on('contextmenu', function(e) {
                    e.preventDefault();
                    return false;
                });
            } else {
                this.dom.on('mouseenter', function(e) {
                    instance.mouseIn(e);
                });
                this.dom.on('mouseleave', function(e) {
                    instance.mouseOut(e);
                });
            }
        },
        clearTimers: function() {
            if (this.interval) {
                clearInterval(this.interval);
            }
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
        },
        doSlide: function($elem) {
            var number_slide = $elem.find('.image-carousel').attr('data-number-slide');
            var current_slide = parseInt($elem.find('.image-carousel').attr('data-current-slide'));
            var next_slide = current_slide + 1;
            if (next_slide >= number_slide) {
                next_slide = 0;
            }
            $elem.find('.image-carousel img').first().css({
                'margin-left': -100 * next_slide + '%'
            });
            $elem.find('.image-carousel').attr('data-current-slide', next_slide);
        },
        mouseIn: function(e) {
            var instance = this;
            var $elem = $(e.currentTarget);
            $elem.data('hovered', true);
            var $imagesToLoad = this.dom.find('img[data-src]');
            var $imagesLoaded = 0;
            if ($imagesToLoad.length > 0) {
                $imagesToLoad.each(function() {
                    $(this).attr('src', $(this).attr('data-src'));
                    $(this).removeAttr('data-src');
                });
                this.dom.find('img').on('load', function() {
                    $imagesLoaded++;
                    if ($imagesLoaded >= $imagesToLoad.length && $elem.data('hovered') === true) {
                        instance._startCarousel($elem);
                    }
                });
            } else {
                this._startCarousel($elem);
            }
        },
        _startCarousel: function($elem) {
            var instance = this;
            $elem.closest('#girls_list').find('.image-wrapper:not(.girl-back-soon)').not($elem).trigger('stopcarousel');
            this.clearTimers();
            $elem.find('.image-carousel img').first().css({
                'margin-left': '0%'
            });
            $elem.find('.image-carousel').attr('data-current-slide', 0);
            this.timeout = setTimeout(function() {
                instance.doSlide($elem);
                instance.interval = setInterval(function() {
                    instance.doSlide($elem);
                }, 750);
            }, 300);
        },
        mouseOut: function(e) {
            var instance = this;
            instance.clearTimers();
            var $elem = $(e.currentTarget);
            $elem.data('hovered', false);
            $elem.find('.image-carousel img').first().css({
                'margin-left': '0%'
            });
            $elem.find('.image-carousel').attr('data-current-slide', 0);
        }
    });
})(jQuery);