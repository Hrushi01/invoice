import React, { useEffect } from "react";

function Table({ data, setSum }) {
  const calTot = (index) => {
    return data.list[index].quantity * data.list[index].price;
  };
  let total = 0;

  useEffect(() => {
    setSum(total);
  });
  return (
    <div className="mt-5">
      {data.list.map((item, index) => {
        return (
          <div key={index}>
            <table className="table-auto w-full border-2 ">
              <thead>
                <tr
                  className={
                    index === 0 ? "bg-slate-200 font-bold " : "hidden"
                  }>
                  <td className="w-30">Quantity</td>

                  <td className="w-30 ">Desciption</td>
                  <td className="w-30 ">Unit Price</td>
                  <td className="w-30 ">Total</td>
                </tr>
              </thead>
              {item.quantity && item.description && item.price ? (
                <tbody>
                  <tr>
                    <td className="w-1/6 p-2 ">{item.quantity}</td>

                    <td className="w-2/4">{item.description}</td>
                    <td>{item.price}</td>
                    <td className="w-1/6">{calTot(index)}</td>
                    <td className="hidden">{(total += calTot(index))}</td>
                  </tr>
                </tbody>
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
