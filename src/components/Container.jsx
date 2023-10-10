
const Container = (props) => {
    return (
        <div
            className={`container p-5 mx-auto  ${props.className ? props.className : ""
                }`}>
            {props.children}
        </div>
    );
}

export default Container;