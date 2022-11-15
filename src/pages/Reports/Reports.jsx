export function Reports(props){
    //Constants
    const [currentPage,setCurrentPage] = useState("Passwords")
      const location = useLocation();
    const navigation = useNavigate();
    //End of Constants
  
    switch(props.level){
      case 'Administrators':
          return (
              <>
              <h1>Admins</h1>
              <PageHeader  
         overrides={{
           PageHeader: {width:"100%"},
           Background:{width: "100%"},
           PageTitle: {children: "Reports"},
           SubNavigation:{children:""}
           
       }}/>
          </> );
      case 'Managers':
          return(
          <h1>Managers</h1>
          )
      case 'Accountant':
          return(
              <h1>Accountant</h1>
              )
      default:
          return(<h1>Access Denied</h1>)
      }
   
  }