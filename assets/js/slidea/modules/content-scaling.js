(function(){!function(t,s,i){"use strict";return t.fn.slidea.contentScaling=function(){var s;this.settings={enabled:!1,mode:"responsive",factor:{xs:1,sm:1,md:1,lg:1,xl:1}},s=function(s){var i,n,e,a,c,r,o,l;s!==-1&&(a=this.slides.eq(s),n=t(".slidea-content",a),c="0%",r=n.hasClass("slidea-content-center")?"50%":n.hasClass("slidea-content-bottom")?"100%":"0%",e=n.width(),i=this.wrapper_width,"responsive"===this.settings.contentScaling.mode?(l=this.settings.contentScaling.factor[this.current_responsive_size],this.animate.set(n,{scale:l,x:(i-e*l)/2,transformOriginX:c,transformOriginY:r})):(o=this.data[s].background[0].width,l=i/o*this.settings.contentScaling.factor[this.current_responsive_size],1===this.settings.contentScaling.factor[this.current_responsive_size]?this.animate.set(n,{x:0}):this.animate.set(n,{x:i*(1-this.settings.contentScaling.factor[this.current_responsive_size])/2}),this.animate.set(n,{z:0,transformOriginX:c,transformOriginY:r,scaleX:l,scaleY:l})),this.log("Content has been scaled with "+l+"."))},this.slide=function(t,i){s.call(this,i)},this.resize=function(){s.call(this,this.current)}},t.slidea.register_module("contentScaling",t.fn.slidea.contentScaling)}(window.jQuery,window,document)}).call(this);
