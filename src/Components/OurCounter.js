import React from 'react'
import { increaseCounter, decreaseCounter } from '../action/CounterAction'
import { useSelector, useDispatch } from 'react-redux'


const OurCounter = () => {
    const myState = useSelector((state)=>state.handleMyCounter)
   const dispatch=useDispatch();
    return (
        <div>
          <div className="jumbotron">
              <h1 className="display-4">Our Couter App</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-4"/>
              <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                  <a onClick={()=> dispatch(decreaseCounter())} className="btn btn-primary btn-lg" href="#" role="button">Minus</a>
                  <input type='text' value={myState}/>
                  <a onClick={()=> dispatch({type:"INCREASE"})} className="btn btn-success btn-lg" href="#" role="button">Plus </a>
                  </p>
                  </div>            
        </div>
    )
}

export default OurCounter
