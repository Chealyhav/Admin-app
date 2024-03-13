import { useLogout } from "@refinedev/core";
import { Button, Container } from "@mantine/core";


export const DashboardPage:React.FC =() =>{
    const { mutate: logout } = useLogout();
    return(
        <Container >
            <Button bg={"red"} onClick={() => logout()}>Logout</Button>
            Dashboard
        </Container>
    )
}
