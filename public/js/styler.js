var $, jQuery;
(function ($) {
    'use strict';
    
    $(document).ready(function () {
        
         $('#cp1').colorpicker();
         $('#cp2').colorpicker();
        
        
        $('.styler').fadeOut(0); 
        $(window).load(function () {
            $('.styler').fadeIn('slow');
            setTimeout(function () {
               $('.styler').removeClass('active');     
            }, 2000);
        });
        
        $('.styler').on("mouseover", function () {
            $('.styler').addClass('active');
            setInterval(function(){ color_change(); }, 100);
        });
        $('.content_wrapper').on("mouseover", function () {
            $('.styler').removeClass('active');
        });
        
        $('.style_btn').each(function(){
            $(this).find('a').click(function () {
                $(this).addClass('active');
                $(this).siblings('a.active').removeClass('active');
            });
        });
        
        $('.sticky_control a.off').click(function () {
            $('header').removeClass('fixed_header');
        });
        $('.sticky_control a.on').click(function () {
            $('header').addClass('fixed_header');
        });
        
        $('.bg_mode a.wide').click(function () {
            $('.box_mode').removeClass('active');
        });
        $('.bg_mode a.boxed').click(function () {
            $('.box_mode').addClass('active');
        });
        
        


        
        $('.box_bg .single_bg').click(function () {
            var bg_img = $(this).attr('style').replace('background-image: ','');
            $('body').css('background-image', bg_img);
            $('.box_mode').addClass('active');
            $('.bg_mode a.wide').removeClass('active');
            $('.bg_mode a.boxed').addClass('active');
        });
        
        $('.styleInner .default-btn').click(function () {
            var btn_class = $(this).attr('data-effect');
            $('.content_wrapper .default-btn').removeClass('hvr-shutter-out-horizontal hvr-bounce-to-right hvr-rectangle-out hvr-sweep-to-bottom');
            $('.content_wrapper .default-btn').addClass(btn_class);

            $('.styleInner .default-btn').removeClass('active');
            $(this).addClass('active');
        });
         
    });
    
    
function color_change(){
        
    var cp1_val = $('#cp1 input').val();
    var cp2_val = $('#cp2 input').val();
    
        var cPrimary = 'header ul.menu > li.current-menu-item > a, header ul.menu > li:hover > a, .loader:before, .cPrimary, .loader, .single .bread_crumb_area .breadcrumb .page_link a:hover, header .container .logo > span, header ul.menu li a:hover, header ul.menu > li:hover > a, header ul.menu > li.current-menu-item > a, .feature_area .features .feature_dsc a.read_me:hover, .feature_area .features .single_feature:hover .sf_inner h4, .pricing_area .single_price .price_head .h1, .pricing_area .single_price .price_body ul li:before, .testimonial_area .tst_btn a, .faq_area .newsletter form input[type="submit"], footer .footer_top .widget.widget_link li a:hover, footer .footer_top .widget_contact ul li a:hover, footer .footer_top .widget_contact ul li a i, footer .footer_top .footer_social a, .blog_area aside section .single_recent .h5:hover, .blog_area aside section .cat-links li a:hover, .blog_area .comment_form form input[type="submit"]:hover, .faq_area .newsletter form button, footer .footer-contact-info ul li a i';

        var cPrimary_bg = '.btn_link.default-btn, header ul.menu > li > a:before, .header-area ul li ul, footer .footer_btm a.top_scrl, .styler .icon, .styler .styleInner .single_style .style_btn a.active, .cPrimary_bg, .styler .icon, .styler .styleInner .single_style .style_btn a.active, .styler .styleInner .single_style .single_color, .styler .styleInner .single_style .single_bg, .slicknav_btn, .slicknav_nav, .loader, .loader:before, .loader:after, .default-btn, header ul.menu > li > a:before, .header-area ul li ul, .feature_area .features .single_feature .sf_inner:before, .video_area:before, .video_area:after, .brand_area .brand_slider .single_slide:before, .funfact_area, .pricing_area .single_price.active:before, .faq_area .newsletter, .faq_area .newsletter form input[type="email"], .cta_2, .get_touch .modal-dialog .modal-content .modal-close, .get_touch .modal-dialog .modal-content form input[type="submit"], footer .footer_top .widget_contact a.btn, footer .footer_btm .top_scrl, .blog_area .pagination li a:hover, .blog_area .pagination li > span, .blog_area .comment_form form input[type="submit"], .funfact_area, .feature-twoboxs, .single_feature .sf_inner:before, .call_ta_area ';

        var cPdark_bg = '.cPdark_bg, .slicknav_nav .slicknav_row:hover, .slicknav_nav a:hover, .default-btn:before, .hvr-shutter-out-horizontal:before, footer .footer_top .widget_contact a.btn:before';
    
        var cp_bo = '.cp_bo, .get_touch .modal-dialog .modal-content form input:not([type="submit"]):focus, .get_touch .modal-dialog .modal-content form textarea:focus, .blog_area .comment_form form input:not([type="submit"]):focus, .blog_area .comment_form form textarea:focus, .blog_area .comment_form form input[type="submit"]:hover';

        var cSc = 'a:hover';
    
    
    
    
    
        $('.styler_css').html(
            cPrimary + '{ color: ' + cp1_val + ' !important} ' +  
            cPrimary_bg + '{ background-color: ' + cp1_val + ' !important} ' +
            cPdark_bg + '{ background-color: ' + cp2_val + ' !important} ' + 
            cp_bo + '{border-color: ' + cp1_val + ' !important}' 
        );
    
    
}
    
    
})(jQuery);
