(function(){jQuery(function($){var err,is_mobile_device,_this=this;if(navigator&&navigator.appVersion&&(navigator.appVersion.indexOf("MSIE 6.0")!==-1||navigator.appVersion.indexOf("MSIE 7.0")!==-1)){return;}
usernoiseButton.button=new usernoise.UsernoiseButton();usernoise.window={show:usernoiseButton.button.showWindow};$(".un-feedback-form").each(function(){new usernoise.FeedbackForm($(this));});is_mobile_device=function(){return window.innerWidth<=800&&window.innerHeight<=600;};if(usernoiseButton.showButton&&!(usernoiseButton.disableOnMobiles&&is_mobile_device())){usernoiseButton.button.show();}
$(document).bind("sent#feedbackform#window.un",function(){var $overlay,closeOverlay;closeOverlay=function(){$("#un-thankyou").find("a").unbind("click");$("#un-thankyou").fadeOut("fast",function(){$("#un-overlay").fadeOut("fast",function(){$("#un-overlay").remove();});});};$overlay=$("<div id=\"un-overlay\" />").appendTo($("body"));$("#un-overlay").click(closeOverlay).fadeIn("fast",function(){$("#un-thankyou").fadeIn("fast",function(){setTimeout(closeOverlay,5000);}).find("#un-feedback-close").click(closeOverlay);});});try{$("#"+ usernoiseButton.custom_button_id).click(function(){usernoise.window.show();return false;});}catch(_error){err=_error;alert("It looks like you entere wrong HTML ID value for custom Usernoise feedback button.");}
if(jQuery.on){jQuery.on('click','a[rel=usernoise], button[rel=usernoise], a[href="#usernoise"]',function(){usernoise.window.show();return false;});}
$("a[rel=usernoise]").click(function(){usernoise.window.show();return false;});$("button[rel=usernoise]").click(function(){usernoise.window.show();return false;});$("a[href=\"#usernoise\"]").click(function(){usernoise.window.show();return false;});});}).call(this);