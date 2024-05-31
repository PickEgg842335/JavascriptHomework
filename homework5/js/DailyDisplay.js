const weekdayDate = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


window.onload = function()
{
    let DailyObj = {
        InputYearObj: document.getElementById("idSelectYear"),
        InputMonthObj: document.getElementById("idSelectMonth"),
        InputDateObj: document.getElementById("idSelectDate"),
        OutputDaiyTableObj: document.getElementById("idDailyTable"),
        MsgoutObj: document.getElementById("idMsgOut"),
        WeekdayNum: 0,
        MonthFirstWeekdayNum: 0,
        OutputDailyDay: new Date(1970,0,1),
        YearRangeArray: [2010, 2030],
        MaxMonthDate: 0,
        boolInputDateCompletedFlag: false,
        OutputTableEnableFlag: true,
        DailyDateAddrArray: new Array(31),
    }

    DailyObj = fDateSelectLoad(DailyObj);
    DailyObj = fOutputDatatoDaily(DailyObj);
    DailyObj = fMsgOut(DailyObj);

    DailyObj.InputYearObj.addEventListener("change", function(){
        DailyObj = fDateSelectLoad(DailyObj);
        DailyObj = fOutputDatatoDaily(DailyObj);
        DailyObj = fMsgOut(DailyObj);
    });
    DailyObj.InputMonthObj.addEventListener("change", function(){
        DailyObj = fDateSelectLoad(DailyObj);
        DailyObj = fOutputDatatoDaily(DailyObj);
        DailyObj = fMsgOut(DailyObj);
    });
    DailyObj.InputDateObj.addEventListener("change", function(){
        DailyObj = fDateSelectLoad(DailyObj);
        DailyObj = fOutputDatatoDaily(DailyObj);
        DailyObj = fMsgOut(DailyObj);
    });
}


function fDateDateMaxChk(DateSelectObj)
{
    let InputYearNum = Number(DateSelectObj.InputYearObj.value);
    let InputMonthNum = Number(DateSelectObj.InputMonthObj.value);
    let boolDateleapYear = false;

    if((InputYearNum != 0) && (InputMonthNum != 0))
    {
        if((InputYearNum % 4) == 0)
        {
            boolDateleapYear = true;
        }

        if((InputMonthNum >= 1) && (InputMonthNum <= 12))
        {
            switch(InputMonthNum)
            {
                case 2:
                    if(boolDateleapYear == true)
                    {
                        DateSelectObj.MaxMonthDate = 29;
                    }
                    else
                    {
                        DateSelectObj.MaxMonthDate = 28;
                    }
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    DateSelectObj.MaxMonthDate = 30;
                    break;
                default:
                    DateSelectObj.MaxMonthDate = 31;
                    break;
            }
        }
    }
    else
    {
        DateSelectObj.MaxMonthDate = 0;
    }
    return (DateSelectObj);
}


