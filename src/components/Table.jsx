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
    <div className="mt-5 h-full">
      {data.list.map((item, index) => {
        return (
          <div key={index}>
            <table className="table-auto w-full border-2 ">
              <thead>
                <tr
                  className={index === 0 ? "bg-slate-200 font-bold " : "hidden"}
                  data-testid="thead">
                  <td className="w-30">Quantity</td>

                  <td className="w-30 ">Desciption</td>
                  <td className="w-30 ">Unit Price</td>
                  <td className="w-30 ">Total</td>
                </tr>
              </thead>
              {item.quantity && item.description && item.price ? (
                <tbody>
                  <tr>
                    <td className="w-1/6 p-2 " data-testid="quantity">
                      {item.quantity}
                    </td>

                    <td className="w-2/4" data-testid="desc">
                      {item.description}
                    </td>
                    <td data-testid="price">{item.price}</td>
                    <td className="w-1/6" data-testid="total">
                      {calTot(index)}
                    </td>
                    <td className="hidden" data-testid="totalfunction">
                      {(total += calTot(index))}
                    </td>
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
