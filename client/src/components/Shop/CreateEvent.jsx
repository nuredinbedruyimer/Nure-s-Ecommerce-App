import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import { categoriesData } from "../../static/CategoriesData";
import { createEvent } from "../../redux/actions/Event";

const CreateEvent = () => {
  const { shop } = useSelector((state) => state.shop);

  const { isLoading, success, error } = useSelector((state) => state.events);

  console.log("Success:", success);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [stock, setStock] = useState();
  const [start_date, setStartDate] = useState(null);
  const [end_date, setEndDate] = useState(null);

  const handleImageChange = (e) => {
    const files_list = e.target.files;
    const files = Array.from(files_list);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        // Read Image From Our Form And Add to the Previous Elements

        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };
      // Read Our Image As ReadAsUrl Instead of Other Format
      reader.readAsDataURL(file);
    });
  };
  useEffect(() => {
    if (error) {
      toast.error("Product Creating Unsuccessfull !!");
    }
    if (success === true) {
      toast.success("Product Created Successfully !!!");
      navigate("/dashboard");
      window.location.reload();
    }
  }, [dispatch, success, error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    images.forEach((image) => {
      formData.set("images", image);
    });
    console.log(start_date.toISOString());
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("tags", tags);
    formData.append("original_price", originalPrice);
    formData.append("discount_price", discountPrice);
    formData.append("stock", stock);
    formData.append("shop_id", shop._id);
    formData.append("start_date", start_date.toISOString());
    formData.append("end_date", end_date.toISOString());
    dispatch(createEvent(formData));
    console.log("Form Data", formData);
  };

  console.log("Start Date :", start_date);
  const startDateHandler = (e) => {
    const start = new Date(e.target.value);
    const min_time = 5 * 24 * 60 * 60 * 1000;
    const required_iterval = new Date(start.getTime() + min_time);
    setStartDate(required_iterval);
    setEndDate(null);
    const end_Date_Element = document.getElementById("end_date");
    console.log("Element", end_Date_Element);
    console.log("Hello", required_iterval.toISOString().slice(0, 10));

    end_Date_Element.min = required_iterval.toISOString().slice(0, 10);
  };
  const endDateHandler = (e) => {
    const end = new Date(e.target.value);
    setEndDate(end);
  };
  const right_now = new Date().toISOString().slice(0, 10);

  const min_end_date = start_date
    ? new Date(start_date.getTime() + 5 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10)
    : "";

  return (
    <div className="w-[90%] 800px:w-[75%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center italic">
        Event Create
      </h5>
      {/* create product form */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Event Product Name..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            cols="30"
            required
            rows="8"
            type="text"
            name="description"
            value={description}
            className="mt-2 appearance-none shadow-md block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Your Event Product Description..."
          ></textarea>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Choose a category">Choose a category</option>
            {categoriesData &&
              categoriesData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        <br />
        <div>
          <label className="pb-2">Tags</label>
          <input
            type="text"
            name="tags"
            value={tags}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter Your Event Tags..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">Original Price</label>
          <input
            type="number"
            name="price"
            value={originalPrice || ""}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setOriginalPrice(e.target.value)}
            placeholder="Enter Enter Your Event Products Price.."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Price (With Discount) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={discountPrice || ""}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDiscountPrice(e.target.value)}
            placeholder="Enter Your Discount..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Product Stock <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={stock || " "}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setStock(e.target.value)}
            placeholder="Enter Your Event Stocks..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Start Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="start_date"
            value={start_date ? start_date.toISOString().slice(0, 10) : " "}
            id="start_date"
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={startDateHandler}
            placeholder="Enter Your Event Start Date..."
            min={right_now}
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            End Data <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="end_date"
            id="end_date"
            value={end_date ? end_date.toISOString().slice(0, 10) : ""}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={endDateHandler}
            placeholder="Enter Your Event Deadline..."
            min={min_end_date}
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Upload Images <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {images &&
              images.map((i) => (
                <img
                  src={i}
                  key={i}
                  alt=""
                  className="h-[120px] w-[120px] object-cover m-2"
                />
              ))}
          </div>
          <br />
          <div>
            <input
              type="submit"
              value="Create"
              className=" text-white mt-2 bg-[purple] cursor-pointer text-3 appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
