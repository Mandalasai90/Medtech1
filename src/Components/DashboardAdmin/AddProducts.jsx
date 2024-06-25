import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";

const AddProducts = () => {
  const stats = [
    { label: "Total Product", value: 150, percentage: "75%" },
    { label: "Total Approved Product", value: 120, percentage: "60%" },
    { label: "Total Enabled Product", value: 90, percentage: "45%" },
    { label: "Price", value: "$2000", percentage: "50%" },
  ];

  const products = [
    // Sample data
    {
      id: 1,
      thumbnail: "DO62D23",
      name: "Product 1",
      attributeSet: "Set 1",
      productStatus: "Available",
      status: "Active",
      type: "Type A",
      sku: "54447743",
      qty: "1",
      qtySold: "0",
      qtyconfirm: "0",
      qtyPending: "0",
      price: "$76.2",
      created: "sep 2021",
      visibility: "Catalog",
      websites: "Main Website",
      Action: "edit",
    },
    {
      id: 2,
      thumbnail: "DO62D23",
      name: "Product 2",
      attributeSet: "Set 2",
      productStatus: "Out of Stock",
      status: "Inactive",
      type: "Type B",
      sku: "54447743",
      qty: "2",
      qtySold: "1",
      qtyconfirm: "0",
      qtyPending: "1",
      price: "$62.99",
      created: "sep 8 2021",
      visibility: "Catalog",
      websites: "Main Website",
      Action: "edit",
    },
  ];

  return (
    <div className=" bg-gray-100 w-[calc(100%-288px)] h-full flex justify-center items-center ">
      <div className="w-[95%] h-full mt-8">
        <div className="  flex justify-between ">
          <p className="text-[25px] font-semibold">
            {" "}
            Marketplace Product List{" "}
          </p>
          <div className="flex items-center bg-blue-900 p-2 rounded-lg text-white text-[20px]">
            <FiPlus />
            <button className="ml-1"> Add New Product</button>
          </div>
        </div>

        <div className=" flex my-4 -ml-8 justify-around items-center p-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 h-32 w-72  border rounded-lg shadow-lg flex justify-between items-center bg-white"
            >
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="text-lg  font-medium">{stat.label}</div>
                  <div className="menu-icon">
                    <CiMenuKebab />
                  </div>
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <div className="text-3xl font-semibold">{stat.value}</div>
                  <div className="text-sm text-green-500 bg-green-100 p-2 rounded-lg">
                    ↑ {stat.percentage}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className="flex justify-end ">
            <button className="bg-green-300 p-2">Filter</button>
            <select className="ml-2">
              <option>Columns</option>
            </select>
          </div>

          <div className="overflow-x-scroll w-full mt-4">
            <table className=" rounded-lg  bg-white">
              <thead>
                <tr>
                  <th className="border-b-2 py-4 min-w-28 pl-4 text-left">Product ID</th>
                  <th className="border-b-2 min-w-28  text-left">Thumbnail</th>
                  <th className="border-b-2 min-w-28 text-left">Name</th>
                  <th className="border-b-2 min-w-28 text-left">
                    Attribute Set
                  </th>
                  <th className="border-b-2 min-w-28 text-left">
                    Product Status
                  </th>
                  <th className="border-b-2 min-w-28 text-left">Status</th>
                  <th className="border-b-2 min-w-28 text-left">Type</th>
                  <th className="border-b-2 min-w-28 text-left">SKU</th>
                  <th className="border-b-2 min-w-28 text-left">Qty</th>
                  <th className="border-b-2 min-w-28 text-left">Qty Sold</th>
                  <th className="border-b-2 min-w-28 text-left">
                    Qty Confirmed
                  </th>
                  <th className="border-b-2 min-w-28 text-left">Qty Pending</th>
                  <th className="border-b-2 min-w-28 text-left">Price</th>
                  <th className="border-b-2 min-w-28 text-left">Created At</th>
                  <th className="border-b-2 min-w-28 text-left">Visibility</th>
                  <th className="border-b-2 min-w-28 text-left">Website</th>
                  <th className="border-b-2 min-w-28 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="border-b border-gray-300 pl-4 py-4">
                      {product.id}
                    </td>
                    <td className="border-b border-gray-300  py-4">
                      {product.thumbnail}
                    </td>
                    <td className="border-b border-gray-300  py-4">
                      {product.name}
                    </td>
                    <td className="border-b border-gray-300  py-4">
                      {product.attributeSet}
                    </td>
                    <td className="border-b border-gray-300  py-4">
                      {product.productStatus}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.status}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.type}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.sku}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.qty}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.qtySold}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.qtyconfirm}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.qtyPending}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.price}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.created}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.visibility}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.websites}
                    </td>
                    <td className="border-b border-gray-300 py-4">
                      {product.Action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
