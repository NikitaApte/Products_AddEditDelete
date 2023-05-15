import "./styles.css";
import { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddProduct from "./AddProduct";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function App() {
  const [productData, setProductData] = useState([]);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [editData, setEditData] = useState({});

  // const handleClickOpen = (type) => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  const url = "https://dummyjson.com/products";

  const getProductData = async () => {
    const jsonResponse = await fetch(url);
    const jsonData = await jsonResponse.json();
    setProductData(jsonData?.products);
  };

  useEffect(() => {
    getProductData();
  }, []);

  const deleteProduct = (id) => {
    setProductData((current) => current.filter((product) => product.id !== id));
  };

  const displayProducts = (product, index) => {
    return (
      <tr>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>
          <img src={product.thumbnail} alt={product.title} />
        </td>
        <td>
          <DeleteIcon onClick={() => deleteProduct(product.id)} />
        </td>
        <td>
          <Button
            onClick={() => {
              setOpen(true);
              setType("Edit");
              setEditData(product);
            }}
          >
            <EditIcon />
          </Button>
        </td>
      </tr>
    );
  };

  return (
    <Grid className="App" container spacing={4}>
      <Grid item xs={12}>
        <h1>Products</h1>
      </Grid>
      <Grid item xs={12}>
        <Button
          color="success"
          onClick={() => {
            setOpen(true);
            setType("Add");
          }}
          variant="contained"
        >
          Add Product
        </Button>
      </Grid>
      <Grid item xs={12}>
        <table>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Actions</th>
          </tr>
          {productData?.map((obj, index) => {
            return displayProducts(obj, index);
          })}
        </table>
      </Grid>
      {open && (
        <AddProduct
          type={type}
          open={open}
          handleClose={handleClose}
          editData={editData}
          setProductData={setProductData}
          setOpen={setOpen}
          productData={productData}
        />
      )}
    </Grid>
  );
}
