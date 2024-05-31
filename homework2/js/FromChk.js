window.onload = function()
{
    document.getElementById("idName").addEventListener("blur", fNameCheck);
    document.getElementById("idPwd").addEventListener("blur", fPassWordCheck);
    document.getElementById("idDate").addEventListener("blur", fDateFormatCheck);
}

function fNameCheck()
{
    let InputNameObj = document.getElementById("idName");
    let OutputNameMsgObj = document.getElementById("idNameMsg");
    let NameChkResult = 0;

    if(InputNameObj.value == "")
    {
        NameChkResult = 1;
    }
    else if(InputNameObj.value.length >= 2)
    {
        for(WordChkCnt = 0; WordChkCnt < InputNameObj.value.length; WordChkCnt++)
        {
            if((InputNameObj.value.charCodeAt(WordChkCnt)) <= 0x4e00 
                || (InputNameObj.value.charCodeAt(WordChkCnt) >= 0x9fff))
            {
                NameChkResult = 3;
                break;
            }
        }
    }
    else if(InputNameObj.value.length < 2)
    {
        NameChkResult = 2;
    }

    switch(NameChkResult)
    {
        case 0:
            OutputNameMsgObj.innerHTML = "<img src='./img/Yes1.png'>";
            OutputNameMsgObj.innerHTML += "輸入正確";
            OutputNameMsgObj.style.color = "green";
            OutputNameMsgObj.style.fontWeight = 900;
            InputNameObj.style.border = "3px solid green"
            break;
        case 1:
            OutputNameMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputNameMsgObj.innerHTML +="你必須輸入名稱";
            OutputNameMsgObj.style.color = "red";
            OutputNameMsgObj.style.fontWeight = 900;
            InputNameObj.style.border = "3px solid red"
            break;
        case 2:
            OutputNameMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputNameMsgObj.innerHTML += "你輸入長度小於2";
            OutputNameMsgObj.style.color = "red";
            OutputNameMsgObj.style.fontWeight = 900;
            InputNameObj.style.border = "3px solid red"
            break;
        case 3:
            OutputNameMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputNameMsgObj.innerHTML += "你輸入並非中文";
            OutputNameMsgObj.style.color = "red";
            OutputNameMsgObj.style.fontWeight = 900;
            InputNameObj.style.border = "3px solid red"
            break;
        default:
            break;
    }
}

