 //定义一个函数，用来向一个元素中添加指定的class属性值
        /*
        obj:需要添加class 属性的元素
        cn:需要添加的class 值
        */
        function addClass(obj,cn){
            //检查是否有cn
            if(!hasClass(obj,cn)){
            obj.className+=" "+cn;
            }

        }
        /*
        判断一个元素中是否含有指定的class 属性值
        如果有该class ，返回true，如果没有返回false
        */

        function hasClass(obj,cn){
            //判断obj 中有没有cn class
            //创建一个正则表达式
            //var reg=/\bb3\b/;
           //使用构造函数的方式创建正则表达式
           var reg=new RegExp("\\b"+cn+"\\b");
           
            return reg.test(obj.className);

}
        /*
    删除一个元素中指定的class 属性

    */
       function removeClass(obj,cn){
        var reg=new RegExp("\\b"+cn+"\\b");

           //删除class
           obj.className=obj.className.replace(reg,"");

       }
       /*
       toggleClass可以用来切换一个类
       如果元素有，则删除
       如果没有，则添加

       */
      function toggleClass(obj,cn){
          //判断obj 是否含有cn
          if(hasClass(obj,cn)){
              removeClass(obj,cn);
          }else{
              addClass(obj,cn);
          }

      }