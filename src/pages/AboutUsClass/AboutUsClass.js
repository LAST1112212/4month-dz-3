import React from "react";
import classes from './AboutUsClass.module.css'

class AboutUsClass extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <>
        <ul>
          <li className={classes.green}>Name: {this.props.name}</li>
          <li className={classes.green}>Age: {this.props.age}</li>
        </ul>
      </>
    )
  }
}
export default AboutUsClass;