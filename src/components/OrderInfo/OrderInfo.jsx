import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOrderInfo } from "../../actions/orderInfoActionCreator";

const OrderInfo = props => {
  const [order, setOrder] = useState("");
  const onChange = useCallback(e => setOrder(e.target.value), [setOrder]);

  const onClickHandler = order => {
    const trimOrder = order.trim();
    if (!trimOrder) {
      window.alert("オーダー番号が入力されていません。");
      return;
    }
    props.fetchOrderInfo(order);
    setOrder("");
  };

  if (props.orderInfo.isLoading) return <h1>Now Loading...</h1>;

  if (props.orderInfo.orderInfo) {
    const {
      order_no,
      date,
      item_no,
      model,
      qty,
      site
    } = props.orderInfo.orderInfo;
    console.log(props.orderInfo.orderInfo);
    return (
      <div>
        <div>
          <h1>オーダー番号を入力してください。</h1>
          <input onChange={onChange} placeholder={"order"} />
          <button onClick={() => onClickHandler(order_no)}>検索</button>
        </div>
        <div>
          <p>オーダー番号: {model}</p>
          <p>型番: {model}</p>
          <p>アイテム番号: {item_no}</p>
          <p>数量: {qty}</p>
          <p>サイト: {site}</p>
          <p>登録日時: {date.toLocaleString("ja-JP")}</p>
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
        <input onChange={onChange} placeholder={"order"} />
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
    isLoading: state.isLoading,
    orderInfo: state.orderInfo,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrderInfo: order => {
      dispatch(fetchOrderInfo(order));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo);
