//---This is the start of the code for the ticket purchase sections---
let LoyaltyPoint = {"LoyaltyPoints" : 0};
let checkloyalty= document.getElementById("CheckLoyalty");
document.getElementById("LiveCurrentValueUpdate").value=0;
document.getElementById("LiveOverallValueUpdate").value=0;
document.getElementById("OverallOrderPrice").value=0;
let TotADP=0, TotCDP=0, ADPass=0, CDPass=0, ASPass=0, TotASP=0, CSPass=0, TotCSP=0, AFPass=0, CFPass=0, TotAFP=0, TotCFP=0;
let ACTot=0, AFACTot=0, BFACTot=0, CFACTot=0, DFACTot=0;
let APAONow=0, APAOTot=0, FTAONow=0, FTAOTot=0;
let OverallValue=0, CurrentValue=0, FinalOverallValue=0;
let PCF=0;
let AddToCart = document.getElementById("ATC"), CalculateBtn=document.getElementById("Calculate"), ResetBtn=document.getElementById("RSB");
let ClearButton = document.getElementById("ClearBtn"), FSubmitBtn=document.getElementById("FSubmit");
AddToCart.addEventListener("click", () =>
{
   if (PCF==1)
   {
         event.stopImmediatePropagation();

         document.getElementById("FinalOrderName").value=document.getElementById("FullName").value;
         document.getElementById("FinalCustomerEmail").value=document.getElementById("CustomerEmail").value;
         document.getElementById("FinalCustomerNumber").value=document.getElementById("CustomerNumber").value;

         if(document.getElementById("Day Pass").checked)
        {
         ADPass=parseInt(document.getElementById("AdultTickets").value);
         CDPass=parseInt(document.getElementById("ChildrensTickets").value);
         TotADP=TotADP+ADPass;
         TotCDP=TotCDP+CDPass;
         document.getElementById("ADPasses").value=TotADP;
         document.getElementById("CDPasses").value=TotCDP;
        }
         else if(document.getElementById("Student Pass").checked)
        {
         ASPass=parseInt(document.getElementById("AdultTickets").value);
         CSPass=parseInt(document.getElementById("ChildrensTickets").value);
         TotASP=TotASP+ASPass;
         TotCSP=TotCSP+CSPass;
         document.getElementById("ASPasses").value=TotASP;
         document.getElementById("CSPasses").value=TotCSP;
        }
         else if(document.getElementById("Foreigner Pass").checked)
        {
         AFPass=parseInt(document.getElementById("AdultTickets").value);
         CFPass=parseInt(document.getElementById("ChildrensTickets").value);
         TotAFP=TotAFP+AFPass;
         TotCFP=TotCFP+CFPass;
         document.getElementById("AFPasses").value=TotAFP;
         document.getElementById("CFPasses").value=TotCFP;
        }
        else
        {
         console.log("Error");
        }  
        Extensions();
        AddOns(); 

         OverallValue=OverallValue+CurrentValue;

         PCF=0;

         FinalOverallValue=FinalOverallValue+CurrentValue;
         document.getElementById("OverallOrderPrice").value=FinalOverallValue;
        }
   else
   {
    document.getElementById("LiveCurrentValueUpdate").value="Please Press Calculate First";
    document.getElementById("LiveOverallValueUpdate").value="Please Press Calculate First";
   }
});

function Extensions()
{
    let TSelected= parseInt(TimeSelection.options[TimeSelection.selectedIndex].value);
    if (TSelected==12)
    {
        ACTot=parseInt(document.getElementById("AdultTickets").value)+parseInt(document.getElementById("ChildrensTickets").value);
        AFACTot=AFACTot+ACTot;
        document.getElementById("12HTickets").value=AFACTot;
    } 
    else if (TSelected==24)  
    {
        ACTot=parseInt(document.getElementById("AdultTickets").value)+parseInt(document.getElementById("ChildrensTickets").value);
        BFACTot=BFACTot+ACTot;
        document.getElementById("24HTickets").value=BFACTot;
    }
    else if(TSelected==48)
    {
        ACTot=parseInt(document.getElementById("AdultTickets").value)+parseInt(document.getElementById("ChildrensTickets").value);
        CFACTot=CFACTot+ACTot;
        document.getElementById("48HTickets").value=CFACTot;
    }
    else if(TSelected==3)
    {
        ACTot=parseInt(document.getElementById("AdultTickets").value)+parseInt(document.getElementById("ChildrensTickets").value);
        DFACTot=DFACTot+ACTot;
        document.getElementById("3HTickets").value=DFACTot;
    }
    else(console.log("Error"));
}

