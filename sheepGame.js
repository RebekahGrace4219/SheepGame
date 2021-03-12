//Variables
var disasterVar=0;
var numRun=1;
var disasterStart=[0,1,2,3,4,5,6];
var disasterFinish=[];
var randNum=0;
var organism1=[];
var organism2=[];
var organism3=[];
var organism4=[];
var organism5=[];
var organism6=[];
var organism7=[];
var organism8=[];
var organism9=[];
var organism10=[];
var organism11=[];
var organism12=[];
var organism13=[];
var organism14=[];
var organism15=[];
var organism16=[];
var organism17=[];
var organism18=[];
var organism19=[];
var organism20=[];
var organism21=[];
var organism22=[];
var organism23=[];
var organism24=[];
var organism25=[];
var organism26=[];
var organism27=[];
var organism28=[];
var organism29=[];
var organism30=[];
var organism31=[];
var organism32=[];
var organism33=[];
var organism34=[];
var organism35=[];
var organism36=[];
var organism37=[];
var organism38=[];
var organism39=[];
var organism40=[];
var organism41=[];
var organism42=[];
var organism43=[];
var organism44=[];
var organism45=[];
var organism46=[];
var organism47=[];
var organism48=[];
var organism49=[];
var organism50=[];
var organism51=[];
var organism52=[];
var organism53=[];
var organism54=[];
var organism55=[];
var organism56=[];
var organism57=[];
var organism58=[];
var organism59=[];
var organism60=[];
var organisms=[];
var list1=[];
var list2=[];
var list3=[];
var temporary=0;
var positionNew=0;
var displayed=0;
var disasterCount="";
var disasterScore=0;
var disasterScoreResult="";
var screenThing="";

//Create the First Set of Organisms
  organismCreation(organism1);
  organismCreation(organism2);
  organismCreation(organism3);
  organismCreation(organism4);
  organismCreation(organism5);
  organismCreation(organism6);
  organismCreation(organism7);
  organismCreation(organism8);
  organismCreation(organism9);
  organismCreation(organism10);
  organismCreation(organism11);
  organismCreation(organism12);
  organismCreation(organism13);
  organismCreation(organism14);
  organismCreation(organism15);
  organismCreation(organism16);
  organismCreation(organism17);
  organismCreation(organism18); 
  organismCreation(organism19);
  organismCreation(organism20);
  
organisms=[organism1, organism2, organism3,organism4, organism5, organism6, organism7, organism8, organism9, organism10];
organisms.push(organism11, organism12, organism13, organism14, organism15, organism16, organism17, organism18, organism19, organism20);
organisms.push(organism21, organism22, organism23, organism24, organism25, organism26, organism27, organism28, organism29, organism30);
organisms.push(organism31, organism32, organism33, organism34, organism35, organism36, organism37, organism38, organism39, organism40);
organisms.push(organism41, organism42, organism43, organism44, organism45, organism46, organism47, organism48, organism49, organism50);
organisms.push(organism51, organism52, organism53, organism54, organism55, organism56, organism57, organism58, organism59, organism60);


//flood=9.88
//intraspecificCompetition= 12.5733
//predators= 8.22
//invasivespecies=12.7
//heatWave=9.08
//blizzard=3.82
//plague= 9.89

//Actually Process
listRandomizer(disasterStart, disasterFinish);

