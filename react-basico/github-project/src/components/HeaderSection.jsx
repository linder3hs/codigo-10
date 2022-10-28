import sun from "../assets/icons/sun.png";

function HeaderSection() {
  return (
    <div className="section-1">
      <h4 className="title">devfinder</h4>
      <button className="btn-mode">
        LIGHT <img width="20" src={sun} alt="" />
      </button>
    </div>
  );
}

export default HeaderSection;
