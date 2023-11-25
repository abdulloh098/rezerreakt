import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Pradukt = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")


  useEffect(() => {
    axios
      .get('https://razer-api.onrender.com/devices')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const praductYaratish = (e) => {
    e.preventDefault()
    axios.post("https://razer-api.onrender.com/devices", {
      name: name,
      image: image,
      price: price,
      desc: desc,
      category: category

    })
      .then(() => {
        alert('Yaratildi')
        window.location.reload();
      })


  }
  const productsDelrte = async (id) => {
    await axios
      .delete(`https://razer-api.onrender.com/devices/${id}`)
      .then(() => {
        alert("o'chirildi")
        window.location.reload()
      }).catch((err) => {
        alert(err);
      });
  }

  return (
    <>
      <form onSubmit={praductYaratish}>
        <input value={name}
          onChange={(e) => setName(e.target.value)}
          required type="text"
          placeholder='name' />


        <input value={image}
          onChange={(e) => setImage(e.target.value)}
          required type="text"
          placeholder='image' />

        <input value={price}
          onChange={(e) => setPrice(e.target.value)}
          required type="number"
          placeholder='nechta ' />

        <input value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required type="text"
          placeholder='malunoti' />
           <input value={category}
          onChange={(e) => setCategory(e.target.value)}
          required type="text"
          placeholder='category' />

        <button type='submit'>Yaratildi</button>

      </form>
      <div className="otaA">
        {data?.map((el) => {
          return (
            <div className='cardA'>
              <img src={el.image} alt={el.name} />
              <h3>{el.name}</h3>
              <br />
              <h5>US${el.price}</h5>
              <p>{el.desc}</p>
              <b>{el?.category}</b>
              <br />
              <button onClick={() => productsDelrte(el?._id)}>Remove</button>
              <br />
            </div>
          );
        })}
      </div>


    </>
  )
}

export default Pradukt