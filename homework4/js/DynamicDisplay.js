window.onload = function()
{
    let DynIndexPicObjArray = {
            PicObj: document.getElementById("idImgPic"),
            piclinkObj: document.getElementById("idlinkDynamicImg"),
            NunPngClassObj: document.getElementsByClassName("classNumImg"),
            PicIndex: 0,
            BasePicName: ["./Img/Pic", ".jpg"],
            LRButtomObj: document.getElementsByClassName("classCtrlImg0"),
            boolAutoChangePicFlag: true,
            AutoChangeTime: 1000,
            StartPauseButtomObj: document.getElementById("idStartPause"),
        };

    DynIndexPicObjArray = fPageChangeUpgrade(DynIndexPicObjArray);
    DynIndexPicObjArray = fAutoChangePicEnable(DynIndexPicObjArray);

    for(let NumClass of DynIndexPicObjArray.NunPngClassObj)
    {
        document.getElementById(NumClass.id).addEventListener("click", function(e){
            let idTarget = e.target.id;
            DynIndexPicObjArray = fNumClick(DynIndexPicObjArray, idTarget);
        });
    }

    for(let LRClass of DynIndexPicObjArray.LRButtomObj)
    {
        document.getElementById(LRClass.id).addEventListener("click", function(e){
            let idTarget = e.target.id;
            DynIndexPicObjArray = fLRButtomClick(DynIndexPicObjArray, idTarget);
        });
    }

    DynIndexPicObjArray.StartPauseButtomObj.addEventListener("click", function(){
        DynIndexPicObjArray.boolAutoChangePicFlag = !DynIndexPicObjArray.boolAutoChangePicFlag;
        DynIndexPicObjArray = fAutoChangePicEnable(DynIndexPicObjArray);
    });
}


function fPageChangeUpgrade(tempObj)
{
    let tempIndex = tempObj.PicIndex;
    let PicMaxQty = tempObj.NunPngClassObj.length;
    let NumberObjArray = tempObj.NunPngClassObj;
    
    tempObj.PicObj.src = tempObj.BasePicName[0] + tempObj.PicIndex + tempObj.BasePicName[1];

    switch(tempIndex)
    {
        case 0:
            tempObj.piclinkObj.href = "https://hk.best-wallpaper.net/Beach-stones_wallpapers.html";
            break;
        case 1:
            tempObj.piclinkObj.href = "https://hk.best-wallpaper.net/China-terraces-water-mountains-beautiful-scenery_wallpapers.html";
            break;
        case 2:
            tempObj.piclinkObj.href = "https://hk.best-wallpaper.net/Guangxi-Longsheng-rice-terraces-beautiful-landscape-China_wallpapers.html";
            break;
        case 3:
            tempObj.piclinkObj.href = "https://hk.best-wallpaper.net/Romania-trees-mountains-snow-sun-clouds-road_wallpapers.html";
            break;
        case 4:
            tempObj.piclinkObj.href = "https://hk.best-wallpaper.net/Sea-rocks-dusk-sky_wallpapers.html";
            break;
        case 5:
            tempObj.piclinkObj.href = "https://hk.best-wallpaper.net/Sea-waves-foam-water-splash_wallpapers.html";
            break;
        case 6:
            tempObj.piclinkObj.href = "https://hk.best-wallpaper.net/Sea-waves-storms-rocks-dark_wallpapers.html";
            break;
        case 7:
            tempObj.piclinkObj.href = "https://hk.best-wallpaper.net/Summer-forest-trees-pine-moss_wallpapers.html";
            break;
        default:
            tempObj.piclinkObj.href ="";
            break;
    }


    for(CheckIndex = 1; CheckIndex <= PicMaxQty; CheckIndex++)
    {
        if(CheckIndex == (Number(tempIndex) + 1))
        {
            NumberObjArray[CheckIndex - 1].style.backgroundColor = "yellow";
        }
        else
        {
            NumberObjArray[CheckIndex - 1].style.backgroundColor = "transparent";
        }
    }

    return(tempObj);
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


function fNumClick(tempObj, IdTargetName)
{
    let ItemIndexNum = fIdIndexNumCheck(IdTargetName);

    tempObj.PicIndex = ItemIndexNum - 1;
    tempObj = fPageChangeUpgrade(tempObj);
    tempObj.boolAutoChangePicFlag = false;
    tempObj = fAutoChangePicEnable(tempObj);
    return(tempObj);
}


function fLRButtomClick(tempObj, IdTargetName)
{
    let PicMaxQty = tempObj.NunPngClassObj.length;
    let ItemIndexNum = fIdIndexNumCheck(IdTargetName);

    switch(ItemIndexNum)
    {
        case 0:
            if(tempObj.PicIndex <= 0)
            {
                tempObj.PicIndex = PicMaxQty - 1.
            }
            else
            {
                tempObj.PicIndex--;
            }
            break;
        case 1:
            if(tempObj.PicIndex >= (PicMaxQty - 1))
            {
                tempObj.PicIndex = 0
            }
            else
            {
                tempObj.PicIndex++;
            }
            break;
        default:
            break;
    }
    tempObj = fPageChangeUpgrade(tempObj);
    tempObj.boolAutoChangePicFlag = false;
    tempObj = fAutoChangePicEnable(tempObj);
    return(tempObj);
}


function fAutoChangePicEnable(tempObj)
{
    let  AutoChangePiCFlag = tempObj.boolAutoChangePicFlag;
    let  AutoChangePicTime = tempObj.AutoChangeTime;


    if(AutoChangePiCFlag == true)
    {
        tempObj.StartPauseButtomObj.src = "./img/pause.png";
        setTimeout(function(){fTimeoutTrigger(tempObj);}, AutoChangePicTime);
    }
    else
    {
        tempObj.StartPauseButtomObj.src = "./img/start.png";
    }
    return(tempObj);
} 


function fTimeoutTrigger(tempObj)
{
    let PicMaxQty = tempObj.NunPngClassObj.length;
    let  AutoChangePiCFlag = tempObj.boolAutoChangePicFlag;
    let  AutoChangePicTime = tempObj.AutoChangeTime;

    if(AutoChangePiCFlag == true)
    {
        if(tempObj.PicIndex >= (PicMaxQty - 1))
        {
            tempObj.PicIndex = 0
        }
        else
        {
            tempObj.PicIndex++;
        }
        tempObj = fPageChangeUpgrade(tempObj);
        setTimeout(function(){fTimeoutTrigger(tempObj);}, AutoChangePicTime);
    }
    return(tempObj);
}

