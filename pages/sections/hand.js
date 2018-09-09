const Hand = (props) => (
  <div id="hand">
    {props.children}
    <style jsx>{`
        #hand {
          background:pink;
          display:flex;
          position:absolute;
          bottom:0;
        }
    `}</style>
  </div>
)

export default Hand