function AddOns()
{
    if(document.getElementById("AnnualPass").checked)
    {
        APAONow=parseInt(document.getElementById("AdultTickets").value)+parseInt(document.getElementById("ChildrensTickets").value);
        APAOTot=APAOTot+APAONow;
        document.getElementById("AnnualPasses").value=APAOTot;
    }
    else
    {
        APAONow=parseInt(document.getElementById("AdultTickets").value)+parseInt(document.getElementById("ChildrensTickets").value);
        APAOTot=APAOTot+0;
    }

    if(document.getElementById("FoodToken").checked)
    {
        FTAONow=parseInt(document.getElementById("AdultTickets").value)+parseInt(document.getElementById("ChildrensTickets").value);
        FTAOTot=FTAOTot+FTAONow;
        document.getElementById("FoodTokenO").value=FTAOTot;
    }
    else
    {
        FTAONow=parseInt(document.getElementById("AdultTickets").value)+parseInt(document.getElementById("ChildrensTickets").value);
        FTAOTot=FTAOTot+0;
    }
}


CalculateBtn.addEventListener("click", () =>
{
    if(document.getElementById("Day Pass").checked||document.getElementById("Student Pass").checked||document.getElementById("Foreigner Pass").checked)
    {
        PCF=1;
        CurrentValue=0;
        let AdultNumber=parseInt(document.getElementById("AdultTickets").value);
        let ChildNumber=parseInt(document.getElementById("ChildrensTickets").value);
        if(document.getElementById("Day Pass").checked)
       {
        CurrentValue=CurrentValue+(1000*AdultNumber)+(500*ChildNumber);
       }
        else if(document.getElementById("Student Pass").checked)
       {
        CurrentValue=CurrentValue+(500*AdultNumber)+(250*ChildNumber);
       }
        else if(document.getElementById("Foreigner Pass").checked)
       {
        CurrentValue=CurrentValue+(5000*AdultNumber)+(2500*ChildNumber);
       }
        else 
       {
        console.log("Error");
       }
       let TimeSelected=parseInt(TimeSelection.options[TimeSelection.selectedIndex].value);
    if (TimeSelected==3)
    {
        CurrentValue=CurrentValue+0;
    }
    else if(TimeSelected==12)
    {
        CurrentValue=CurrentValue+((parseInt(document.getElementById("AdultTickets").value)+parseInt(document.getElementById("ChildrensTickets").value))*250);
    }
    else if(TimeSelected==24)
    {
        CurrentValue=CurrentValue+((parseInt(document.getElementById("AdultTickets").value)+parseInt(document.getElementById("ChildrensTickets").value))*500);
    }
    else if(TimeSelected==48)
    {
        CurrentValue=CurrentValue+((parseInt(document.getElementById("AdultTickets").value)+parseInt(document.getElementById("ChildrensTickets").value))*1000);
    }
    else
    {
        console.log("Error");
    }

    if (document.getElementById("AnnualPass").checked)
    {
        CurrentValue=CurrentValue+((parseInt(document.getElementById("AdultTickets").value)+parseInt(document.getElementById("ChildrensTickets").value))*5000);
    }
    else
    {
       CurrentValue=CurrentValue+0;
    }

    if(document.getElementById("FoodToken").checked)
    {
        CurrentValue=CurrentValue+((parseInt(document.getElementById("AdultTickets").value)+parseInt(document.getElementById("ChildrensTickets").value))*500);
    }
    else
    {
        CurrentValue=CurrentValue+0;
    }

    document.getElementById("LiveCurrentValueUpdate").value=CurrentValue;
    document.getElementById("LiveOverallValueUpdate").value=OverallValue+CurrentValue;
    }
    else
    {
        document.getElementById("LiveCurrentValueUpdate").value="Please Select Pass Type";
        document.getElementById("LiveOverallValueUpdate").value="Please Select Pass Type";
    }
});

ClearButton.addEventListener("click", () =>
{
    PCF=0;
    FinalOverallValue=0;
    CurrentValue=0;
    OverallValue=0;
    ResetBtn.click();
});

FSubmitBtn.addEventListener("click", () =>
{
    window.alert("Thank you for purchasing custom tickets from Dehiwala Zoological Gardens. Your order has been placed.");
    let NumOfItems= document.getElementById("ADPasses").value+document.getElementById("ASPasses").value+document.getElementById("AFPasses").value+document.getElementById("CDPasses").value+document.getElementById("CSPasses").value+document.getElementById("CFPasses").value;
    if (NumOfItems>3)
    {
    let LAddition = NumOfItems*20;
    JSON.stringify(localStorage.getItem("LoyaltyPoints"))=JSON.stringify(localStorage.getItem("LoyaltyPoints"))+LAddition;
    }
});
//---This is the end of the ticket purchase section

