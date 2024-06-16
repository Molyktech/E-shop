import React from "react";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  //   const threshold = 5;
  //   if (deltaY > threshold) {
  //     console.log("scrolling down");
  //   } else if (deltaY < -threshold) {
  //     console.log("scrolling up");
  //   }
  console.log("handleOnWheel", deltaY);
}

const outerElementType = React.forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const PaymentRequest = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm text-[#0c1b38] font-medium">
        <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap">$3434</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <span className="py-1 px-2 bg-amber-200 text-amber-950 rounded-md text-xs">
            Pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap"> 25 Dec 2023 </div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <button className="bg-violet-600 shadow-lg hover:shadow-violet-500/50 px-3 py-1 cursor-pointer text-white rounded-sm text-sm]">
            Confirm
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-white rounded-md">
        <h2 className="text-xl font-medium pb-5 text-[#0c1b38]">
          Withdrawal Request
        </h2>
        <div className="w-full">
          <div className="w-full overflow-x-auto">
            <div className="flex bg-[#8A30E2] text-white uppercase text-xs font-bold min-w-[340px] rounded-md mb-2">
              <div className="w-[25%] p-2"> No </div>
              <div className="w-[25%] p-2"> Amount </div>
              <div className="w-[25%] p-2"> Status </div>
              <div className="w-[25%] p-2"> Date </div>
              <div className="w-[25%] p-2"> Action </div>
            </div>

            {
              <List
                style={{ minWidth: "340px" }}
                className="List"
                height={350}
                itemCount={100}
                itemSize={35}
                outerElementType={outerElementType}
              >
                {Row}
              </List>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentRequest;