function fDateSelectLoad(DateSelectObj)
{
    let InputYearNum = Number(DateSelectObj.InputYearObj.value);
    let InputMonthNum = Number(DateSelectObj.InputMonthObj.value);
    let InputDateNum = Number(DateSelectObj.InputDateObj.value);

    if(DateSelectObj.InputYearObj.length == 1)
    {
        for(AddOptIndex = Number(DateSelectObj.YearRangeArray[0]); 
            AddOptIndex <= Number(DateSelectObj.YearRangeArray[1]); AddOptIndex++)
        {
            let AddOption = document.createElement("option");

            AddOption.value = String(AddOptIndex);
            AddOption.text = String(AddOptIndex);
            DateSelectObj.InputYearObj.add(AddOption);
        }
    }
    
    if(DateSelectObj.InputMonthObj.length == 1)
    {
        for(AddOptIndex = 1; AddOptIndex <= 12; AddOptIndex++)
            {
                let AddOption = document.createElement("option");
        
                AddOption.value = String(AddOptIndex);
                AddOption.text = String(AddOptIndex);
                DateSelectObj.InputMonthObj.add(AddOption);
            }
    }
    DateSelectObj = fDateDateMaxChk(DateSelectObj);
    if(DateSelectObj.MaxMonthDate > (DateSelectObj.InputDateObj.length - 1))
    {
        for(AddOptIndex = (DateSelectObj.InputDateObj.length); 
            AddOptIndex <= DateSelectObj.MaxMonthDate; AddOptIndex++)
        {
            let AddOption = document.createElement("option");
    
            AddOption.value = String(AddOptIndex);
            AddOption.text = String(AddOptIndex);
            DateSelectObj.InputDateObj.add(AddOption);
        }
    }
    else if(DateSelectObj.MaxMonthDate < (DateSelectObj.InputDateObj.length - 1))
    {
        for(RmOptIndex = (DateSelectObj.InputDateObj.length - 1); 
            RmOptIndex > DateSelectObj.MaxMonthDate; RmOptIndex--)
        {
            DateSelectObj.InputDateObj[RmOptIndex].remove();
        }

        if(DateSelectObj.InputDateObj.selectedIndex != InputDateNum)
        {
            InputDateNum = Number(DateSelectObj.InputDateObj.value);
        }
    }

    if((InputYearNum != 0) && (InputMonthNum != 0) && (InputDateNum != 0))
    {
        DateSelectObj.boolInputDateCompletedFlag = true;
        DateSelectObj.WeekdayNum = new Date(DateSelectObj.InputYearObj.value, 
            (DateSelectObj.InputMonthObj.value - 1), DateSelectObj.InputDateObj.value).getDay();
        DateSelectObj.MonthFirstWeekdayNum = new Date(DateSelectObj.InputYearObj.value, 
            (DateSelectObj.InputMonthObj.value - 1), 1).getDay();
    }
    else
    {
        DateSelectObj.boolInputDateCompletedFlag = false;
    }
    return(DateSelectObj);
}


function fOutputDatatoDaily(tempDailyObj)
{
    let boolDateDataChkFlag = tempDailyObj.boolInputDateCompletedFlag;
    let OutputDailyObj = tempDailyObj.OutputDaiyTableObj;
    let TableWorkProcess = 0;

    if(boolDateDataChkFlag == true)
    {
        if((tempDailyObj.OutputDailyDay.getFullYear() == tempDailyObj.InputYearObj.value) && (tempDailyObj.OutputDailyDay.getMonth() == tempDailyObj.InputMonthObj.value - 1))
        {
            TableWorkProcess = 2;
        }
        else
        {
            TableWorkProcess = 1;
        }
    }
    else
    {
        TableWorkProcess = 0;
    }

    switch(TableWorkProcess)
    {
        case 0:
            if(tempDailyObj.OutputTableEnableFlag == true)
            {
                OutputDailyObj.querySelector("thead").remove();
                OutputDailyObj.querySelector("tbody").remove();
                tempDailyObj.OutputTableEnableFlag = false;
            }
            break;
        case 1:
            tempDailyObj = fTableBaseCreateBuilding(tempDailyObj);
            tempDailyObj.OutputDailyDay = new Date(tempDailyObj.InputYearObj.value, 
                (tempDailyObj.InputMonthObj.value - 1), tempDailyObj.InputDateObj.value);
        case 2:
            tempDailyObj = fTableHightlightDay(tempDailyObj);
            break;
        default:
            break;
    }

    return(tempDailyObj);
}


