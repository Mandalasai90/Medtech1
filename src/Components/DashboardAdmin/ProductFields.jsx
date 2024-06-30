// import React from "react";

// function ProductFields() {
//   return (
//     <div className="w-full h-full bg-gray-100 justify-center flex items-center">
//       <div className="w-[95%]  h-full">
//         <div className="  flex flex-col my-8">
//           <h1 className="text-2xl font-normal text-gray-600 ">ADD PRODUCT</h1>
//           <p className=" my-1 w-[90px] border-blue-600 border-b-[3px]"></p>
//         </div>
//         {/* section1 start */}

//         <div className="flex justify-between items-center text-gray-600 my-6 ">
//           <div className="flex flex-col">
//             <label className="text-base">Product Category:</label>
//             <select className=" w-56 h-10 border-slate-300 border">
//               <option>Default Category</option>
//             </select>
//           </div>
//           <div className="flex flex-col">
//             <label className="text-base">
//               Product Name:<span className="text-red-600 text-2xl ">*</span>
//             </label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base">
//               NDC / UPC:<span className="text-red-600 text-2xl">*</span>
//             </label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base">Brand Name:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base">
//               Price ($) Name:<span className="text-red-600 text-2xl">*</span>
//             </label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>
//         </div>

//         {/* section1 end */}

//         {/* section2 start */}
//         <div className="flex justify-between items-center text-gray-600 my-6">
//           <div className="flex flex-col">
//             <label className="text-base">UPN Member Price ($):</label>
//             <input
//               type="text"
//               id="Upn_Mem"
//               className="w-56 h-10 border-slate-300 border "
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-base">
//               Amount In Stock:<span className="text-red-600 text-2xl ">*</span>
//             </label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base">
//               Taxable:<span className="text-red-600 text-2xl">*</span>
//             </label>
//             <select className=" w-56 h-10 border-slate-300 border">
//               <option>No</option>
//             </select>
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base">Sale Price ($):</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base"> Sale Price Form:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>
//         </div>

//         {/* section2 end */}

//         {/* section3 start */}

//         <div className="flex justify-between items-baseline text-gray-600 my-6">
//           <div className="flex flex-col">
//             <label className="text-base">Sale Price To:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-base">Manufacturer:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base">Strength:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base">Form:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="text-base"> Lot Number:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>
//         </div>

//         {/* section3 end */}

//         {/* section4 start */}
//         <div className="flex justify-between items-center text-gray-600 my-6">
//           <div className="flex flex-col">
//             <label className="text-base"> Expiration Date:</label>
//             <input
//               type="text"
//               id="product_name"
//               className=" w-56 h-10 border-slate-300 border"
//             />
//           </div>
//         </div>
//         {/* section4 end */}
//       </div>
//     </div>
//   );
// }

// export default ProductFields;


