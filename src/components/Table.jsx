import React from "react";

function Table({ data, setSum }) {
  const calTot = (index) => {
    return data.list[index].quantity * data.list[index].price;
  };
  let total = 0;
  return (
    <div className="mt-5">
      {data.list.map((item, index) => {
        return (
          <div key={index}>
            <table class="table-auto w-full border-2 ">
              <tr
                className={index === 0 ? "bg-slate-200 font-bold " : "hidden"}>
                <td className="w-30">Quantity</td>

                <td className="w-30 ">Desciption</td>
                <td className="w-30 ">Unit Price</td>
                <td className="w-30 ">Total</td>
              </tr>
              {item.quantity && item.description && item.price ? (
                <tr>
                  <td className="w-1/6 p-2 ">{item.quantity}</td>

                  <td className="w-2/4">{item.description}</td>
                  <td>{item.price}</td>
                  <td className="w-1/6">{calTot(index)}</td>
                  <td className="hidden">{(total += calTot(index))}</td>
                  {console.log(total, "total")}
                  {setSum(total)}
                </tr>
              ) : (
                <></>
              )}
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default Table;
