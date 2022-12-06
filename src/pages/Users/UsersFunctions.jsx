export function getUserGroup(Username){
  let data = [];
    console.log("Fetcing user groups")
    fetch("https://dsxdo0hm4c.execute-api.us-east-2.amazonaws.com/default/",{
    method:'POST', 
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      "UserPoolId": 'us-east-2_yq4Klaavu',
      "Username": Username,
      
    })
  }).then(function(response){
   
    return response.json();
  }).then(function(Data){
    
    data = Data.Groups[0].GroupName;
  })
  return data;
}
    
export function SetAccountLevel(Username,accountLevel,Method){
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
    
    

export async function GetUser(username,method){
  let data = [];
      //put url of api in the fetch
      await fetch(" https://qdkw8owsn3.execute-api.us-east-2.amazonaws.com/default",{
        method: 'POST',
        headers: {'Content-Type':"application/json"},
        body : JSON.stringify({
            "UserPoolId": "us-east-2_yq4Klaavu",
            "Username" : username,
            "method": method
        })
      }).then((result) => result.json()).then((response) => {data = response;
      })
      return data;
    }
       
    