

const Card = (props) => (
  // const position = {porps.handPosition}
  <div id={props.position}  className="cardTopLevel">
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
      <p className="position">{props.position}</p>
    </div>
    <style jsx>{`
      .cardTopLevel {
        position:relative;
        border:1px solid black;
        max-width:200px;
        max-height:250px;
        background:#dedede;
        padding:25px;
        transition:500ms;
      }
      .cardTopLevel:hover {
        // z-index:999 !important;
        margin-right:175px;
        border-right:0px;
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
      .position {
        position:absolute;
        top:0;
        left:0;
        color:red;
      }
      #hand2, #hand3, #hand4, #hand5, #hand6, #hand7, #hand8, #hand9, #hand10 {
        margin-left: -175px;
      }
      #hand2 {
        z-index:2;
      }
      #hand3 {
        z-index:3;
      }
      #hand4 {
        z-index:4;
      }
      #hand5 {
        z-index:5;
      }
      #hand6 {
        z-index:6;
      }
      #hand7 {
        z-index:7;
      }
      #hand8 {
        z-index:8;
      }
      #hand9 {
        z-index:9;
      }
      #hand10 {
        z-index:10;
      }
    `}</style>
  </div>
)

export default Card
