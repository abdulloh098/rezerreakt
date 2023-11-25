import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';

const Headsets = () => {
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

  const newHeadsets = data.filter((el) => el.category === 'Headsets');
  return (
    <>
      <h1 id="headsets" className="category">
        HEADSETS BY RAZER
      </h1>
      <div className="mice-parent">
        {newHeadsets?.map((el) => {
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

export default Headsets;
