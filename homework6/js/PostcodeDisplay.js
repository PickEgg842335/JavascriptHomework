window.onload = function()
{
    PostcodeObj = {
        SummyTable: document.getElementById("idPostTable"),
        InputCity: document.getElementById("idSelectCity"),
        InputZone: document.getElementById("idSelectZone"),
        IdAddressArray: new Array,
        TargetCode1Flage: false,
    }

    let PostcodeTable = PostcodeObj.SummyTable;

    PostcodeObj = fPrintPostcodeTable(PostcodeObj);
    PostcodeObj = fPostCodeSelectLoad(PostcodeObj);

    PostcodeObj.InputCity.addEventListener("change", function(){
        PostcodeObj = fPostCodeSelectLoad(PostcodeObj);
        PostcodeObj = fTableHightlightPostCode(PostcodeObj);
    });
    PostcodeObj.InputZone.addEventListener("change", function(){
        PostcodeObj = fPostCodeSelectLoad(PostcodeObj);
        PostcodeObj = fTableHightlightPostCode(PostcodeObj);
    });

}


function fPrintPostcodeTable(tempObj)
{
    let PostcodeTable = tempObj.SummyTable;
    let CreateTbody = document.createElement("tbody");
    for(AddTrCnt = 0; AddTrCnt < data.length; AddTrCnt++)
    {
        for(AddTdCnt = 0; AddTdCnt < data[AddTrCnt].districts.length; AddTdCnt++)
        {
            let CreateTbodyTr = document.createElement("tr");
            if(AddTdCnt == 0)
            {
                let CreateTbodyTd = document.createElement("td");
                CreateTbodyTd.className = "NormalTdClass";
                CreateTbodyTd.id = `idTdAdr0${AddTrCnt}${AddTdCnt}`;
                CreateTbodyTd.rowSpan = data[AddTrCnt].districts.length;
                CreateTbodyTd.innerHTML = `${data[AddTrCnt].name}`;
                CreateTbodyTr.appendChild(CreateTbodyTd);
            }

            CreateTbodyTd = document.createElement("td");
            CreateTbodyTd.className = "NormalTdClass";
            CreateTbodyTd.id = `idTdAdr1${AddTrCnt}${AddTdCnt}`;
            CreateTbodyTd.innerHTML = `${data[AddTrCnt].districts[AddTdCnt].zip}`;
            CreateTbodyTr.appendChild(CreateTbodyTd);

            CreateTbodyTd = document.createElement("td");
            CreateTbodyTd.className = "NormalTdClass";
            CreateTbodyTd.id = `idTdAdr2${AddTrCnt}${AddTdCnt}`;
            CreateTbodyTd.innerHTML = `${data[AddTrCnt].districts[AddTdCnt].name}`;
            CreateTbodyTr.appendChild(CreateTbodyTd);
            CreateTbody.appendChild(CreateTbodyTr);
        }
    }
    PostcodeTable.appendChild(CreateTbody);

    return(tempObj);
}


