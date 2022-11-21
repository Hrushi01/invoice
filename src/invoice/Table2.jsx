import React from "react";

function Table2(props) {
  const { data, setSum } = props;
  const calTot = (index) => {
    return data.list[index].quantity * data.list[index].price;
  };
  let total = 0;
  return (
    <div className="mt-5">
      {data.list.map((item, index) => {
        return (
          <div key={index}>
            <table class="table-auto w-full border-b-2 border-black space-y-2 ">
              <tr
                className={
                  index === 0
                    ? "border-b-2 border-black font-mono font-extrabold text-lg p-2 "
                    : "hidden "
                }>
                <td className="w-30 ">Desciption</td>
                <td className="w-30">QTY</td>
                <td className="w-30 ">PRICE</td>
                <td className="w-30 ">TOTAL</td>
              </tr>
              <tr className="text-gray-600 font-serif text-sm p-5">
                <td className="w-2/4 p-2">{item.description}</td>
                <td className="w-1/6 ">{item.quantity}</td>

                <td>${item.price}</td>
                <td className="w-1/6">${calTot(index)}</td>
                <td className="hidden">{(total += calTot(index))}</td>
                {console.log(total, "total")}
                {setSum(total)}
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default Table2;