//Event Buttons
onEvent("pinkButton","click",function(){
  pink();
});
onEvent("blueButton","click",function(){
  blue();
});
onEvent("greenButton","click",function(){
  green();
});
onEvent("shaggyButton","click",function(){
  shaggy();
});
onEvent("smoothButton","click",function(){
  smooth();
});
onEvent("longTeethButton","click",function(){
  longTeeth();
});
onEvent("shortTeethButton","click",function(){
  shortTeeth();
});
onEvent("randomButton","click",function(){
  random();
});
onEvent("noChangeButton","click",function(){
  noChange();
});
onEvent("directionButton","click",function(){
  setScreen("directionsScreen");
});
onEvent("backButton","click", function(){
  setScreen("homeScreen");
});
onEvent("nextButton1","click",function(){
  setScreen("directionsScreen2");
});
onEvent("nextButton2","click",function(){
  setScreen("directionsScreen3");
});
onEvent("nextButton3","click",function(){
  setScreen("directionsScreen4");
});
onEvent("playButton","click",function(){
  setScreen("playScreenLevel1");
  displaySheep();
  disasterPick(2);
  //console.log(screenThing);
  setText("text_area1","Next disaster: "+disasterScoreResult);
});
onEvent("continueButton1","click",function(){
  continuationButton();
});
onEvent("continueButton2","click", function(){
  continuationButton();
});
onEvent("continueButton3","click",function(){
  continuationButton();
});
onEvent("continueButton4","click", function(){
  continuationButton();
});
onEvent("continueButton5","click",function(){
  continuationButton();
});
onEvent("continueButton6","click", function(){
  continuationButton();
});
onEvent("continueButton7","click",function(){
  continuationButton();
});
onEvent("screenButton","click", function(){
  setScreen(screenThing);
});

//General Functions
function listRandomizer(listStart, listFinish){//This function takes the first list and randomizes it into the second{
  for(var i=0;i<(listStart.length);i++)
  {
  var flag = false;
  randNum=randomNumber(0,(listStart.length-1));
  for(var j=0;j<(listFinish.length);j++)
  {
    if(listFinish[j]==listStart[randNum])
    {
      flag=true;
    }
  }
  
  if(flag==false)
  {
  appendItem(listFinish,listStart[randNum]);
  }
  else
  {
    i--;
  }
  }
}
function organismCreation(list){//This function takes an open list and creates an organism
  
  for(var i=0; i<2;i++)
  {
    appendItem(list,randomNumber(0,2));
  }
  for(i=0; i<6;i++)
  {
    appendItem(list,randomNumber(0,1));
  }
  if(recessive(list,-1,6,7)==true)
  {
    removeItem(list, 6);
    insertItem(list, 6, 1);
  }
}

//Win and Lose Functions
function win(){
  console.log(numRun+"and the ones"+displayed);
  if(numRun>=7)
  {
    setScreen("winScreen");
    setText("text_area9","Your Score: "+displayed+" Saber Sheep!");
    deleteSheep();
  }
  numRun++;
}
function lose(){
  
  if(displayed<2)
  {
    setScreen("loseScreen");
    setText("text_area3","I'm sorry. You've lost on level "+(numRun-1)+".");
    deleteSheep();
  }
}

//Change Functions
function pink(){
  alleleRestructure(organisms, 0, 1, 2);
  buttonSwitch();
  deleteSheep();
  displaySheep();
}
function blue(){
  alleleRestructure(organisms, 0, 1, 1);
  buttonSwitch();
  deleteSheep();
  displaySheep();
}
function green(){
  alleleRestructure(organisms, 0, 1, 0);
  buttonSwitch(); 
  deleteSheep();
  displaySheep();
}
function shaggy(){
  alleleRestructure(organisms, 2, 3, 0);
  buttonSwitch();
  deleteSheep();
  displaySheep();
}
function smooth(){
  alleleRestructure(organisms, 2, 3, 1);
  buttonSwitch();
  deleteSheep();
  displaySheep();
}
function longTeeth(){
  alleleRestructure(organisms, 4, 5, 1);
  buttonSwitch();
  deleteSheep();
  displaySheep();
  
}
function shortTeeth(){
  alleleRestructure(organisms, 4, 5, 0);
  buttonSwitch();
  deleteSheep();
  displaySheep();
}
function random(){
  alleleRestructure(organisms, randomNumber(2, 7), randomNumber(2,7), randomNumber(0,1));
  buttonSwitch();
  deleteSheep();
  displaySheep();
}
function noChange(){
  buttonSwitch();
  deleteSheep();
  displaySheep();
}
function alleleRestructure(list, allele1, allele2, change){
  for(var j=0;j<60;j++)
  {
    if(organisms[j].length!=0)
    {if(randomNumber(0,2)<1)
    {
      organisms[j][allele1]=change;
    }
    if(randomNumber(0,2)<1)
    {
      organisms[j][allele2]=change;
    }}
  }
}

