const Card = (props) => (
  <div id={props.handPosition} className="cardTopLevel">
    <div className="topLIneContainer">
      <p>Card Title</p>
      <p>Mana Cost</p>
    </div>
    <p className="cardType">Card Type</p>
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
      <p className="handposition">{props.handPosition}</p>
    </div>
    <style jsx>{`
      .cardTopLevel {
        position:relative;
        border:1px solid black;
        max-width:15vw;
        max-height:20vw;
        background:#dedede;
        padding:1vw;
      }
      .topLIneContainer {
        display:flex;
        justify-content:space-between;
      }
      .cardType {
        text-align:right;
      }
      .powerAndToughnessContainer {
        display:flex;
        justify-content:flex-end
      }
      .powerAndToughnessContainer > :nth-child(N+1) {
        display:flex;
      }
      input{
        max-width:3.5em;
      }
      .handposition {
        position:absolute;
        top:0;
        left:0;
        color:red;
      }
    `}</style>
  </div>
)

export default Card
