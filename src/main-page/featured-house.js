import House from "../House";

const FeatureHouse = ({house}) => {
    if (house)
        return ( 
            <div>
                <div className="row featureHouse">
                    <h3 className="col-md-12 text-center">Featured House</h3>
                </div>
                <House house={house}/>
            </div>
         );
    return <div>No featured house at this time</div>;
}
 
export default FeatureHouse;