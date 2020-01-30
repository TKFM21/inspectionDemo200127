import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOrderInfo } from "../../actions/orderInfoActionCreator";
import { fetchOrderTrace } from "../../actions/orderTraceActionCreator";
import { fetchFinalRecord } from "../../actions/finalRecordActionCreator";
import "./OrderHistory.css";

const OrderHistory = props => {
  const [order, setOrder] = useState("");
  const onChange = useCallback(e => setOrder(e.target.value), [setOrder]);

  const onClickHandler = order => {
    const trimOrder = order.trim();
    if (!trimOrder) {
      window.alert("オーダー番号が入力されていません。");
      return;
    }
    props.fetchOrderInfo(order);
    props.fetchOrderTrace(order);
    props.fetchFinalRecord(order);
    setOrder("");
  };

  if (
    props.orderInfoIsLoading ||
    props.orderTraceIsLoading ||
    props.finalRecordIsLoading
  )
    return <h1>Now Loading...</h1>;

  if (props.orderInfo && props.orderTraces && props.finalRecords) {
    const { order_no, date, model, qty } = props.orderInfo;
    const orderTraceList = props.orderTraces.map((orderTrace, index) => {
      return (
        <tr key={index}>
          <td>{orderTrace.processName}</td>
          <td>{new Date(orderTrace.timestamp).toLocaleString("ja-JP")}</td>
          <td>{orderTrace.inspectionQty}</td>
          <td>{orderTrace.okQty}</td>
          <td>{orderTrace.ngQty}</td>
          <td>{orderTrace.s3 === "no" ? "no data" : orderTrace.s3}</td>
        </tr>
      );
    });
    const finalRecordList = props.finalRecords.map((finalRecord, index) => {
      return (
        <tr key={index}>
          <td>{finalRecord.order}</td>
          <td>{finalRecord.model}</td>
          <td>{finalRecord.judge ? "合格" : "NG"}</td>
          <td>{new Date(finalRecord.timestamp).toLocaleString("ja-JP")}</td>
        </tr>
      );
    });
    return (
      <div className="order-history">
        <div>
          <h1>工程履歴</h1>
          <input onChange={onChange} placeholder={"order"} />
          <button onClick={() => onClickHandler(order_no)}>検索</button>
        </div>
        <hr/>
        <div>
          <h2>オーダー情報</h2>
          <table style={{ margin: "20px auto" }}>
            <thead>
              <tr>
                <th>オーダー番号</th>
                <th>型番</th>
                <th>数量</th>
                <th>登録日時</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{order_no}</td>
                <td>{model}</td>
                <td>{qty}</td>
                <td>{date.toLocaleString("ja-JP")}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr/>
        <div>
          <h2>特性・製品検査履歴</h2>
          <table style={{ margin: "20px auto" }}>
            <thead>
              <tr>
                <th>工程</th>
                <th>日時</th>
                <th>検査数</th>
                <th>OK数</th>
                <th>NG数</th>
                <th>S3</th>
              </tr>
            </thead>
            <tbody>{orderTraceList}</tbody>
          </table>
        </div>
        <hr/>
        <div>
          <h2>最終検査履歴</h2>
          <table style={{ margin: "20px auto" }}>
            <thead>
              <tr>
                <th>オーダー</th>
                <th>型番</th>
                <th>判定</th>
                <th>日時</th>
              </tr>
            </thead>
            <tbody>{finalRecordList}</tbody>
          </table>
        </div>
        <footer>
          <Link to="/">Home</Link>
        </footer>
      </div>
    );
  }

  return (
    <div className="order-history">
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
    orderInfoIsLoading: state.orderInfo.isLoading,
    orderInfo: state.orderInfo.orderInfo,
    orderInfoError: state.orderInfo.error,
    orderTraceIsLoading: state.orderTrace.isLoading,
    orderTraces: state.orderTrace.orderTraces,
    orderTraceError: state.orderTrace.error,
    finalRecordIsLoading: state.finalRecord.isLoading,
    finalRecords: state.finalRecord.finalRecords,
    finalRecordError: state.finalRecord.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrderInfo: order => {
      dispatch(fetchOrderInfo(order));
    },
    fetchOrderTrace: order => {
      dispatch(fetchOrderTrace(order));
    },
    fetchFinalRecord: order => {
      dispatch(fetchFinalRecord(order));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
