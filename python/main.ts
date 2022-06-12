
//% color="#098eff" iconWidth=50 iconHeight=40
namespace cvFindContoursEasy{


    //% block="读取图像对象[PATH]" blockType="reporter"
    //% PATH.shadow="string" PATH.defl="test1.png"
    export function read(parameter: any, block: any) {
        let path=parameter.PATH.code;
        Generator.addImport(`import cv2\nimport numpy as np`)
        Generator.addCode(`cv2.imread(${path})`)
 
    }

    

    //% block="复制图像对象[IMG]" blockType="reporter"
    //% IMG.shadow="string" IMG.defl="img"
    export function copy(parameter: any, block: any) {
        let img=parameter.IMG.code;
        img = replaceQuotationMarks(img)
        Generator.addImport(`import cv2\nimport numpy as np`)
        Generator.addCode(`${img}.copy()`)
 
    }

    //% block="显示图片[IMG] 窗口名[NAME]" blockType="command"
    //% IMG.shadow="string" IMG.defl="img"
    //% NAME.shadow="string" NAME.defl="img window"
    export function show(parameter: any, block: any) {

        let img=parameter.IMG.code;
        let name=parameter.NAME.code;
        img = replaceQuotationMarks(img)

        Generator.addImport(`import cv2\nimport numpy as np`)
        Generator.addCode(`cv2.imshow(${name}, ${img})`)
 
    }
    //% block="等待按键按下 [NUM]毫秒" blockType="reporter"
    //% NUM.shadow="number" NUM.defl="20"
    export function waitKey(parameter: any, block: any) {

        let num=parameter.NUM.code;
        Generator.addImport(`import cv2\nimport numpy as np`)
        Generator.addCode(`cv2.waitKey(${num})`)
 
    }
    //% block="等待直到任意按键按下" blockType="command"
    export function waitKey2(parameter: any, block: any) {

        Generator.addImport(`import cv2\nimport numpy as np`)
        Generator.addCode(`cv2.waitKey(0)`)
 
    }

/*    
    //% block="---"
    export function noteSep1() {}

    //% block="[IMG]转为灰度图" blockType="reporter"
    //% IMG.shadow="string" IMG.defl="img"
    export function cvtColor(parameter: any, block: any) {

        let img=parameter.IMG.code;
        img = replaceQuotationMarks(img)

        Generator.addImport(`import cv2\nimport numpy as np`)
        Generator.addCode(`cv2.cvtColor(${img},cv2.COLOR_RGB2GRAY)`)
 
    }

    //% block="[IMG]高斯滤波 核长[W]宽[H]标准差[SIG] " blockType="reporter"
    //% IMG.shadow="string" IMG.defl="img"
    //% W.shadow="number" W.defl="5"
    //% H.shadow="number" H.defl="5"
    //% SIG.shadow="number" SIG.defl="1"
    export function GaussianBlur(parameter: any, block: any) {

        let img=parameter.IMG.code;
        let w=parameter.W.code;
        let h=parameter.H.code;
        let sig=parameter.SIG.code;
        img = replaceQuotationMarks(img)

        Generator.addImport(`import cv2\nimport numpy as np`)
        Generator.addCode(`cv2.GaussianBlur(${img},(${w},${h}),${sig})`)
 
    }
      


    //% block="[IMG]Canny算子边缘检测 阈值1[T1] 阈值2[T2]" blockType="reporter"
    //% IMG.shadow="string" IMG.defl="img"
    //% T1.shadow="number" T1.defl="60"
    //% T2.shadow="number" T2.defl="60"
    export function Canny(parameter: any, block: any) {

        let img=parameter.IMG.code;
        let t1=parameter.T1.code;
        let t2=parameter.T2.code;
        img = replaceQuotationMarks(img)

        Generator.addImport(`import cv2\nimport numpy as np`)
        Generator.addCode(`imgCanny = cv2.Canny(${img},${t1},${t2})`)
 
    }

  */
    


    //% block="---"
    export function noteSep2() {}


