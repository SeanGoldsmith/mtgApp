class LifeCounter extends React.Component {
  constructor(props) {
    super(props);
    this.playerOne = {
      name : "NoiseBox",
      health : 20
    }
    this.playerTwo = {
      name : "Tubstrr",
      health : 20
    };
  }


  render() {
    return (
      <div id="LifeCounterMainContainer">
        <h1>{this.playerOne.name} : {this.playerOne.health}</h1>
        <h1>{this.playerTwo.name} : {this.playerTwo.health}</h1>
      </div>
    );
  }
}

export default LifeCounter
