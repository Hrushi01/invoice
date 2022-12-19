import React, { useEffect } from "react";

function Table2(props) {
  const { data, setSum } = props;
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
            <table className="table-auto w-full border-b-2 border-black space-y-2 ">
              <thead>
                <tr
                  className={
                    index === 0
                      ? "border-b-2 border-black font-mono font-extrabold text-lg p-2 "
                      : "hidden "
                  }
                  data-testid="thead">
                  <td className="w-30 ">Desciption</td>
                  <td className="w-30">QTY</td>
                  <td className="w-30 ">PRICE</td>
                  <td className="w-30 ">TOTAL</td>
                </tr>
              </thead>
              <tbody>
                {item.quantity && item.description && item.price ? (
                  <tr className="text-gray-600 font-serif text-sm p-5">
                    <td className="w-2/4 p-2" data-testid="desc">
                      {item.description}
                    </td>
                    <td className="w-1/6 " data-testid="quantity">
                      {item.quantity}
                    </td>
                    <td data-testid="price">${item.price}</td>
                    <td className="w-1/6" data-testid="total">
                      ${calTot(index)}
                    </td>
                    <td className="hidden" data-testid="totalfunction">
                      {(total += calTot(index))}
                    </td>
                  </tr>
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default Table2;
