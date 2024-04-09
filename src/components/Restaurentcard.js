import { imgSrc } from "../Utils/constant";
import { styleCard } from "../Utils/constant";

const Restaurentcard = (props) => {
  const { resdata } = props;

  return (
    <div className="res-card w-64  m-4 p-2  " style={styleCard}>
      <img
        src={`${imgSrc}${resdata.info.cloudinaryImageId}`}
        alt=""
        style={{ width: "100%", height: "60%" }}
      />
      <h3 className="font-bold text-2xl">{resdata.info.name}</h3>
      <h4 className="font-bold text-lg">{resdata.info.cuisines.join(",")}</h4>
      <h4>{resdata.info.costForTwo}</h4>
      <p className="text-green-500 font-extrabold">
        {resdata.info.avgRatingString}{" "}
        <span className="text-orange-300 font-bold">
          {resdata.info.sla.deliveryTime}-minutes
        </span>
      </p>
    </div>
  );
};
// higr order Component
// it will import Restaurentcard nd return PromotedRestaurentcard

export const withPromotedLabel = (Restaurentcard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-slate-900 text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <Restaurentcard {...props} />
      </div>
    );
  };
};

export default Restaurentcard;
