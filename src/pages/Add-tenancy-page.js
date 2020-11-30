import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Form, Button } from "react-bootstrap";
import "./pages.css";

const schema = yup.object({
  imageUrl: yup.string().required(),
  address: yup.string().required(),
  size: yup.string().required(),
  rooms: yup.string().required(),
});

export const AddTenancyFormPage = () => {
  /*const [address, setAddress] = useState("");
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [file, setFile] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];

  useEffect(() => {
    const baseUrl = `https://dawa.aws.dk/autocomplete?q=${address}`;
    if (!address || address.length < 2) {
      setOptions([]);
      setDisplay(false);
      return;
    }
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
        setDisplay(true);
      })
      .catch((err) => console.log(err));
  }, [address]);

  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();
    if (selectedFile) {
      if (types.includes(selectedFile.type)) {
        setError(null);
        setFile(selectedFile);
        reader.addEventListener("load", () => {
          setImgData(reader.result);
        });
        reader.readAsDataURL(selectedFile);
      } else {
        setFile(null);
        setImgData(null);
        setError("Please select an image file (png or jpg)");
      }
    }
  };*/

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      initialValues={{
        imageUrl: "",
        address: "",
        size: "",
        rooms: "",
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
        <Form className="add-tenancy-form" onSubmit={handleSubmit}>
          {/*<Form.Group>
            <Form.File.Input
              type="file"
              name="imageUrl"
              multiple={false}
              files={file}
              onChange={handleImageUpload}
            />
            {error && <p>{error}</p>}
            <div className="image-preview">
              <img className="new-image" alt="" src={imgData} />}
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="address"
              placeholder="Address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            ></Form.Control>

            {display && (
              <ul className="auto-adress-container">
                {options ? (
                  options.map(({ id, tekst }) => (
                    <li
                      onClick={() => {
                        setAddress(tekst);
                        setDisplay(false);
                      }}
                      className="options"
                      key={id + tekst}
                      tabIndex="0"
                      style={{ outline: "none", cursor: "pointer" }}
                    >
                      <span>{tekst}</span>
                    </li>
                  ))
                ) : (
                  <li className="users">No results found</li>
                )}
              </ul>
            )}
                </Form.Group>*/}
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Size"
              name="size"
              value={values.size}
              onChange={handleChange}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.size}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              name="rooms"
              placeholder="Rooms"
              onChange={handleChange}
              value={values.rooms}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.rooms}
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" variant="info">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
