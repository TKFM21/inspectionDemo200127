import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOrderInfo } from "../../actions/orderInfoActionCreator";
import { postOrderTrace } from "../../actions/orderTraceActionCreator";

const ProductInsp = props => {
  const [order, setOrder] = useState("");
  const onChangeOrder = useCallback(e => setOrder(e.target.value), [setOrder]);

  const [inspectionQty, setInspQty] = useState("0");
  const onChangeInspQty = useCallback(e => setInspQty(e.target.value), [
    setInspQty
  ]);
  const [ngQty, setNgQty] = useState("0");
  const onChangeNgQty = useCallback(e => setNgQty(e.target.value), [setNgQty]);

  const onClickHandler = order => {
    const trimOrder = order.trim();
    if (!trimOrder) {
      window.alert("オーダー番号が入力されていません。");
      return;
    }
    props.fetchOrderInfo(order);
    setOrder("");
  };

  const reportOnClickHandler = (order, inspectionQty, ngQty) => {
    const okQty = Number(inspectionQty) - Number(ngQty);
    if (Number.isNaN(okQty)) {
      window.alert("数量の入力に不備があります。");
      return;
    }
    props.postOrderTrace({ order, inspectionQty, ngQty, okQty });
    setInspQty("0");
    setNgQty("0");
    props.reset();
    // props.history.push("/");
  };

  if (props.orderInfoIsLoading) return <h1>Now Loading...</h1>;
  if (props.orderTraceIsLoading) return <h1>...Now Posting...</h1>;

  if (props.orderInfo) {
    const { order_no, date, model, qty } = props.orderInfo;
    return (
      <div>
        <div>
          <h1>オーダー番号を入力してください。</h1>
          <input onChange={onChangeOrder} placeholder={"order"} />
          <button onClick={() => onClickHandler(order_no)}>検索</button>
        </div>
        <div>
          <p>オーダー番号: {order_no}</p>
          <p>型番: {model}</p>
          <p>数量: {qty}</p>
          <p>登録日時: {date.toLocaleString("ja-JP")}</p>
        </div>
        <div>
          <label>
            検査数量
            <input onChange={onChangeInspQty} />
          </label>
          <br />
          <label>
            NG数量
            <input onChange={onChangeNgQty} />
          </label>
          <br />
          <button
            onClick={() =>
              reportOnClickHandler(
                props.orderInfo.order_no,
                inspectionQty,
                ngQty
              )
            }
          >
            記録
          </button>
        </div>
        <footer>
          <Link to="/">Home</Link>
        </footer>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>オーダー番号を入力してください。</h1>
        <input onChange={onChangeOrder} placeholder={"order"} />
        <button onClick={() => onClickHandler(order)}>検索</button>
      </div>
      <footer>
        <Link to="/">Home</Link>
      </footer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    orderInfoIsLoading: state.orderInfo.isLoading,
    orderInfo: state.orderInfo.orderInfo,
    orderInfoError: state.orderInfo.error,
    orderTraceIsLoading: state.orderTrace.isLoading,
    orderTraceError: state.orderTrace.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrderInfo: order => {
      dispatch(fetchOrderInfo(order));
    },
    postOrderTrace: ({ order, inspectionQty, ngQty, okQty }) => {
      dispatch(postOrderTrace({ order, inspectionQty, ngQty, okQty }));
    },
    reset: () => {
      dispatch({type: 'RESET'});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInsp);
