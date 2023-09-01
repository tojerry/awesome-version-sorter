# awesome-version-sorter
The goal of this utility function is to help UI show the proper version list in either ascending or descending order.

There are many different type of versioning formats that are not compliant with the semantic versioning(ex. MAJOR.MINOR.PATCH). Different organizations or developers may have their own formats such as 1.1-rc, API-10.03.01-final, 1.02.3(test), ...etc. When we want to list them in proper and meaningful order, it becomes a challenge.

Consider this example.

We have some custom versioning strings like this:\
'ISE 3.1 and above (API v1)',\
'ISE 1.x and below (API v0)',\
'ISE 2.6',\
'ISE 2.7.2',\
'ISE 1.2',\
'ISE 0.1',\
'ISE 0.2', \
'ISE 1.0.1',\
'ISE 2.7.x',\
'ISE 1.0.0',\
'ISE 3.0',\
'ISE 2.7.1'

They might be inserted to the database in differnt time so they are out of order and contain different formats. We can sort the list in the backend, but this solution is using Javascript to provide the sorting in the frontend unless the backend is using node.js which can reude this solution. Since we need to provide an list component on the UI, we can sort the list ascending or descending before populate on the UI.


This is the expected result.


"ISE 0.1"\
"ISE 0.2"\
"ISE 1.0.0"\
"ISE 1.0.1"\
"ISE 1.2"\
"ISE 1.x and below (API v0)"\
"ISE 2.6"\
"ISE 2.7.1"\
"ISE 2.7.2"\
"ISE 2.7.x"\
"ISE 3.0"\
"ISE 3.1 and above (API v1)"

The order is from the most specific version(ex. ISE 2.7.1) to the lease specific version(ISE 2.7.x).
