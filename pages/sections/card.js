const n = Math.floor(Math.random() * Math.floor(200))
const img = "https://www.fillmurray.com/g/200/" + Math.floor(Math.random() * Math.floor(200))
const Card = (props) => (
  <div id={props.handPosition}>
    <div className="topLIneContainer">
      <p>Card Title</p>
      <p>Mana Cost</p>
    </div>
    <div className="artworkContainer">
      <img className="artwork" src={img}/>
    </div>
    <p>Card Type</p>
    <p>Description | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>
    <div className="powerAndToughnessContainer">
      <div className="powerHolder">
        <p>P: </p>
        <input type="number" value="42" />
      </div>
      <div className="toughnessHolder">
        <p>T: </p>
        <input type="number" value="42" />
      </div>
    </div>
  </div>
)

export default Card