function fPassWordCheck()
{
    let InputPwdObj = document.getElementById("idPwd");
    let OutputPwdMsgObj = document.getElementById("idPwdMsg");
    let PwdChkResult = 0;
    let PwdWordTypeChkbit = 0;

    console.log(InputPwdObj.value);

    if(InputPwdObj.value.length >= 6)
    {
        for(WordChkCnt = 0; WordChkCnt < InputPwdObj.value.length; WordChkCnt++)
        {
            //console.log(InputPwdObj.value.charCodeAt(WordChkCnt).toString(16));
            if((InputPwdObj.value.charCodeAt(WordChkCnt) >= 0x0020) 
                && (InputPwdObj.value.charCodeAt(WordChkCnt) <= 0x007e))
            {
                if((InputPwdObj.value.charAt(WordChkCnt) >= '0')
                    && (InputPwdObj.value.charAt(WordChkCnt) <= '9'))
                {
                    PwdWordTypeChkbit |= 0x01;
                }
                else if((InputPwdObj.value.charAt(WordChkCnt) >= 'A') 
                    && (InputPwdObj.value.charAt(WordChkCnt) <= 'Z'))
                {
                    PwdWordTypeChkbit |= 0x02;
                }
                else if((InputPwdObj.value.charAt(WordChkCnt) >= 'a') 
                    && (InputPwdObj.value.charAt(WordChkCnt) <= 'z'))
                {
                    PwdWordTypeChkbit |= 0x04;
                }
                else if((InputPwdObj.value.charAt(WordChkCnt) == '!')
                    || (InputPwdObj.value.charAt(WordChkCnt) == '@')
                    || (InputPwdObj.value.charAt(WordChkCnt) == '#')
                    || (InputPwdObj.value.charAt(WordChkCnt) == '$')
                    || (InputPwdObj.value.charAt(WordChkCnt) == '%')
                    || (InputPwdObj.value.charAt(WordChkCnt) == '^')
                    || (InputPwdObj.value.charAt(WordChkCnt) == '&')
                    || (InputPwdObj.value.charAt(WordChkCnt) == '*'))
                {
                    PwdWordTypeChkbit |= 0x08;
                }
                else
                {
                    PwdChkResult = 17;
                    break;
                }
            }
            else
            {
                PwdChkResult = 17;
                break;
            }
        }

        if((PwdWordTypeChkbit != 0x0F) && (PwdChkResult == 0))
        {
            switch(PwdWordTypeChkbit)
            {
                case 0x01:
                    PwdChkResult = 3;
                    break;
                case 0x02:
                    PwdChkResult = 4;
                    break;
                case 0x03:
                    PwdChkResult = 5;
                    break;
                case 0x04:
                    PwdChkResult = 6;
                    break;
                case 0x05:
                    PwdChkResult = 7;
                    break;
                case 0x06:
                    PwdChkResult = 8;
                    break;
                case 0x07:
                    PwdChkResult = 9;
                    break;
                case 0x08:
                    PwdChkResult = 10;
                    break;
                case 0x09:
                    PwdChkResult = 11;
                    break;
                case 0x0A:
                    PwdChkResult = 12;
                    break;
                case 0x0B:
                    PwdChkResult = 13;
                    break;
                case 0x0C:
                    PwdChkResult = 14;
                    break;
                case 0x0D:
                    PwdChkResult = 15;
                    break;
                case 0x0E:
                    PwdChkResult = 16;
                    break;
                default:
                    break;
            }
        }
    }
    else if(InputPwdObj.value.length == 0)
    {
        PwdChkResult = 1;
    }
    else if(InputPwdObj.value.length < 6)
    {
        PwdChkResult = 2;
    }
    console.log(PwdChkResult);
    switch(PwdChkResult)
    {
        case 0:
            OutputPwdMsgObj.innerHTML = "<img src='./img/Yes1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼可以使用";
            OutputPwdMsgObj.style.color = "green";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid green"
            break;
        case 1:
            OutputPwdMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼不可為空";
            OutputPwdMsgObj.style.color = "red";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid red"
            break;
        case 2:
            OutputPwdMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼長度小於6個字元";
            OutputPwdMsgObj.style.color = "red";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid red"
            break;
        case 3:
            OutputPwdMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼缺少大寫及小寫英文字、特殊字元";
            OutputPwdMsgObj.style.color = "red";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid red"
            break;
        case 4:
            OutputPwdMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼缺少小寫英文字、數字、特殊字元";
            OutputPwdMsgObj.style.color = "red";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid red"
            break;
        case 5:
            OutputPwdMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼缺少小寫英文字、特殊字元";
            OutputPwdMsgObj.style.color = "red";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid red"
            break;
        case 6:
            OutputPwdMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼缺少大寫英文字、數字、特殊字元";
            OutputPwdMsgObj.style.color = "red";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid red"
            break;
        case 7:
            OutputPwdMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼缺少大寫英文字、特殊字元";
            OutputPwdMsgObj.style.color = "red";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid red"
            break;
        case 8:
            OutputPwdMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼缺少數字、特殊字元";
            OutputPwdMsgObj.style.color = "red";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid red"
            break;
        case 9:
            OutputPwdMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼缺少特殊字元";
            OutputPwdMsgObj.style.color = "red";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid red"
            break;
        case 10:
            OutputPwdMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼缺少大寫及小寫英文字、數字";
            OutputPwdMsgObj.style.color = "red";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid red"
            break;
        case 11:
            OutputPwdMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼缺少大寫及小寫英文字";
            OutputPwdMsgObj.style.color = "red";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid red"
            break;
        case 12:
            OutputPwdMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼缺少小寫英文字、數字";
            OutputPwdMsgObj.style.color = "red";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid red"
            break;
        case 13:
            OutputPwdMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼缺少小寫英文字";
            OutputPwdMsgObj.style.color = "red";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid red"
            break;
        case 14:
            OutputPwdMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼缺少大寫英文字、數字";
            OutputPwdMsgObj.style.color = "red";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid red"
            break;
        case 15:
            OutputPwdMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼缺少大寫英文字";
            OutputPwdMsgObj.style.color = "red";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid red"
            break;
        case 16:
            OutputPwdMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼缺少數字";
            OutputPwdMsgObj.style.color = "red";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid red"
            break;
        case 17:
            OutputPwdMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputPwdMsgObj.innerHTML += "密碼存在無效字元";
            OutputPwdMsgObj.style.color = "red";
            OutputPwdMsgObj.style.fontWeight = 900;
            InputPwdObj.style.border = "3px solid red"
            break;
        default:
            break;
    }
}

