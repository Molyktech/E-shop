import React from "react";

const OrderDetails = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-white shadow-md rounded-md">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl text-[#0c1b38]">Order Details</h2>
          <select
            name=""
            id=""
            className="px-4 py-2 focus:border-indigo-900 outline-none bg-[#8A30E2] border border-[#8A30E2] rounded-md text-[#d0d2d6] capitalize"
          >
            <option value="">pending</option>
            <option value="">processing</option>
            <option value="">warehouse</option>
            <option value="">placed</option>
            <option value="">cancelled</option>
          </select>
        </div>

        <div className="p-4">
          <div className="flex gap-2 text-lg text-[#0c1b38]">
            <h2>#34344</h2>
            <span>3 Jan 2024</span>
          </div>

          <div className="flex flex-wrap">
            <div className="w-[30%]">
              <div className="pr-3 text-[#0c1b38] text-lg">
                <div className="flex flex-col gap-1">
                  <h2 className="pb-2 font-semibold">
                    Deliver To : Raju Kahn{" "}
                  </h2>
                  <p>
                    <span className="text-sm">
                      Cecilia ChapmanNulla St. Mankato Mississippi{" "}
                    </span>
                  </p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <h2>Payment Status: </h2>
                  <span className="text-base">Paid</span>
                </div>
                <span>Price : $232</span>

                <div className="mt-4 flex flex-col gap-4 bg-white shadow-md rounded-md">
                  <div className="text-[#0c1b38]">
                    <div className="flex gap-3 text-md">
                      <img
                        className="w-[50px] h-[50px]"
                        src="http://localhost:3000/images/category/1.jpg"
                        alt=""
                      />

                      <div>
                        <h2>Product Name here </h2>
                        <p>
                          <span>Brand : </span>
                          <span>Easy</span>
                          <span className="text-lg">Quantity : 3 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-4 bg-white shadow-md rounded-md">
                  <div className="text-[#0c1b38]">
                    <div className="flex gap-3 text-md">
                      <img
                        className="w-[50px] h-[50px]"
                        src="http://localhost:3000/images/category/1.jpg"
                        alt=""
                      />

                      <div>
                        <h2>Product Name here </h2>
                        <p>
                          <span>Brand : </span>
                          <span>Easy</span>
                          <span className="text-lg">Quantity : 3 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-4 bg-white shadow-md rounded-md">
                  <div className="text-[#0c1b38]">
                    <div className="flex gap-3 text-md">
                      <img
                        className="w-[50px] h-[50px]"
                        src="http://localhost:3000/images/category/1.jpg"
                        alt=""
                      />

                      <div>
                        <h2>Product Name here </h2>
                        <p>
                          <span>Brand : </span>
                          <span>Easy</span>
                          <span className="text-lg">Quantity : 3 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[70%]">
              <div className="pl-3">
                <div className="mt-4 flex flex-col bg-white shadow-md rounded-md p-4">
                  <div className="text-[#0c1b38] mt-2">
                    <div className="flex justify-start items-center gap-3">
                      <h2>Seller 1 Order : </h2>
                      <span>pending</span>
                    </div>
                    <div className="flex gap-3 text-md mt-2">
                      <img
                        className="w-[50px] h-[50px]"
                        src="http://localhost:3000/images/category/1.jpg"
                        alt=""
                      />

                      <div>
                        <h2>Product Name here </h2>
                        <p>
                          <span>Brand : </span>
                          <span>Easy</span>
                          <span className="text-lg">Quantity : 3 </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-[#0c1b38] mt-2">
                    <div className="flex justify-start items-center gap-3">
                      <h2>Seller 1 Order : </h2>
                      <span>pending</span>
                    </div>
                    <div className="flex gap-3 text-md mt-2">
                      <img
                        className="w-[50px] h-[50px]"
                        src="http://localhost:3000/images/category/1.jpg"
                        alt=""
                      />

                      <div>
                        <h2>Product Name here </h2>
                        <p>
                          <span>Brand : </span>
                          <span>Easy</span>
                          <span className="text-lg">Quantity : 3 </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderDetails;
