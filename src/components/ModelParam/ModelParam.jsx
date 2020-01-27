import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchModelParam } from "../../actions/modelParamActionCreator";

const ModelParam = props => {
  const [model, setModel] = useState("");
  const onChange = useCallback(e => setModel(e.target.value), [setModel]);

  const onClickHandler = model => {
    const trimModel = model.trim();
    if (!trimModel) {
      window.alert("型番が入力されていません。");
      return;
    }
    props.fetchModelParam(model);
    setModel("");
  };

  if (props.modelParam.isLoading) return <h1>Now Loading...</h1>;

  if (props.modelParam.modelParam) {
    const {
      model,
      voltage,
      a_lower,
      a_upper,
      speed_lower,
      speed_upper,
      createdAt,
      updatedAt
    } = props.modelParam.modelParam;

    return (
      <div>
        <div>
          <h1>型番を入力してください。</h1>
          <input onChange={onChange} placeholder={"model"} />
          <button onClick={() => onClickHandler(model)}>検索</button>
        </div>
        <div>
          <p>Model: {model}</p>
          <p>Voltage: {voltage}</p>
          <p>電流下限: {a_lower}</p>
          <p>電流上限: {a_upper}</p>
          <p>回転速度下限: {speed_lower}</p>
          <p>回転速度上限: {speed_upper}</p>
          <p>作成日: {createdAt.toLocaleString("ja-JP")}</p>
          <p>更新日: {updatedAt.toLocaleString("ja-JP")}</p>
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
        <h1>型番を入力してください。</h1>
        <input onChange={onChange} placeholder={"model"} />
        <button onClick={() => onClickHandler(model)}>検索</button>
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
    modelParam: state.modelParam,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchModelParam: model => {
      dispatch(fetchModelParam(model));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelParam);