//Allele Determination Functions
function dominantHomozygous(list, loop, allele1, allele2){//if true, dominant homozygous
  var flag=false;
  if(list[loop][allele1]==1&&list[loop][allele2]==1)
  {
    flag=true;
  }
  return flag;
}
function heterozygous(list, loop, allele1, allele2){//if true, heterozygous
  var flag=false;
  if(list[loop][allele1]==1&&list[loop][allele2]==0)
  {
    flag=true;
  }
  if(list[loop][allele1]==0&&list[loop][allele2]==1)
  {
    flag=true;
  }
  return flag;
}
function recessive(list,loop,allele1, allele2){//if true, recessive
  var flag =false;
  if(loop==-1)
  {
    if(list[allele1]==0&&list[allele2]==0)
    {
      flag=true;
    } 
  }
  else
  {
    if(list[loop][allele1]==0&&list[loop][allele2]==0)
   {
     flag=true;
   }
  }
  return flag;
}
function dominant2(list,loop, allele1, allele2){
  var flag=false;
  if(loop<60){
  if(list[loop][allele1]==2||list[loop][allele2]==2)
  {
    flag=true;
  }}
  return flag;
}
function dominant1(list, loop,allele1, allele2){//if at least one 1, blue
  var flag=false;
  if(loop<60){
  if(list[loop][allele1]==1&&(list[loop][allele2]==0||list[loop][allele2]==1))
  {
    flag=true;
  }
  if(list[loop][allele1]==0&&list[loop][allele2]==1)
  {
    flag=true;
  }}
  return flag;
}
function completelyRecessive0(list, loop, allele1, allele2){//if recessive completely, green
  var flag=false;
  if(loop<60)
  {
  if(list[loop][allele1]==0&&list[loop][allele2]==0)
  {
    flag=true;
  }
  }
  return flag;
}

//ButtonSwitch
function buttonSwitch(){
  hideElement("pinkButton");
  hideElement("blueButton");
  hideElement("greenButton");
  hideElement("shaggyButton");
  hideElement("smoothButton");
  hideElement("longTeethButton");
  hideElement("shortTeethButton");
  hideElement("randomButton");
  hideElement("noChangeButton");
  showElement("screenButton");
}
function buttonSwitchBack(){
  showElement("pinkButton");
  showElement("blueButton");
  showElement("greenButton");
  showElement("shaggyButton");
  showElement("smoothButton");
  showElement("longTeethButton");
  showElement("shortTeethButton");
  showElement("randomButton");
  showElement("noChangeButton");
  hideElement("screenButton");
  }
function continuationButton(){
  setScreen("playScreenLevel1");
   deleteSheep();
  disasterPick(1);
  disasterPick(2);
 // console.log(screenThing);
  setText("text_area1","Next disaster: "+disasterScoreResult);
  reproduction();
  displaySheep();
  win();
  lose();
  buttonSwitchBack();
}

