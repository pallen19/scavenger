import { Flex } from '@aws-amplify/ui-react';
import React from 'react'
import { AccountCard } from '../ui-components';

export const AdminViewUserF = () => {

  const editCard = (accountName,accountNo,subCategory,description,balance) =>{
    return(
      <AccountCard overrides={{'Cafe Equipment':{children:accountName},
      'Account no: 109':{children:accountNo},'Subcategory : equipment':{children:subCategory},
      'Coffee & espresso machines, coffee bean grinder, ice makers, blenders':{children:description},
      'Balance: $13,872.78':{children:balance}

         }}/>
      )
  } 
  return ( 
    <>
    <div id='populateCard' style={{position:'absolute', width:'1040px', 
    height:'162px', left:'55px', top:'309px', maxWidth:'60em'}}>
      <Flex>
        <div style={{width:'520px'}}>
      {editCard("Harbor Freight","AccountNumber:10", "Subcategory : miscellaneous",
      "Description: highly addictive champagne", "Balance: $50,550.92")}
       {editCard("At Home","AccountNumber:10", "Subcategory : miscellaneous",
      "Description: highly addictive champagne", "Balance: $50,550.92")},
      {editCard("At Home","AccountNumber:10", "Subcategory : miscellaneous",
      "Description: highly addictive champagne", "Balance: $50,550.92")},
      
      </div>
      
    
    {/**visibility: hidden; */}
      {/*<AccountCard/>*/}
      </Flex>
    </div>

   
    </>
  )
}

export default AdminViewUserF;


{/**
   {editCard("Home Depot","Account Number:10", "Subcategory : miscellaneous",
      "Description: highly addictive champagne", "Balance: $50,550.92")}
       {editCard("Publix","Account Number:10", "Subcategory : miscellaneous",
      "Description: highly addictive champagne", "Balance: $50,550.92")}
       {editCard("Hamilton","Account Number:10", "Subcategory : miscellaneous",
      "Description: highly addictive champagne", "Balance: $50,550.92")}
     */}