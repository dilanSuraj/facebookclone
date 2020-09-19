import swal from "sweetalert";

const successAlert = (textMsg) => {
   return swal({
        title: "Successful!!",
        text: textMsg,
        icon: "success",
        dangerMode: true,
    })
}

const customErrorAlert = (txtMsg) => {
   return swal({
        title: "Error!",
        text: txtMsg,
        icon: "error",
        buttons: true,
        dangerMode: true,
    })
}
export default {
    successAlert,
    customErrorAlert
}