//disasterFunctions
function blizzard(){
  console.log("The death is happening");
  for(var loop=0;loop<60;loop++)
  {
    if(organisms[loop].length!=0)
      {
        if(recessive(organisms,loop,6,7)==true)
      {
          organisms[loop]=[]; 
      }
      }
      if(organisms[loop].length!=0)
      {
      //Fur Length
      if(recessive(organisms,loop,2,3)==true)
      {
          var randNum4= randomNumber(0,9);
          if(randNum4<2)
          {
           organisms[loop]=[]; 
          }
      }
      else if(heterozygous(organisms, loop, 2, 3)==true||dominantHomozygous(organisms, loop,2,3)==true)
      {
        var randNum2=randomNumber(0,9);
        if(randNum2<5)
        {
          organisms[loop]=[]; 
        }
      }
      else
      {
        console.log("Something is deeply wrong here");
        console.log(organisms[loop]);
      }}
      //Fur Color
      if(organisms[loop].length!=0){
      if(completelyRecessive0(organisms, loop, 0,1)==true)
      {
        if(randomNumber(0,9)<2)
        {
          organisms[loop]=[]; 
        }
      }
      else if(dominant1(organisms, loop, 0, 1)==true)
      {
        if(randomNumber(0,9)<5)
        {
          organisms[loop]=[]; 
        }
      }
      else if(dominant2(organisms,loop,0,1)==true)
      {
        if(randomNumber(0,9)<3)
        {
          organisms[loop]=[]; 
        }
      }
      else
      {
        console.log("There is something Deeply wrong here pt 2");
       // console.log(organisms[loop]);
        console.log(organisms[loop].length);
      }
  }}
}
function heatWave(){
  for(var loop=0;loop<60;loop++)
  {
    if(organisms[loop].length!=0)
      {
        if(recessive(organisms,loop,6,7)==true)
      {
          organisms[loop]=[]; 
      }
      }
    if(organisms[loop].length!=0){
      //Fur Length
      if(recessive(organisms,loop,2,3)==true)
      {
          if(randomNumber(0,9)<7)
          {
           organisms[loop]=[]; 
          }
      }
      else if(heterozygous(organisms, loop, 2, 3)==true||dominantHomozygous(organisms, loop,2,3)==true)
      {
        if(randomNumber(0,9)<2)
        {
          organisms[loop]=[]; 
        }
      }
      else{
        console.log("if you see this, something is wrong pt 5");
      }}
      if(organisms[loop].length!=0){
      //Fur Color
      if(completelyRecessive0(organisms, loop, 0,1)==true)
      {
          if(randomNumber(0,9)<7)
          {
            organisms[loop]=[]; 
          }
      }
      else if(dominant1(organisms, loop, 0, 1)==true)
      {
          if(randomNumber(0,9)<6)
          {
            organisms[loop]=[]; 
          }
      }
      else if(dominant2(organisms,loop,0,1)==true)
      {
        if(randomNumber(0,9)<2)
        {
          organisms[loop]=[]; 
        }
      }
      else{
        console.log("If you see this, something is wrong pt 3");
      }
  }
}}
function flood(){
  for(var loop=0;loop<60;loop++)
  {
      if(organisms[loop].length!=0)
      {
        if(recessive(organisms,loop,6,7)==true)
      {
          organisms[loop]=[]; 
      }
      }
      if(organisms[loop].length!=0){
      //Fur Length
      if(recessive(organisms,loop,2,3)==true)
      {
          if(randomNumber(0,19)<2)
          {
           organisms[loop]=[];  
          }
      }
      else if(heterozygous(organisms, loop, 2, 3)==true||dominantHomozygous(organisms, loop,2,3)==true)
      {
        if(randomNumber(0,19)<5)
        {
          organisms[loop]=[]; 
        }
      }
      else{
        console.log("if you see this something is wrong pt 4");
      }}
      if(organisms[loop].length!=0)
      {
      //Fur Color
      if(completelyRecessive0(organisms, loop, 0,1)==true)
      {
        if(randomNumber(0,9)<5)
        {
          organisms[loop]=[]; 
        }
      }
      else if(dominant1(organisms, loop, 0, 1)==true)
      {
          if(randomNumber(0,9)<1)
          {
             organisms[loop]=[]; 
          }
      }
      else if(dominant2(organisms,loop,0,1)==true)
      {
        if(randomNumber(0,9)<5)
        {
          organisms[loop]=[]; 
        }
      }
      else
      {
        console.log("If you see this something is wrong pt 6");
      }
  }
}}
function invasiveSpecies(){
  for(var loop=0;loop<60;loop++)
  {
      if(organisms[loop].length!=0)
      {
        if(recessive(organisms,loop,6,7)==true)
      {
          organisms[loop]=[]; 
      }
      }
      if(organisms[loop].length!=0){
      if(recessive(organisms,loop,4,5)==true)
      {
          if(randomNumber(0,9)<7)
          {
           organisms[loop]=[];  
          }
      }
      else if(heterozygous(organisms, loop, 4, 5)==true)
      {
        if(randomNumber(0,9)<4)
        {
          organisms[loop]=[]; 
        }
      }
      else if(dominantHomozygous(organisms, loop, 4, 5)==true)
      {
        if(randomNumber(0,9)<2)
        {
          organisms[loop]=[]; 
        }
      }
      else{
        console.log("If you see this something is wrong pt 7");
      }
  }}
}
function intraspecificCompetition(){
  for(var loop=0;loop<60;loop++)
  {
      if(organisms[loop].length!=0)
      {
        if(recessive(organisms,loop,6,7)==true)
      {
          organisms[loop]=[]; 
      }
      }
      if(organisms[loop].length!=0){
      if(recessive(organisms,loop,4,5)==true)
      {
          if(randomNumber(0,9)<5)
          {
           organisms[loop]=[]; 
          }
      }
      else if(heterozygous(organisms, loop, 4, 5)==true)
      {
        if(randomNumber(0,9)<4)
        {
          organisms[loop]=[]; 
        }
      }
      else if(dominantHomozygous(organisms, loop, 4, 5)==true)
      {
        if(randomNumber(0,9)<2)
        {
          organisms[loop]=[]; 
        }
      }
      else
      {
        console.log("If you see this something is wrong pt 8");
      }}
  }
}
function predators(){
  for(var loop=0;loop<60;loop++)
  {
      if(organisms[loop].length!=0)
      {
        if(recessive(organisms,loop,6,7)==true)
      {
          organisms[loop]=[]; 
      }
      }
      if(organisms[loop].length!=0)
      {
      //Teeth Length
      if(recessive(organisms,loop,4,5)==true)
      {
          if(randomNumber(0,9)<6)
          {
            organisms[loop]=[]; 
          }
      }
      else if(heterozygous(organisms, loop, 4, 5)==true){
        if(randomNumber(0,20) <5)
        {
          organisms[loop]=[]; 
        }
      }
      else if(dominantHomozygous(organisms, loop, 4, 5)==true)
      {
        if(randomNumber(0,9)<1)
        {
          organisms[loop]=[];
        }
      }  
      else
      {
        console.log("IF you see this something is wrong pt 9");
      }}
      if(organisms[loop].length!=0){
      //Fur Color
      if(completelyRecessive0(organisms, loop, 0,1)==true)
      {
        if(randomNumber(0,9)<2)
        {
          organisms[loop]=[]; 
        }
      }
      else if(dominant1(organisms, loop, 0, 1)==true)
      {
          if(randomNumber(0,9)<6)
          {
            organisms[loop]=[]; 
          }
      }
      else if(dominant2(organisms,loop,0,1)==true)
      {
        if(randomNumber(0,9)<3)
        {
          organisms[loop]=[]; 
        }
       
      }
    else{
      console.log("if you see this something is wrong pt 10");
    }}
  }}