    //% block="在图像[IMG]中寻找轮廓点 所有结果存储到序列[CONTOURS]" blockType="command"
    //% IMG.shadow="string" IMG.defl="img"
    //% CONTOURS.shadow="string" CONTOURS.defl="contours"
    export function findContours(parameter: any, block: any) {
        let img=parameter.IMG.code;
        let contours=parameter.CONTOURS.code;
        //let hierarchy=parameter.HIERARCHY.code;
        img = replaceQuotationMarks(img)
        contours = replaceQuotationMarks(contours)
        //hierarchy = replaceQuotationMarks(hierarchy)
        Generator.addImport(`import cv2\nimport numpy as np`)
        Generator.addCode(`cv_imgGray = cv2.cvtColor(${img},cv2.COLOR_RGB2GRAY)`)
        Generator.addCode(`cv_imgBlur = cv2.GaussianBlur(cv_imgGray,(5,5),1)`)
        Generator.addCode(`cv_imgCanny = cv2.Canny(cv_imgBlur,60,60)`)
        Generator.addCode(`${contours},hierarchy = cv2.findContours(cv_imgCanny,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_NONE)`)
 
    }



    //% block="计算[OBJ]轮廓内区域面积" blockType="reporter"
    //% OBJ.shadow="string" OBJ.defl="obj"
    export function contourArea(parameter: any, block: any) {

        let obj=parameter.OBJ.code;
        obj = replaceQuotationMarks(obj)
        Generator.addImport(`import cv2\nimport numpy as np`)
        Generator.addCode(`cv2.contourArea(${obj})`)
 
    }


    //% block="计算[OBJ]轮廓周长" blockType="reporter"
    //% OBJ.shadow="string" OBJ.defl="obj"
    export function arcLength(parameter: any, block: any) {

        let obj=parameter.OBJ.code;
        obj = replaceQuotationMarks(obj)
        Generator.addImport(`import cv2\nimport numpy as np`)
        Generator.addCode(`cv2.arcLength(${obj},True)`)
 
    }


/*
    //% block="获取轮廓[OBJ]角点坐标 阈值[EPSILON]" blockType="reporter"
    //% OBJ.shadow="string" OBJ.defl="obj"
    //% EPSILON.shadow="number" EPSILON.defl="1"
    export function approxPolyDP(parameter: any, block: any) {
        let obj=parameter.OBJ.code;
        let epsilon=parameter.EPSILON.code;

        obj = replaceQuotationMarks(obj)

        Generator.addImport(`import cv2\nimport numpy as np`)
        Generator.addCode(`cv2.approxPolyDP(${obj},${epsilon},True)`)
 
    }
*/
    //% block="获取点坐标[OBJ]角点坐标 结果存储到(X[X],Y[Y],宽[W],高[H])" blockType="command"
    //% OBJ.shadow="string" OBJ.defl="obj"
    //% X.shadow="string" X.defl="x"
    //% Y.shadow="string" Y.defl="y"
    //% W.shadow="string" W.defl="w"
    //% H.shadow="string" H.defl="h"
    export function boundingRect(parameter: any, block: any) {
        let obj=parameter.OBJ.code;
        let x=parameter.X.code;
        let y=parameter.Y.code;
        let w=parameter.W.code;
        let h=parameter.H.code;

        obj = replaceQuotationMarks(obj)
        x = replaceQuotationMarks(x)
        y = replaceQuotationMarks(y)
        w = replaceQuotationMarks(w)
        h = replaceQuotationMarks(h)
        
        Generator.addImport(`import cv2\nimport numpy as np`)
        Generator.addCode(`cv_perimeter = cv2.arcLength(${obj},True)`)
        Generator.addCode(`cv_approx = cv2.approxPolyDP(${obj},(0.02*cv_perimeter),True)`)
        Generator.addCode(`${x}, ${y}, ${w}, ${h} = cv2.boundingRect(cv_approx)`)
 
    }



    //% block="计算[OBJ]轮廓角数量 结果存储到[NUM]" blockType="command"
    //% OBJ.shadow="string" OBJ.defl="obj"
    //% NUM.shadow="string" NUM.defl="num"
    export function CornerNum(parameter: any, block: any) {

        let obj=parameter.OBJ.code;
        obj = replaceQuotationMarks(obj)
        Generator.addImport(`import cv2\nimport numpy as np`)
        Generator.addCode(`cv_perimeter = cv2.arcLength(${obj},True)`)
        Generator.addCode(`cv_approx = cv2.approxPolyDP(${obj},(0.02*cv_perimeter),True)`)
        Generator.addCode(`num = len(cv_approx) `)
 
    }


    //% block="---"
    export function noteSep3() {}
    
