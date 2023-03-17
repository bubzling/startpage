import React, { useState } from "react";
// import PropTypes from "prop-types";

// const style = makeStyles((theme) => ({
//   toggler: {
//     color: theme.colors.black,
//     fontStyle: "italic",
//     "&:hover": {
//       fontWeight: "bold",
//     },
//     "&:active": {
//       color: theme.colors.offWhite,
//     },
//   },
//   blackText: { color: theme.colors.black },
//   whiteText: { color: theme.colors.offWhite },
//   form: {
//     marginTop: theme.spacing(2),
//     marginBottom: theme.spacing(2),
//   },
//   button: {
//     "&:hover": { fontWeight: "bold" },
//   },
// }));

const AddCategory = (props) => {
  const { toggle, addCat } = props;
  const [catName, setCatName] = useState("");

  const onNameChange = (e) => setCatName(e.target.value);

  // submit add
  const submit = () => {
    addCat(catName);
    toggle();
  };

  // const classes = style();
  return (
    <>
      <button onClick={toggle}>
        <p /*variant='h5' className={classes.toggler}*/>/add_category.sh</p>
      </button>
      <p /*className={classes.blackText}*/>
        add new a new <span /*className={classes.whiteText}*/>link group</span>{" "}
        for for your startpage
      </p>

      {/* form */}
      <form /*className={classes.form}*/ onSubmit={submit}>
        <div /*container*/>
          <div /*item xs={6}*/>
            <input
              type='text'
              value={catName}
              onChange={onNameChange}
              placeholder='[category name]'
            />
          </div>
          <div /*item xs={2}*/>
            <button type='submit'>
              <p /*className={classes.button}*/>[ add ]</p>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

// AddCategory.propTypes = {};

export default AddCategory;
