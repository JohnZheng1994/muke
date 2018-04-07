
$(function () {
    var headerForm = $('#form');
    var headerText = $('#search');
    var headerSub = $('#submit');

    headerText.on('focus', function () {
        headerForm.addClass('on');
        headerSub.addClass('active');
    })
    headerText.on('blur', function () {
        headerForm.removeClass('on');
        headerSub.removeClass('active');
    })

    var weibo = $('#weibo');
    var mobilePic1 = $('.mobile img:first');
    var mobilePic2 = $('.mobile img:last');
    
    weibo.hover(function () {
        mobilePic1.addClass('on');
        mobilePic2.addClass('on');
    }, function () {
        mobilePic1.removeClass('on');
        mobilePic2.removeClass('on');
    })

    var erweima = $('#erweima');
    var erweiPic = $('#erweiPic');
    erweima.hover(function () {
        erweiPic.css('opacity','1')
    }, function () {
        erweiPic.css('opacity', '0')
    })

    //登陆注册弹出窗口
    var dengluBtn = $('#dengluBtn');
    var zhuceBtn = $('#zhuceBtn');
    //创建表单区
    function loginWin() {
        var mask = $("<div id='mask'></div>");
        var ch = $(window).height()+'px';
        var cw = $(window).width() + 'px';
        
        
        mask.css('width', cw);
        mask.css('height', ch);
        mask.appendTo('body');
        var login = $("<div class='login'></div>");
        login.html("<p><span id='dengluTab'>登陆</span><span id='zhuceTab'>注册</span></p><form id='denglu' ><input type='text' name='username' placeholder='请输入登录邮箱' required><input type='password' name='password' placeholder='请输入密码' required><section><input type='checkbox' value='rem' id='rem'><label for='rem'>下次自动登录</label><a href='#'>忘记密码</a></section><input type='submit' value='登录'></form><form id='zhuce' ><input type='text' name='uesrname' placeholder='请输入电子邮箱' required id='name'><p id='nameP'></p><input type='password' name='password' placeholder='6-16位密码，区分大小写，不能用空格' id='password'><p id='passP'></p><input type='text' placeholder='昵称为2-18位。中英文、数字及下划线' name='nickname' id='nickname'><p id='nickP'></p><input type='submit' value='注册' id='submitBtn' ></form><span id='close'></span>");
        login.appendTo('body');
    }
    //移除表单区
    function removeLogin() {
        var mask = $('#mask');
        var login = $('.login');
        mask.remove();
        login.remove();
    }
    
    dengluBtn.on('click' , function () {
        loginWin();
        var dengluTab = $('#dengluTab');
        dengluTab.addClass('on');
        var denglu = $('#denglu');
        denglu.addClass('active');
        var login = $('.login');
        
        var oWidth = login.width();
        var oHeight = login.height();
        
        var cHeight = $(window).height();
        var cWidth = $(window).width();
        
        var logLeft = (cWidth / 2 - oWidth / 2) + 'px';
        var logTop = (cHeight / 2 - oHeight / 2) + 'px';
        
        login.css('left', logLeft);
        login.css('top', logTop);
        var close = $('#close');
        close.on('click', function () {
            removeLogin();
        })
        var zhuceTab = $('#zhuceTab');
        var zhuce = $('#zhuce');
        zhuceTab.on('click',function () {
            dengluTab.removeClass('on');
            denglu.removeClass('active');
            zhuceTab.addClass('on');
            zhuce.addClass('active');
        })
        
        dengluTab.on('click', function () {
            dengluTab.addClass('on');
            denglu.addClass('active');
            zhuceTab.removeClass('on');
            zhuce.removeClass('active');
        })
        var mask =$('#mask');
        mask.on('click' , function () {
            removeLogin();
        })
        formCheck();
        return false;
    })

    zhuceBtn.on('click', function () {
        loginWin();
        var zhuceTab = $('#zhuceTab');
        zhuceTab.addClass('on');
        var zhuce = $('#zhuce');
        zhuce.addClass('active');
        var login = $('.login');
        var oWidth = login.width();
        var oHeight = login.height();

        var cHeight = $(window).height();
        var cWidth = $(window).width();
        
        var logLeft = (cWidth / 2 - oWidth / 2) + 'px';
        var logTop = (cHeight / 2 - oHeight / 2) + 'px';

        login.css('left', logLeft);
        login.css('top', logTop);
        var close = $('#close');
        close.on('click', function () {
            removeLogin();
        })
        var dengluTab = $('#dengluTab');
        var denglu= $('#denglu');
        dengluTab.on('click', function () {
            dengluTab.addClass('on');
            denglu.addClass('active');
            zhuceTab.removeClass('on');
            zhuce.removeClass('active');
        })
        
        zhuceTab.on('click',  function () {
            dengluTab.removeClass('on');
            denglu.removeClass('active');
            zhuceTab.addClass('on');
            zhuce.addClass('active');
        })
        var mask=$('#mask')
        mask.on('click',function () {
            removeLogin();
        })
        formCheck();
        return false;
    })


    //表单验证函数
    function formCheck() {
        var name = $('#name');
        var password = $('#password');
        var nickname = $('#nickname');
        var submit = $('#submitBtn');
        var nameP = $('#nameP');
        //用户邮箱验证，这里仅验证是否含有@这一符号
        name.on('blur', function () {
            if (name.val() == "") {
                nameP.text('邮箱不能为空');
                submit.attr("disabled",true);
                return false;
            }
            var nameVal=name.val();
            if(!nameVal.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)){
                nameP.text('邮箱格式错误');
                submit.attr('disabled', 'disabled');
            }

            else {
                nameP.text('');
                submit.removeAttr('disabled');
            }
        })
        //密码验证，6-16位，字母数字下划线
        password.on('blur',function () {
            var pswReg = /[^\w]/g;
            var pswP = $('#passP');
            var pswValue = password.val();
            if (pswReg.test(pswValue) || pswValue.length < 6 || pswValue.length > 16) {
                pswP.text ('请按要求输入密码');
                submit.attr('disabled', 'disabled');
            } else {
                pswP.text ( '');
                submit.removeAttr('disabled');
            }

        })
        // 昵称验证
        nickname.on('blur',function () {
            var nickP = $('#nickP');
            var nickValue = nickname.val();
            var nickLen = formStr(nickValue);
            var nickReg = /[^\u4e00-\u9fa5\w]/g;
            if (nickLen < 2 || nickLen > 18 || nickReg.test(nickValue)) {
                nickP.text( '请按要求输入昵称');
                submit.attr('disabled', 'disabled');
            } else {
                nickP.text('');
                submit.removeAttr('disabled');
            }

        })
    }
    //将双字节字符替换为xx，返回字节数
    function formStr(str) {
        str = str.replace(/[^\x00-\xff]/g, 'xx');
        return str.length;
    }

})