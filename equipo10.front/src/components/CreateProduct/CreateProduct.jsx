import { useState } from 'react';
import PropTypes from 'prop-types';

// Componente de campo de entrada genérico
const InputField = ({ type, name, label, value, placeholder, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input 
        type={type}
        name={name}
        id={name}
        className="form-control"
        value={value}
        placeholder= {placeholder}
        onChange={onChange}
      />
    </div>
  );
};

// Componente de campo de texto genérico
const TextAreaField = ({ name, label, value, placeholder, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        className="form-control"
        value={value}
        placeholder= {placeholder}
        onChange={onChange}
      />
    </div>
  );
};

// Componente de formulario de registro de productos
const CreateProduct = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  // Manejador de evento para enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    const product = { name, image, description, price };
    console.log(product); // Enviar el objeto de producto a través de una API
  };

  return (
    <form className='form-product' onSubmit={handleSubmit}>
      <InputField 
        type="text"
        name="name"
        label="Nombre del producto "
        value={name}
        placeholder= "producto"
        onChange={(e) => setName(e.target.value)}
      />

      <InputField 
        type="text"
        name="image"
        label="URL de la imagen "
        value={image}
        placeholder="imagen"
        onChange={(e) => setImage(e.target.value)}
      />

      <TextAreaField
        name="description"
        label="Descripción del producto "
        value={description}
        placeholder="descripcion"
        onChange={(e) => setDescription(e.target.value)}
      />

      <InputField
        type="number"
        name="price"
        label="Precio del producto "
        value={price}
        placeholder= "precio"
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit" className="btn btn-primary">
        Registrar producto
      </button>
    </form>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

TextAreaField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}



export default CreateProduct;
