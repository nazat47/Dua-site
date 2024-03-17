import Header from "../_components/header/Header";
import RightSide from "../_components/sidebar/rightSide/RightSide";

const DuaLayout = ({ children }) => {
  return (
    <div>
      <div className="flex">
        <RightSide />
        <div className="flex flex-col w-full">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default DuaLayout;
