import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend d-flex justify-content-between">
              <div className="input-group-text bg-primary text-white ">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Tambah todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <div className="tombol">
            <button
                type="submit"
                disabled={item ? false : true}
                className={
                editItem
                    ? "btn btn-block btn-success mt-3 "
                    : "btn btn-block btn-primary mt-3 text-capitalize"   
                }  
            >
                {editItem ? "Edit Item" : "Tambah item"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}