function fTableBaseCreateBuilding(tempDailyObj)
{
    let OutputDailyObj = tempDailyObj.OutputDaiyTableObj;
    let DailyTableArray = new Array(5);
    let ImportDateNum = 1;

    for(defArrayCnt = 0; defArrayCnt < 5; defArrayCnt++)
    {
        DailyTableArray[defArrayCnt] = new Array(7);
    }

    for(ImportDateCnt1 = 0; ImportDateCnt1 < 5; ImportDateCnt1++)
    {
        for(ImportDateCnt2 = 0; ImportDateCnt2 < 7; ImportDateCnt2++)
        {
            if((ImportDateCnt1 > 0) || (ImportDateCnt2 >= tempDailyObj.MonthFirstWeekdayNum))
            {
                if(ImportDateNum <= tempDailyObj.MaxMonthDate)
                {
                    DailyTableArray[ImportDateCnt1][ImportDateCnt2] = String(ImportDateNum);
                    tempDailyObj.DailyDateAddrArray[ImportDateNum - 1] = `idDate${ImportDateCnt1}${ImportDateCnt2}`;
                    ImportDateNum++;
                }
                else
                {
                    DailyTableArray[ImportDateCnt1][ImportDateCnt2] = " ";
                }
            }
            else
            {
                DailyTableArray[ImportDateCnt1][ImportDateCnt2] = " ";
            }
        }
    }

    if(tempDailyObj.OutputTableEnableFlag == true)
    {
        OutputDailyObj.querySelector("thead").remove();
        OutputDailyObj.querySelector("tbody").remove();
        tempDailyObj.OutputTableEnableFlag = false;
    }

    let CreateThead = document.createElement("thead");
    let CreateHeadTr = document.createElement("tr");
    for(AddThCnt = 0; AddThCnt < 7;AddThCnt++)
    {
        let CreateHeadTh = document.createElement("th");
        CreateHeadTh.innerHTML = `${weekdayDate[AddThCnt]}`;
        CreateHeadTr.appendChild(CreateHeadTh);
    }
    CreateThead.appendChild(CreateHeadTr);
    OutputDailyObj.appendChild(CreateThead);

    let CreateTbody = document.createElement("tbody");
    for(AddTrCnt = 0; AddTrCnt < 5;AddTrCnt++)
    {
        let CreateTbodyTr = document.createElement("tr");
        for(AddTdCnt = 0; AddTdCnt < 7;AddTdCnt++)
        {
            let CreateTbodyTd = document.createElement("td");
            CreateTbodyTd.className = "NormalTd";
            CreateTbodyTd.id = `idDate${AddTrCnt}${AddTdCnt}`;
            CreateTbodyTd.innerHTML = DailyTableArray[AddTrCnt][AddTdCnt];
            CreateTbodyTr.appendChild(CreateTbodyTd);
        }
        CreateTbody.appendChild(CreateTbodyTr);
    }
    OutputDailyObj.appendChild(CreateTbody);
    tempDailyObj.OutputTableEnableFlag = true;
    return(tempDailyObj);
}


function fTableHightlightDay(tempDailyObj)
{
    let HightLightDate = Number(tempDailyObj.InputDateObj.value);
    let TrgetIdTr = tempDailyObj.DailyDateAddrArray[HightLightDate - 1];
    let HightTrClass = document.getElementsByClassName("HightlightTd");

    if(HightTrClass.length != 0)
    {
        for(clearCnt = 0; clearCnt < HightTrClass.length; clearCnt++)
        {
            document.getElementById(HightTrClass[clearCnt].id).className = "NormalTd";
        }
    }

    document.getElementById(TrgetIdTr).className = "HightlightTd";
    return(tempDailyObj);
}


function fMsgOut(tempDailyObj)
{
    let Msgprintout = tempDailyObj.MsgoutObj;

    if(tempDailyObj.boolInputDateCompletedFlag == true)
    {
        Msgprintout.innerHTML = `您選擇的日期是${tempDailyObj.InputYearObj.value}年${tempDailyObj.InputMonthObj.value}
            月${tempDailyObj.InputDateObj.value}日`;
    }
    else
    {
        Msgprintout.innerHTML = "日期選擇中";
    }
    return(tempDailyObj);
}