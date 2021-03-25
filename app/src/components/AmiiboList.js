import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../store'

const AmiiboList = (props)  => {

    useEffect(() => {
        props.fetchData();
    }, [])
    console.log({props})
    return (
        <div className="container">
            <h1>Let's Collect Yoshi!</h1>
            <div className="yoshiContainer">
            {props.isLoading ? <h3>Researching...</h3> : null}
            {props.error ? <p>{props.error}</p> : null}
            {props.chars.map((char, index) => {
                return<div>
                <p key={index}>{char.name}</p>
                <img src={char.image} />
                <h2>{char.gameSeries}</h2>
                </div>
            })}
            </div>
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