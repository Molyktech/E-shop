import React from "react";
import { MdCurrencyExchange, MdProductionQuantityLimits } from "react-icons/md";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handle on wheel", deltaY);
}

const outerElementType = React.forwardRef((props, ref) => (
  <div ref={ref} {...props} onWheel={handleOnWheel} />
));

const Payments = () => {
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm app-dark-text font-medium">
        <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap">$3434</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <span className="py-[1px] px-[5px] bg-amber-200 text-amber-950 rounded-md text-sm">
            Pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap"> 25 Dec 2023 </div>
      </div>
    );
  };
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3">Payments </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-5">
        <div className="flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start app-dark-text">
            <h2 className="text-2xl font-bold">$3434</h2>
            <span className="text-sm font-bold">Total Sales</span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl">
            <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-[#fde2ff] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start app-dark-text">
            <h2 className="text-2xl font-bold">$150</h2>
            <span className="text-sm font-bold">Available Amount</span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-[#760077] flex justify-center items-center text-xl">
            <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-[rgb(204,255,207)] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start app-dark-text">
            <h2 className="text-2xl font-bold">$100</h2>
            <span className="text-sm font-bold">WithDrawal Amount</span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center items-center text-xl">
            <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-[#93ddfc] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start app-dark-text">
            <h2 className="text-2xl font-bold">$0</h2>
            <span className="text-sm font-bold">Pending Amount</span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl">
            <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 pb-4">
        <div className="bg-white shadow-md app-dark-text rounded-md p-5">
          <h2 className="text-lg">Send Request</h2>
          <div className="pt-5 mb-5">
            <form>
              <div className="flex gap-3 flex-wrap">
                <input
                  min="0"
                  type="number"
                  className="px-3 py-2 md:w-[75%] focus:border-indigo-500 outline-none bg-transparent border border-[#8A30E2] rounded-md app-dark-text"
                  name="amount"
                />
                <button className="bg-violet-700 hover:shadow-lg hover:shadow-violet-400/50 text-white rounded-md px-7 py-2">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div>
            <h2 className="text-lg pb-4">Pending Request </h2>
            <div className="w-full overflow-x-auto">
              <div className="flex bg-[#8A30E2] text-white uppercase text-xs font-bold min-w-[340px] rounded-md">
                <div className="w-[25%] p-2"> No </div>
                <div className="w-[25%] p-2"> Amount </div>
                <div className="w-[25%] p-2"> Status </div>
                <div className="w-[25%] p-2"> Date </div>
              </div>
              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List"
                  height={350}
                  itemCount={10}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>

        <div className="bg-[#6a5fdf] text-white rounded-md p-5">
          <div>
            <h2 className="text-lg pb-4">Successful WithDrawals </h2>

            <div className="w-full overflow-x-auto">
              <div className="flex bg-[#a7a3de] uppercase text-xs font-bold min-w-[340px] rounded-md">
                <div className="w-[25%] p-2"> No </div>
                <div className="w-[25%] p-2"> Amount </div>
                <div className="w-[25%] p-2"> Status </div>
                <div className="w-[25%] p-2"> Date </div>
              </div>
              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List"
                  height={350}
                  itemCount={10}
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
    </div>
  );
};
export default Payments;
