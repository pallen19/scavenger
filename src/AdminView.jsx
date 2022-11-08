import React from "react"

class Account{
constructor(name,number,subCategory,description,balance,label,isActive){
this.name = name;
this.number = number;
this.subCategory = subCategory;
this.description = description;
this.balance = balance;
this.isActive = isActive;
}

}



export function getTestData(){
let accountTestData = [];
accountTestData.push(new Account("Bananas",19,"edibles","Objects capable of being comsumed",14265,false))
accountTestData.push(new Account("Weggs",765,"diffrent edibles","diffrent Objects capable of being comsumed",14885,false))
accountTestData.push(new Account("Anime",1337,"UwU","I hate myself for making this",12345,false))
accountTestData.push(new Account("Rocks",4,"not edibles","Objects you should not comsume",11,false))
accountTestData.push(new Account("Unlisted",420,"NOT DRUGS","I said its not drugs",69420,false))
return accountTestData;
}

export function AdminNewAcct(){


    return (
        <>
        <h1>ADMIN newAccount Page</h1>
        
        </>
        
    )
    

}
export function AdminHome(){


    return (
        <>
        <h1>ADMIN home</h1>
        
        </>
        
    )
    

}
export function AdminViewAcct(){


    return (
        <>
        <h1>ADMIN view accounts</h1>
        
        </>
        
    )
    

}
export function AdminNewUser(){


    return (
        <>
        <h1>ADMIN  newUser</h1>
        
        </>
        
    )
    

}