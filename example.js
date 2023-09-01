function versionSorter(verionList, isDescending){
  verionList.sort( (a, b) => a.localeCompare(b, undefined, { numeric:true }) );
  if (isDescending){
    return verionList.reverse();
  }else{
    return verionList;
  }
}

var arr4 = [
'ISE 3.1 and above (API v1)', 
'ISE 1.x and below (API v0)', 
'ISE 2.6', 
'ISE 2.7.2',
'ISE 1.2',
'ISE 0.1', 
'ISE 0.2', 
'ISE 1.0.1',
'ISE 2.7.x',
'ISE 1.0.0', 
'ISE 3.0', 
'ISE 2.7.1'  
];
printLine(versionSorter(arr4, true));
