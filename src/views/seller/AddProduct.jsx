import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdImages, IoMdCloseCircle } from "react-icons/io";

const AddProduct = () => {
  const categories = [
    {
      id: 1,
      name: "Sports",
    },
    {
      id: 2,
      name: "Tshirt",
    },
    {
      id: 3,
      name: "Mobile",
    },
    {
      id: 4,
      name: "Computer",
    },
    {
      id: 5,
      name: "Watch",
    },
    {
      id: 6,
      name: "Pant",
    },
  ];
  const [state, setState] = useState({
    name: "",
    description: "",
    discount: "",
    price: "",
    brand: "",
    stock: "",
  });
  const [showCategory, setShowCategory] = useState(false);
  const [category, setCategory] = useState("");
  const [allCategory, setAllCategory] = useState(categories);
  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState([]);
  const [showImage, setShowImage] = useState([]);

  const handleImage = (e) => {
    let files = e.target.files;
    if (files.length > 0) {
      setImages([...images, ...files]);
      let imageUrl = [];
      for (let i = 0; i < files.length; i++) {
        imageUrl.push({ url: URL.createObjectURL(files[i]) });
      }
      setShowImage([...showImage, ...imageUrl]);
    }
  };

  const changeImage = (file, i) => {
    if (!file) return;
    let newImages = [...images];
    newImages[i] = file;
    setImages(newImages);
    let newShowImage = [...showImage];
    newShowImage[i] = { url: URL.createObjectURL(file) };
    setShowImage(newShowImage);

    // or
    /**
     * let tempURL = showImage;
     * let tempImages = images;
     * tempImages[i] = file;
     * tempURL[i] ={url: URL.createObjectURL(file)};
     * setImages([...tempImages]);
     * setShowImage([...tempURL]);
     */
  };

  const removeImage = (i) => {
    let newImages = images.filter((img, index) => index !== i);
    const newShowImage = showImage.filter((img, index) => index !== i);
    setImages(newImages);
    setShowImage(newShowImage);
  };

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const searchCategory = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      let filterCategory = allCategory.filter((c) =>
        c.name.toLowerCase().includes(value.toLowerCase())
      );
      setAllCategory(filterCategory);
    } else {
      setAllCategory(categories);
    }
  };
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-white shadow-md rounded-md">
        <div className="flex justify-between items-center pb-4">
          <h1 className="app-dark-text  text-xl font-semibold">Add Product</h1>
          <Link className="bg-violet-600 hover:shadow-violet-500/40 hover:shadow-lg text-white rounded-md px-7 py-2 my-2">
            All Product
          </Link>
        </div>
        <div>
          <form>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full app-dark-text ">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name">Product Name</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-transparent border border-[#8A30E2] rounded-md app-dark-text"
                  onChange={handleInput}
                  value={state.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Product Name"
                />
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="brand">Product Brand</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-transparent border border-[#8A30E2] rounded-md app-dark-text "
                  onChange={handleInput}
                  value={state.brand}
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="Brand Name"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full app-dark-text">
              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="category">Category</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-transparent border border-[#8A30E2] rounded-md app-dark-text"
                  readOnly
                  onClick={() => setShowCategory(!showCategory)}
                  onChange={handleInput}
                  value={category}
                  type="text"
                  name="category"
                  id="category"
                  placeholder="--Select Category"
                />
                <div
                  className={`absolute top-[101%] bg-white shadow-lg w-full transition-all ${
                    showCategory ? "scale-100" : "scale-0"
                  } `}
                >
                  <div className="w-full px-4 py-2 fixed">
                    <input
                      className="px-3 py-1 w-full focus:border-indigo-500 outline-none bg-transparent border border-slate-300 rounded-md app-dark-text overflow-hidden"
                      type="text"
                      onChange={searchCategory}
                      placeholder="search"
                      value={searchValue}
                    />
                  </div>
                  <div className="pt-14"></div>
                  <div className="flex justify-start items-start flex-col h-[200px] overflow-x-scroll">
                    {allCategory.map((c, i) => (
                      <span
                        key={i}
                        className={`px-4 py-2 w-full hover:bg-[#8A30E2] hover:text-white cursor-pointer hover:shadow-lg ${
                          category === c.name && "bg-[#8A30E2] text-white"
                        }`}
                        onClick={() => {
                          setShowCategory(false);
                          setCategory(c.name);
                          setSearchValue("");
                          setAllCategory(categories);
                        }}
                      >
                        {c.name}{" "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="stock">Product Stock</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-transparent border border-[#8A30E2] rounded-md text-[#0c1b38"
                  onChange={handleInput}
                  value={state.stock}
                  type="text"
                  name="stock"
                  id="stock"
                  placeholder="Product Stock"
                />
              </div>
            </div>

            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full app-dark-text">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="price">Price</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-transparent border border-[#8A30E2] rounded-md app-dark-text"
                  onChange={handleInput}
                  value={state.price}
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Price"
                />
              </div>

              <div className="flex flex-col w-full gap-1">
                <label htmlFor="discount">Discount</label>
                <input
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-transparent border border-[#8A30E2] rounded-md app-dark-text"
                  onChange={handleInput}
                  value={state.discount}
                  type="number"
                  name="discount"
                  id="discount"
                  placeholder="Discount by %"
                />
              </div>
            </div>

            <div className="flex flex-col w-full gap-1">
              <label htmlFor="description" className="app-dark-text">
                Description
              </label>
              <textarea
                className="px-4 py-2 focus:border-indigo-500 outline-none bg-transparent border border-[#8A30E2] rounded-md app-dark-text"
                onChange={handleInput}
                value={state.description}
                name="description"
                id="description"
                placeholder="Description"
                cols="10"
                rows="4"
              ></textarea>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full app-dark-text my-4">
              {showImage.map((img, i) => (
                <div key={img.url} className="h-[180px] relative group">
                  <label htmlFor={i}>
                    <img
                      className="w-full h-full rounded-sm"
                      src={img.url}
                      alt=""
                    />
                    <div className="opacity-0 group-hover:opacity-60 duration-300 absolute left-0 bottom-0 right-0 z-10 flex justify-center items-center   h-[180px] bg-black  font-semibold cursor-pointer ">
                      <div className="z-20 border rounded-md text-xs border-white p-2 text-white">
                        Change Image
                      </div>
                    </div>
                  </label>
                  <input
                    onChange={(e) => changeImage(e.target.files[0], i)}
                    type="file"
                    id={i}
                    className="hidden z-50"
                  />
                  <span
                    onClick={() => removeImage(i)}
                    className="p-2 z-10 cursor-pointer bg-violet-700 hover:shadow-lg hover:shadow-violet-400/50 text-white absolute -top-2 -right-2 rounded-full"
                  >
                    <IoMdCloseCircle />
                  </span>
                </div>
              ))}
              <label
                className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-violet-800 w-full app-dark-text"
                htmlFor="image"
              >
                <span>
                  <IoMdImages />
                </span>
                <span>Select Image </span>
              </label>
              <input
                className="hidden"
                onChange={handleImage}
                multiple
                type="file"
                id="image"
              />
            </div>

            <div className="flex">
              <button className="bg-violet-600 hover:shadow-violet-500/40hover:shadow-md text-white rounded-md px-7 py-2 my-2">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;
