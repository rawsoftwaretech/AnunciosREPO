var Wishlist = Class.extend({
    init: function(settings) {
        this.settings = $.extend({
            remove_mode: false,
            girls_icon_selector: '',
            wishlist_page_icon: null,
            format: '{count}',
            onGirlRemoved: function() {}
        }, settings);
        this.initDom();
    },
    initDom: function() {
        this.girls = $(this.settings.girls_icon_selector);
        this.loadState();
        this.setEvents();
        this.setWishListCounter();
    },
    loadState: function() {
        var instance = this;
        instance.girls.each(function(index, elem) {
            var girlStamp = $(elem).attr('data-girl_stamp');
            if (instance.isAlreadyInWishlist(girlStamp)) {
                instance.setImageState($(elem), true);
            }
        });
    },
    setRemoveMode: function(remove_mode) {
        if (remove_mode) {
            this.settings.remove_mode = true;
        } else {
            this.settings.remove_mode = false;
        }
    },
    setEvents: function() {
        var instance = this;
        this.girls.on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            $elem = $(event.currentTarget);
            var girlStamp = $elem.attr('data-girl_stamp');
            if (instance.settings.remove_mode) {
                instance.removeFromWishlist($elem);
                $elem.closest('.girl_box').find('.image-wrapper').fadeOut(220, function() {
                    instance.settings.onGirlRemoved();
                });
            } else {
                if (!instance.isAlreadyInWishlist(girlStamp)) {
                    instance.addToWishlist($elem);
                } else {
                    instance.removeFromWishlist($elem);
                }
            }
            return false;
        });
    },
    isAlreadyInWishlist: function(girlStamp) {
        var instance = this;
        for (var i in Wishlist.currentWishlist) {
            if (Wishlist.currentWishlist[i] == girlStamp) {
                return true;
            }
        }
        return false;
    },
    addToWishlist: function($elem) {
        var instance = this;
        var girlStamp = $elem.attr('data-girl_stamp');
        Wishlist.currentWishlist.push(girlStamp);
        this.saveWishlistToCookie();
        this.setImageState($elem, true);
        if (this.settings.wishlist_page_icon) {
            var $img = $elem.find('.wishlist_icon_img');
            var $icon = $(this.settings.wishlist_page_icon);
            var $flyingImg = $img.clone().appendTo('body').css({
                'position': 'absolute',
                'top': $img.offset().top + 'px',
                'left': ($img.offset().left) + 'px',
                'z-index': 10000
            }).animate({
                'top': ($icon.offset().top + 13) + 'px',
                'left': ($icon.offset().left - 2) + 'px'
            }, 250, 'swing', function() {
                $flyingImg.fadeOut('fast', function() {
                    $(this).remove();
                });
                instance.setWishListCounter();
            });
        }
    },
    removeFromWishlist: function($elem) {
        var girlStamp = $elem.attr('data-girl_stamp');
        Wishlist.currentWishlist = Wishlist.currentWishlist.filter(function(stamp) {
            return stamp != girlStamp;
        });
        this.saveWishlistToCookie();
        this.setImageState($elem, false);
        this.setWishListCounter();
    },
    setImageState: function($elem, isOn) {
        var $img = $elem.find('.wishlist_icon_img');
        if (isOn) {
            $img.addClass('on');
        } else {
            $img.removeClass('on');
        }
    },
    saveWishlistToCookie: function() {
        Cookies.set('wishlist', Wishlist.currentWishlist);
    },
    setWishListCounter: function() {
        var instance = this;
        var $icon = $(this.settings.wishlist_page_icon);
        var count = Wishlist.currentWishlist.length;
        if (count > 0) {
            $icon.each(function(i, e) {
                instance.format(e, count);
            });
        } else {
            $icon.find('.count').html('');
        }
    },
    format: function(elem, count) {
        var format = $(elem).find('.count').attr('data-format') ? $(elem).find('.count').attr('data-format') : this.settings.format;
        $(elem).find('.count').html(format.replace('{count}', count));
    }
});
Wishlist.currentWishlist = Cookies.get('wishlist') ? Cookies.getJSON('wishlist') : [];