function plague(){
  for(var loop=0;loop<60;loop++){
  if(organisms[loop].length!=0){
  {
      if(recessive(organisms,loop,6,7)==true)
      {
          organisms[loop]=[]; 
      }
      else if(heterozygous(organisms, loop, 6, 7)==true)
      {
        if(randomNumber(0,9)<4)
        {
          organisms[loop]=[]; 
          console.log("die");
        }
      }
      else if(dominantHomozygous(organisms, loop, 6, 7)==true)
      {
        if(randomNumber(0,9)<7)
        {
          organisms[loop]=[]; 
          console.log("die");
        }
      }
      else{
          console.log("if you see this, something is wrong pt 10");
      }
  }}}
}
function disasterPick(number){
  if(number==1)
  {
    disasterCount= disasterFinish[disasterVar];
    if(disasterCount==6)
    {
      console.log("plague");
      plague();
    }
    else if(disasterCount==5)
    {
      console.log("heatWave");
      heatWave();
    }
    else if(disasterCount==4)
    {
      console.log("flood");
      flood();
    }
    else if(disasterCount==3)
    {
      console.log("blizzard");
      blizzard();
    }
    else if(disasterCount==2)
    {
      console.log("intraspecificCompetition");
      intraspecificCompetition();
    }
    else if(disasterCount==1)
    {
      console.log("invasiveSpecies");
      invasiveSpecies();
    }
    else if(disasterCount==0)
    {
      console.log("predators");
      predators();
    }
  }
  else
  {
    disasterCount= disasterFinish[disasterScore];
    if(disasterCount==6)
    {
      console.log("plague");
      disasterScoreResult="Plague";
      screenThing= "plagueScreen";
    }
    else if(disasterCount==5)
    {
      console.log("heatWave");
      disasterScoreResult="Heat Wave";
      screenThing="heatWaveScreen";
    }
    else if(disasterCount==4)
    {
      console.log("flood");
      disasterScoreResult="Flood";
      screenThing="floodScreen";
    }
    else if(disasterCount==3)
    {
      console.log("blizzard");
      disasterScoreResult="Blizzard";
      screenThing="blizzardScreen";
    }
    else if(disasterCount==2)
    {
      console.log("intraspecificCompetition");
      disasterScoreResult="Intraspecific Competition";
      screenThing="intraspecificCompetitionScreen";
    }
    else if(disasterCount==1)
    {
      console.log("invasiveSpecies");
      disasterScoreResult="Invasive Species";
      screenThing="invasiveSpeciesScreen";
    }
    else if(disasterCount==0)
    {
      console.log("predators");
      disasterScoreResult="Predators";
      screenThing= "predatorsScreen";
    }
  }
  if(number==1)
  {
    disasterVar++;
  }
  if(number==2)
  {
    disasterScore++;
  }
}  

