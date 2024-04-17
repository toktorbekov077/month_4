import User from "../../components/user/User";

function  UsersPage () {
    return (
        <ul>
            <User name="Anna" lastname="Ivanova" age={25}/>
            <User name="John" lastname="Johns" age={18}/>
            <User name="Mike" lastname="Tayson" age={22}/>
            <User name="Robert" lastname="Jr" age={26}/>
            <User name="Elena" lastname="Petrova" age={30}/>
        </ul>
    )
}

export default UsersPage;