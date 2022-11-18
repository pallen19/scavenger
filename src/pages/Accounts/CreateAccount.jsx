import CreateNewAccountNew from '../../ui-components/CreateNewAccountNew'

const CreateAccount = () => {

    <CreateNewAccountNew style={{position:'relative' , left:'30em'}}
    overrides={{'accountNameLabel': { onChange : onSubmitAccountName },
    'TextField34533250':{onChange:onSubmitAccountNumber},
    'TextField34533245':{onChange:onSubmitAccountDescription},
    'TextField34533247':{onChange:onSubmitAccountCategory},
    'TextField34533248':{onChange:onSubmitAccountSubCategory},
    'TextField34692999':{onChange:onSubmitUserID},
   
   }}/>

}

export default CreateAccount