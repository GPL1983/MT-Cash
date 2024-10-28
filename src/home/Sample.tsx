import React, { useEffect } from "react";
// import { SampleItemProps } from "./home.types";
// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchSampleData } from "../store/sampleSlice";

const Sample: React.FC = () => {
  //   const [sampledata, setSampledata] = useState<SampleItemProps[]>([]);
  const dispatch = useAppDispatch();
  const sampledata = useAppSelector((state) => state.sample.data);
  const loading = useAppSelector((state) => state.sample.loading);
  const error = useAppSelector((state) => state.sample.error);

  useEffect(() => {
    dispatch(fetchSampleData());
  }, []);

  //   const fetchSampledata = async () => {
  //     try {
  //       const response = await fetch(`https://fakestoreapi.com/products`);
  //       if (response.ok) {
  //         const data = await response.json();
  //         setSampledata(data);
  //       }
  //     } catch (error) {
  //       throw new Error("some api error");
  //     }
  //   };
  //   console.log(sampledata);

  if (loading) {
    return <h1>LOADING..........</h1>;
  }

  if (error) {
    return <h1>ERROR..........</h1>;
  }

  return (
    <>
      {sampledata.length > 0 &&
        sampledata.map((item) => {
          const {
            id,
            title,
            image,
            description,
            price,
            category,
            rating: { rate, count },
          } = item;
          return (
            <div key={id} className="border p-3">
              <div className="title mb-2">
                <strong>{title}</strong>
              </div>
              <div className="price mb-2">
                <strong>price: </strong>
                {price}
              </div>
              <div className="description mb-2">
                <strong>description: </strong>
                {description}
              </div>
              <div className="category mb-2">
                <strong>category: </strong>
                {category}
              </div>
              <img src={image} alt="" width={50} />
              <div className="count">
                <strong>count: </strong>
                {count}
              </div>
              <div className="rating">
                <strong>rate: </strong>
                {rate}
              </div>
            </div>
          );
        })}
    </>
  );
};
export default Sample;
