$(function(){
        // 1-进行表单校验

    $("#form").bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',//校验成功
            invalid: 'glyphicon glyphicon-remove',//校验失败
            validating: 'glyphicon glyphicon-refresh'//校验中
          },
        // 对字段进行校验
        fields:{
            username:{
                // 校验的规则
                validators:{
                    notEmpty:{
                        // 为空时显示的提示信息
                    },
                    // 长度要求2-6 
                    stringLength:{
                        min:2,
                        max:6,
                        message:"用户名长度必须是2-6位"
                    },
                    callback:{
                        message:'用户名不存在'
                    }
                }
            },
            password:{
                validators:{
                    notEmpty:{
                        message:"密码不能为空"
                    },
                    // 长度校验
                    stringLength:{
                        min:6,
                        max:12,
                        message:"密码长度必须6-12位"
                    },
                    callback:{
                        message:"密码错误"
                    }
                }
            }
        }
    });
})