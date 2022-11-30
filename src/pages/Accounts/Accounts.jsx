import { PageHeader } from '../../ui-components';
import { useNavigate, useLocation, Link, Outlet } from 'react-router-dom'
import { TabWindow } from '../../components/TabWindow/TabWindow';

//Page
export function ViewAcct(props) {
    //Constants
    const location = useLocation();
    const navigate = useNavigate();

    switch (props.level) {
        case 'Administrators':
            return (
                <>
                <PageHeader overrides={{
                        PageHeader: { width: "100%" },
                        Background: { width: "100%" },
                        PageTitle: { children: "Accounts" }
                }}/>
                <TabWindow 
                        options={["Account Summary", "Journals", "General Ledger","Chart Of Accounts","Create Account"]}>
                        <Outlet />
                </TabWindow>
                </>
            );
        case 'Managers':
            return (
                <>
                <PageHeader overrides={{
                        PageHeader: { width: "100%" },
                        Background: { width: "100%" },
                        PageTitle: { children: "Accounts" }
                }}/>
                <TabWindow 
                        options={["Account Summary", "Journals", "General Ledger","Chart Of Accounts","Create Account"]}>
                        <Outlet />
                </TabWindow>
                </>
            )
        case 'Accountant':
            return (
                <>
                <PageHeader overrides={{
                        PageHeader: { width: "100%" },
                        Background: { width: "100%" },
                        PageTitle: { children: "Accounts" }
                }}/>
                <TabWindow 
                        options={["Account Summary", "Journals", "General Ledger","Chart Of Accounts","Create Account"]}>
                        <Outlet />
                </TabWindow>
                </>
            )
        default:
            return (<h1>Access Denied</h1>)
    }
}
//End of Page
