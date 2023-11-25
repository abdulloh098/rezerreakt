import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';

const Consolel = () => {
  const { getItem, addItem, removeItem } = useCart();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://razer-api.onrender.com/devices')
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const newConsolel = data.filter((el) => el.category === 'Consolel');
  return (
    <>
      <h1 id="consolel" className="category">
        CONSOLE BY RAZER
      </h1>
      <div className="mice-parent">
        {newConsolel?.map((el) => {
          return (
            <div key={el._id}>
              <div className="mice-children" key={el.id}>
                <img src={el.image} alt={el.name} />
                <div className="mice-body">
                  <h3>{el.name}</h3>
                  <br />
                  <p>{el.desc}</p>
                  <div className="mice-footer">
                    <h5>US${el.price}</h5>
                    {!getItem(el._id) ? (
                      <button onClick={() => addItem({ ...el, id: el._id })}>
                        BUY
                      </button>
                    ) : (
                      <button
                        className="cancelBtn"
                        onClick={() => removeItem(el._id)}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Consolel;
