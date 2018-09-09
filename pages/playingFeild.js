import BattlefFeild from './sections/battlefield.js'
import Hand from './sections/hand.js'
import Card from './sections/card.js'
import LifeCounter from './sections/lifeCounter.js'

// import ResourceBank from './sections/resourceBank.js'
// import Discard from './sections/discard.js'
// import OutOfPlay from './sections/outOfPlay.js'
// import Deck from './sections/deck.js'
// import CardsInPlay from './sections/cardsInPlay.js'

export default () => (
  <div>
    <BattlefFeild>
      <Hand>
        <Card position={"hand1"} />
        <Card position={"hand2"} />
        <Card position={"hand3"} />
        <Card position={"hand4"} />
      </Hand>
      {/* <ResourceBank />
      <Discard />
      <OutOfPlay />
      <Deck />
      <CardsInPlay /> */}
      <LifeCounter />
    </BattlefFeild>
    <style jsx global>{`
      * {
        margin:0;
      }
    `}</style>
  </div>
)
