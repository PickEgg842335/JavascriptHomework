window.onload = function()
{
    let StarFormObj = {
        MaxStarQty: document.getElementsByClassName("classImgStar").length,
        idClassName: document.getElementsByClassName("classImgStar"),
        idName: "idImgStarNum",
        boolFormStatus: false,
        idFeedbackMsg: "idMsgStarSatus",
    }

    for(let Imgclass of StarFormObj.idClassName)
    {
        document.getElementById(Imgclass.id).addEventListener("mouseover", function(e){
            let idTarget = e.target.id;
            fImgMouseover(StarFormObj, idTarget);
        });
        document.getElementById(Imgclass.id).addEventListener("mouseout", function(e){
            let idTarget = e.target.id;
            fImgMouseout(StarFormObj, idTarget);
        });
        document.getElementById(Imgclass.id).addEventListener("click", function(e){
            let idTarget = e.target.id;
            fImgClick(StarFormObj, idTarget);
            StarFormObj.boolFormStatus = true;
        });
        document.getElementById(Imgclass.id).addEventListener("dblclick", function(){
            fImgDblclick(StarFormObj);
            StarFormObj.boolFormStatus = false;
        });
    }
}


function fIdIndexNumCheck(IdNameString)
{
    let IdIndexNum = 0;
    let DigitNum = 0;

    for(NumChkCnt = (IdNameString.length - 1); NumChkCnt > (IdNameString.length - 3); NumChkCnt--)
    {
        if((IdNameString.charAt(NumChkCnt) >= '0') && (IdNameString.charAt(NumChkCnt) <= '9'))
        {
            IdIndexNum += (10 ** DigitNum) * Number(IdNameString.charAt(NumChkCnt));
            DigitNum++;
        }
        else
        {
            break;
        }
    }
    return(IdIndexNum);
}


function fImgMouseover(tempObj, IdTargetName)
{
    let ImgStarArrayObj = new Array(tempObj.MaxStarQty);
    let MsgString = document.getElementById(tempObj.idFeedbackMsg);
    let ItemIndexNum = fIdIndexNumCheck(IdTargetName);

    if(tempObj.boolFormStatus == false)
    {
        for(MaxStarCnt = 0; MaxStarCnt < tempObj.MaxStarQty; MaxStarCnt++)
        {
            ImgStarArrayObj[MaxStarCnt] = document.getElementById(tempObj.idName + MaxStarCnt);
        }

        for(IndexCnt = 0; IndexCnt < (ItemIndexNum + 1); IndexCnt++)
        {
            ImgStarArrayObj[IndexCnt].src = "./img/Star1.png";
        }
        MsgString.innerHTML = `評分為...${ItemIndexNum + 1}`;
    }
}


function fImgMouseout(tempObj, IdTargetName)
{
    let ImgStarArrayObj = new Array(tempObj.MaxStarQty);
    let MsgString = document.getElementById(tempObj.idFeedbackMsg);
    let ItemIndexNum = fIdIndexNumCheck(IdTargetName);
    
    if(tempObj.boolFormStatus == false)
    {
        for(MaxStarCnt = 0; MaxStarCnt < tempObj.MaxStarQty; MaxStarCnt++)
        {
            ImgStarArrayObj[MaxStarCnt] = document.getElementById(tempObj.idName + MaxStarCnt);
        }

        for(IndexCnt = 0; IndexCnt < (ItemIndexNum + 1); IndexCnt++)
        {
            ImgStarArrayObj[IndexCnt].src = "./img/Star0.png";
        }
        MsgString.innerHTML = "評分為...0";
    }
}


function fImgClick(tempObj, IdTargetName)
{
    let ImgStarArrayObj = new Array(tempObj.MaxStarQty);
    let MsgString = document.getElementById(tempObj.idFeedbackMsg);
    let ItemIndexNum = fIdIndexNumCheck(IdTargetName);
    
    if(tempObj.boolFormStatus == false)
    {
        for(MaxStarCnt = 0; MaxStarCnt < tempObj.MaxStarQty; MaxStarCnt++)
        {
            ImgStarArrayObj[MaxStarCnt] = document.getElementById(tempObj.idName + MaxStarCnt);
        }

        for(IndexCnt = 0; IndexCnt < (ItemIndexNum + 1); IndexCnt++)
        {
            ImgStarArrayObj[IndexCnt].src = "./img/Star1.png";
        }
        MsgString.innerHTML = `你給${ItemIndexNum + 1}顆星`;
    }
}


function fImgDblclick(tempObj)
{
    let ImgStarArrayObj = new Array(tempObj.MaxStarQty);
    let MsgString = document.getElementById(tempObj.idFeedbackMsg);
    
    if(tempObj.boolFormStatus == true)
    {
        for(MaxStarCnt = 0; MaxStarCnt < tempObj.MaxStarQty; MaxStarCnt++)
        {
            ImgStarArrayObj[MaxStarCnt] = document.getElementById(tempObj.idName + MaxStarCnt);
        }

        for(IndexCnt = 0; IndexCnt < tempObj.MaxStarQty; IndexCnt++)
        {
            ImgStarArrayObj[IndexCnt].src = "./img/Star0.png";
        }
        MsgString.innerHTML = "評分為...0";
    }
}

