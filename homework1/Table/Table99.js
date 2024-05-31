let result = 0;

//九九乘法表印出標題
document.write("<caption><h2>九九乘法表</h2></caption>");
//標題儲存格開始標籤
document.write("<thead>");
//標題儲存格列開始標籤
document.write("<tr>");
//列印標題儲存格列第一欄到第七欄
document.write("<th>一</th>");
document.write("<th>二</th>");
document.write("<th>三</th>");
document.write("<th>四</th>");
document.write("<th>五</th>");
document.write("<th>六</th>");
document.write("<th>七</th>");
document.write("<th>八</th>");
document.write("<th>九</th>");
//標題儲存格列結束標籤
document.write("</tr>");
//標題儲存格結束標籤
document.write("</thead>");
//內容儲存格開始標籤
document.write("<tbody>");

//進入列印九九乘法表內容，依序由"N*1=乘積"第一列開始列印每一欄後換第二列印"N*2=乘積"，依此類推印完9列
for(let i = 1; i <= 9; i++)
    {
        //內容儲存格列開始標籤
        document.write("<tr>");
        //每一列開始標籤，進入內迴圈列印完9欄後，結束藍標籤在列印下一欄
        for(let j = 1; j <= 9; j++)
            {
                result = i * j;
                console.log(`${j}×${i} = ${result}`);
                document.write(`<td>${j}×${i} = ${result}</td>`);
            }
        //內容儲存格列結束標籤
        document.write("</tr>");
    }
//內容儲存格結束標籤
document.write("</tbody>");