function fPostCodeSelectLoad(tempObj)
{
    let InputPostCodeCity = tempObj.InputCity;

    if(InputPostCodeCity.length == 1)
    {
        for(AddOptIndex = 0; AddOptIndex < data.length; AddOptIndex++)
        {
            let AddOption = document.createElement("option");

            AddOption.value = String(AddOptIndex + 1);
            AddOption.text = data[AddOptIndex].name;
            tempObj.InputCity.add(AddOption);
        }
    }

    if(InputPostCodeCity.selectedIndex == 0)
    {
        if(tempObj.InputZone.length != 1)
        {
            for(RmOptIndex = (tempObj.InputZone.length - 1); RmOptIndex > 0; RmOptIndex--)
            {
                tempObj.InputZone[RmOptIndex].remove();
            }
        }
    }
    else if(data[InputPostCodeCity.selectedIndex - 1].districts.length 
        != (tempObj.InputZone.length - 1))
    {
        if(tempObj.InputZone.length != 1)
        {
            for(RmOptIndex = (tempObj.InputZone.length - 1); RmOptIndex > 0; RmOptIndex--)
            {
                tempObj.InputZone[RmOptIndex].remove();
            }
        }
        
        for(AddOptIndex = 0; 
            AddOptIndex < data[InputPostCodeCity.selectedIndex - 1].districts.length; 
            AddOptIndex++)
        {
            let AddOption = document.createElement("option");

            AddOption.value = String(AddOptIndex + 1);
            AddOption.text = data[InputPostCodeCity.selectedIndex - 1].districts[AddOptIndex].zip + 
                data[InputPostCodeCity.selectedIndex - 1].districts[AddOptIndex].name;
            tempObj.InputZone.add(AddOption);
        }
    }
    else if(InputPostCodeCity.selectedIndex == 0)
    {
        if(tempObj.InputZone.length != 1)
        {
            for(RmOptIndex = (tempObj.InputZone.length - 1); RmOptIndex > 0; RmOptIndex--)
            {
                tempObj.InputZone[RmOptIndex].remove();
            }
        }
    }

    return(tempObj);
}


function fTableHightlightPostCode(tempObj)
{
    let getIdAddrCode1 = tempObj.InputCity.selectedIndex;
    let getIdAddrCode2 = tempObj.InputZone.selectedIndex;

    if(getIdAddrCode1 != 0)
    {
        if(tempObj.TargetCode1Flage == true)
        {
            let ClrTargetCity = document.getElementsByClassName("HightlightTd1Class");
            let ClrTargetCityLength = ClrTargetCity.length;
            for(clrCnt = 0; clrCnt < ClrTargetCityLength; clrCnt++)
            {
                ClrTargetCity[0].className = "NormalTdClass";
            }
            tempObj.TargetCode1Flage = false;
        }

        let TargetCity = document.getElementById(`idTdAdr0${getIdAddrCode1 - 1}0`);
        TargetCity.className = "HightlightTd1Class";
        TargetCity.scrollIntoView();
        tempObj.TargetCode1Flage = true;
    }
    else
    {
        let ClrTargetCity = document.getElementsByClassName("HightlightTd1Class");
        let ClrTargetCityLength = ClrTargetCity.length;
        for(clrCnt = 0; clrCnt < ClrTargetCityLength; clrCnt++)
        {
            ClrTargetCity[0].className = "NormalTdClass";
        }
        tempObj.TargetCode1Flage = false;
    }

    if((getIdAddrCode1 != 0) && (getIdAddrCode2 != 0))
    {
        if(tempObj.TargetCode2Flage == true)
        {
            let ClrTargetZone = document.getElementsByClassName("HightlightTd2Class");
            let ClrTargetZoneLength = ClrTargetZone.length;
            for(clrCnt = 0; clrCnt < ClrTargetZoneLength; clrCnt++)
            {
                ClrTargetZone[0].className = "NormalTdClass";
            }
            tempObj.TargetCode2Flage = false;
        }
        let TargetZone1 = document.getElementById(`idTdAdr1${getIdAddrCode1 - 1}${getIdAddrCode2 - 1}`);
        let TargetZone2 = document.getElementById(`idTdAdr2${getIdAddrCode1 - 1}${getIdAddrCode2 - 1}`);
        TargetZone1.className = "HightlightTd2Class";
        TargetZone2.className = "HightlightTd2Class";
        tempObj.TargetCode2Flage = true;
    }
    else if((getIdAddrCode1 == 0) || (getIdAddrCode2 == 0))
    {
        let ClrTargetZone = document.getElementsByClassName("HightlightTd2Class");
        let ClrTargetZoneLength = ClrTargetZone.length;
        for(clrCnt = 0; clrCnt < ClrTargetZoneLength; clrCnt++)
        {
            ClrTargetZone[0].className = "NormalTdClass";
        }
        tempObj.TargetCode2Flage = false;
    }

    return(tempObj);
}