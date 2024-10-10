type Props = {
    children: React.ReactNode
}
const MainLayout: React. FC<Props>= props => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default MainLayout