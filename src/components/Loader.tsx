const Loader = (props: any) => {  //type it
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>
      </div>
      <h5 className="text-primary p-1"><b>{props.message}</b></h5>
    </div>
  )
}

export default Loader;
