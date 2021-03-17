import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../store'

const AmiiboList = (props)  => {
    const { fetchData } = props;

    useEffect(() => {
        props.fetchData();
    }, [fetchData])

    return (
        <div className="container">
            <h1>Let's Collect Yoshi!</h1>
            {props.isLoading ? <h3>Researching...</h3> : null}
            {props.error ? <p>{props.error}</p> : null}
            {/* {props.chars.map((char, i) => {
                <>
                <p key={i}>{char.name}</p>
                </> 
            })} */}
            
            <div>{props.image}</div>
            <h2>{props.gameSeries}</h2>
           
        </div>
    )
}

const mapStateToProps = state => {
    return {
    isLoading: state.isLoading,
    chars: state.chars,
    error: state.error,
    }
}   

export default connect(mapStateToProps, { fetchData })(AmiiboList)