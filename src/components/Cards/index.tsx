import { CardContainer, CardsContent } from "./styles";

export function Cards(){
    return (
        <CardContainer>
            <div className="title">
                <h3>LET'S BE YOUR HOSTS</h3>
            </div>
            <CardsContent>
                <div className="card">
                    <div className="textsContainer">
                        <h5>Single Ticket</h5>
                        <span>$100</span>
                        <div className="description">
                            <p>Blood Drink</p>
                            <p>Haunted House Tour</p>
                            <p>Horror Movie Marathon</p>
                        </div>
                    </div>
                    <button>Buy Ticket</button>
                </div>

                <div className="card cardOrange">
                    <div className="textsContainer">
                        <h5>Couple Ticket</h5>
                        <span>$150</span>
                        <div className="description">
                            <p>Blood Drink</p>
                            <p>Horror Movie Marathon</p>
                            <p>Pumpkin Carving Contest</p>
                        </div>
                    </div>
                    <button>Buy Ticket</button>
                </div>

                <div className="card" id='card'>
                    <div className="textsContainer">
                        <h5>Combine Ticket</h5>
                        <span>$300</span>
                        <div className="description">
                            <p>Blood Drink</p>
                            <p>Haunted House Tour</p>
                            <p>Horror Movie Marathon</p>
                        </div>
                    </div>
                    <button>Buy Ticket</button>
                </div>
            </CardsContent>
        </CardContainer>
    )
}