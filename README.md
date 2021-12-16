
# Gramoday Backend Api
### Deployed backend api
 [This](https://gramoday-api.herokuapp.com/) link will show all the reports currently added

To make query based get request add this to [url](https://gramoday-api.herokuapp.com/) :
```
/reports/cmdtyID={commodtyID}
```
* Here commodtyID can be `cmdty-1 or cmdty-2 etc` 
* We can make a get request of a cmdtyID as along as it has been already added to the database by making a post request

**Post /reports**
Using applications like Postman or thunderclient we can make a post request of desired *Json* form:
```
{
    "reportDetails" :{
    "userID": "user-1",
    "marketID": "market-1",
    "marketName": "Vashi Navi Mumbai",
    "cmdtyID": "cmdty-1",
    "marketType": "Mandi",
    "cmdtyName": "Potato",
    "priceUnit": "Pack",
    "convFctr": 80,
    "minPrice": 1200,
    "maxPrice": 1600
    }
}
```
Response on successful Post request would be
```
{
  "Status": "Success",
  "reportID": "61b9bf824cc6f6931d44720d"
}
```

### Local Setup & Installation
Open terminal and run the following command:
```
$ git clone https://github.com/Ajasra22/gramoday-api.git
```
 - #### Backend Installation
 ```
 $ cd server
 $ npm install
 ```
 - #### Run Backend
 ```
  $ npm start
 ```
 Command Prompt will show the following message:
 ```
[nodemon] starting `node index.js`
Example app listening at http://localhost:5000
conneted to mongo successfully
 ```
 To make *GET* and *POST* request follow the same steps mentioned in [Deployed Backend Api](#gramoday-backend-api) section

 To have better view of json elements install [Json view Pro Extension](https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc)
 <hr></hr>


 - #### Front End Installation
 ```
 $ cd client 
 $ npm install
 ```
- #### Run Front End
```
$ npm start
```


### Api Testing With "Jest" & "Supertest"
Test file **index.test.js**

To run the file use command
```
npm run test
```
The output of above command will give a message like this:
```
 PASS  ./index.test.js (10.481 s)
  Post /reports
    Give report of a Cmdty                                                
      √ should respond with a 200 status Code and Report Id (8817 ms)     
  Get reports from /reports?cmdtyID=cmdty-1                               
    √ should respond with json file (381 ms)                              
                                                                          
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        10.587 s
Ran all test suites.
```
This shows our api's are running fine and giving the desired output

### Made by
<hr/>
<table>
<td align="center">
 <a align="center" href="https://github.com/Ajasra22">
 <img src="https://avatars.githubusercontent.com/u/60650011?s=400&u=f7dbdcbfd385cbef07518308ef1b5ca082ff29cc&v=4" width="100px;" alt=""/>
         <br />
         <sub>
            <b>Ajasra Gupta</b>
         </sub>
 </a>
 <br/>
 </td>
 </table>
