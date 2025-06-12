interface SidebarProps {
  onCreatePostClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onCreatePostClick }) => {
  return (
    <div
      className="col-md-3 bg-white p-2"
      style={{
        display: "flex",
        borderRight: "2px solid gray",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2
        className="mb-4"
        style={{ color: "royalblue", fontWeight: "600", fontSize: "6vh" }}
      >
        Dashboard
      </h2>
      <ul className="nav flex-column">
        <li className="nav-item px-3">
          <button
            className="btn"
            style={{
              border: "1px solid black",
              width: "fit-content",
              color: "orange",
              fontSize: "3vh",
              borderRadius: "15px",
              fontWeight: "700",
            }}
            onClick={onCreatePostClick}
          >
            + Create Post
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
