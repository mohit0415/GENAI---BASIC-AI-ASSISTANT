import { ClipLoader,ClimbingBoxLoader,HashLoader,SyncLoader } from "react-spinners";

function Loader() {
  return (
    <div className="loader-overlay">
      <SyncLoader size={10} color="#1E90FF" />
    </div>
  );
}
export default Loader