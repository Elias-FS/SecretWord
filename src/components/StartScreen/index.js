import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <header>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="/img/SecretWord2.png" alt="Logo SecretWord" />
            </div>
            <div class="flip-card-back">
              <h1>
                Secret <span>Word</span>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;
