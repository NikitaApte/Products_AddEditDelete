import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
// import EditIcon from "@mui/icons-material/Edit";
// import {useState} from "react";

function AddProduct(props) {
  const {
    type,
    handleSubmit,
    values,
    open,
    handleClose,
    setFieldValue
  } = props;

  // const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const dialogContent = (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          name="Title"
          label="Title"
          variant="outlined"
          defaultValue={values.Title}
          onChange={(e) => setFieldValue("Title", e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="Description"
          label="Description"
          placeholder="Description"
          rows={3}
          multiline
          defaultValue={values.Description}
          onChange={(e) => setFieldValue("Description", e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="Price"
          label="Price"
          type="number"
          defaultValue={values.Price}
          onChange={(e) => setFieldValue("Price", e.target.value)}
        />
      </Grid>
    </Grid>
  );

  return (
    <>
      {/* <Button onClick={handleClickOpen}>
        {type === "Edit" ? (<EditIcon />) : "Add Product"}
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {type === "Edit" ? "Edit Product" : "Add Product"}
        </DialogTitle>
        <DialogContent>{dialogContent}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>
            {type === "Edit" ? "Edit Product" : "Add Product"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddProduct;
