import './css/styles.css'
import './css/fonts.css'
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className="App">
      <div className="container rel">
        <div className="popup-trigger-grid">
          <div className="popup-trigger-block modal-trigger" data-target="">
            <h4 className="bold-txt">Transfer</h4>
          </div>
          <div className="popup-trigger-block modal-trigger" data-target="">
            <h4 className="bold-txt">Bank</h4>
          </div>
          <div className="popup-trigger-block modal-trigger" data-target="">
            <h4 className="bold-txt">Card</h4>
          </div>
          <div className="popup-trigger-block modal-trigger" data-target="">
            <h4 className="bold-txt">USSD</h4>
          </div>
          <div className="popup-trigger-block modal-trigger" data-target="">
            <h4 className="bold-txt">QR Code</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
