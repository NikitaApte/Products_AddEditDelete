import { withFormik } from "formik";
import Component from "./component";

const handleSubmit = (values, { props }) => {
  const { setProductData, type, setOpen, productData, editData } = props;
  console.log(values);
  if (type === "Add") {
    setProductData((current) => [
      ...current,
      {
        id: current.length + 1,
        title: values.Title,
        description: values.Description,
        price: values.Price
      }
    ]);
    setOpen(false);
  } else {
    const filteredData = productData.filter((prod) => prod.id !== editData.id);
    filteredData.push({
      id: editData.id,
      title: values.Title,
      description: values.Description,
      price: values.Price,
      thumbnail: editData.thumbnail
    });
    filteredData.sort((a, b) => (a.id > b.id ? 1 : -1));
    setProductData(filteredData);
    setOpen(false);
  }
};

export default withFormik({
  displayName: "addProduct",
  enableReinitialize: true,
  handleSubmit,
  mapPropsToValues: (props) => {
    const { type, editData } = props;
    if (type === "Edit") {
      return {
        Title: editData?.title,
        Description: editData?.description,
        Price: editData?.price
      };
    }
    return {
      Title: "",
      Description: "",
      Price: ""
    };
  }
})(Component);
