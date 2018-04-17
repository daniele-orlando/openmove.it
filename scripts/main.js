(function () {
        'use strict';

        var mq = window.matchMedia('(min-width: 800px)');

        if (mq.matches) {
                var videoSources = document.querySelectorAll('video source');

                videoSources.forEach(function (source) {
                        var src = source.getAttribute('src-off');

                        if (src) {
                                source.setAttribute('src', src);

                                var video = source.parentElement;
                                video.load();
                        }
                });
        }

}());