// import { useState } from "react";
import React, {useState} from "react";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
function ProductFields() {

  // format(command); {
  //   document.execCommand(command, false, null);
  // };
const products =[
  {serial:'',
    id:'26509',
    thumbnail:"img",
    name:'CARNITOR TAB 330MG UD 90',
    attribute:'Rx Product',
    status:'Enable',
    type:'Simple Product',
    sku:'54482014407-208',
    price:'$75.99'
  },
  {serial:'',
    id:'26509',
    thumbnail:"img",
    name:'CARNITOR TAB 330MG UD 90',
    attribute:'Rx Product',
    status:'Enable',
    type:'Simple Product',
    sku:'54482014407-208',
    price:'$75.99'
  },
  {serial:'',
    id:'26509',
    thumbnail:"img",
    name:'CARNITOR TAB 330MG UD 90',
    attribute:'Rx Product',
    status:'Enable',
    type:'Simple Product',
    sku:'54482014407-208',
    price:'$75.99'
  }
]

  const [isPopupVisible ,setIsPopupVisible] = useState(false)

  const handleClick =()=>{
    setIsPopupVisible(true)
  }
  const handleremove =()=>{
    setIsPopupVisible(false)
  }
   
  return (
    <div className="w-full h-full justify-center flex items-center">
      <div className="w-[95%]  h-full">
        <div className="  flex flex-col my-8">
          <h1 className="text-2xl font-normal text-gray-600 ">ADD PRODUCT</h1>
          <p className=" my-1 w-[90px] border-blue-600 border-b-[3px]"></p>
        </div>
        {/* section1 start */}

        <div className="flex justify-between items-center text-gray-600 my-6 ">
          <div className="flex flex-col">
            <label className="text-base">Product Category:</label>
            <select className=" w-56 h-10 border-slate-300 border">
              <option>Default Category</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-base">
              Product Name:<span className="text-red-600 text-2xl ">*</span>
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">
              NDC / UPC:<span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">Brand Name:</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">
              Price ($) Name:<span className="text-red-600 text-2xl">*</span>
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>
        </div>

        {/* section1 end */}

        {/* section2 start */}
        <div className="flex justify-between items-center text-gray-600 my-6">
          <div className="flex flex-col">
            <label className="text-base">UPN Member Price ($):</label>
            <input
              type="text"
              id="Upn_Mem"
              className="w-56 h-10 border-slate-300 border "
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base">
              Amount In Stock:<span className="text-red-600 text-2xl ">*</span>
            </label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">
              Taxable:<span className="text-red-600 text-2xl">*</span>
            </label>
            <select className=" w-56 h-10 border-slate-300 border">
              <option>No</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-base">Sale Price ($):</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base"> Sale Price Form:</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>
        </div>

        {/* section2 end */}

        {/* section3 start */}

        <div className="flex justify-between items-baseline text-gray-600 my-6">
          <div className="flex flex-col">
            <label className="text-base">Sale Price To:</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base">Manufacturer:</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">Strength:</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">Form:</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base"> Lot Number:</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>
        </div>

        {/* section3 end */}

        {/* section4 start */}
        <div className="flex justify-between items-center text-gray-600 my-6">
          <div className="flex flex-col">
            <label className="text-base"> Expiration Date:</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>
        </div>
        {/* section4 end */}

        {/* section5 start */}
        <div>
            <div className="text-gray-600 my-6">
                <span className="text-base">Pack Quantity :</span>
                <input 
                type="radio"
                className="ml-[2%]"
                /> {""}
                <label className="text-base ml-3">FULL</label>

                <input 
                type="radio"
                className="ml-[2%]"
                />
                <label className="text-base ml-3">PARTIAL</label>

                <input type="text"
                className="w-[30%] h-10 border-slate-300 border"/>
                <label>EA</label>
            </div>
        </div>
        {/* section5 end */}
        {/* section6 start */}

        <div>
            <div className="text-gray-600 my-6">
                <span className="text-base">Pack Type :</span>
                <input 
                type="radio"
                className="ml-[2%]"
                /> {""}
                <label className="text-base ml-3">ORIGINAL PACKAGE</label>

                <input 
                type="radio"
                className="ml-[2%]"
                />
                <label className="text-base ml-3">ORIGINAL PACKAGE - NON SEALED</label>

                
            </div>
        </div>


        
        {/* section6 end */}
        {/* section7 start */}
        <div className="text-gray-600 my-6">
            <div>
                <span className="text-base">Pack Condition :</span>
                <input 
                type="checkbox"
                className="ml-[2%]"
                />
                <label className="text-base ml-3">TORN PACKAGE LABEL</label>

                <input 
                type="checkbox"
                className="ml-[2%]"
                />
                <label className="text-base ml-3">OTHER</label>

                <input type="text"
                className="w-[30%] h-10 border-slate-300 border"/>
                
            </div>
        </div>
        {/* section7 end */}

        {/* paragraph start */}

        <div className="flex ">
        <div className="w-[90%]">
        <div className="toolbar">
          <button onClick={() => this.format('bold')} className="border border-slate-800 w-8"><b>B</b></button>
          <button onClick={() => this.format('italic')} className="border border-slate-800 w-8"><i>I</i></button>
          <button onClick={() => this.format('underline')} className="border border-slate-800 w-8"><i>U</i></button>
          <button onClick={() => this.format('justifyLeft')} className="border border-slate-800 w-8"><FaAlignLeft/></button>
          <button onClick={() => this.format('justifyCenter')} className="border border-slate-800 w-8"><FaAlignCenter/></button>
          <button onClick={() => this.format('justifyRight')} className="border border-slate-800 w-8"><FaAlignRight/></button>
          <button onClick={() => this.format('justifyFull')} className="border border-slate-800 w-8"><FaAlignJustify/></button>
        </div>
        {/* <div className="content" contentEditable={true}>
          Enter your paragraph here...
        </div> */}
        <textarea 
        type='text'/>
      </div>

      <div>
        <div className="toolbar">
        <button onClick={() => this.format('bold')} className="border border-slate-800 w-8"><b>B</b></button>
          <button onClick={() => this.format('italic')} className="border border-slate-800 w-8"><i>I</i></button>
          <button onClick={() => this.format('underline')} className="border border-slate-800 w-8"><i>U</i></button>
          <button onClick={() => this.format('justifyLeft')} className="border border-slate-800 w-8"><FaAlignLeft/></button>
          <button onClick={() => this.format('justifyCenter')} className="border border-slate-800 w-8"><FaAlignCenter/></button>
          <button onClick={() => this.format('justifyRight')} className="border border-slate-800 w-8"><FaAlignRight/></button>
          <button onClick={() => this.format('justifyFull')} className="border border-slate-800 w-8"><FaAlignJustify/></button>
        </div>
        <textarea 
        type='text'
        className=""/>
      </div>
        </div>
        {/* paragraph end */}
        {/* section 8 strt */}
        <div className="flex justify-between items-baseline text-gray-600 my-6">
          <div className="flex flex-col">
            <label className="text-base">Uri Key: (Related to goggle search)</label>
            <input
              type="text"
              id="product_name"
              className=" w-80 h-10 border-slate-300 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base">Meta Title:(Related to google search)</label>
            <input
              type="text"
              id="product_name"
              className=" w-80 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">Meta Keywords:(Related to google search)</label>
            <textarea
              type=""
              id="product_name"
              className=" w-80 h-14 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">Meta Description:(Research to google search)</label>
            <textarea
              type="area"
              id="product_name"
              className=" w-80 h-14 border-slate-300 border"
            />
          </div>

         
        </div>
        {/* section8 end */}
        {/* section text are start */}
       
        {/* section text area end */}

        {/* section9 start */}
        <div className="flex justify-between items-baseline text-gray-600 my-6">
          <div className="flex flex-col">
            <label className="text-base">Salt Composition:</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-base">Height {""}(in):</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">Width{""}(in):</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base">Length{""}(in):</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base"> Weight{""}(in):</label>
            <input
              type="text"
              id="product_name"
              className=" w-56 h-10 border-slate-300 border"
            />
          </div>
        </div>

        {/* section9 end */}

        {/* table1 start */}
        <div>

        <div className="flex flex-col">
          <label className="text-base">Tier Price:</label>
          <table className="border border-slate-800">
            <thead>
              <tr >
                <th className=" border border-slate-800 p-2  text-left text-base h-11 bg-sky-500">Websites</th>
                <th className=" border border-slate-800 p-2  text-left text-base bg-sky-500">Customer Group</th>
                <th className=" border border-slate-800 text-base  text-left p-2 bg-sky-500">Qty</th>
                <th className=" border border-slate-800 text-base  text-left p-2 bg-sky-500" >Price($)</th>
                <th className=" border border-slate-800 text-base  text-left p-2 bg-sky-500">Action</th>
                <th className=" border border-slate-800 text-base  text-left p-2 bg-sky-500">
                  <button className="border border-gray-950 bg-slate-600 text-white w-14"
                  onClick={handleClick}>Add</button> 
                  { isPopupVisible &&(
                    <div>
                      <tbody>
                      <tr>
                        <td>
                          <select>
                            <option>All Websites</option>
                            <option>Main Website</option>
                          </select>
                        </td>
                        <td>
                          <select>
                            <option>All Groups</option>
                            <option>Not Logged In</option>
                            <option>General</option>
                            <option>Prescription seller</option>
                            <option>General Merchandise seller</option>
                            <option>UPN Member</option>
                          </select>
                        </td>
                        <td>
                          <input 
                          type="text"/>

                        <input 
                          type="text"
                          className="w-40"/>

                          <button className="border border-slate-700 bg-sky-500 w-24 p-2" onClick={handleremove}>Delete</button>
                        </td>
                      </tr>
                      </tbody>
                    </div>
                 ) }
                  </th>
              </tr>
            </thead>
          </table>
        </div>
        </div>
        {/* table1 end */}

        {/* section start */}
        <div className="my-6">
          <span className="text-base" >States (Please select multiple states by clicking on Ctrl Button) :</span>
        <div>
          <select className="w-60 h-11 border border-slate-500">
            <option >All Selected</option>
          </select>
        </div>
        </div>
        {/* section end */}
        <div>
          <div  className="flex justify-between my-6">
          <div className="flex flex-col">
            <p>Customizable products allow customers to choose options (Ex: shirt color). You need to create a simple product for each 
            </p>
            <p>customization (Ex: a product for each color).</p>
          </div>
          <div>
            <button className="border border-gray-600 bg-sky-600 text-base p-3 font-semibold"> Create Customization</button>
          </div>
          </div>
        </div>
        {/* section end */}

        {/* section inputs start */}
        <div className="my-6">
          <div className="flex flex-col">
            <label>Height {""} in</label>
            <input type="text"
            className="h-10 border border-gray-400"/>
          </div>
          <div className="flex flex-col my-6">
            <label>width {""} in</label>
            <input type="text"
            className="h-10 border border-gray-400"/>
          </div>
          <div className="flex flex-col my-6">
            <label>Length {""} in</label>
            <input type="text"
            className="h-10 border border-gray-400"/>
          </div>
          <button className="border border-gray-400  bg-sky-600 text-base  font-semibold  p-2 w-28 ">SAVE</button>
        </div>
        {/* section inputs end */}
        {/* section start */}
        <h1 className="text-2xl font-semibold">Related Products </h1>
        <div className="flex  justify-between">
          <p>Related products are shown to customers in addition to the item the customer is looking at. </p>
       <button className="border border-gray-400 bg-sky-600 text-xl font-semibold p-2"> Filter</button>
        </div>
        {/* section end */}

        {/* section table start */}

        <div className="my-6">
          <table>
            <thead>
              <tr>
              <th className="border border-slate-800 p-2 h-2x text-left text-base bg-sky-500 w-32">
                <select className="text-end"></select>
              </th>
                <th className="border border-slate-800 p-2 h-2x text-left text-base bg-sky-500 w-32">ID</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-40">Thumbnail</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-96">Name</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-44">Attribute Set</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-32">Status</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-44">Type</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-44">SKU</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-32">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product,index)=>(
              <tr key={index}>
                <td className="border border-slate-800 h-12 p-2">{product.serial}</td>
                <td className="border border-slate-800 p-2"> {product.id}</td>
                <td className="border border-slate-800 p-2">{product.thumbnail}</td>
                <td className="border border-slate-800 p-2">{product.name}</td>
                <td className="border border-slate-800 p-2">{product.attribute}</td>
                <td className="border border-slate-800 p-2">{product.status}</td>
                <td className="border border-slate-800 p-2">{product.type}</td>
                <td className="border border-slate-800 p-2">{product.sku}</td>
                <td className="border border-slate-800 p-2">{product.price}</td>
              </tr>))}
            </tbody>
          </table>
        </div>
        {/* section table end */}
         {/* section start */}
         <h1 className="text-2xl font-semibold">Up-Sell Products </h1>
        <div className="flex  justify-between">
          <p>An up-sell item is offered to the customer as a pricier or higher-quality alternative to the product the customer is looking at.
          </p>
       <button className="border border-gray-400 bg-sky-600 text-xl font-semibold p-2"> Filter</button>
        </div>
        {/* section end */}

        {/* section table start */}

        <div className="my-6">
          <table>
            <thead>
              <tr>
              <th className="border border-slate-800 p-2 h-2x text-left text-base bg-sky-500 w-32">
                <select className="text-end"></select>
              </th>
                <th className="border border-slate-800 p-2 h-2x text-left text-base bg-sky-500 w-32">ID</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-40">Thumbnail</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-96">Name</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-44">Attribute Set</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-32">Status</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-44">Type</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-44">SKU</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-32">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product,index)=>(
              <tr key={index}>
                <td className="border border-slate-800 h-12 p-2">{product.serial}</td>
                <td className="border border-slate-800 p-2"> {product.id}</td>
                <td className="border border-slate-800 p-2">{product.thumbnail}</td>
                <td className="border border-slate-800 p-2">{product.name}</td>
                <td className="border border-slate-800 p-2">{product.attribute}</td>
                <td className="border border-slate-800 p-2">{product.status}</td>
                <td className="border border-slate-800 p-2">{product.type}</td>
                <td className="border border-slate-800 p-2">{product.sku}</td>
                <td className="border border-slate-800 p-2">{product.price}</td>
              </tr>))}
            </tbody>
          </table>
        </div>
        {/* section table end */}
         {/* section start */}
         <h1 className="text-2xl font-semibold">Cross-Sell Products </h1>
        <div className="flex  justify-between">
          <p>These "impulse-buy" products appear next to the shopping cart as cross-sells to the items already in the shopping cart.
          </p>
       <button className="border border-gray-400 bg-sky-600 text-xl font-semibold p-2"> Filter</button>
        </div>
        {/* section end */}

        {/* section table start */}

        <div className="my-6">
          <table>
            <thead>
              <tr>
              <th className="border border-slate-800 p-2 h-2x text-left text-base bg-sky-500 w-32">
                <select className="text-end"></select>
              </th>
                <th className="border border-slate-800 p-2 h-2x text-left text-base bg-sky-500 w-32">ID</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-40">Thumbnail</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-96">Name</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-44">Attribute Set</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-32">Status</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-44">Type</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-44">SKU</th>
                <th className="border border-slate-800 p-2  text-left text-base bg-sky-500 w-32">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product,index)=>(
              <tr key={index}>
                <td className="border border-slate-800 h-12 p-2">{product.serial}</td>
                <td className="border border-slate-800 p-2"> {product.id}</td>
                <td className="border border-slate-800 p-2">{product.thumbnail}</td>
                <td className="border border-slate-800 p-2">{product.name}</td>
                <td className="border border-slate-800 p-2">{product.attribute}</td>
                <td className="border border-slate-800 p-2">{product.status}</td>
                <td className="border border-slate-800 p-2">{product.type}</td>
                <td className="border border-slate-800 p-2">{product.sku}</td>
                <td className="border border-slate-800 p-2">{product.price}</td>
              </tr>))}
            </tbody>
          </table>
        </div>
        {/* section table end */}

      </div>
    </div>
  );
}

export default ProductFields;
