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
        <Card handPosition={1} />
      </Hand>
      {/* <ResourceBank />
      <Discard />
      <OutOfPlay />
      <Deck />
      <CardsInPlay /> */}
      <LifeCounter />
    </BattlefFeild>
  </div>
)
