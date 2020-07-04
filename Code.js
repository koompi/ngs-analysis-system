/**
*
* @customfunction
*/
var ChangePage = function (name) {
  
    var App = SpreadsheetApp;
    var WorkBook = App.getActiveSpreadsheet();
    var AllSheets = WorkBook.getSheets();
    
    for(var i=0; i < AllSheets.length; i++){
    
        if(AllSheets[i].getName() === name) {
        
            WorkBook.setActiveSheet(AllSheets[i], true);
            
        }
    } 
    
}

var PageTest = function () { ChangePage("តេស្ត"); }

var PageHome = function () { ChangePage("ទំព័រដើម"); }

var PageTestPlan = function () { ChangePage("ផែនការតេស្ត"); } 

var PageTestDocs = function () { ChangePage("ឯកសារតេស្ត"); }

var PageLowAbility = function () { ChangePage("ក្រុមសមត្ថភាពទាប"); }

var PageHighAbility = function () { ChangePage("ក្រុមសមត្ថភាពខ្ពស់"); }

var PageTestAnalysisResult = function () { ChangePage("លទ្ធផលវិភាគតេស្ត"); }



function onEdit() {
  
    var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var code = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Code");
    
    if( ss.getName() ===  "ក្រុមសមត្ថភាពខ្ពស់") {
      
        
      
    }
  
}