function fDateFormatCheck()
{
    let InputDateObj = document.getElementById("idDate");
    let OutputDateMsgObj = document.getElementById("idDateMsg");
    let DateChkResult = 0;
    let DateArrayObj = InputDateObj.value.split('/');
    let DateYear, DateMonth, DateDay;
    let boolDateleapYear = false;
    let DateMaxDayLevel = 31;

    if(InputDateObj.value.length == 10)
    {
        if((InputDateObj.value.charAt(4) == '/') && (InputDateObj.value.charAt(7) == '/')
            && (DateArrayObj.length == 3))
        {
            for(WordChkCnt = 0; WordChkCnt < InputDateObj.value.length; WordChkCnt++)
            {
                if(((InputDateObj.value.charAt(WordChkCnt) < '0') 
                    || (InputDateObj.value.charAt(WordChkCnt) > '9'))
                    && ((WordChkCnt != 4) && (WordChkCnt != 7)))
                {
                    DateChkResult = 3;
                    break;
                }
            }
        }
        else if((InputDateObj.value.charAt(4) == '/') && (InputDateObj.value.charAt(7) == '/')
            && DateArrayObj.length > 3)
        {
            DateChkResult = 3;
        }
        else
        {
            DateChkResult = 2;
        }
    }
    else
    {
        DateChkResult = 1;
    }
    console.log(InputDateObj.value.length);

    if(DateChkResult == false)
    {
        DateYear = Number(DateArrayObj[0]);
        DateMonth = Number(DateArrayObj[1]);
        DateDay = Number(DateArrayObj[2]);

        if(DateYear >= 1)
        {
            if((DateYear % 4) == 0)
            {
                boolDateleapYear = true;
            }

            if((DateMonth >= 1) && (DateMonth <= 12))
            {
                switch(DateMonth)
                {
                    case 2:
                        if(boolDateleapYear == true)
                        {
                            DateMaxDayLevel = 29;
                        }
                        else
                        {
                            DateMaxDayLevel = 28;
                        }
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        DateMaxDayLevel = 30;
                        break;
                    default:
                        DateMaxDayLevel = 31;
                        break;
                }

                if((DateDay < 1) || (DateDay > DateMaxDayLevel))
                {
                    DateChkResult = 6;
                }
            }
            else
            {
                DateChkResult = 5;
            }
        }
        else
        {
            DateChkResult = 4;
        }
    }

    switch(DateChkResult)
    {
        case 0:
            OutputDateMsgObj.innerHTML = "<img src='./img/Yes1.png'>";
            OutputDateMsgObj.innerHTML += "日期輸入正確";
            OutputDateMsgObj.style.color = "green";
            OutputDateMsgObj.style.fontWeight = 900;
            InputDateObj.style.border = "3px solid green"
            break;
        case 1:
            OutputDateMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputDateMsgObj.innerHTML += "輸入日期格式不足10個字元";
            OutputDateMsgObj.style.color = "red";
            OutputDateMsgObj.style.fontWeight = 900;
            InputDateObj.style.border = "3px solid red"
            break;
        case 2:
            OutputDateMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputDateMsgObj.innerHTML += "輸入日期格式不符合yyyy/mm/dd";
            OutputDateMsgObj.style.color = "red";
            OutputDateMsgObj.style.fontWeight = 900;
            InputDateObj.style.border = "3px solid red"
            break;
        case 3:
            OutputDateMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputDateMsgObj.innerHTML += "輸入年月日內容並非數字";
            OutputDateMsgObj.style.color = "red";
            OutputDateMsgObj.style.fontWeight = 900;
            InputDateObj.style.border = "3px solid red"
            break;
        case 4:
            OutputDateMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputDateMsgObj.innerHTML += "年份內容輸入錯誤";
            OutputDateMsgObj.style.color = "red";
            OutputDateMsgObj.style.fontWeight = 900;
            InputDateObj.style.border = "3px solid red"
            break;
        case 5:
            OutputDateMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputDateMsgObj.innerHTML += "月份內容輸入錯誤";
            OutputDateMsgObj.style.color = "red";
            OutputDateMsgObj.style.fontWeight = 900;
            InputDateObj.style.border = "3px solid red"
            break;
        case 6:
            OutputDateMsgObj.innerHTML = "<img src='./img/No1.png'>";
            OutputDateMsgObj.innerHTML += "日期內容輸入錯誤";
            OutputDateMsgObj.style.color = "red";
            OutputDateMsgObj.style.fontWeight = 900;
            InputDateObj.style.border = "3px solid red"
            break;
        default:
            break;
    }

    console.log(`Date=${DateYear}/${DateMonth}/${DateDay}`);
    console.log(`leapYear=${boolDateleapYear},MaxMonthDay=${DateMaxDayLevel}`);
}
