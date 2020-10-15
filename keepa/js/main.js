const CURRENCY_SIGNS = {
  'com': '$',
  'co.uk': '£',
  'de': '€',
  'fr': '€',
  'es': '€',
  'it': '€',
  'ca': '$'
}
const KEEPA_REGION = {
      'de': 3,
      'fr': 4,
      'es': 9,
      'it': 8,
      'co.uk': 2,
      'com': 1,
    };
var CurrentAsin;
var CurrentCountry;
var currentRegion;
var FreeTrialCheck=false;
$(document).ready(INIT);
function INIT() {
console.log($("#FBAMTKeepa").attr("data-asin"));
console.log("========>",window.location)
console.log("========>",window.location.search.substring(1))
var sPageURL = window.location.search.substring(1);
var sURLVariables = sPageURL.split('&'),
CurrentAsin=sURLVariables[0].split('=')[1];
currentRegion=sURLVariables[1].split('=')[1];
CurrentCountry=currentRegion;
var keepaRegion=KEEPA_REGION[currentRegion];
var KeePaURL="https://graph.keepa.com/pricehistory.png?amazon=1&new=1&domain="+keepaRegion+"&width=550&range=31&asin="+CurrentAsin+"&amazon=1&new=1&used=1&salesrank=1&height=250&cBackground=ffffff&cFont=18c187&cAmazon=FFE8D2&cNew=8888dd&cUsed=444444";
$(".keepapngimage").attr("src",KeePaURL);
 /*chrome.storage.sync.get(['historydatagraph','showCalc','licenseKey','FreeTrialCheck'], function (settings) 
  {
  	var valicenseKey=settings.licenseKey;
  	if(typeof settings.FreeTrialCheck!="undefined")
  	{
  		FreeTrialCheck= settings.FreeTrialCheck;
  	}
  	if(typeof settings.historydatagraph!='undefined' && settings.historydatagraph)
    {
     $("#CustomGraphTable").hide();
     var CustomGraphData;
     var CurrencySign=CURRENCY_SIGNS[currentRegion];
     var myLineChart;
     var urldatamain;
     FreeTrialCheck=true;
     function doneToImage(){
 if(FreeTrialCheck)
 {
  	urldatamain=myLineChart.toBase64Image();
  	FreeTrialCheck=false;
  	$(".CustomGraphOuter").html("");
  	console.log(urldatamain);
  	$(".CustomGraphOuter").html("<div class='tooltip7'><img style='margin-left: 40px;' src='"+urldatamain+"' title='interactive graph, buy box & fba data available on paid version only'><span class='tooltiptext1'>interactive graph, buy box & fba data available on paid version only</span></div>");
  	//document.getElementById("imagesid").src=url;
  }
}
     chrome.runtime.sendMessage({
   			method: 'POST',
    		FunctionCall: 'Keepa',
    		dataType: 'json',
    		valicenseKey: valicenseKey,
    		url: 'http://3.16.122.8/keepa/keepatest4.php?marketplace='+CurrentCountry+'&asin='+ CurrentAsin+"&valicenseKey="+valicenseKey
			}, function(Response) {
			console.log("here Mubarak is",Response);
         var i,j,k,l,m,n,o,p,q,r,BuyboxMade={},FbaMade={},AmazonMade={},NewMade={},UsedMade={},SalesRankMade={},yaxisall1=0,yaxisall2=0,yaxisyear1=0,yaxisyear2=0,yaxis3month1=0,yaxis3month2=0,yaxismonth1=0,yaxismonth2=0,yaxisweek1=0,yaxisweek2=0,yaxisday1=0,yaxisday2=0,yaxis1minall=50000000,yaxis1minyear=50000000,yaxis1min3month=50000000,yaxis1minmonth=50000000,yaxis1minweek=50000000,yaxis1minday=50000000,yaxis2minall=50000000,yaxis2minyear=50000000,yaxis2min3month=50000000,yaxis2minmonth=50000000,yaxis2minweek=50000000,yaxis2minday=50000000;
        var AmazonCount=0;
        var NewCount=0;
        var UsedCount=0;
        var SalesRankCount=0;
        var BuyboxPriceCount=0;
        var FbaPriceCount=0;
        if(typeof Response['data']=="object")
        {
        	AmazonCount=Response['data']['AmazonPrice'].length;
        	NewCount=Response['data']['NewPrice'].length;
        	UsedCount=Response['data']['UsedPrice'].length;
        	SalesRankCount=Response['data']['SalesRank'].length;
        	BuyboxPriceCount=Response['data']['BuyboxPrice'].length;
        	FbaPriceCount=Response['data']['FbaPrice'].length;
        }
        var dupfba={},dupbuybox={},axisminall,axismaxall,axisminyear,axismaxyear,axismin3month,axismax3month,axisminmonth,axismaxmonth,axisminweek,axismaxweek,axisminday,axismaxday;
        AmazonMade['all']=[];
        AmazonMade['year']=[];
        AmazonMade['months3']=[];
        AmazonMade['months']=[];
        AmazonMade['week']=[];
        AmazonMade['today']=[];

        NewMade['all']=[];
        NewMade['year']=[];
        NewMade['months3']=[];
        NewMade['months']=[];
        NewMade['week']=[];
        NewMade['today']=[];

        UsedMade['all']=[];
        UsedMade['year']=[];
        UsedMade['months3']=[];
        UsedMade['months']=[];
        UsedMade['week']=[];
        UsedMade['today']=[];

        SalesRankMade['all']=[];
        SalesRankMade['year']=[];
        SalesRankMade['months3']=[];
        SalesRankMade['months']=[];
        SalesRankMade['week']=[];
        SalesRankMade['today']=[];

        BuyboxMade['all']=[];
        BuyboxMade['year']=[];
        BuyboxMade['months3']=[];
        BuyboxMade['months']=[];
        BuyboxMade['week']=[];
        BuyboxMade['today']=[];

        FbaMade['all']=[];
        FbaMade['year']=[];
        FbaMade['months3']=[];
        FbaMade['months']=[];
        FbaMade['week']=[];
        FbaMade['today']=[];

        AmazonMadeTemp=[];
        NewMadeTemp=[];
        UsedMadeTemp=[];
        SalesRankMadeTemp=[];

        var dateToday=new Date();
        var todayTimestamp=dateToday.getTime();
		var yearlength = todayTimestamp - 1000*60*60*24*367;
		var months3length = todayTimestamp - 1000*60*60*24*90;
		var monthslength = todayTimestamp - 1000*60*60*24*30;
		var weeklength = todayTimestamp - 1000*60*60*24*7;
		var todaylength = todayTimestamp - 1000*60*60*24*1;
		var checkmaxall=0;
		var checkmaxyear=0;
		var checkmax3month=0;
		var checkmaxmonth=0;
		var checkmaxweek=0;
		var checkmaxday=0;
		var BuyBoxArray={};
        var FBAArray={};
        for(var i=(SalesRankCount-2);i>=2;i=i-2)
		{
        	var unix_timestamp = ((Response['data']['SalesRank'][i]+21564000)*60);
        	var Outerdate = new Date(eval(unix_timestamp*1000));
        	var SalesRankDataDate=Outerdate.getTime();
        	var OuterDateComp=Outerdate.getTime();
			var SalesRankVal=Response['data']['SalesRank'][i+1];
			if(i==(SalesRankCount-2))
			{
				axismaxall=OuterDateComp;
			}
			if(Response['data']['SalesRank'][i+1]==-1)
			{
				SalesRankVal=null;
			}
			else
			{
				if(yaxisall2<SalesRankVal)
				{
					yaxisall2=SalesRankVal;
				}
			}
			if(SalesRankVal!=null)
			{
				if(SalesRankVal<yaxis2minall)
				{
					yaxis2minall=SalesRankVal;
				}
				axisminall=OuterDateComp;
			}
			SalesRankMade['all'].push({'x': new Date(OuterDateComp),'y':SalesRankVal});
			if(yearlength<=SalesRankDataDate)
			{
				SalesRankMade['year'].push({x:new Date(OuterDateComp),y:SalesRankVal});
				if(yaxisyear2<SalesRankVal)
				{
					yaxisyear2=SalesRankVal;
				}
				if(SalesRankVal!=null)
				{
					if(SalesRankVal<yaxis2minyear)
					{
						yaxis2minyear=SalesRankVal;
					}
					axisminyear=OuterDateComp;
				}
				if(checkmaxyear==0)
				{
					axismaxyear=OuterDateComp;
				}

				checkmaxyear++;
			}
			if(months3length<=SalesRankDataDate)
			{
				axismin=OuterDateComp;
				//console.log("3months=====>",{x:new Date(OuterDateComp),y:SalesRankVal});
				SalesRankMade['months3'].push({x:new Date(OuterDateComp),y:SalesRankVal});
				if(yaxis3month2<SalesRankVal)
				{
					yaxis3month2=SalesRankVal;
				}
				if(SalesRankVal!=null)
				{
					if(SalesRankVal<yaxis2min3month)
					{
						yaxis2min3month=SalesRankVal;
					}
					axismin3month=OuterDateComp;
				}
				if(checkmax3month==0)
				{
					axismax3month=OuterDateComp;
				}
				checkmax3month++;
			}
			if(monthslength<=SalesRankDataDate)
			{
				SalesRankMade['months'].push({x:new Date(OuterDateComp),y:SalesRankVal});
				if(yaxismonth2<SalesRankVal)
				{
					yaxismonth2=SalesRankVal;
				}
				if(SalesRankVal!=null)
				{
					if(SalesRankVal<yaxis2minmonth)
					{
						yaxis2minmonth=SalesRankVal;
					}
					axisminmonth=OuterDateComp;
				}
				if(checkmaxmonth==0)
				{
					axismaxmonth=OuterDateComp;
				}

				checkmaxmonth++;
			}
			if(weeklength<=SalesRankDataDate)
			{
				SalesRankMade['week'].push({x:new Date(OuterDateComp),y:SalesRankVal});
				if(yaxisweek2<SalesRankVal)
				{
					yaxisweek2=SalesRankVal;
				}
				if(SalesRankVal!=null)
				{
					if(SalesRankVal<yaxis2minweek)
					{
						yaxis2minweek=SalesRankVal;
					}
					axisminweek=OuterDateComp;
				}
				if(checkmaxweek==0)
				{
					axismaxweek=OuterDateComp;
				}

				checkmaxweek++;
			}
			if(todaylength<=SalesRankDataDate)
			{
				SalesRankMade['today'].push({x:new Date(OuterDateComp),y:SalesRankVal});
				if(yaxisday2<SalesRankVal)
				{
					yaxisday2=SalesRankVal;
				}
				if(SalesRankVal!=null)
				{
					if(SalesRankVal<yaxis2minday)
					{
						yaxis2minday=SalesRankVal;
					}
					axisminday=OuterDateComp;
				}
				if(checkmaxday==0)
				{
					axismaxday=OuterDateComp;
				}

				checkmaxday++;
			}
			AmazonCount=Response['data']['AmazonPrice'].length;
			NewCount=Response['data']['NewPrice'].length;
			UsedCount=Response['data']['UsedPrice'].length;
			BuyboxPriceCount=Response['data']['BuyboxPrice'].length;
        	FbaPriceCount=Response['data']['FbaPrice'].length;
			var Found1=false;
			var Found2=false;
			var Found3=false;
			for(var j=(AmazonCount-2);j>=0;j=j-2)
        	{
        		//console.log("i==>",i);
        		//console.log("Response['data']['AmazonPrice'][j]==>",Response['data']['AmazonPrice'][j]);
        		//console.log("Response['data']['AmazonPrice'][j+1]==>",Response['data']['AmazonPrice'][j+1]);
        		var unix_timestampIn = ((Response['data']['AmazonPrice'][j]+21564000)*60);
        		var Indate1 = new Date(eval(unix_timestampIn*1000));
        		var IndateCom1=Indate1.getTime();
        		var InVal1=Response['data']['AmazonPrice'][j+1];

        		if(InVal1==-1)
				{
					InVal1=null;
				}
				if(InVal1!=null)
				{
					InVal1=(InVal1/100);
					if(yaxisall1<InVal1)
					{
						yaxisall1=InVal1;
					}
				}
				if(InVal1!=null)
				{
					if(InVal1<yaxis1minall)
					{
						yaxis1minall=InVal1;
					}
				}
				if(IndateCom1<OuterDateComp)
				{
					Found1=true;
					AmazonMade['all'].push({x:new Date(OuterDateComp),y:InVal1});
					if(yearlength<=OuterDateComp)
					{
						AmazonMade['year'].push({x:new Date(OuterDateComp),y:InVal1});
						if(yaxisyear1<InVal1)
						{
							yaxisyear1=InVal1;
						}
						if(InVal1!=null)
						{
							if(InVal1<yaxis1minyear)
							{
								yaxis1minyear=InVal1;
							}
						}
					}
					if(months3length<=OuterDateComp)
					{
						AmazonMade['months3'].push({x:new Date(OuterDateComp),y:InVal1});
						if(yaxis3month1<InVal1)
						{
							yaxis3month1=InVal1;
						}
						if(InVal1!=null)
						{
							if(InVal1<yaxis1min3month)
							{
								yaxis1min3month=InVal1;
							}
						}
					}
					if(monthslength<=OuterDateComp)
					{
						AmazonMade['months'].push({x:new Date(OuterDateComp),y:InVal1});
						if(yaxismonth1<InVal1)
						{
							yaxismonth1=InVal1;
						}
						if(InVal1!=null)
						{
							if(InVal1<yaxis1minmonth)
							{
								yaxis1minmonth=InVal1;
							}
						}
					}
					if(weeklength<=OuterDateComp)
					{
						AmazonMade['week'].push({x:new Date(OuterDateComp),y:InVal1});
						if(yaxisweek1<InVal1)
						{
							yaxisweek1=InVal1;
						}
						if(InVal1!=null)
						{
							if(InVal1<yaxis1minweek)
							{
								yaxis1minweek=InVal1;
							}
						}
					}
					if(todaylength<=OuterDateComp)
					{
						AmazonMade['today'].push({x:new Date(OuterDateComp),y:InVal1});
						if(yaxisday1<InVal1)
						{
							yaxisday1=InVal1;
						}
						if(InVal1!=null)
						{
							if(InVal1<yaxis1minday)
							{
								yaxis1minday=InVal1;
							}
						}
					}
					break;
				}
				else
				{
					var index2=j+1;
					Response['data']['AmazonPrice'].splice(j,1);
					Response['data']['AmazonPrice'].splice(j,1);
				}
        	}
        	if(!Found1)
        	{
        		AmazonMade['all'].push({x:new Date(OuterDateComp),y:null});
				if(yearlength<=OuterDateComp)
				{
					AmazonMade['year'].push({x:new Date(OuterDateComp),y:null});
				}
				if(months3length<=OuterDateComp)
				{
					AmazonMade['months3'].push({x:new Date(OuterDateComp),y:null});
				}
				if(monthslength<=OuterDateComp)
				{
					AmazonMade['months'].push({x:new Date(OuterDateComp),y:null});
				}
				if(weeklength<=OuterDateComp)
				{
					AmazonMade['week'].push({x:new Date(OuterDateComp),y:null});
				}
				if(todaylength<=OuterDateComp)
				{
					AmazonMade['today'].push({x:new Date(OuterDateComp),y:null});

				}
        	}
        	for(var k=(NewCount-2);k>=0;k=k-2)
        	{
        		var unix_timestampIn2 = ((Response['data']['NewPrice'][k]+21564000)*60);
        		var Indate2 = new Date(eval(unix_timestampIn2*1000));
        		var IndateCom2=Indate2.getTime();
        		var InVal2=Response['data']['NewPrice'][k+1];
        		if(InVal2==-1)
				{
					InVal2=null;
				}
				if(InVal2!=null)
				{
					InVal2=(InVal2/100);
					if(yaxisall1<InVal2)
					{
						yaxisall1=InVal2;
					}
				}
				if(IndateCom2<OuterDateComp)
				{
					Found2=true;
        		//console.log("Response['data']['AmazonPrice'][j+1]==>",Response['data']['AmazonPrice'][j+1]);
					NewMade['all'].push({x:new Date(OuterDateComp),y:InVal2});
					if(yearlength<=OuterDateComp)
					{
						NewMade['year'].push({x:new Date(OuterDateComp),y:InVal2});
						if(yaxisyear1<InVal2)
						{
							yaxisyear1=InVal2;
						}
						if(InVal2!=null)
						{
							if(InVal2<yaxis1minyear)
							{
								yaxis1minyear=InVal2;
							}
						}
					}
					if(months3length<=OuterDateComp)
					{
						NewMade['months3'].push({x:new Date(OuterDateComp),y:InVal2});
						if(yaxis3month1<InVal2)
						{
							yaxis3month1=InVal2;
						}
						if(InVal2!=null)
						{
							if(InVal2<yaxis1min3month)
							{
								yaxis1min3month=InVal2;
							}
						}
					}
					if(monthslength<=OuterDateComp)
					{
						NewMade['months'].push({x:new Date(OuterDateComp),y:InVal2});
						if(yaxismonth1<InVal2)
						{
							yaxismonth1=InVal2;
						}
						if(InVal2!=null)
						{
							if(InVal2<yaxis1minmonth)
							{
								yaxis1minmonth=InVal2;
							}
						}
					}
					if(weeklength<=OuterDateComp)
					{
						NewMade['week'].push({x:new Date(OuterDateComp),y:InVal2});
						if(yaxisweek1<InVal2)
						{
							yaxisweek1=InVal2;
						}
						if(InVal2!=null)
						{
							if(InVal2<yaxis1minweek)
							{
								yaxis1minweek=InVal2;
							}
						}
					}
					if(todaylength<=OuterDateComp)
					{
						NewMade['today'].push({x:new Date(OuterDateComp),y:InVal2});
						if(yaxisday1<InVal2)
						{
							yaxisday1=InVal2;
						}
						if(InVal2!=null)
						{
							if(InVal2<yaxis1minday)
							{
								yaxis1minday=InVal2;
							}
						}
					}
					break;
				}
				else
				{
					var index2=k+1;
					Response['data']['NewPrice'].splice(k,1);
					Response['data']['NewPrice'].splice(k,1);
				}
        	}
        	if(!Found2)
        	{
        		NewMade['all'].push({x:new Date(OuterDateComp),y:null});
				if(yearlength<=OuterDateComp)
				{
					NewMade['year'].push({x:new Date(OuterDateComp),y:null});
				}
				if(months3length<=OuterDateComp)
				{
					NewMade['months3'].push({x:new Date(OuterDateComp),y:null});
				}
				if(monthslength<=OuterDateComp)
				{
					NewMade['months'].push({x:new Date(OuterDateComp),y:null});
				}
				if(weeklength<=OuterDateComp)
				{
					NewMade['week'].push({x:new Date(OuterDateComp),y:null});
				}
				if(todaylength<=OuterDateComp)
				{
					NewMade['today'].push({x:new Date(OuterDateComp),y:null});
				}
        	}
        	for(var l=(UsedCount-2);l>=0;l=l-2)
        	{
        		var unix_timestampIn3 = ((Response['data']['UsedPrice'][l]+21564000)*60);
        		var Indate3 = new Date(eval(unix_timestampIn3*1000));
        		var IndateCom3=Indate3.getTime();
        		var InVal3=Response['data']['UsedPrice'][l+1];
        		if(InVal3==-1)
				{
					InVal3=null;
				}
				if(InVal3!=null)
				{
					InVal3=(InVal3/100);
					if(yaxisall1<InVal3)
					{
						yaxisall1=InVal3;
					}
				}

				if(IndateCom3<OuterDateComp)
				{
					Found3=true;
					UsedMade['all'].push({x:new Date(OuterDateComp),y:InVal3});
					if(InVal3!=null)
					{
						if(InVal3<yaxis1minall)
						{
							yaxis1minall=InVal3;
						}
					}
					if(yearlength<=OuterDateComp)
					{
						UsedMade['year'].push({x:new Date(OuterDateComp),y:InVal3});
						if(yaxisyear1<InVal3)
						{
							yaxisyear1=InVal3;
						}
						if(InVal3!=null)
						{
							if(InVal3<yaxis1minyear)
							{
								yaxis1minyear=InVal3;
							}
						}
					}
					if(months3length<=OuterDateComp)
					{
						UsedMade['months3'].push({x:new Date(OuterDateComp),y:InVal3});
						if(yaxis3month1<InVal3)
						{
							yaxis3month1=InVal3;
						}
						if(InVal3!=null)
						{
							if(InVal3<yaxis1min3month)
							{
								yaxis1min3month=InVal3;
							}
						}
					}
					if(monthslength<=OuterDateComp)
					{
						UsedMade['months'].push({x:new Date(OuterDateComp),y:InVal3});
						if(yaxismonth1<InVal3)
						{
							yaxismonth1=InVal3;
						}
						if(InVal3!=null)
						{
							if(InVal3<yaxis1minmonth)
							{
								yaxis1minmonth=InVal3;
							}
						}
					}
					if(weeklength<=OuterDateComp)
					{
						UsedMade['week'].push({x:new Date(OuterDateComp),y:InVal3});
						if(yaxisweek1<InVal3)
						{
							yaxisweek1=InVal3;
						}
						if(InVal3!=null)
						{
							if(InVal3<yaxis1minweek)
							{
								yaxis1minweek=InVal3;
							}
						}
					}
					if(todaylength<=OuterDateComp)
					{
						UsedMade['today'].push({x:new Date(OuterDateComp),y:InVal3});
						if(yaxisday1<InVal3)
						{
							yaxisday1=InVal3;
						}
						if(InVal3!=null)
						{
							if(InVal3<yaxis1minday)
							{
								yaxis1minday=InVal3;
							}
						}
					}
					break;
				}
				else
				{
					var index2=l+1;
					Response['data']['UsedPrice'].splice(l,1);
					Response['data']['UsedPrice'].splice(l,1);
				}
        	}
        	if(!Found3)
        	{
        		UsedMade['all'].push({x:new Date(OuterDateComp),y:null});
				if(yearlength<=OuterDateComp)
				{
					UsedMade['year'].push({x:new Date(OuterDateComp),y:null});
				}
				if(months3length<=OuterDateComp)
				{
					UsedMade['months3'].push({x:new Date(OuterDateComp),y:null});
				}
				if(monthslength<=OuterDateComp)
				{
					UsedMade['months'].push({x:new Date(OuterDateComp),y:null});
				}
				if(weeklength<=OuterDateComp)
				{
					UsedMade['week'].push({x:new Date(OuterDateComp),y:null});
				}
				if(todaylength<=OuterDateComp)
				{
					UsedMade['today'].push({x:new Date(OuterDateComp),y:null});
				}
        	}


        	BuyboxPriceCount=Response['data']['BuyboxPrice'].length;
        FbaPriceCount=Response['data']['FbaPrice'].length;
        var CommonDateCount=Response['data']['CommonDate'].length;
		for(var o=(CommonDateCount-2);o>=0;o=o-2)
		{
			var unix_timestampOuter2 = ((Response['data']['CommonDate'][o]+21564000)*60);
        	var Outerdate2 = new Date(eval(unix_timestampOuter2*1000));
        	var OuterDateComp2=Outerdate2.getTime();
        	if(OuterDateComp2<=OuterDateComp)
        	{
        	BuyboxPriceCount=Response['data']['BuyboxPrice'].length;
        	FbaPriceCount=Response['data']['FbaPrice'].length;
			for(var m=(BuyboxPriceCount-3);m>=0;m=m-3)
        	{
        		var unix_timestampIn4 = ((Response['data']['BuyboxPrice'][m]+21564000)*60);
        		var Indate4 = new Date(eval(unix_timestampIn4*1000));
        		var IndateCom4=Indate4.getTime();
        		var InVal4=Response['data']['BuyboxPrice'][m+1];
				var bbdatayear=Indate4.getFullYear()+""+Indate4.getMonth()+""+Indate4.getDate()+"";
        		var bbdatayear1=Indate4.getFullYear()+""+Indate4.getMonth()+""+Indate4.getDate()+"1";
        		if(InVal4==-1)
				{
					InVal4=null;
				}
				if(InVal4!=null)
				{
					InVal4=(InVal4/100);
					if(yaxisall1<InVal4)
					{
						yaxisall1=InVal4;
					}
				}
				if(InVal4!=null)
				{
					if(InVal4<yaxis1minall)
					{
						yaxis1minall=InVal4;
					}
				}
				if(IndateCom4<=OuterDateComp2 && typeof BuyBoxArray[OuterDateComp2]=="undefined")
				{
					BuyBoxArray[OuterDateComp2]=OuterDateComp2;
					Found1=true;
					BuyboxMade['all'].push({x:new Date(OuterDateComp2),y:InVal4});
					if(yearlength<=OuterDateComp2)
					{
						BuyboxMade['year'].push({x:new Date(OuterDateComp2),y:InVal4});
						if(yaxisyear1<InVal4)
						{
							yaxisyear1=InVal4;
						}
						if(InVal4!=null)
						{
							if(InVal4<yaxis1minyear)
							{
								yaxis1minyear=InVal4;
							}
						}
					}
					if(months3length<=OuterDateComp2)
					{
						BuyboxMade['months3'].push({x:new Date(OuterDateComp2),y:InVal4});
						if(yaxis3month1<InVal4)
						{
							yaxis3month1=InVal4;
						}
						if(InVal4!=null)
						{
							if(InVal4<yaxis1min3month)
							{
								yaxis1min3month=InVal4;
							}
						}
					}
					if(monthslength<=OuterDateComp2)
					{
						BuyboxMade['months'].push({x:new Date(OuterDateComp2),y:InVal4});
						if(yaxismonth1<InVal4)
						{
							yaxismonth1=InVal4;
						}
						if(InVal4!=null)
						{
							if(InVal4<yaxis1minmonth)
							{
								yaxis1minmonth=InVal4;
							}
						}
					}
					if(weeklength<=OuterDateComp2)
					{
						BuyboxMade['week'].push({x:new Date(OuterDateComp2),y:InVal4});
						if(yaxisweek1<InVal4)
						{
							yaxisweek1=InVal4;
						}
						if(InVal4!=null)
						{
							if(InVal4<yaxis1minweek)
							{
								yaxis1minweek=InVal4;
							}
						}
					}
					if(todaylength<=OuterDateComp2)
					{
						BuyboxMade['today'].push({x:new Date(OuterDateComp2),y:InVal4});
						if(yaxisday1<InVal4)
						{
							yaxisday1=InVal4;
						}
						if(InVal4!=null)
						{
							if(InVal4<yaxis1minday)
							{
								yaxis1minday=InVal4;
							}
						}
					}
					break;
				}
				else
				{
					var index2=m+1;
					//Response['data']['BuyboxPrice'].splice(m,1);
					//Response['data']['BuyboxPrice'].splice(m,1);
					//Response['data']['BuyboxPrice'].splice(m,1);
				}
        	}
        for(var n=(FbaPriceCount-2);n>=0;n=n-2)
        	{
        		var unix_timestampIn5 = ((Response['data']['FbaPrice'][n]+21564000)*60);
        		var Indate5 = new Date(eval(unix_timestampIn5*1000));
        		var IndateCom5=Indate5.getTime();
        		var InVal5=Response['data']['FbaPrice'][n+1];
				var fbadatayear=Indate5.getFullYear()+""+Indate5.getMonth()+""+Indate5.getDate()+"";
        		var fbadatayear1=Indate5.getFullYear()+""+Indate5.getMonth()+""+Indate5.getDate()+"1";
        		if(InVal5==-1)
				{
					InVal5=null;
				}
				if(InVal5!=null)
				{
					InVal5=(InVal5/100);
					if(yaxisall1<InVal5)
					{
						yaxisall1=InVal5;
					}
				}
				if(InVal5!=null)
				{
					if(InVal5<yaxis1minall)
					{
						yaxis1minall=InVal5;
					}
				}
				if(IndateCom5<=OuterDateComp2 && typeof FBAArray[OuterDateComp2]=="undefined")
				{
					FBAArray[OuterDateComp2]=OuterDateComp2;
					FbaMade['all'].push({x:new Date(OuterDateComp2),y:InVal5});
					if(yearlength<=OuterDateComp2)
					{
						FbaMade['year'].push({x:new Date(OuterDateComp2),y:InVal5});
						if(yaxisyear1<InVal5)
						{
							yaxisyear1=InVal5;
						}
						if(InVal5!=null)
						{
							if(InVal5<yaxis1minyear)
							{
								yaxis1minyear=InVal5;
							}
						}
					}
					if(months3length<=OuterDateComp2)
					{
						FbaMade['months3'].push({x:new Date(OuterDateComp2),y:InVal5});
						if(yaxis3month1<InVal5)
						{
							yaxis3month1=InVal5;
						}
						if(InVal5!=null)
						{
							if(InVal5<yaxis1min3month)
							{
								yaxis1min3month=InVal5;
							}
						}
					}
					if(monthslength<=OuterDateComp2)
					{
						FbaMade['months'].push({x:new Date(OuterDateComp2),y:InVal5});
						if(yaxismonth1<InVal5)
						{
							yaxismonth1=InVal5;
						}
						if(InVal5!=null)
						{
							if(InVal5<yaxis1minmonth)
							{
								yaxis1minmonth=InVal5;
							}
						}
					}
					if(weeklength<=OuterDateComp2)
					{
						FbaMade['week'].push({x:new Date(OuterDateComp2),y:InVal5});
						if(yaxisweek1<InVal5)
						{
							yaxisweek1=InVal5;
						}
						if(InVal5!=null)
						{
							if(InVal5<yaxis1minweek)
							{
								yaxis1minweek=InVal5;
							}
						}
					}
					if(todaylength<=OuterDateComp2)
					{
						FbaMade['today'].push({x:new Date(OuterDateComp2),y:InVal5});
						if(yaxisday1<InVal5)
						{
							yaxisday1=InVal5;
						}
						if(InVal5!=null)
						{
							if(InVal5<yaxis1minday)
							{
								yaxis1minday=InVal5;
							}
						}
					}
					break;
				}
				else
				{
					var index2=n+1;
					//Response['data']['FbaPrice'].splice(n,1);
					//Response['data']['FbaPrice'].splice(n,1);
				}
        	}
        	break;
        }
        else
        {
        	Response['data']['CommonDate'].splice(o,1);
        	Response['data']['CommonDate'].splice(o,1);
        }
        }






		}
		
        if(yaxisall2<=1000)
		{
			yaxisall2=Math.ceil(yaxisall2/100)*100;
			var yaxisallinterval2=Math.ceil(yaxisall2/600)*100;
		}
		else if(yaxisall2<=2000)
		{
			yaxisall2=Math.ceil(yaxisall2/200)*200;
			var yaxisallinterval2=Math.ceil(yaxisall2/1200)*200;
		}
		else
		{
			yaxisall2=Math.ceil(yaxisall2/10000)*10000;
			var yaxisallinterval2=Math.ceil(yaxisall2/6000)*1000;
		}

		yaxisall1=Math.ceil(yaxisall1/10)*10;
		var yaxisallinterval1=Math.ceil(yaxisall1/6);

		if(yaxisyear2<=1000)
		{
			yaxisyear2=Math.ceil(yaxisyear2/100)*100;
			var yaxisyearinterval2=Math.ceil(yaxisyear2/600)*100;
		}
		else if(yaxisyear2<=2000)
		{
			yaxisyear2=Math.ceil(yaxisyear2/200)*200;
			var yaxisyearinterval2=Math.ceil(yaxisyear2/1200)*200;
		}
		else
		{
			yaxisyear2=Math.ceil(yaxisyear2/10000)*10000;
			var yaxisyearinterval2=Math.ceil(yaxisyear2/6000)*1000;
		}
		yaxisyear1=Math.ceil(yaxisyear1/10)*10;
		var yaxisyearinterval1=Math.ceil(yaxisyear1/6);


		if(yaxis3month2<=1000)
		{
			yaxis3month2=Math.ceil(yaxis3month2/100)*100;
			var yaxis3monthinterval2=Math.ceil(yaxis3month2/600)*100;
		}
		else if(yaxis3month2<=2000)
		{
			yaxis3month2=Math.ceil(yaxis3month2/200)*200;
			var yaxis3monthinterval2=Math.ceil(yaxis3month2/1200)*200;
		}
		else
		{
			yaxis3month2=Math.ceil(yaxis3month2/10000)*10000;
			var yaxis3monthinterval2=Math.ceil(yaxis3month2/6000)*1000;
		}
		yaxis3month1=Math.ceil(yaxis3month1/10)*10;
		var yaxis3monthinterval1=Math.ceil(yaxis3month1/6);

		if(yaxismonth2<=1000)
		{
			yaxismonth2=Math.ceil(yaxismonth2/100)*100;
			var yaxismonthinterval2=Math.ceil(yaxismonth2/600)*100;
		}
		else if(yaxismonth2<=2000)
		{
			yaxismonth2=Math.ceil(yaxismonth2/200)*200;
			var yaxismonthinterval2=Math.ceil(yaxismonth2/1200)*200;
		}
		else
		{
			yaxismonth2=Math.ceil(yaxismonth2/10000)*10000;
			var yaxismonthinterval2=Math.ceil(yaxismonth2/6000)*1000;
		}
		yaxismonth1=Math.ceil(yaxismonth1/10)*10;
		var yaxismonthinterval1=Math.ceil(yaxismonth1/6);

		if(yaxisweek2<=1000)
		{
			yaxisweek2=Math.ceil(yaxisweek2/100)*100;
			var yaxisweekinterval2=Math.ceil(yaxisweek2/600)*100;
		}
		else if(yaxisweek2<=2000)
		{
			yaxisweek2=Math.ceil(yaxisweek2/200)*200;
			var yaxisweekinterval2=Math.ceil(yaxisweek2/1200)*200;
		}
		else
		{
			yaxisweek2=Math.ceil(yaxisweek2/10000)*10000;
			var yaxisweekinterval2=Math.ceil(yaxisweek2/6000)*1000;
		}
		yaxisweek1=Math.ceil(yaxisweek1/10)*10;
		var yaxisweekinterval1=Math.ceil(yaxisweek1/6);

		if(yaxisday2<=1000)
		{
			yaxisday2=Math.ceil(yaxisday2/100)*100;
			var yaxisdayinterval2=Math.ceil(yaxisday2/600)*100;
		}
		else if(yaxisday2<=2000)
		{
			yaxisday2=Math.ceil(yaxisday2/200)*200;
			var yaxisdayinterval2=Math.ceil(yaxisday2/1200)*200;
		}
		else
		{
			yaxisday2=Math.ceil(yaxisday2/10000)*10000;
			var yaxisdayinterval2=Math.ceil(yaxisday2/6000)*1000;
		}
		yaxisday1=Math.ceil(yaxisday1/10)*10;
		var yaxisdayinterval1=Math.ceil(yaxisday1/6);

		if(FreeTrialCheck)
		{
			var DataSET=[ {
					type: 'line',
					label: 'New Price',
					borderColor: '#88d',
					backgroundColor: '#88d',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: NewMade['months3'],
					yAxisID: 'y-axis-1',
				}, {
					type: 'line',
					label: 'Used Price',
					borderColor: '#444444',
					backgroundColor: '#444444',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: UsedMade['months3'],
					yAxisID: 'y-axis-1',
				}, {
					type: 'line',
					label: 'Sales Rank',
					borderColor: '#24A96B',
					backgroundColor: '#24A96B',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: SalesRankMade['months3'],
					yAxisID: 'y-axis-2',
				},{
					label: 'Amazon Price',
					borderColor: '#FFB532',
					backgroundColor: '#FFE8D2',
					steppedLine: true,
					fill: true,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: AmazonMade['months3'],
					yAxisID: 'y-axis-1',
				}];
		}
		else
		{
			var DataSET=[ {
					type: 'scatter',
					showLine: false,
					label: 'Buy Box',
					borderColor: '#ff00b4',
					backgroundColor: '#fff',
					steppedLine: true,
					fill: true,
					borderWidth:2,
					pointRadius:4,
					pointStyle: 'rectRot',
					hoverBorderWidth:2,
					pointHoverRadius: 6,
					data: BuyboxMade['months3'],
					yAxisID: 'y-axis-1',
				}
				,{
					type: 'scatter',
					showLine: false,
					label: 'New, 3rd Party FBA',
					borderColor: '#ff5722',
					backgroundColor: '#fff',
					steppedLine: true,
					fill: true,
					borderWidth:2,
					pointRadius:4,
					pointStyle: 'triangle',
					hoverBorderWidth:2,
					pointHoverRadius: 6,
					data: FbaMade['months3'],
					yAxisID: 'y-axis-1',
				},{
					type: 'line',
					label: 'New Price',
					borderColor: '#88d',
					backgroundColor: '#88d',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: NewMade['months3'],
					yAxisID: 'y-axis-1',
				}, {
					type: 'line',
					label: 'Used Price',
					borderColor: '#444444',
					backgroundColor: '#444444',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: UsedMade['months3'],
					yAxisID: 'y-axis-1',
				}, {
					type: 'line',
					label: 'Sales Rank',
					borderColor: '#24A96B',
					backgroundColor: '#24A96B',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: SalesRankMade['months3'],
					yAxisID: 'y-axis-2',
				},{
					label: 'Amazon Price',
					borderColor: '#FFB532',
					backgroundColor: '#FFE8D2',
					steppedLine: true,
					fill: true,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: AmazonMade['months3'],
					yAxisID: 'y-axis-1',
				}];
		}

		yaxis2minall=Math.ceil(yaxis2minall);
		yaxis2minyear=Math.ceil(yaxis2minyear);
		yaxis2min3month=Math.ceil(yaxis2min3month);
		yaxis2minmonth=Math.ceil(yaxis2minmonth);
		yaxis2minweek=Math.ceil(yaxis2minweek);
		yaxis2minday=Math.ceil(yaxis2minday);

		yaxis1minall=Math.ceil(yaxis1minall);
		yaxis1minyear=Math.ceil(yaxis1minyear);
		yaxis1min3month=Math.ceil(yaxis1min3month);
		yaxis1minmonth=Math.ceil(yaxis1minmonth);
		yaxis1minweek=Math.ceil(yaxis1minweek);
		yaxis1minday=Math.ceil(yaxis1minday);
		var LabelSalesRank=0;
		var LabelAmazon=0;
		var LabelNew=0;
		var LabelUsed=0;
		var LabelFBA=0;
		var LabelBuybox=0;
		var config = {
			type: 'line',
			data: {
				datasets: DataSET
			},
			options: {
			 	plugins: {
          			crosshair: {
            				sync: {
              					enabled: false
            					}
          					}
       				 },
       			legend: {
            			display: true,
            			position: 'right',
            			labels: {
                			usePointStyle: true,
                			boxWidth: 8
            			}
        			},
				maintainAspectRatio: false,
        		responsive: true,
        		animation: {
    						onComplete: doneToImage
  						},
				tooltips: {
          mode: "index",
          intersect: false,
          position: 'average',
          callbacks: {
            title: function(a, d) {
              return a[0].xLabel;
            },
            label: function(i, d) {
              	if(d.datasets[i.datasetIndex].label=="Sales Rank")
              	{
              		LabelAmazon=0;
					LabelNew=0;
					LabelUsed=0;
					LabelFBA=0;
					LabelBuybox=0;
              		if(!LabelSalesRank)
              		{
              			LabelSalesRank=1;
              			return d.datasets[i.datasetIndex].label + ": " + numberWithCommas(i.yLabel)
              		}
              		else
              		{
              			return "";
              		}


              	}
              	else
              	{
              		if(d.datasets[i.datasetIndex].label=="Amazon Price" && !LabelAmazon)
              		{
              			LabelAmazon=1;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="New Price" && !LabelNew)
					{
						LabelAmazon=0;
						LabelNew=1;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="Used Price" && !LabelUsed)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=1;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="New, 3rd Party FBA" && !LabelFBA)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=1;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="Buy Box" && !LabelBuybox)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=1;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else
					{
						return "";
					}

                }

            }
          }
        },
        hover: {
            mode: 'index',
            intersect: false,
            hoverRadius: 4
        },
				scales: {
					xAxes: [{
						type: 'time',
						time: {
                    		unit: 'day',
                    		stepSize: 7,
                    		min: axismin3month,
                    		max: axismax3month,
                			},
						distribution: 'series',
						display: true,

						scaleLabel: {
							display: true,
						},
						ticks: {
							source: 'data',
							autoSkip: true,
							maxTicksLimit: 8,
							maxRotation: 0,
                    		minRotation: 0,
						},
						
						gridLines: {
                display:false
            }
					}],
					yAxes: [{
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'left',
							id: 'y-axis-1',
							ticks: {
                    			callback: function(label, index, labels)
                    			{
                        			return CurrencySign+label;
                    			},
                    			min: 0,
                    			max: yaxis3month1,
                    			stepSize: yaxis3monthinterval1
                			},
						}, {
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'right',
							id: 'y-axis-2',
							ticks: {
                    			callback: function(label, index, labels)
                    			{
                        			return "#"+numberWithCommas(label);
                    			},
                    			min: 0,
                    			max: yaxis3month2,
                    			stepSize: yaxis3monthinterval2
                			},

							// grid line settings
							gridLines: {
								drawOnChartArea: false, // only want the grid lines for one axis to show up
							},
						}],
				}
			}
		};

		var ctx = $('#customGraphCanvas');
		myLineChart = new Chart(ctx, config);
		$("#CustomGraphTable").show();
		$(".loaderOuter").remove();
			$(".legendRange").click(function()
			{
				$(".legendRange").removeClass("active");
				$(this).addClass("active");
				if($(this).attr('id')=="todayGraph")
				{
					myLineChart.destroy();
					var config = {
			type: 'line',
			data: {
				datasets: [ {
					label: 'New Price',
					borderColor: '#88d',
					backgroundColor: '#88d',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: NewMade['today'],
					yAxisID: 'y-axis-1',
				}, {
					label: 'Used Price',
					borderColor: '#444444',
					backgroundColor: '#444444',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: UsedMade['today'],
					yAxisID: 'y-axis-1',
				}, {
					label: 'Sales Rank',
					borderColor: '#24A96B',
					backgroundColor: '#24A96B',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: SalesRankMade['today'],
					yAxisID: 'y-axis-2',
				},{
					type: 'scatter',
					showLine: false,
					label: 'Buy Box',
					borderColor: '#ff00b4',
					backgroundColor: '#fff',
					steppedLine: true,
					fill: true,
					borderWidth:2,
					pointRadius:4,
					pointStyle: 'rectRot',
					hoverBorderWidth:2,
					pointHoverRadius: 6,
					data: BuyboxMade['today'],
					yAxisID: 'y-axis-1',
				}
				,{
					type: 'scatter',
					showLine: false,
					label: 'New, 3rd Party FBA',
					borderColor: '#ff5722',
					backgroundColor: '#fff',
					steppedLine: true,
					fill: true,
					borderWidth:2,
					pointRadius:4,
					pointStyle: 'triangle',
					hoverBorderWidth:2,
					pointHoverRadius: 6,
					data: FbaMade['today'],
					yAxisID: 'y-axis-1',
				},{
					label: 'Amazon Price',
					borderColor: '#FFB532',
					backgroundColor: '#FFE8D2',
					steppedLine: true,
					fill: true,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: AmazonMade['today'],
					yAxisID: 'y-axis-1',
				}]
			},
			options: {
			 	plugins: {
          			crosshair: {
            				sync: {
              					enabled: false
            					}
          					}
       				 },
       			legend: {
            			display: true,
            			position: 'right',
            			labels: {
                			usePointStyle: true,
                			boxWidth: 8
            			}
        			},
				maintainAspectRatio: false,
        		responsive: true,
				tooltips: {
          mode: "index",
          intersect: false,
          position: 'average',
          callbacks: {
            title: function(a, d) {
              return a[0].xLabel;
            },
            label: function(i, d) {
              	if(d.datasets[i.datasetIndex].label=="Sales Rank")
              	{
              		LabelAmazon=0;
					LabelNew=0;
					LabelUsed=0;
					LabelFBA=0;
					LabelBuybox=0;
              		if(!LabelSalesRank)
              		{
              			LabelSalesRank=1;
              			return d.datasets[i.datasetIndex].label + ": " + numberWithCommas(i.yLabel)
              		}
              		else
              		{
              			return "";
              		}


              	}
              	else
              	{
              		if(d.datasets[i.datasetIndex].label=="Amazon Price" && !LabelAmazon)
              		{
              			LabelAmazon=1;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="New Price" && !LabelNew)
					{
						LabelAmazon=0;
						LabelNew=1;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="Used Price" && !LabelUsed)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=1;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="New, 3rd Party FBA" && !LabelFBA)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=1;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="Buy Box" && !LabelBuybox)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=1;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else
					{
						return "";
					}

                }

            }
          }
        },
        hover: {
            mode: 'index',
            intersect: false,
            hoverRadius: 1
        },
				scales: {
					xAxes: [{
						type: 'time',
						time: {
                    		unit: 'minute'
                			},
						distribution: 'series',
						display: true,

						scaleLabel: {
							display: true,
						},
						ticks: {
							source: 'data',
							autoSkip: true,
							maxTicksLimit: 10,
							maxRotation: 0,
                    		minRotation: 0
						},
						min: new Date(axisminday),
                    	max: new Date(axismaxday),
                    	stepSize: 7,
						gridLines: {
                display:false
            }
					}],
					yAxes: [{
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'left',
							id: 'y-axis-1',
							ticks: {
                    			callback: function(label, index, labels)
                    			{
                        			return CurrencySign+label;
                    			},
                    			min: 0,
                    			max: yaxisday1,
                    			stepSize: yaxisdayinterval1
                			},
						}, {
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'right',
							id: 'y-axis-2',
							ticks: {
                    			callback: function(label, index, labels)
                    			{
                        			return "#"+numberWithCommas(label);
                    			},
                    			min: 0,
                    			max: yaxisday2,
                    			stepSize: yaxisdayinterval2
                			},

							// grid line settings
							gridLines: {
								drawOnChartArea: false, // only want the grid lines for one axis to show up
							},
						}],
				}
			}
		};
		myLineChart = new Chart(ctx, config);			

				}
				else if($(this).attr('id')=="weekGraph")
				{
					myLineChart.destroy();
					var config = {
			type: 'line',
			data: {
				datasets: [ {
					label: 'New Price',
					borderColor: '#88d',
					backgroundColor: '#88d',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: NewMade['week'],
					yAxisID: 'y-axis-1',
				}, {
					label: 'Used Price',
					borderColor: '#444444',
					backgroundColor: '#444444',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: UsedMade['week'],
					yAxisID: 'y-axis-1',
				}, {
					label: 'Sales Rank',
					borderColor: '#24A96B',
					backgroundColor: '#24A96B',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: SalesRankMade['week'],
					yAxisID: 'y-axis-2',
				},{
					type: 'scatter',
					showLine: false,
					label: 'Buy Box',
					borderColor: '#ff00b4',
					backgroundColor: '#fff',
					steppedLine: true,
					fill: true,
					borderWidth:2,
					pointRadius:4,
					pointStyle: 'rectRot',
					hoverBorderWidth:2,
					pointHoverRadius: 6,
					data: BuyboxMade['week'],
					yAxisID: 'y-axis-1',
				}
				,{
					type: 'scatter',
					showLine: false,
					label: 'New, 3rd Party FBA',
					borderColor: '#ff5722',
					backgroundColor: '#fff',
					steppedLine: true,
					fill: true,
					borderWidth:2,
					pointRadius:4,
					pointStyle: 'triangle',
					hoverBorderWidth:2,
					pointHoverRadius: 6,
					data: FbaMade['week'],
					yAxisID: 'y-axis-1',
				},{
					label: 'Amazon Price',
					borderColor: '#FFB532',
					backgroundColor: '#FFE8D2',
					steppedLine: true,
					fill: true,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: AmazonMade['week'],
					yAxisID: 'y-axis-1',
				}]
			},
			options: {
			 	plugins: {
          			crosshair: {
            				sync: {
              					enabled: false
            					}
          					}
       				 },
       			legend: {
            			display: true,
            			position: 'right',
            			labels: {
                			usePointStyle: true,
                			boxWidth: 8
            			}
        			},
				maintainAspectRatio: false,
        		responsive: true,
				tooltips: {
          mode: "index",
          intersect: false,
          position: 'average',
          callbacks: {
            title: function(a, d) {
              return a[0].xLabel;
            },
            label: function(i, d) {
              	if(d.datasets[i.datasetIndex].label=="Sales Rank")
              	{
              		LabelAmazon=0;
					LabelNew=0;
					LabelUsed=0;
					LabelFBA=0;
					LabelBuybox=0;
              		if(!LabelSalesRank)
              		{
              			LabelSalesRank=1;
              			return d.datasets[i.datasetIndex].label + ": " + numberWithCommas(i.yLabel)
              		}
              		else
              		{
              			return "";
              		}


              	}
              	else
              	{
              		if(d.datasets[i.datasetIndex].label=="Amazon Price" && !LabelAmazon)
              		{
              			LabelAmazon=1;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="New Price" && !LabelNew)
					{
						LabelAmazon=0;
						LabelNew=1;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="Used Price" && !LabelUsed)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=1;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="New, 3rd Party FBA" && !LabelFBA)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=1;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="Buy Box" && !LabelBuybox)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=1;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else
					{
						return "";
					}

                }

            }
          }
        },
        hover: {
            mode: 'index',
            intersect: false,
            hoverRadius: 1
        },
				scales: {
					xAxes: [{
						type: 'time',
						time: {
                    		unit: 'day'
                			},
						distribution: 'series',
						display: true,

						scaleLabel: {
							display: true,
						},
						ticks: {
							source: 'data',
							autoSkip: true,
							maxTicksLimit: 10,
							maxRotation: 0,
                    		minRotation: 0
						},
						min: new Date(axisminweek),
                    	max: new Date(axismaxweek),
                    	stepSize: 7,
						gridLines: {
                display:false
            }
					}],
					yAxes: [{
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'left',
							id: 'y-axis-1',
							ticks: {
                    			callback: function(label, index, labels)
                    			{
                        			return CurrencySign+label;
                    			},
                    			min: 0,
                    			max: yaxisweek1,
                    			stepSize: yaxisweekinterval1
                			},
						}, {
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'right',
							id: 'y-axis-2',
							ticks: {
                    			callback: function(label, index, labels)
                    			{
                        			return "#"+numberWithCommas(label);
                    			},
                    			min: 0,
                    			max: yaxisweek2,
                    			stepSize: yaxisweekinterval2
                			},

							// grid line settings
							gridLines: {
								drawOnChartArea: false, // only want the grid lines for one axis to show up
							},
						}],
				}
			}
		};
		myLineChart = new Chart(ctx, config);
	
				}
				else if($(this).attr('id')=="monthGraph")
				{
				myLineChart.destroy();
					var config = {
			type: 'line',
			data: {
				datasets: [ {
					label: 'New Price',
					borderColor: '#88d',
					backgroundColor: '#88d',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: NewMade['months'],
					yAxisID: 'y-axis-1',
				}, {
					label: 'Used Price',
					borderColor: '#444444',
					backgroundColor: '#444444',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: UsedMade['months'],
					yAxisID: 'y-axis-1',
				}, {
					label: 'Sales Rank',
					borderColor: '#24A96B',
					backgroundColor: '#24A96B',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: SalesRankMade['months'],
					yAxisID: 'y-axis-2',
				},{
					type: 'scatter',
					showLine: false,
					label: 'Buy Box',
					borderColor: '#ff00b4',
					backgroundColor: '#fff',
					steppedLine: true,
					fill: true,
					borderWidth:2,
					pointRadius:4,
					pointStyle: 'rectRot',
					hoverBorderWidth:2,
					pointHoverRadius: 6,
					data: BuyboxMade['months'],
					yAxisID: 'y-axis-1',
				}
				,{
					type: 'scatter',
					showLine: false,
					label: 'New, 3rd Party FBA',
					borderColor: '#ff5722',
					backgroundColor: '#fff',
					steppedLine: true,
					fill: true,
					borderWidth:2,
					pointRadius:4,
					pointStyle: 'triangle',
					hoverBorderWidth:2,
					pointHoverRadius: 6,
					data: FbaMade['months'],
					yAxisID: 'y-axis-1',
				},{
					label: 'Amazon Price',
					borderColor: '#FFB532',
					backgroundColor: '#FFE8D2',
					steppedLine: true,
					fill: true,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: AmazonMade['months'],
					yAxisID: 'y-axis-1',
				}]
			},
			options: {
			 	plugins: {
          			crosshair: {
            				sync: {
              					enabled: false
            					}
          					}
       				 },
       			legend: {
            			display: true,
            			position: 'right',
            			labels: {
                			usePointStyle: true,
                			boxWidth: 8
            			}
        			},
				maintainAspectRatio: false,
        		responsive: true,
				tooltips: {
          mode: "index",
          intersect: false,
          position: 'average',
          callbacks: {
            title: function(a, d) {
              return a[0].xLabel;
            },
            label: function(i, d) {
              	if(d.datasets[i.datasetIndex].label=="Sales Rank")
              	{
              		LabelAmazon=0;
					LabelNew=0;
					LabelUsed=0;
					LabelFBA=0;
					LabelBuybox=0;
              		if(!LabelSalesRank)
              		{
              			LabelSalesRank=1;
              			return d.datasets[i.datasetIndex].label + ": " + numberWithCommas(i.yLabel)
              		}
              		else
              		{
              			return "";
              		}


              	}
              	else
              	{
              		if(d.datasets[i.datasetIndex].label=="Amazon Price" && !LabelAmazon)
              		{
              			LabelAmazon=1;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="New Price" && !LabelNew)
					{
						LabelAmazon=0;
						LabelNew=1;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="Used Price" && !LabelUsed)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=1;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="New, 3rd Party FBA" && !LabelFBA)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=1;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="Buy Box" && !LabelBuybox)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=1;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else
					{
						return "";
					}

                }

            }
          }
        },
        hover: {
            mode: 'index',
            intersect: false,
            hoverRadius: 1
        },
				scales: {
					xAxes: [{
						type: 'time',
						time: {
                    		unit: 'day'
                			},
						distribution: 'series',
						display: true,

						scaleLabel: {
							display: true,
						},
						ticks: {
							source: 'data',
							autoSkip: true,
							maxTicksLimit: 10,
							maxRotation: 0,
                    		minRotation: 0
						},
						min: new Date(axisminmonth),
                    	max: new Date(axismaxmonth),
                    	stepSize: 7,
						gridLines: {
                display:false
            }
					}],
					yAxes: [{
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'left',
							id: 'y-axis-1',
							ticks: {
                    			callback: function(label, index, labels)
                    			{
                        			return CurrencySign+label;
                    			},
                    			min: 0,
                    			max: yaxismonth1,
                    			stepSize: yaxismonthinterval2
                			},
						}, {
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'right',
							id: 'y-axis-2',
							ticks: {
                    			callback: function(label, index, labels)
                    			{
                        			return "#"+numberWithCommas(label);
                    			},
                    			min: 0,
                    			max: yaxismonth2,
                    			stepSize: yaxismonthinterval2
                			},

							// grid line settings
							gridLines: {
								drawOnChartArea: false, // only want the grid lines for one axis to show up
							},
						}],
				}
			}
		};
		myLineChart = new Chart(ctx, config);
		}
				else if($(this).attr('id')=="3monthGraph")
				{
				myLineChart.destroy();
					var config = {
			type: 'line',
			data: {
				datasets: [ {
					label: 'New Price',
					borderColor: '#88d',
					backgroundColor: '#88d',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: NewMade['months3'],
					yAxisID: 'y-axis-1',
				}, {
					label: 'Used Price',
					borderColor: '#444444',
					backgroundColor: '#444444',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: UsedMade['months3'],
					yAxisID: 'y-axis-1',
				}, {
					label: 'Sales Rank',
					borderColor: '#24A96B',
					backgroundColor: '#24A96B',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: SalesRankMade['months3'],
					yAxisID: 'y-axis-2',
				},{
					type: 'scatter',
					showLine: false,
					label: 'Buy Box',
					borderColor: '#ff00b4',
					backgroundColor: '#fff',
					steppedLine: true,
					fill: true,
					borderWidth:2,
					pointRadius:4,
					pointStyle: 'rectRot',
					hoverBorderWidth:2,
					pointHoverRadius: 6,
					data: BuyboxMade['months3'],
					yAxisID: 'y-axis-1',
				}
				,{
					type: 'scatter',
					showLine: false,
					label: 'New, 3rd Party FBA',
					borderColor: '#ff5722',
					backgroundColor: '#fff',
					steppedLine: true,
					fill: true,
					borderWidth:2,
					pointRadius:4,
					pointStyle: 'triangle',
					hoverBorderWidth:2,
					pointHoverRadius: 6,
					data: FbaMade['months3'],
					yAxisID: 'y-axis-1',
				},{
					label: 'Amazon Price',
					borderColor: '#FFB532',
					backgroundColor: '#FFE8D2',
					steppedLine: true,
					fill: true,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: AmazonMade['months3'],
					yAxisID: 'y-axis-1',
				}]
			},
			options: {
			 	plugins: {
          			crosshair: {
            				sync: {
              					enabled: false
            					}
          					}
       				 },
       			legend: {
            			display: true,
            			position: 'right',
            			labels: {
                			usePointStyle: true,
                			boxWidth: 8
            			}
        			},
				maintainAspectRatio: false,
        		responsive: true,
				tooltips: {
          mode: "index",
          intersect: false,
          position: 'average',
          callbacks: {
            title: function(a, d) {
              return a[0].xLabel;
            },
            label: function(i, d) {
              	if(d.datasets[i.datasetIndex].label=="Sales Rank")
              	{
              		LabelAmazon=0;
					LabelNew=0;
					LabelUsed=0;
					LabelFBA=0;
					LabelBuybox=0;
              		if(!LabelSalesRank)
              		{
              			LabelSalesRank=1;
              			return d.datasets[i.datasetIndex].label + ": " + numberWithCommas(i.yLabel)
              		}
              		else
              		{
              			return "";
              		}


              	}
              	else
              	{
              		if(d.datasets[i.datasetIndex].label=="Amazon Price" && !LabelAmazon)
              		{
              			LabelAmazon=1;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="New Price" && !LabelNew)
					{
						LabelAmazon=0;
						LabelNew=1;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="Used Price" && !LabelUsed)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=1;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="New, 3rd Party FBA" && !LabelFBA)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=1;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="Buy Box" && !LabelBuybox)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=1;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else
					{
						return "";
					}

                }

            }
          }
        },
        hover: {
            mode: 'index',
            intersect: false,
            hoverRadius: 1
        },
				scales: {
					xAxes: [{
						type: 'time',
						time: {
                    		unit: 'day'
                			},
						distribution: 'series',
						display: true,

						scaleLabel: {
							display: true,
						},
						ticks: {
							source: 'data',
							autoSkip: true,
							maxTicksLimit: 10,
							maxRotation: 0,
                    		minRotation: 0
						},
						min: new Date(axismin3month),
                    	max: new Date(axismax3month),
                    	stepSize: 7,
						gridLines: {
                display:false
            }
					}],
					yAxes: [{
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'left',
							id: 'y-axis-1',
							ticks: {
                    			callback: function(label, index, labels)
                    			{
                        			return CurrencySign+label;
                    			},
                    			min: 0,
                    			max: yaxis3month1,
                    			stepSize: yaxis3monthinterval1
                			},
						}, {
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'right',
							id: 'y-axis-2',
							ticks: {
                    			callback: function(label, index, labels)
                    			{
                        			return "#"+numberWithCommas(label);
                    			},
                    			min: 0,
                    			max: yaxis3month2,
                    			stepSize: yaxis3monthinterval2
                			},

							// grid line settings
							gridLines: {
								drawOnChartArea: false, // only want the grid lines for one axis to show up
							},
						}],
				}
			}
		};
		myLineChart = new Chart(ctx, config);
		}
				else if($(this).attr('id')=="yearGraph")
				{
				myLineChart.destroy();
					var config = {
			type: 'line',
			data: {
				datasets: [ {
					label: 'New Price',
					borderColor: '#88d',
					backgroundColor: '#88d',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: NewMade['year'],
					yAxisID: 'y-axis-1',
				}, {
					label: 'Used Price',
					borderColor: '#444444',
					backgroundColor: '#444444',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: UsedMade['year'],
					yAxisID: 'y-axis-1',
				}, {
					label: 'Sales Rank',
					borderColor: '#24A96B',
					backgroundColor: '#24A96B',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: SalesRankMade['year'],
					yAxisID: 'y-axis-2',
				},{
					type: 'scatter',
					showLine: false,
					label: 'Buy Box',
					borderColor: '#ff00b4',
					backgroundColor: '#fff',
					steppedLine: true,
					fill: true,
					borderWidth:2,
					pointRadius:4,
					pointStyle: 'rectRot',
					hoverBorderWidth:2,
					pointHoverRadius: 6,
					data: BuyboxMade['year'],
					yAxisID: 'y-axis-1',
				}
				,{
					type: 'scatter',
					showLine: false,
					label: 'New, 3rd Party FBA',
					borderColor: '#ff5722',
					backgroundColor: '#fff',
					steppedLine: true,
					fill: true,
					borderWidth:2,
					pointRadius:4,
					pointStyle: 'triangle',
					hoverBorderWidth:2,
					pointHoverRadius: 6,
					data: FbaMade['year'],
					yAxisID: 'y-axis-1',
				},{
					label: 'Amazon Price',
					borderColor: '#FFB532',
					backgroundColor: '#FFE8D2',
					steppedLine: true,
					fill: true,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: AmazonMade['year'],
					yAxisID: 'y-axis-1',
				}]
			},
			options: {
			 	plugins: {
          			crosshair: {
            				sync: {
              					enabled: false
            					}
          					}
       				 },
       			legend: {
            			display: true,
            			position: 'right',
            			labels: {
                			usePointStyle: true,
                			boxWidth: 8
            			}
        			},
				maintainAspectRatio: false,
        		responsive: true,
				tooltips: {
         	mode: "x",
          intersect: false,
          position: 'average',
          callbacks: {
            title: function(a, d) {
              return a[0].xLabel;
            },
            label: function(i, d) {
              	if(d.datasets[i.datasetIndex].label=="Sales Rank")
              	{
              		LabelAmazon=0;
					LabelNew=0;
					LabelUsed=0;
					LabelFBA=0;
					LabelBuybox=0;
              		if(!LabelSalesRank)
              		{
              			LabelSalesRank=1;
              			return d.datasets[i.datasetIndex].label + ": " + numberWithCommas(i.yLabel)
              		}
              		else
              		{
              			return "";
              		}


              	}
              	else
              	{
              		if(d.datasets[i.datasetIndex].label=="Amazon Price" && !LabelAmazon)
              		{
              			LabelAmazon=1;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="New Price" && !LabelNew)
					{
						LabelAmazon=0;
						LabelNew=1;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="Used Price" && !LabelUsed)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=1;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="New, 3rd Party FBA" && !LabelFBA)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=1;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="Buy Box" && !LabelBuybox)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=1;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else
					{
						return "";
					}

                }

            }
          }
        },
        hover: {
            mode: 'index',
            intersect: false,
            hoverRadius: 1
        },
				scales: {
					xAxes: [{
						type: 'time',
						time: {
                    		unit: 'day'
                			},
						distribution: 'series',
						display: true,

						scaleLabel: {
							display: true,
						},
						ticks: {
							source: 'data',
							autoSkip: true,
							maxTicksLimit: 10,
							maxRotation: 0,
                    		minRotation: 0
						},
						min: new Date(axisminyear),
                    	max: new Date(axismaxyear),
                    	stepSize: 7,
						gridLines: {
                display:false
            }
					}],
					yAxes: [{
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'left',
							id: 'y-axis-1',
							ticks: {
                    			callback: function(label, index, labels)
                    			{
                        			return CurrencySign+label;
                    			},
                    			min: 0,
                    			max: yaxisyear1,
                    			stepSize: yaxisyearinterval1
                			},
						}, {
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'right',
							id: 'y-axis-2',
							ticks: {
                    			callback: function(label, index, labels)
                    			{
                        			return "#"+numberWithCommas(label);
                    			},
                    			max: yaxisyear2
                			},

							// grid line settings
							gridLines: {
								drawOnChartArea: false, // only want the grid lines for one axis to show up
							},
						}],
				}
			}
		};
		myLineChart = new Chart(ctx, config);
		}
				else if($(this).attr('id')=="AllGraph")
				{
				myLineChart.destroy();
					var config = {
			type: 'line',
			data: {
				datasets: [ {
					label: 'New Price',
					borderColor: '#88d',
					backgroundColor: '#88d',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: NewMade['all'],
					yAxisID: 'y-axis-1',
				}, {
					label: 'Used Price',
					borderColor: '#444444',
					backgroundColor: '#444444',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: UsedMade['all'],
					yAxisID: 'y-axis-1',
				}, {
					label: 'Sales Rank',
					borderColor: '#24A96B',
					backgroundColor: '#24A96B',
					steppedLine: true,
					fill: false,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: SalesRankMade['all'],
					yAxisID: 'y-axis-2',
				},{
					type: 'scatter',
					showLine: false,
					label: 'Buy Box',
					borderColor: '#ff00b4',
					backgroundColor: '#fff',
					steppedLine: true,
					fill: true,
					borderWidth:2,
					pointRadius:4,
					pointStyle: 'rectRot',
					hoverBorderWidth:2,
					pointHoverRadius: 6,
					data: BuyboxMade['all'],
					yAxisID: 'y-axis-1',
				}
				,{
					type: 'scatter',
					showLine: false,
					label: 'New, 3rd Party FBA',
					borderColor: '#ff5722',
					backgroundColor: '#fff',
					steppedLine: true,
					fill: true,
					borderWidth:2,
					pointRadius:4,
					pointStyle: 'triangle',
					hoverBorderWidth:2,
					pointHoverRadius: 6,
					data: FbaMade['all'],
					yAxisID: 'y-axis-1',
				},{
					label: 'Amazon Price',
					borderColor: '#FFB532',
					backgroundColor: '#FFE8D2',
					steppedLine: true,
					fill: true,
					borderWidth:1,
					pointRadius:0,
					pointHoverRadius: 0,
					data: AmazonMade['all'],
					yAxisID: 'y-axis-1',
				}]
			},
			options: {
			 	plugins: {
          			crosshair: {
            				sync: {
              					enabled: false
            					}
          					}
       				 },
       			legend: {
            			display: true,
            			position: 'right',
            			labels: {
                			usePointStyle: true,
                			boxWidth: 8
            			}
        			},
				maintainAspectRatio: false,
        		responsive: true,
				tooltips: {
          mode: "x",
          intersect: false,
          position: 'average',
          callbacks: {
            title: function(a, d) {
              return a[0].xLabel;
            },
            label: function(i, d) {
              	if(d.datasets[i.datasetIndex].label=="Sales Rank")
              	{
              		LabelAmazon=0;
					LabelNew=0;
					LabelUsed=0;
					LabelFBA=0;
					LabelBuybox=0;
              		if(!LabelSalesRank)
              		{
              			LabelSalesRank=1;
              			return d.datasets[i.datasetIndex].label + ": " + numberWithCommas(i.yLabel)
              		}
              		else
              		{
              			return "";
              		}


              	}
              	else
              	{
              		if(d.datasets[i.datasetIndex].label=="Amazon Price" && !LabelAmazon)
              		{
              			LabelAmazon=1;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="New Price" && !LabelNew)
					{
						LabelAmazon=0;
						LabelNew=1;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="Used Price" && !LabelUsed)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=1;
						LabelFBA=0;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="New, 3rd Party FBA" && !LabelFBA)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=1;
						LabelBuybox=0;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else if(d.datasets[i.datasetIndex].label=="Buy Box" && !LabelBuybox)
					{
						LabelAmazon=0;
						LabelNew=0;
						LabelUsed=0;
						LabelFBA=0;
						LabelBuybox=1;
						LabelSalesRank=0;
						return d.datasets[i.datasetIndex].label + ": " + CurrencySign+""+i.yLabel.toFixed(2)
					}
					else
					{
						return "";
					}

                }

            }
          }
        },
        hover: {
            mode: 'index',
            intersect: false,
            hoverRadius: 1
        },
				scales: {
					xAxes: [{
						type: 'time',
						time: {
                    		unit: 'day'
                			},
						distribution: 'series',
						display: true,

						scaleLabel: {
							display: true,
						},
						ticks: {
							source: 'data',
							autoSkip: true,
							maxTicksLimit: 10,
							maxRotation: 0,
                    		minRotation: 0
						},
						min: new Date(axisminall),
                    	max: new Date(axismaxall),
                    	stepSize: 7,
						gridLines: {
                display:false
            }
					}],
					yAxes: [{
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'left',
							id: 'y-axis-1',
							ticks: {
                    			callback: function(label, index, labels)
                    			{
                        			return CurrencySign+label;
                    			},
                    			min: 0,
                    			max: yaxisall1,
                    			stepSize: yaxisallinterval1
                			},
						}, {
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'right',
							id: 'y-axis-2',
							ticks: {
                    			callback: function(label, index, labels)
                    			{
                        			return "#"+numberWithCommas(label);
                    			},
                    			min: 0,
                    			max: yaxisall2,
                    			stepSize: yaxisallinterval2
                    			
                			},

							// grid line settings
							gridLines: {
								drawOnChartArea: false, // only want the grid lines for one axis to show up
							},
						}],
				}
			}
		};
		myLineChart = new Chart(ctx, config);
		}
			});
			})
  }
  })*/
}
function numberWithCommas(nStr) {
  nStr += '';
 var x = nStr.split('.');
 var x1 = x[0];
 var x2 = x.length > 1 ? '.' + x[1] : '';
 var rgx = /(\d+)(\d{3})/;
 while (rgx.test(x1)) {
  x1 = x1.replace(rgx, '$1' + ',' + '$2');
 }
 return x1 + x2;
}