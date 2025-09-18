import './app.css'

function TopLeftContent() {
  return <div className="header-container"></div>;
}

function TopCenterContent() {
  return (
    <div className="header-container2">
      <TopCenterBox name="Andre" />
      <TopCenterBox name="Dizon" />
    </div>
  );
}

function TopCenterBox(props) {
  return <div className="header-container2-content">{props.name}</div>;
}

function TopSection() {
  return (
    <div className="header">
      <TopLeftContent />
      <TopCenterContent />
      <TopLeftContent />
    </div>
  );
}

function MiddleLeftContent() {
  return <div className="body-container"></div>;
}

function MiddleRightBox() {
  return <div className="body-container2-content"></div>;
}

function MiddleRightContent() {
  return (
    <div className="body-container2">
      <MiddleRightBox />
      <MiddleRightBox />
    </div>
  );
}

function MiddleSection() {
  return (
    <div className="body">
      <MiddleLeftContent />
      <MiddleRightContent />
    </div>
  );
}

function BottomLeftContent() {
  return <div className="footer-container1"></div>;
}

function BottomCenterBox(props) {
  return <div className="footer-container2">{props.text}</div>;
}

function BottomSection() {
  return (
    <div className="footer">
      <BottomLeftContent />
      <BottomCenterBox text="C-PCIT9" />
      <BottomCenterBox text="IT3A" />
      <BottomLeftContent />
    </div>
  );
}

export function App() {
  return (
    <div className="container">
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
}