//Sheep
function deleteSheep(){
  for(var pop=0;pop<60;pop++)
  {
    deleteElement("image"+pop);
  }
}
function displaySheep(){
  var notDisplayed=0;
  displayed=0;
  for(var index=0;index<60;index++)
  {

    if(organisms[index].length==0)
    {
       notDisplayed++;
       //console.log(organisms[index]);
       image("image"+index,"Title Page-2.jpg");
       hideElement("image"+index);
    }
    else if(completelyRecessive0(organisms,index,0,1)==true)//green sheep
    {
      if(recessive(organisms, index, 2, 3)==true)//shaggy fur
      {
        if(recessive(organisms,index, 4, 5)==true)//short teeth
        {
          
          image("image"+index,"green-shaggy-short.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
        else if(heterozygous(organisms, index, 4, 5)==true)//medium teeth
        {
          image("image"+index,"green-shaggy-medium.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
        else//long teeth
        {
          image("image"+index,"green-shaggy-short.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
      }
      else//smooth fur
      {
        if(recessive(organisms,index, 4, 5)==true)//short teeth
        {
          image("image"+index,"green-short-short.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
        else if(heterozygous(organisms, index, 4, 5)==true)//medium teeth
        {
          image("image"+index,"green-short-medium.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
        else
        {
          image("image"+index,"green, short, long.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
      }
    }
    else if(dominant1(organisms, index, 0, 1)==true)//blue sheep
    {
      if(recessive(organisms, index, 2, 3)==true)//shaggy fur
      {
        if(recessive(organisms,index, 4, 5)==true)//short teeth
        {
          image("image"+index, "blue-shaggy-short.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
        else if(heterozygous(organisms, index, 4, 5)==true)//medium teeth
        {
          image("image"+index, "blue-shaggy-medium.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
        else//long teeth
        {
          image("image"+index, "blue-shaggy-long.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
      }
      else
      {
        if(recessive(organisms,index, 4, 5)==true)//short teeth
        {
          image("image"+index, "blue-short-short.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
        else if(heterozygous(organisms, index, 4, 5)==true)//medium teeth
        {
          image("image"+index, "blue-short-medium.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
        else//long teeth
        {
          image("image"+index, "blue-short-long.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
      }
    }
    else if(dominant2(organisms, index, 0, 1)==true)//pink sheep
    {
      if(recessive(organisms, index, 2, 3)==true)//shaggy fur
      {
        if(recessive(organisms,index, 4, 5)==true)//short teeth
        {
          image("image"+index, "pink-shaggy-short.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
        else if(heterozygous(organisms, index, 4, 5)==true)//medium teeth
        {
          image("image"+index, "pink-shaggy-medium-2.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
        else//long teeth
        {
          image("image"+index, "pink-shaggy-long-4.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
      }
      else
      {
        if(recessive(organisms,index, 4, 5)==true)//short teeth
        {
          image("image"+index, "pink-short-short-2.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
        else if(heterozygous(organisms, index, 4, 5)==true)//medium teeth
        {
          image("image"+index, "pink-short-medium.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
        else//long teeth
        {
          image("image"+index, "pink-short-long.png");
          setPosition("image"+index,randomNumber(0,245),randomNumber(30, 245),75, 75);
          displayed++;
        }
      }
    }
    else
    {
      console.log("something is super wrong");//"something is super wrong"
    }
  
}
 // console.log("images display: "+displayed);
 // console.log("images not: "+notDisplayed);
  
}

//Reproduction Functions
function reproduction(){
  
  list1=[];
  list2=[];
  var array=[];
  for(var indexing=0; indexing<60; indexing++)
  {
    if(organisms[indexing].length!=0)
    {
      appendItem(list1, organisms[indexing]);
    }
  }
  listRandomizer(list1, list2);
  if(list2.length%2==1)
  {
    temporary=list2[0];
    removeItem(list2, 0);
  }
  while(list2.length>40)
  {
    removeItem(list2, randomNumber(0, list2.length-1));
  }
  for(var position=0; position<list2.length;position+=2)
  {
    list3[positionNew]=[];
    reproduction2(list2[position],list2[position+1], 0, 1, list3[positionNew]);
    reproduction2(list2[position],list2[position+1], 2, 3, list3[positionNew]);
    reproduction2(list2[position],list2[position+1], 4, 5, list3[positionNew]);
    reproduction2(list2[position],list2[position+1], 6, 7, list3[positionNew]);
    positionNew++;
  }
  while(list3.length<20)
  {
    array=[];
    appendItem(list3,array);
  }
  for(var index2=0; index2<list2.length; index2++)
  {
    appendItem(list3, list2[index2]);
  }
  while(list3.length<60)
  {
    array=[];
    appendItem(list3, array);
  }
  
  organisms=list3;
  
}
function reproduction2(parent1,parent2, allelePlacement1, allelePlacement2,newOrganism){
  
var holder1=0;
var holder2=0;
if(randomNumber(0,1)<1)
{
  holder1=parent1[allelePlacement1];
}
else{
  holder1=parent1[allelePlacement2];
}
if(randomNumber(0,1)<1)
{
  holder2=parent2[allelePlacement1];
}
else
{
  holder2=parent2[allelePlacement2];
}


if(randomNumber(0,1)<1)
{
  newOrganism[allelePlacement1]=holder1;
  newOrganism[allelePlacement2]=holder2;
}
else{
  newOrganism[allelePlacement1]=holder1;
  newOrganism[allelePlacement2]=holder2;
}
}
