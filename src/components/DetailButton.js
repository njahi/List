import { memo, useCallback } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import PopUp1 from "./PopUp1";

const DetailButton = memo(function DetailButton({ id }) {
  const [show, setShow] = useState(false);
  // usecallback hook is used to memoized this function which are being passed as props to support memoization in the parent components
  function handleShow() {
    setShow(true);
  }
  // no value needed on the dependancy array since the statesette does not change hence the usecallback hook could as well not be used in this situation.Done for practice purposes
  const handleClose = useCallback(function handleClose() {
    setShow(false);
  }, []);
  return (
    <>
      <Button
        variant='primary'
        onClick={handleShow}>
        Details
      </Button>
      <PopUp1
        onClose={handleClose}
        show={show}
        id={id}
      />
    </>
  );
});
export default DetailButton;