//---This is the start of the donations section
SubmitD.addEventListener("click", () =>
{
    let NameD=document.getElementById("DName").value;
    let DAmount=parseInt(DASelection.options[DASelection.selectedIndex].value);
    let Honorific=Title.options[Title.selectedIndex].value;
    let CardNum1=document.getElementById("CardNum1").value;
    let CardNum2=document.getElementById("CardNum2").value;
    let CardNum3=document.getElementById("CardNum3").value;
    let CardNum4=document.getElementById("CardNum4").value;
    let EDateMM=document.getElementById("EDateMM").value;
    let EDateYY=document.getElementById("EDateYY").value;

    LengthTest(CardNum1, CardNum2, CardNum3, CardNum4, EDateMM, EDateYY, NameD, DAmount, Honorific);
});

function LengthTest(CardNum1, CardNum2, CardNum3, CardNum4, EDateMM, EDateYY, NameD, DAmount, Honorific)
{
    if (CardNum1.toString().length!=4)
    {
        window.alert("Credit Card Information Is Invalid, Please Try Again.");
    }
    else if(CardNum2.toString().length!=4)
    {
        window.alert("Credit Card Information Is Invalid, Please Try Again.");
    }
    else if(CardNum3.toString().length!=4)
    {
        window.alert("Credit Card Information Is Invalid, Please Try Again.");
    }
    else if(CardNum4.toString().length!=4)
    {
        window.alert("Credit Card Information Is Invalid, Please Try Again.");
    }
    else if((EDateMM.length!=2)||(EDateMM>12)||(EDateMM<01))
    {
        window.alert("Credit Card Information Is Invalid, Please Try Again.");
    }
    else if((EDateYY.length!=2)||(EDateYY<21))
    {
        window.alert("Credit Card Information Is Invalid, Please Try Again.");
    }
    else
    {
        window.alert("Thank you for your donation of "+DAmount+" rupees "+Honorific+" "+NameD);
    }
}
//---This is the end of the donations section---
//---This is the start of the code for the add to favourites button---
let AddTFavBtn = document.getElementById("AddTF");
let AddFavTCart = document.getElementById("AddFTC");

AddTFavBtn.addEventListener("click", () =>
{
    let AddToFavourites =
    {
    "FinalOrderName" : document.getElementById("FinalOrderName").value,
    "FEMail": document.getElementById("FinalCustomerEmail").value,
    "FContactNumber" :document.getElementById("FinalCustomerNumber").value,
    "FADP" : document.getElementById("ADPasses").value,
    "FCDP" : document.getElementById("CDPasses").value,
    "FASP" : document.getElementById("ASPasses").value,
    "FCSP" : document.getElementById("CSPasses").value,
    "FAFP" : document.getElementById("AFPasses").value,
    "FCFP" : document.getElementById("CFPasses").value,
    "F3HT" : document.getElementById("3HTickets").value,
    "F12HT": document.getElementById("12HTickets").value,
    "F24HT": document.getElementById("24HTickets").value,
    "F48HT": document.getElementById("48HTickets").value,
    "FAP": document.getElementById("AnnualPasses").value,
    "FTO": document.getElementById("FoodTokenO").value,
    "FOOP": document.getElementById("OverallOrderPrice").value,
    }
    localStorage.setItem('AddToFavourites', JSON.stringify(AddToFavourites));
});

AddFavTCart.addEventListener("click", () =>
{
    //let FavouriteRetrieve = localStorage.getItem('AddToFavourites');
    document.getElementById("FinalOrderName").value = JSON.parse(localStorage.getItem("FinalOrderName"));
    document.getElementById("FinalCustomerEmail").value = JSON.stringify(localStorage.getItem("FEMail"));
    document.getElementById("FinalCustomerNumber").value = JSON.stringify(localStorage.getItem("FContactNumber"));
    document.getElementById("ADPasses").value = JSON.stringify(localStorage.getItem("FADP"));
    document.getElementById("CDPasses").value = JSON.stringify(localStorage.getItem("FCDP"));
    document.getElementById("ASPasses").value = JSON.stringify(localStorage.getItem("FCSP"));
    document.getElementById("CSPasses").value = JSON.stringify(localStorage.getItem("FAFP"));
    document.getElementById("AFPasses").value = JSON.stringify(localStorage.getItem("FCFP"));
    document.getElementById("CFPasses").value = JSON.stringify(localStorage.getItem("F3HT"));
    document.getElementById("3HTickets").value = JSON.stringify(localStorage.getItem("F12HT"));
    document.getElementById("12HTickets").value = JSON.stringify(localStorage.getItem("F24HT"));
    document.getElementById("24HTickets").value = JSON.stringify(localStorage.getItem("F48HT"));
    document.getElementById("48HTickets").value = JSON.stringify(localStorage.getItem("FAP"));
    document.getElementById("AnnualPasses").value = JSON.stringify(localStorage.getItem("FTO"));
    document.getElementById("FoodTokenO").value = JSON.stringify(localStorage.getItem("FOOP"));
});

//---This is the end of the favourites section---

checkloyalty.addEventListener("click", () =>
{
    window.alert("You have " +JSON.stringify(localStorage.getItem("LoyaltyPoints"))+ " Loyalty Points");
});