    //% block="在[IMG]上绘制轮廓线[OBJ] [COLOR] 线宽[THICK]" blockType="command"
    //% IMG.shadow="string" IMG.defl="img"
    //% OBJ.shadow="string" OBJ.defl="obj"
    //% COLOR.shadow="colorPalette" 
    //% THICK.shadow="number" THICK.defl="2"
    export function drawContours(parameter: any, block: any) {
  
        let img=parameter.IMG.code;
        let obj=parameter.OBJ.code;
        let color=parameter.COLOR.code;
        let thick=parameter.THICK.code;
        img = replaceQuotationMarks(img)
        obj = replaceQuotationMarks(obj)

        var r = 0;
        var g = 0;
        var b = 0;
        try {
            if ( color.length == 8 ) {//分别截取RGB值然后转换为数字值
                r = parseInt(color.substring(2, 4), 16);
                g = parseInt(color.substring(4, 6), 16);
                b = parseInt(color.substring(6, 8), 16);
            }
        } catch(e) {
            return '';
        }

        Generator.addImport(`import cv2\nimport numpy as np`)
        Generator.addCode(`cv2.drawContours(${img}, ${obj}, -1, (${b},${g},${r}), ${thick})`)
       
 
    }

    //% block="在[IMG]上绘制边框 X[X] Y[Y] 宽[W] 高[H] [COLOR] 线宽[THICK]" blockType="command"
    //% IMG.shadow="string" IMG.defl="img"
    //% X.shadow="string" X.defl="10"
    //% Y.shadow="string" Y.defl="10"
    //% W.shadow="string" W.defl="50"
    //% H.shadow="string" H.defl="50"
    //% COLOR.shadow="colorPalette" 
    //% THICK.shadow="number" THICK.defl="2"
    export function rectangle(parameter: any, block: any) {
        let img=parameter.IMG.code;
        let x=parameter.X.code;
        let y=parameter.Y.code;
        let w=parameter.W.code;
        let h=parameter.H.code;
        let color=parameter.COLOR.code;
        let thick=parameter.THICK.code;

        img = replaceQuotationMarks(img)
        x = replaceQuotationMarks(x)
        y = replaceQuotationMarks(y)
        w = replaceQuotationMarks(w)
        h = replaceQuotationMarks(h)
        //color = replaceQuotationMarks(color)
        
        
        var r = 0;
        var g = 0;
        var b = 0;
        try {
            if ( color.length == 8 ) {//分别截取RGB值然后转换为数字值
                r = parseInt(color.substring(2, 4), 16);
                g = parseInt(color.substring(4, 6), 16);
                b = parseInt(color.substring(6, 8), 16);
            }
        } catch(e) {
            return '';
        }


        Generator.addImport(`import cv2\nimport numpy as np`)
        Generator.addCode(`cv2.rectangle(${img},(${x},${y}),(${x}+${w},${y}+${h}),(${b},${g},${r}),${thick})`)
 
    }

    //% block="在[IMG]上绘制文字[TXT] X[X] Y[Y] [COLOR] 字体大小[SIZE]" blockType="command"
    //% IMG.shadow="string" IMG.defl="img"
    //% TXT.shadow="string" TXT.defl="hello"
    //% X.shadow="string" X.defl="10"
    //% Y.shadow="string" Y.defl="10"
    //% COLOR.shadow="colorPalette" 
    //% SIZE.shadow="string" SIZE.defl="0.6"
    export function putText(parameter: any, block: any) {
        let img=parameter.IMG.code;
        let txt=parameter.TXT.code;
        let x=parameter.X.code;
        let y=parameter.Y.code;
        let color=parameter.COLOR.code;
        let size=parameter.SIZE.code;

        img = replaceQuotationMarks(img)
        txt = replaceQuotationMarks(txt)
        x = replaceQuotationMarks(x)
        y = replaceQuotationMarks(y)
        size = replaceQuotationMarks(size)

        var r = 0;
        var g = 0;
        var b = 0;
        try {
            if ( color.length == 8 ) {//分别截取RGB值然后转换为数字值
                r = parseInt(color.substring(2, 4), 16);
                g = parseInt(color.substring(4, 6), 16);
                b = parseInt(color.substring(6, 8), 16);
            }
        } catch(e) {
            return '';
        }

        Generator.addImport(`import cv2\nimport numpy as np`)
        Generator.addCode(`cv2.putText(${img},${txt},(${x},${y}),cv2.FONT_HERSHEY_COMPLEX,${size},(${b},${g},${r}),1)`)
 
    }


    
   
    function replaceQuotationMarks(str:string){
            str=str.replace(/"/g, ""); //去除所有引号
            return str
    }


    
}
