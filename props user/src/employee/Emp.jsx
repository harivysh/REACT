let Emp = (props) => {

    return <div>
        <h2>Emp component</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Name:{props.user.name}</h3>
        <h3>Location:{props.user.loc}</h3>
        <h4> User; {this.props.userData} </h4>
    </div>
}

export default Emp