function User (props) {
    console.log(props)
    return (
        <li>
            {props.name} - {props.lastname} -
            через 10 лет Вам будет {props.age + 10}

        </li>
    )
}

export default User;