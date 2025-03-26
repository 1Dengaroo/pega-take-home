import { useParams } from "react-router-dom";

const Create = () => {
  const { type } = useParams();
  return <h1 className="text-2xl font-bold">Create {type}</h1>;
};

export default Create;
