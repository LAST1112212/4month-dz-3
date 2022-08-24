import React from "react";
import style from './Portfolio.module.css'

class PortfolioClass extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <>
        <ul>
          <li className={style.purpleText}>Name: {this.props.name}</li>
          <li className={style.purpleText}>Age: {this.props.age}</li>
        </ul>
      </>
    )
  }
}
export default PortfolioClass;