import { memo, useCallback } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { PopUp1 } from "./PopUp1";

const DetailButton = memo(function DetailButton({ id }) {
  const [show, setShow] = useState(false);
  const handleShow = useCallback(function handleShow() {
    setShow(true);
  }, []);
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
