import { connect } from "react-redux";
// import { INCREMENT, DECREMENT } from "../../../store/actionTypes";
import { addCount, cutCount } from "../../../store/actions/actionCreator";
const SubHome = (props) => {
  const { count, pageAddCount, pageCutCount } = props;
  return (
    <>
      <div
        style={{
          height: "1px",
          width: "100%",
          margin: "20px",
          overflow: "hidden",
        }}
      ></div>
      <button
        onClick={pageAddCount}
        style={{ marginRight: "30px", marginLeft: "20px" }}
      >
        增加
      </button>
      <button onClick={pageCutCount}>减少</button>

      <div>
        我是主页子页面
        <span style={{ color: "red", marginLeft: "20px", fontSize: "28px" }}>
          {count}
        </span>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return { count: state.count };
};
const mapDispatchToProps = (dispatch) => {
  return {
    pageAddCount: (num) => dispatch(addCount(1)),
    pageCutCount: (num) => dispatch(cutCount(1)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SubHome);
