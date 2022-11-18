export function getUserGroup(Username){
    console.log("Fetcing user groups")
    fetch("https://dsxdo0hm4c.execute-api.us-east-2.amazonaws.com/default/",{
    method:'POST', 
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      "UserPoolId": 'us-east-2_yq4Klaavu',
      "Username": Username,
      
    })
  }).then(function(response){
    //console.log(response)
    return response.json();
  }).then(function(Data){
    //console.log(Data.Groups[0].GroupName);
    return(Data.Groups[0].GroupName);
  })
}
    
export function elevateAccount(Username,accountLevel,Method){
      //account method should be add,remove, or disabled/enable
      fetch("https://7eiwgt5u32.execute-api.us-east-2.amazonaws.com/default/",{
        method: 'POST',
        headers: {'Content-Type':"application/json"},
        body : JSON.stringify({
          "UserName": Username,
          "UserPoolId": 'us-east-2_yq4Klaavu',
          "newGroup": accountLevel,
          "method": Method 
        })
      })
    }
    
    

export function GetUser(username,method){
      //put url of api in the fetch
      fetch(" https://qdkw8owsn3.execute-api.us-east-2.amazonaws.com/default",{
        method: 'POST',
        headers: {'Content-Type':"application/json"},
        body : JSON.stringify({
            "UserPoolId": "us-east-2_yq4Klaavu",
            "Username" : username,
            "method": method
        })
      })
    }