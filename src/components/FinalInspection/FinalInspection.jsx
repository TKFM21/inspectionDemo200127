import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOrderInfo } from "../../actions/orderInfoActionCreator";
import { fetchFinalInspParam } from "../../actions/finalInspParamActionCreator";
import { postFinalRecord } from "../../actions/finalRecordActionCreator";

const FinalInspection = props => {
  const [order, setOrder] = useState("");
  const onChangeOrder = useCallback(e => setOrder(e.target.value), [setOrder]);

  const [currentInsp, setCurrentInsp] = useState(0);
  const [correct, setCorrect] = useState(0);

  const onClickHandler = order => {
    const trimOrder = order.trim();
    if (!trimOrder) {
      window.alert("オーダー番号が入力されていません。");
      return;
    }
    props.fetchOrderInfo(order);
    setOrder("");
  };

  const startOnClickHandler = model => {
    props.fetchFinalInspParam(model);
  };

  const judgeOnClick = (finalInspParam, selectedAnswer) => {
    if (finalInspParam.answer === selectedAnswer) {
      alert("OK!!");
      setCorrect(correct + 1);
    } else {
      alert("NG!!");
    }
    setCurrentInsp(currentInsp + 1);
  };

  const finalRecordOnClickHandler = (order, model, judge) => {
    props.postFinalRecord({ order, model, judge });
    props.reset();
  };

  if (props.orderInfoIsLoading || props.finalInspParamIsLoading)
    return <h1>Now Loading...</h1>;

  if (props.orderInfo && props.finalInspParams) {
    if (currentInsp === props.finalInspParams.length) {
      const ngCount = props.finalInspParams.length - correct;
      const judge = ngCount ? false : true;
      const { order_no, model } = props.orderInfo;
      return (
        <div>
          <h1>検査完了</h1>
          <p>{ngCount ? "NGが発生しています。" : "合格です。"}</p>
          <p>記録しますか？</p>
          <button
            onClick={() => finalRecordOnClickHandler(order_no, model, judge)}
          >
            記録
          </button>
          <footer>
            <Link to="/">Home</Link>
          </footer>
        </div>
      );
    }
    const finalInspParam = props.finalInspParams[currentInsp];
    const selectList = finalInspParam.select.map((item, index) => {
      return (
        <li key={index} onClick={() => judgeOnClick(finalInspParam, item)}>
          {item}
        </li>
      );
    });
    return (
      <div>
        <h1>検査</h1>
        <p>{finalInspParam.message}</p>
        <ul>{selectList}</ul>
        <footer>
          <Link to="/">Home</Link>
        </footer>
      </div>
    );
  }

  if (props.orderInfo && !props.finalInspParams) {
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
          <button onClick={() => startOnClickHandler(model)}>開始</button>
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
        <h1>オーダー番号を入力して最終検査を開始してください。</h1>
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
    finalInspParamIsLoading: state.finalInspParam.isLoading,
    finalInspParams: state.finalInspParam.finalInspParams,
    finalInspParamError: state.finalInspParam.error,
    finalRecordIsLoading: state.finalRecord.isLoading,
    finalRecordError: state.finalRecord.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrderInfo: order => {
      dispatch(fetchOrderInfo(order));
    },
    fetchFinalInspParam: model => {
      dispatch(fetchFinalInspParam(model));
    },
    postFinalRecord: ({ order, model, judge }) => {
      dispatch(postFinalRecord({ order, model, judge }));
    },
    reset: () => {
      dispatch({ type: "RESET" });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FinalInspection);
