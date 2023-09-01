function versionSorter(verionList, isDescending){
  verionList.sort( (a, b) => a.localeCompare(b, undefined, { numeric:true }) );
  if (isDescending){
    return verionList.reverse();
  }else{
    return verionList;
  }
}

var arr4 = ['ISE 3.1 and above (API v1)', 'ISE 1.x and below (API v0)', 'ISE 2.6', 'ISE 3.0', 'ISE 2.7'];
printLine(versionSorter(arr4, true));
